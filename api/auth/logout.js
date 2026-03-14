const { cors } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const auth = req.headers.authorization;
  try {
    const origin = req.headers.origin || req.headers.referer?.replace(/\/$/, '') || `https://${req.headers.host}`;
    await fetch(`${process.env.NEON_AUTH_URL}/sign-out`, {
      method: 'POST',
      headers: auth ? { 'Authorization': auth, 'Origin': origin } : { 'Origin': origin }
    });
  } catch (e) {}
  res.status(200).json({ ok: true });
};
