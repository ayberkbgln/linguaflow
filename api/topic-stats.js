const { getDb, cors, getUser } = require('./_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  const sql = getDb();
  const uid = user.id;

  if (req.method === 'GET') {
    const stats = await sql`
      SELECT *,
        CASE WHEN attempt_count > 0
          THEN ROUND(wrong_count::numeric / attempt_count * 100, 1)
          ELSE 0
        END AS error_rate,
        CASE WHEN response_count > 0
          THEN ROUND(total_response_ms::numeric / response_count)
          ELSE 0
        END AS avg_response_ms
      FROM topic_stats
      WHERE user_id = ${uid}
      ORDER BY module_id, unit_id
    `;
    return res.status(200).json({ stats });
  }

  if (req.method === 'POST') {
    const { module_id, unit_id, is_correct, response_ms } = req.body;

    await sql`
      INSERT INTO topic_stats (user_id, module_id, unit_id, attempt_count, wrong_count, total_response_ms, response_count)
      VALUES (${uid}, ${module_id}, ${unit_id}, 1,
        ${is_correct ? 0 : 1},
        ${response_ms || 0},
        ${response_ms ? 1 : 0})
      ON CONFLICT (user_id, module_id, unit_id) DO UPDATE SET
        attempt_count = topic_stats.attempt_count + 1,
        wrong_count = topic_stats.wrong_count + ${is_correct ? 0 : 1},
        total_response_ms = topic_stats.total_response_ms + ${response_ms || 0},
        response_count = topic_stats.response_count + ${response_ms ? 1 : 0},
        updated_at = NOW()
    `;

    return res.status(200).json({ ok: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
