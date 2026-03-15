const { getDb, cors, getUser } = require('./_db');

// Merged endpoint: handles lesson progress + daily challenges
// Daily challenge: use ?type=daily-challenge for GET, or type: 'daily-challenge' in POST body

async function handleDailyChallengeGET(req, res, sql, uid) {
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

async function handleDailyChallengePOST(req, res, sql, uid) {
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

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  const sql = getDb();
  const uid = user.id;
  const qtype = req.query && req.query.type;

  // Route daily-challenge requests
  if (qtype === 'daily-challenge') {
    if (req.method === 'GET') return handleDailyChallengeGET(req, res, sql, uid);
    if (req.method === 'POST') return handleDailyChallengePOST(req, res, sql, uid);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Original progress logic
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
