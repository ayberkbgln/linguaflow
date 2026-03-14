const bcrypt = require('bcryptjs');
const { getDb, cors, makeToken } = require('../_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Tüm alanlar gerekli' });
  }

  const sql = getDb();

  const existing = await sql`SELECT id FROM users WHERE email = ${email}`;
  if (existing.length > 0) {
    return res.status(409).json({ error: 'Bu e-posta zaten kayıtlı' });
  }

  const hash = await bcrypt.hash(password, 10);
  const result = await sql`
    INSERT INTO users (username, email, password_hash)
    VALUES (${name}, ${email}, ${hash})
    RETURNING id, username, email
  `;

  const user = result[0];
  const token = makeToken(user);

  res.status(201).json({
    token,
    user: { id: user.id, name: user.username, email: user.email }
  });
};
