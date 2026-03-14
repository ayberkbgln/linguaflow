const { getDb, cors, getToken } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const token = getToken(req);
  if (!token) return res.status(401).json({ error: 'Yetkisiz' });

  const sql = getDb();

  const users = await sql`SELECT id, username, email FROM users WHERE id = ${token.id}`;
  if (users.length === 0) return res.status(401).json({ error: 'Kullanıcı bulunamadı' });

  const user = users[0];
  const profiles = await sql`SELECT * FROM user_profiles WHERE user_id = ${user.id}`;
  const plans = await sql`SELECT plan_data FROM study_plans WHERE user_id = ${user.id}`;

  const profile = profiles.length > 0 ? profiles[0] : null;

  res.status(200).json({
    user: {
      id: user.id,
      name: user.username,
      email: user.email,
      onboarding: profile ? {
        level: profile.english_level,
        targetBand: profile.ielts_target,
        examDate: profile.exam_date,
        dailyTime: profile.daily_time,
        weakAreas: profile.weak_areas
      } : null,
      plan: plans.length > 0 ? plans[0].plan_data : null,
      progress: null
    }
  });
};
