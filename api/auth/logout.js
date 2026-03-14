const { cors } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const auth = req.headers.authorization;
  try {
    const origin = `https://${req.headers.host}`;
    await fetch(`${process.env.NEON_AUTH_URL}/sign-out`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': origin,
        'Referer': origin + '/',
        ...(auth ? { 'Authorization': auth } : {})
      },
      body: JSON.stringify({ callbackURL: origin })
    });
  } catch (e) {}
  res.status(200).json({ ok: true });
};
