const { cors } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { code, email } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'Doğrulama kodu gerekli' });
  }

  try {
    const origin = `https://${req.headers.host}`;
    const r = await fetch(`${process.env.NEON_AUTH_URL}/email-otp/verify-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': origin,
        'Referer': origin + '/'
      },
      body: JSON.stringify({ email, otp: code })
    });
    const text = await r.text();
    let data = {};
    if (text) {
      try { data = JSON.parse(text); } catch (_) {}
    }
    if (!r.ok) {
      return res.status(r.status).json({ error: data.message || data.error || 'Doğrulama hatası' });
    }
    res.status(200).json(data.status ? data : { ok: true });
  } catch (e) {
    res.status(500).json({ error: 'Sunucu hatası: ' + e.message });
  }
};
