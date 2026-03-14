const { cors } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { code, email } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'Doğrulama kodu gerekli' });
  }

  const origin = `https://${req.headers.host}`;
  const headers = {
    'Content-Type': 'application/json',
    'Origin': origin,
    'Referer': origin + '/'
  };

  // Try multiple possible Better Auth / Neon Auth endpoints
  const attempts = [
    { url: `${process.env.NEON_AUTH_URL}/email-otp/verify-email`, method: 'POST', body: { email, otp: code } },
    { url: `${process.env.NEON_AUTH_URL}/verify-email`, method: 'GET', body: null, query: `?token=${code}` },
    { url: `${process.env.NEON_AUTH_URL}/verify-email`, method: 'POST', body: { token: code } },
    { url: `${process.env.NEON_AUTH_URL}/email-verification/verify`, method: 'POST', body: { code, email } },
  ];

  const results = [];
  for (const attempt of attempts) {
    try {
      const url = attempt.query ? attempt.url + attempt.query : attempt.url;
      const opts = {
        method: attempt.method,
        headers
      };
      if (attempt.body && attempt.method === 'POST') {
        opts.body = JSON.stringify(attempt.body);
      }
      const r = await fetch(url, opts);
      const text = await r.text();
      results.push({ url: url.replace(process.env.NEON_AUTH_URL, ''), method: attempt.method, status: r.status, body: text.substring(0, 300) });
      if (r.ok) {
        let data = {};
        if (text) { try { data = JSON.parse(text); } catch (_) {} }
        return res.status(200).json(data.ok || data.status ? data : { ok: true });
      }
    } catch (e) {
      results.push({ url: attempt.url.replace(process.env.NEON_AUTH_URL, ''), error: e.message });
    }
  }

  // None succeeded — return debug info
  res.status(400).json({ error: 'Doğrulama hatası', debug: results });
};
