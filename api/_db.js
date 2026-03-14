const { neon } = require('@neondatabase/serverless');

const NEON_AUTH_URL = process.env.NEON_AUTH_URL;

function getDb() {
  const sql = neon(
    `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?sslmode=${process.env.PGSSLMODE || 'require'}`
  );
  return sql;
}

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
}

async function getUser(req) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return null;
  const token = auth.slice(7);
  try {
    const r = await fetch(`${NEON_AUTH_URL}/get-session`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!r.ok) return null;
    const data = await r.json();
    return data.user || null;
  } catch {
    return null;
  }
}

module.exports = { getDb, cors, getUser };
