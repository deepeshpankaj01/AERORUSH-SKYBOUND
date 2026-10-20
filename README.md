# AERORUSH: SKYBOUND (PHASE 3)

**AERORUSH: SKYBOUND** is a premium, high-speed 3D futuristic electric hypercar arcade racing, aerial stunt, and progression game built with TypeScript, Vite, Three.js, and the Web Audio API as an offline-first Progressive Web App (PWA).

Credit: **Made by Deepesh Kumar Pankaj**

---

## ⚡ Core Concept

The player pilots the **VANTA XR**, an original fictional electric aerospace hypercar designed with metallic pearl paint, active aerodynamics, panoramic dark-glass canopy, underbody neon illumination, and twin rocket thrusters.

> *"Drive at incredible speed. Launch into the sky. Perform spectacular stunts. Land perfectly. Beat your record."*

---

## 🏆 Three Distinct Play Modes

### 1. Offline Solo
- **100% Offline-First**: Fully functional without internet connectivity or user accounts.
- **Career Campaign**: 6 structured championship stages with dialogue briefings from Mira and Eon Vale.
- **Quick Run**: Select from 4 detailed environments (Neon Dusk, Canyon Express, Monsoon Highway, Orbital Skyway), configure distance (1,500m, 3,000m, Endless), and race against your personal best ghost.
- **Stunt School**: 4 dedicated flight training modules (Barrel Roll Academy, Flip Masterclass, Ring Runner, Drift King).
- **Garage Customization & Upgrades**: 8 metallic/pearl paint finishes, 3 wheel styles, 5 neon underglows, 4 thruster plumes, and 4 performance upgrade tracks (Levels 1–5).
- **12 Pilot Achievements**: Milestone tracking with toast alerts and AeroCredit bounties.

### 2. Local Competition (Shared-Device Pass & Play Duel)
- Shared-device turn-based head-to-head racing challenge.
- **Turn 1 (Pilot 1)**: Runs the seeded course; high-frequency telemetry is recorded in memory.
- **Handoff Screen**: Prompts handing the device to Pilot 2 with target benchmark display.
- **Turn 2 (Pilot 2)**: Runs the identical track seed, with Pilot 1's recorded ghost racing alongside them as the visual benchmark!
- **Head-to-Head Comparison Screen**: Side-by-side telemetry comparison (Score, Distance, Top Speed, Stunts, Clean Landings), victory margin calculation, and instant rematch. Works 100% offline without any server.

### 3. Online Competition (Optional Network-Backed Services)
- **Global Leaderboards**: Multi-tab rankings (All-Time, Daily Challenge, Local Offline) with customizable pilot callsigns, anti-tamper verification tokens, rate-limiting, and graceful offline fallback.
- **Daily Seeded Challenges**: Deterministic UTC date-seeded course identical for pilots worldwide with live countdown timer to the midnight UTC reset.
- **Friend Challenge Codes**: Base64URL-encoded challenge codes and shareable links (`?challenge=...`) that allow friends to race the exact same seed and target score.
- **Real-Time Multiplayer Rooms**: Dedicated WebSocket broker (`server/server.ts`) supporting 2-player room creation, 6-character room codes (`RUSH88`), synchronized countdown, and 15Hz telemetry exchange with smooth interpolation (lerping) and 3D floating rival callsign nameplates.
- **Honest Telemetry Guarantee**: Real online players, AI opponents, and replay ghosts are strictly distinguished with explicit badge markers.

---

## 🖼️ Social & Viral Export

- **High-Resolution Score Card Generator (`ScoreCardGenerator.ts`)**:
  - Procedurally renders a sleek 1200x630 graphic card on an HTML5 Canvas.
  - Features cyberpunk gradients, geometric grid lines, hypercar wireframe silhouette, pilot callsign, final score, top speed, distance, air time, combo multiplier, and date stamp.
  - Prominently and tastefully displays the required credit: **Made by Deepesh Kumar Pankaj**.
  - **One-Click PNG Download**: Exports native high-res image `AERORUSH_CALLSIGN_SCORE.png`.
  - **Web Share API**: Native device share sheet integration with fallback to copying friend challenge codes and URLs to the clipboard.

---

## 💰 Monetization & Ad Adapter

- **Provider-Agnostic HTML5 Game Ad Adapter (`AdManager.ts`)**:
  - Compatible with Google AdSense for Games (H5 Games Ads / `adBreak`, `adConfig`) or customizable ad networks.
  - **Interstitial Ads**:
    - Triggered between races (on retry or returning to menu).
    - Sensible frequency capping: at most 1 ad per 3 completed runs and at least 3 minutes between impressions.
    - Never interrupts active racing or countdown sequences.
  - **Rewarded Ads**:
    - Optional "Sponsor Recharge (+500 AC)" button on the Results screen.
    - Strict verification callback: rewards are **never** granted if skipped, blocked, failed, or offline.
  - **Offline & Dev Safety**:
    - Silently bypasses ads when offline, running in development, or blocked by adblockers, without breaking gameplay or hanging the interface.

---

## 🗄️ Database Schema & Supabase Setup

The online leaderboard service is designed with a zero-secrets client architecture using public anon keys and Postgres Row-Level Security (RLS).

### Supabase Migration Steps
1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase dashboard.
3. Run the migration script located at:
   ```
   supabase/migrations/20261020_leaderboards.sql
   ```
4. Copy your **Project URL** and **Anon Public Key** from *Project Settings > API*.
5. Create a `.env.local` file in the project root:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
6. The client will automatically transition from local fallback to cloud leaderboard synchronization!

---

## 🌐 Real-Time Multiplayer Room Server

The WebSocket relay broker is built with Node.js and `ws`.

### Running the Server Locally
```bash
# Start the WebSocket broker on port 8080
npm run server
```

### Health Check Endpoint
```bash
# Returns HTTP 200 with service status, room count, and author credit
curl http://localhost:8080/
```

### Configuration
Set the server URL in your `.env.local`:
```env
VITE_MULTIPLAYER_SERVER_URL=ws://localhost:8080
```
For production hosting, deploy `server/server.ts` to any Node-compatible container service (Railway, Render, Fly.io, or VPS) with WebSocket support.

---

## 🚀 Production Deployment

### Static Hosting Configuration
The project includes production-ready deployment configurations:
- **`vercel.json`**: Routing rewrites, security headers (`nosniff`, `DENY`), and 1-year immutable caching for hashed PWA assets.
- **`public/_redirects`**: Single-page application routing rules for Netlify and Cloudflare Pages.

### Building for Production
```bash
# Type check and build static dist/ bundle
npm run build

# Preview production build locally
npm run preview
```

### Deploy to Vercel
```bash
npx vercel deploy --prod
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

---

## 🧪 Automated Testing

Comprehensive test suites covering core vehicle physics, stunts, scoring, progression, career, ghosts, daily determinism, friend challenge codes, leaderboard validation, and ad adapters:

```bash
# Run all 45 automated vitest tests
npm test
```

Test coverage includes:
- `src/tests/gameplay.test.ts` (30 tests): Vehicle physics, stunt detection, clean landings, scoring combos, career medals, ghost recording.
- `src/tests/phase3.test.ts` (15 tests): Daily challenge date determinism, friend code serialization, leaderboard input sanitization, anti-tamper hash generation, submission bounds checking, pass-and-play duel state machine, and ad frequency capping.

---

## 🎮 Controls

### Desktop Keyboard
| Key | Action |
| --- | --- |
| **W / ↑** | Accelerate |
| **S / ↓** | Brake / Reverse |
| **A / D or ← / →** | Steer Left / Right |
| **SPACE** | Boost Thrusters (Consumes Energy) |
| **SHIFT** | Drift |
| **F** | Vertical Thruster Lift (When Airborne) |
| **Q / E** | 360° Barrel Roll (When Airborne) |
| **W / S** | Mid-air Pitch / Somersault Flips |
| **ESC / P** | Pause Menu |

### Mobile Touchscreen
Dedicated on-screen buttons for Steering, Flight Thrusters, Barrel Rolls, Drift, and Boost with haptic vibration feedback.

---

## 📜 Credits & License

- **Lead Engineer & Creator**: Deepesh Kumar Pankaj
- **Game Engine**: Three.js, TypeScript, Vite
- **Audio**: Web Audio API Procedural Synthesizers
- **PWA**: Offline Service Worker, Web App Manifest
- All vehicle geometry, visual effects, game interfaces, and fictional branding are original creations.
#   A E R O R U S H - S K Y B O U N D  
 