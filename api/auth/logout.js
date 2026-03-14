const { cors } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const auth = req.headers.authorization;
  try {
    await fetch(`${process.env.NEON_AUTH_URL}/sign-out`, {
      method: 'POST',
      headers: auth ? { 'Authorization': auth } : {}
    });
  } catch (e) {}
  res.status(200).json({ ok: true });
};
