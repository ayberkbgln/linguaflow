const { getDb, cors, getUser } = require('./_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  const sql = getDb();
  const uid = user.id;

  if (req.method === 'GET') {
    const history = await sql`
      SELECT * FROM band_estimates
      WHERE user_id = ${uid}
      ORDER BY created_at DESC
      LIMIT 20
    `;

    const latest = history.length ? history[0] : null;

    return res.status(200).json({ latest, history });
  }

  if (req.method === 'POST') {
    const { reading_score, writing_score, listening_score, speaking_score, overall_band, readiness_pct } = req.body;

    const rows = await sql`
      INSERT INTO band_estimates (user_id, reading_score, writing_score, listening_score, speaking_score, overall_band, readiness_pct)
      VALUES (${uid}, ${reading_score}, ${writing_score}, ${listening_score}, ${speaking_score}, ${overall_band}, ${readiness_pct})
      RETURNING *
    `;

    return res.status(200).json(rows[0]);
  }

  res.status(405).json({ error: 'Method not allowed' });
};
