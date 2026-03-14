const { cors } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const auth = req.headers.authorization;
  try {
    const baseUrl = `https://${req.headers.host}`;
    await fetch(`${process.env.NEON_AUTH_URL}/sign-out`, {
      method: 'POST',
      headers: auth ? { 'Authorization': auth, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' },
      body: JSON.stringify({ callbackURL: baseUrl })
    });
  } catch (e) {}
  res.status(200).json({ ok: true });
};
