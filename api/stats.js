const { getDb, cors, getUser } = require('./_db');

// Merged endpoint: handles mistakes, topic-stats, xp, and band-estimate
// Use ?type=mistakes | topic-stats | xp | band-estimate

async function handleMistakes(req, res, sql, uid) {
  if (req.method === 'GET') {
    const due = req.query && req.query.due === 'true';
    let mistakes;
    if (due) {
      mistakes = await sql`
        SELECT * FROM user_mistakes
        WHERE user_id = ${uid} AND next_review <= NOW()
        ORDER BY next_review ASC
      `;
    } else {
      mistakes = await sql`
        SELECT * FROM user_mistakes
        WHERE user_id = ${uid}
        ORDER BY created_at DESC
      `;
    }
    return res.status(200).json({ mistakes });
  }

  if (req.method === 'POST') {
    const { word, correct_answer, user_answer, lesson_id, module_id, question_type } = req.body;
    await sql`
      INSERT INTO user_mistakes (user_id, word, correct_answer, user_answer, lesson_id, module_id, question_type,
        reps, ease_factor, interval_days, next_review)
      VALUES (${uid}, ${word}, ${correct_answer}, ${user_answer}, ${lesson_id}, ${module_id}, ${question_type},
        0, 2.5, 1, NOW() + INTERVAL '1 day')
      ON CONFLICT (user_id, word, lesson_id) DO UPDATE SET
        user_answer = ${user_answer},
        reps = 0,
        ease_factor = 2.5,
        interval_days = 1,
        next_review = NOW() + INTERVAL '1 day',
        updated_at = NOW()
    `;
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'PUT') {
    const { id, quality } = req.body;

    const rows = await sql`
      SELECT * FROM user_mistakes WHERE id = ${id} AND user_id = ${uid}
    `;
    if (!rows.length) return res.status(404).json({ error: 'Not found' });

    const record = rows[0];
    let { reps, ease_factor, interval_days } = record;

    if (quality >= 3) {
      if (reps === 0) {
        interval_days = 1;
      } else if (reps === 1) {
        interval_days = 6;
      } else {
        interval_days = Math.round(interval_days * ease_factor);
      }
      reps++;
    } else {
      reps = 0;
      interval_days = 1;
    }

    ease_factor = ease_factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (ease_factor < 1.3) ease_factor = 1.3;

    await sql`
      UPDATE user_mistakes
      SET reps = ${reps},
          ease_factor = ${ease_factor},
          interval_days = ${interval_days},
          next_review = NOW() + (${interval_days} || ' days')::INTERVAL,
          updated_at = NOW()
      WHERE id = ${id} AND user_id = ${uid}
    `;

    return res.status(200).json({ ok: true, reps, ease_factor, interval_days });
  }

  res.status(405).json({ error: 'Method not allowed' });
}

async function handleTopicStats(req, res, sql, uid) {
  if (req.method === 'GET') {
    const stats = await sql`
      SELECT *,
        CASE WHEN attempt_count > 0
          THEN ROUND(wrong_count::numeric / attempt_count * 100, 1)
          ELSE 0
        END AS error_rate,
        CASE WHEN response_count > 0
          THEN ROUND(total_response_ms::numeric / response_count)
          ELSE 0
        END AS avg_response_ms
      FROM topic_stats
      WHERE user_id = ${uid}
      ORDER BY module_id, unit_id
    `;
    return res.status(200).json({ stats });
  }

  if (req.method === 'POST') {
    const { module_id, unit_id, is_correct, response_ms } = req.body;

    await sql`
      INSERT INTO topic_stats (user_id, module_id, unit_id, attempt_count, wrong_count, total_response_ms, response_count)
      VALUES (${uid}, ${module_id}, ${unit_id}, 1,
        ${is_correct ? 0 : 1},
        ${response_ms || 0},
        ${response_ms ? 1 : 0})
      ON CONFLICT (user_id, module_id, unit_id) DO UPDATE SET
        attempt_count = topic_stats.attempt_count + 1,
        wrong_count = topic_stats.wrong_count + ${is_correct ? 0 : 1},
        total_response_ms = topic_stats.total_response_ms + ${response_ms || 0},
        response_count = topic_stats.response_count + ${response_ms ? 1 : 0},
        updated_at = NOW()
    `;

    return res.status(200).json({ ok: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
}

async function handleXP(req, res, sql, uid) {
  if (req.method === 'GET') {
    const rows = await sql`
      SELECT * FROM user_xp WHERE user_id = ${uid}
    `;

    if (!rows.length) {
      return res.status(200).json({
        total_xp: 0, daily_xp: 0, level: 1, daily_xp_date: null
      });
    }

    const record = rows[0];
    const today = new Date().toISOString().slice(0, 10);

    if (record.daily_xp_date !== today) {
      await sql`
        UPDATE user_xp SET daily_xp = 0, daily_xp_date = ${today}
        WHERE user_id = ${uid}
      `;
      record.daily_xp = 0;
      record.daily_xp_date = today;
    }

    return res.status(200).json(record);
  }

  if (req.method === 'POST') {
    const { amount, reason, source_id } = req.body;
    const today = new Date().toISOString().slice(0, 10);

    const rows = await sql`
      INSERT INTO user_xp (user_id, total_xp, daily_xp, daily_xp_date, level)
      VALUES (${uid}, ${amount}, ${amount}, ${today}, ${Math.floor(amount / 500) + 1})
      ON CONFLICT (user_id) DO UPDATE SET
        total_xp = user_xp.total_xp + ${amount},
        daily_xp = CASE
          WHEN user_xp.daily_xp_date = ${today} THEN user_xp.daily_xp + ${amount}
          ELSE ${amount}
        END,
        daily_xp_date = ${today},
        level = GREATEST(1, (user_xp.total_xp + ${amount}) / 500 + 1)
      RETURNING *
    `;

    await sql`
      INSERT INTO xp_log (user_id, amount, reason, source_id)
      VALUES (${uid}, ${amount}, ${reason}, ${source_id})
    `;

    const record = rows[0];
    record.level = Math.floor(record.total_xp / 500) + 1;

    return res.status(200).json(record);
  }

  res.status(405).json({ error: 'Method not allowed' });
}

async function handleBandEstimate(req, res, sql, uid) {
  if (req.method === 'GET') {
    const history = await sql`
      SELECT * FROM band_estimates
      WHERE user_id = ${uid}
      ORDER BY created_at DESC
      LIMIT 20
    `;

    const latest = history.length ? history[0] : null;

    return res.status(200).json({ latest, history });
  }

  if (req.method === 'POST') {
    const { reading_score, writing_score, listening_score, speaking_score, overall_band, readiness_pct } = req.body;

    const rows = await sql`
      INSERT INTO band_estimates (user_id, reading_score, writing_score, listening_score, speaking_score, overall_band, readiness_pct)
      VALUES (${uid}, ${reading_score}, ${writing_score}, ${listening_score}, ${speaking_score}, ${overall_band}, ${readiness_pct})
      RETURNING *
    `;

    return res.status(200).json(rows[0]);
  }

  res.status(405).json({ error: 'Method not allowed' });
}

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  const sql = getDb();
  const uid = user.id;
  const type = req.query && req.query.type;

  if (!type) return res.status(400).json({ error: 'Missing ?type= parameter. Use: mistakes, topic-stats, xp, band-estimate' });

  switch (type) {
    case 'mistakes':
      return handleMistakes(req, res, sql, uid);
    case 'topic-stats':
      return handleTopicStats(req, res, sql, uid);
    case 'xp':
      return handleXP(req, res, sql, uid);
    case 'band-estimate':
      return handleBandEstimate(req, res, sql, uid);
    default:
      return res.status(400).json({ error: `Unknown type: ${type}. Use: mistakes, topic-stats, xp, band-estimate` });
  }
};
