const { getDb, cors, getUser } = require('./_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  const sql = getDb();
  const uid = user.id;

  if (req.method === 'GET') {
    const due = req.query && req.query.due === 'true';
    let mistakes;
    if (due) {
      mistakes = await sql`
        SELECT * FROM user_mistakes
        WHERE user_id = ${uid} AND next_review <= NOW()
        ORDER BY next_review ASC
      `;
    } else {
      mistakes = await sql`
        SELECT * FROM user_mistakes
        WHERE user_id = ${uid}
        ORDER BY created_at DESC
      `;
    }
    return res.status(200).json({ mistakes });
  }

  if (req.method === 'POST') {
    const { word, correct_answer, user_answer, lesson_id, module_id, question_type } = req.body;
    await sql`
      INSERT INTO user_mistakes (user_id, word, correct_answer, user_answer, lesson_id, module_id, question_type,
        reps, ease_factor, interval_days, next_review)
      VALUES (${uid}, ${word}, ${correct_answer}, ${user_answer}, ${lesson_id}, ${module_id}, ${question_type},
        0, 2.5, 1, NOW() + INTERVAL '1 day')
      ON CONFLICT (user_id, word, lesson_id) DO UPDATE SET
        user_answer = ${user_answer},
        reps = 0,
        ease_factor = 2.5,
        interval_days = 1,
        next_review = NOW() + INTERVAL '1 day',
        updated_at = NOW()
    `;
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'PUT') {
    const { id, quality } = req.body;

    const rows = await sql`
      SELECT * FROM user_mistakes WHERE id = ${id} AND user_id = ${uid}
    `;
    if (!rows.length) return res.status(404).json({ error: 'Not found' });

    const record = rows[0];
    let { reps, ease_factor, interval_days } = record;

    if (quality >= 3) {
      if (reps === 0) {
        interval_days = 1;
      } else if (reps === 1) {
        interval_days = 6;
      } else {
        interval_days = Math.round(interval_days * ease_factor);
      }
      reps++;
    } else {
      reps = 0;
      interval_days = 1;
    }

    ease_factor = ease_factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (ease_factor < 1.3) ease_factor = 1.3;

    await sql`
      UPDATE user_mistakes
      SET reps = ${reps},
          ease_factor = ${ease_factor},
          interval_days = ${interval_days},
          next_review = NOW() + (${interval_days} || ' days')::INTERVAL,
          updated_at = NOW()
      WHERE id = ${id} AND user_id = ${uid}
    `;

    return res.status(200).json({ ok: true, reps, ease_factor, interval_days });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
