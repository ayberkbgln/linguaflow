const { getDb, cors, getUser } = require('./_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  const sql = getDb();
  const uid = user.id;

  if (req.method === 'GET') {
    const calendar = req.query && req.query.calendar === 'true';

    if (calendar) {
      const challenges = await sql`
        SELECT challenge_date, completed, score
        FROM daily_challenges
        WHERE user_id = ${uid}
        ORDER BY challenge_date DESC
      `;
      return res.status(200).json({ challenges });
    }

    const today = new Date().toISOString().slice(0, 10);

    const rows = await sql`
      SELECT * FROM daily_challenges
      WHERE user_id = ${uid} AND challenge_date = ${today}
    `;

    if (rows.length) {
      return res.status(200).json(rows[0]);
    }

    await sql`
      INSERT INTO daily_challenges (user_id, challenge_date, completed, score, total, time_taken_seconds)
      VALUES (${uid}, ${today}, false, 0, 5, 0)
    `;

    return res.status(200).json({
      questions: [],
      challenge_date: today,
      completed: false
    });
  }

  if (req.method === 'POST') {
    const { score, total, time_taken_seconds } = req.body;
    const today = new Date().toISOString().slice(0, 10);

    const rows = await sql`
      UPDATE daily_challenges
      SET completed = true,
          score = ${score},
          total = ${total},
          time_taken_seconds = ${time_taken_seconds},
          completed_at = NOW()
      WHERE user_id = ${uid} AND challenge_date = ${today}
      RETURNING *
    `;

    if (!rows.length) {
      return res.status(404).json({ error: 'No challenge found for today' });
    }

    return res.status(200).json(rows[0]);
  }

  res.status(405).json({ error: 'Method not allowed' });
};
