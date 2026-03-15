const { getDb, cors, getUser } = require('./_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  const sql = getDb();
  const uid = user.id;

  if (req.method === 'GET') {
    const rows = await sql`
      SELECT * FROM user_xp WHERE user_id = ${uid}
    `;

    if (!rows.length) {
      return res.status(200).json({
        total_xp: 0, daily_xp: 0, level: 1, daily_xp_date: null
      });
    }

    const record = rows[0];
    const today = new Date().toISOString().slice(0, 10);

    if (record.daily_xp_date !== today) {
      await sql`
        UPDATE user_xp SET daily_xp = 0, daily_xp_date = ${today}
        WHERE user_id = ${uid}
      `;
      record.daily_xp = 0;
      record.daily_xp_date = today;
    }

    return res.status(200).json(record);
  }

  if (req.method === 'POST') {
    const { amount, reason, source_id } = req.body;
    const today = new Date().toISOString().slice(0, 10);

    const rows = await sql`
      INSERT INTO user_xp (user_id, total_xp, daily_xp, daily_xp_date, level)
      VALUES (${uid}, ${amount}, ${amount}, ${today}, ${Math.floor(amount / 500) + 1})
      ON CONFLICT (user_id) DO UPDATE SET
        total_xp = user_xp.total_xp + ${amount},
        daily_xp = CASE
          WHEN user_xp.daily_xp_date = ${today} THEN user_xp.daily_xp + ${amount}
          ELSE ${amount}
        END,
        daily_xp_date = ${today},
        level = GREATEST(1, (user_xp.total_xp + ${amount}) / 500 + 1)
      RETURNING *
    `;

    await sql`
      INSERT INTO xp_log (user_id, amount, reason, source_id)
      VALUES (${uid}, ${amount}, ${reason}, ${source_id})
    `;

    const record = rows[0];
    record.level = Math.floor(record.total_xp / 500) + 1;

    return res.status(200).json(record);
  }

  res.status(405).json({ error: 'Method not allowed' });
};
