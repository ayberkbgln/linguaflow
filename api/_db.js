const { neon } = require('@neondatabase/serverless');

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

function getToken(req) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return null;
  try {
    return JSON.parse(Buffer.from(auth.slice(7), 'base64').toString());
  } catch {
    return null;
  }
}

function makeToken(user) {
  return Buffer.from(JSON.stringify({ id: user.id, email: user.email })).toString('base64');
}

module.exports = { getDb, cors, getToken, makeToken };
