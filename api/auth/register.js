const { cors } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Tüm alanlar gerekli' });
  }

  try {
    const origin = req.headers.origin || req.headers.referer?.replace(/\/$/, '') || `https://${req.headers.host}`;
    const r = await fetch(`${process.env.NEON_AUTH_URL}/sign-up/email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Origin': origin },
      body: JSON.stringify({ name, email, password })
    });
    const data = await r.json();
    if (!r.ok) {
      return res.status(r.status).json({ error: data.message || 'Kayıt hatası' });
    }
    res.status(201).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Sunucu hatası' });
  }
};
