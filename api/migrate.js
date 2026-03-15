const { getDb, cors, getUser } = require('./_db');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  const sql = getDb();

  if (req.method === 'GET') {
    await sql`
      CREATE TABLE IF NOT EXISTS mistakes (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        word TEXT NOT NULL,
        correct_answer TEXT NOT NULL,
        user_answer TEXT NOT NULL,
        lesson_id TEXT,
        module_id TEXT,
        question_type TEXT,
        ease_factor REAL DEFAULT 2.5,
        interval_days INTEGER DEFAULT 0,
        repetitions INTEGER DEFAULT 0,
        next_review TIMESTAMPTZ DEFAULT NOW(),
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS user_xp (
        user_id TEXT PRIMARY KEY,
        total_xp INTEGER DEFAULT 0,
        daily_xp INTEGER DEFAULT 0,
        daily_xp_date DATE DEFAULT CURRENT_DATE,
        daily_xp_goal INTEGER DEFAULT 100,
        level INTEGER DEFAULT 1,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS xp_log (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        amount INTEGER NOT NULL,
        reason TEXT NOT NULL,
        source_id TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS topic_stats (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        module_id TEXT NOT NULL,
        unit_id TEXT,
        attempt_count INTEGER DEFAULT 0,
        wrong_count INTEGER DEFAULT 0,
        total_response_ms BIGINT DEFAULT 0,
        response_count INTEGER DEFAULT 0,
        updated_at TIMESTAMPTZ DEFAULT NOW(),
        UNIQUE(user_id, module_id, unit_id)
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS daily_challenges (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        challenge_date DATE NOT NULL,
        questions JSONB NOT NULL,
        score INTEGER,
        total INTEGER,
        time_taken_seconds INTEGER,
        completed BOOLEAN DEFAULT FALSE,
        xp_earned INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        UNIQUE(user_id, challenge_date)
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS band_estimates (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        reading_score REAL,
        writing_score REAL,
        listening_score REAL,
        speaking_score REAL,
        overall_band REAL,
        readiness_pct INTEGER,
        estimated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    return res.status(200).json({
      success: true,
      tables: [
        'mistakes',
        'user_xp',
        'xp_log',
        'topic_stats',
        'daily_challenges',
        'band_estimates'
      ]
    });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
