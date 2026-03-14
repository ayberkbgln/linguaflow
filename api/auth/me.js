const { cors } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Yetkisiz' });
  }

  try {
    const r = await fetch(`${process.env.NEON_AUTH_URL}/get-session`, {
      headers: { 'Authorization': auth }
    });
    const data = await r.json();
    if (!r.ok || !data.user) {
      return res.status(401).json({ error: 'Oturum geçersiz' });
    }
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Sunucu hatası' });
  }
};
