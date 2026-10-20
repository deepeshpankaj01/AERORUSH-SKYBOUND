-- AERORUSH: SKYBOUND - Supabase Leaderboard Schema & Row-Level Security
-- Production Database Migration for High-Speed Arcade Leaderboards
--
-- ARCHITECTURE & SECURITY NOTICE:
-- The `verification_hash` column stores a client-generated checksum intended as a lightweight
-- tamper-detection heuristic against casual payload editing or transmission corruption.
-- In a client-authoritative browser game without server-side physics simulation, client hashes
-- are NOT a replacement for trusted server-side anti-cheat.
-- Instead, the database enforces authoritative boundary constraints via CHECK constraints and RLS:
-- 1. Hard caps on speed, distance, stunts, and player name formatting.
-- 2. Plausibility sanity bounds ensuring score cannot exceed theoretical performance limits
--    (score <= (distance_meters * 60) + (stunts_count * 2500) + 20000).

-- 1. Create Leaderboards Table
CREATE TABLE IF NOT EXISTS public.leaderboards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    player_id VARCHAR(64) NOT NULL,
    player_name VARCHAR(16) NOT NULL,
    score INTEGER NOT NULL CHECK (score >= 0 AND score <= 10000000),
    distance_meters INTEGER NOT NULL CHECK (distance_meters >= 0 AND distance_meters <= 500000),
    max_speed_kmh INTEGER NOT NULL CHECK (max_speed_kmh >= 0 AND max_speed_kmh <= 650),
    stunts_count INTEGER NOT NULL DEFAULT 0 CHECK (stunts_count >= 0 AND stunts_count <= 500),
    environment_id VARCHAR(32) NOT NULL,
    challenge_type VARCHAR(16) NOT NULL DEFAULT 'all_time' CHECK (challenge_type IN ('all_time', 'daily', 'weekly')),
    challenge_date VARCHAR(16),
    verification_hash VARCHAR(64),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    -- Plausibility constraint: score cannot exceed theoretical arcade maximum for the run
    CONSTRAINT chk_plausible_score CHECK (score <= ((distance_meters * 60) + (stunts_count * 2500) + 20000))
);

-- 2. Indexes for High-Performance Leaderboard Retrieval
CREATE INDEX IF NOT EXISTS idx_leaderboards_challenge_score 
ON public.leaderboards (challenge_type, score DESC);

CREATE INDEX IF NOT EXISTS idx_leaderboards_env_score 
ON public.leaderboards (environment_id, score DESC);

CREATE INDEX IF NOT EXISTS idx_leaderboards_daily 
ON public.leaderboards (challenge_date, score DESC)
WHERE challenge_type = 'daily';

CREATE INDEX IF NOT EXISTS idx_leaderboards_player 
ON public.leaderboards (player_id);

-- 3. Enable Row-Level Security (RLS)
ALTER TABLE public.leaderboards ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Public Read Access (Anyone can view the leaderboards)
CREATE POLICY "Public leaderboard view"
ON public.leaderboards
FOR SELECT
TO public
USING (true);

-- 5. Policy: Anonymous Score Submission with Strict Sanitization and Bounds Checking
CREATE POLICY "Public score submission"
ON public.leaderboards
FOR INSERT
TO public
WITH CHECK (
    score >= 0 AND 
    score <= 10000000 AND 
    distance_meters >= 0 AND 
    distance_meters <= 500000 AND
    max_speed_kmh >= 0 AND
    max_speed_kmh <= 650 AND
    stunts_count >= 0 AND
    stunts_count <= 500 AND
    length(trim(player_name)) >= 2 AND
    length(player_name) <= 16 AND
    -- Authoritative sanity check: score vs distance and stunts
    score <= ((distance_meters * 60) + (stunts_count * 2500) + 20000)
);

-- 6. Table documentation
COMMENT ON TABLE public.leaderboards IS 'AERORUSH: SKYBOUND Hypercar Global Leaderboard - Made by Deepesh Kumar Pankaj';
