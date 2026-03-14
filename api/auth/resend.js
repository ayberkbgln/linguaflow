const { cors } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'E-posta gerekli' });
  }

  try {
    const origin = `https://${req.headers.host}`;
    const r = await fetch(`${process.env.NEON_AUTH_URL}/send-verification-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': origin,
        'Referer': origin + '/'
      },
      body: JSON.stringify({ email })
    });
    const data = await r.json();
    if (!r.ok) {
      return res.status(r.status).json({ error: data.message || data.error || 'Gönderme hatası' });
    }
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'Sunucu hatası' });
  }
};
