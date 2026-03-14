const bcrypt = require('bcryptjs');
const { getDb, cors, makeToken } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'E-posta ve şifre gerekli' });
  }

  const sql = getDb();

  const users = await sql`SELECT * FROM users WHERE email = ${email}`;
  if (users.length === 0) {
    return res.status(401).json({ error: 'E-posta veya şifre hatalı' });
  }

  const user = users[0];
  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: 'E-posta veya şifre hatalı' });
  }

  await sql`UPDATE users SET last_login = NOW() WHERE id = ${user.id}`;

  // Get profile & progress
  const profiles = await sql`SELECT * FROM user_profiles WHERE user_id = ${user.id}`;
  const plans = await sql`SELECT plan_data FROM study_plans WHERE user_id = ${user.id}`;

  const token = makeToken(user);

  const profile = profiles.length > 0 ? profiles[0] : null;
  const plan = plans.length > 0 ? plans[0].plan_data : null;

  res.status(200).json({
    token,
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
      plan: plan || null,
      progress: null
    }
  });
};
