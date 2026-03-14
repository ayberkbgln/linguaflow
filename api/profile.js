const { getDb, cors, getUser } = require('./_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  const sql = getDb();
  const uid = user.id;

  if (req.method === 'GET') {
    const profiles = await sql`SELECT * FROM user_profiles WHERE user_id = ${uid}`;
    const plans = await sql`SELECT plan_data FROM study_plans WHERE user_id = ${uid}`;
    const progress = await sql`SELECT * FROM lesson_progress WHERE user_id = ${uid}`;
    const quizzes = await sql`SELECT score, total FROM quiz_results WHERE user_id = ${uid} ORDER BY completed_at DESC`;

    const profile = profiles.length > 0 ? profiles[0] : null;

    return res.status(200).json({
      onboarding: profile ? {
        level: profile.english_level,
        targetBand: profile.ielts_target,
        examDate: profile.exam_date,
        dailyTime: profile.daily_time,
        weakAreas: profile.weak_areas
      } : null,
      plan: plans.length > 0 ? plans[0].plan_data : null,
      progress: {
        lessons: progress,
        quizScores: quizzes.map(q => Math.round((q.score / q.total) * 100))
      }
    });
  }

  if (req.method === 'POST') {
    const { onboarding, plan } = req.body;

    if (onboarding) {
      await sql`
        INSERT INTO user_profiles (user_id, english_level, ielts_target, exam_date, daily_time, weak_areas, onboarding_completed)
        VALUES (${uid}, ${onboarding.level}, ${onboarding.targetBand}, ${onboarding.examDate}, ${onboarding.dailyTime}, ${onboarding.weakAreas}, true)
        ON CONFLICT (user_id) DO UPDATE SET
          english_level = ${onboarding.level},
          ielts_target = ${onboarding.targetBand},
          exam_date = ${onboarding.examDate},
          daily_time = ${onboarding.dailyTime},
          weak_areas = ${onboarding.weakAreas},
          onboarding_completed = true,
          updated_at = NOW()
      `;
    }

    if (plan) {
      await sql`
        INSERT INTO study_plans (user_id, plan_data)
        VALUES (${uid}, ${JSON.stringify(plan)})
        ON CONFLICT (user_id) DO UPDATE SET
          plan_data = ${JSON.stringify(plan)},
          updated_at = NOW()
      `;
    }

    return res.status(200).json({ ok: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
