const { getDb, cors, getUser } = require('./_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  const sql = getDb();
  const uid = user.id;

  if (req.method === 'GET') {
    const progress = await sql`SELECT * FROM lesson_progress WHERE user_id = ${uid}`;
    const quizzes = await sql`SELECT * FROM quiz_results WHERE user_id = ${uid} ORDER BY completed_at DESC`;
    const logs = await sql`SELECT * FROM study_logs WHERE user_id = ${uid} ORDER BY created_at DESC LIMIT 20`;

    return res.status(200).json({ progress, quizzes, logs });
  }

  if (req.method === 'POST') {
    const { type, data } = req.body;

    if (type === 'lesson') {
      await sql`
        INSERT INTO lesson_progress (user_id, lesson_id, section, completed, score)
        VALUES (${uid}, ${data.lessonId}, ${data.section}, true, ${data.score || null})
        ON CONFLICT (user_id, lesson_id, section) DO UPDATE SET
          completed = true,
          score = COALESCE(${data.score || null}, lesson_progress.score),
          completed_at = NOW()
      `;
    }

    if (type === 'quiz') {
      await sql`
        INSERT INTO quiz_results (user_id, lesson_id, score, total, answers)
        VALUES (${uid}, ${data.lessonId}, ${data.score}, ${data.total}, ${JSON.stringify(data.answers || {})})
      `;
    }

    if (type === 'study_log') {
      await sql`
        INSERT INTO study_logs (user_id, activity_type, duration_minutes, details)
        VALUES (${uid}, ${data.activityType}, ${data.duration || null}, ${JSON.stringify(data.details || {})})
      `;
    }

    return res.status(200).json({ ok: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
