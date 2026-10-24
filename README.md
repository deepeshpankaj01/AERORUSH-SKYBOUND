# AERORUSH: SKYBOUND ⚡

[![Live Demo](https://img.shields.io/badge/Live%20Demo-aerorush--skybound.pages.dev-00f0ff?style=flat&logo=cloudflare)](https://aerorush-skybound.pages.dev/)
[![Built With](https://img.shields.io/badge/Built%20With-Three.js%20%7C%20TypeScript%20%7C%20Vite-blue?style=flat)](https://github.com/deepeshpankaj01/AERORUSH-SKYBOUND)
[![Offline Ready](https://img.shields.io/badge/PWA-100%25%20Offline%20First-success?style=flat)](#)
[![Tests](https://img.shields.io/badge/Tests-58%20Passed%20%7C%208%20Mobile%20E2E-brightgreen?style=flat)](#)

> **A fast, futuristic 3D electric hypercar arcade racing and aerial-stunt browser game.**<br>
> Built as an offline-first Progressive Web App with pure Three.js, TypeScript, and procedural skyways.

🎮 **Play Now:** [https://aerorush-skybound.pages.dev/](https://aerorush-skybound.pages.dev/)

---

## ⚡ Highlights

- **Direct Play Flow**: Open site → tap **Play** → short countdown → instant high-speed racing. No loading loops, forced accounts, or complex menus.
- **Flight & Stunt Physics**: Pilot the original **VANTA XR** hypercar. Drift corners, launch off ramps, deploy rocket thrusters, and execute mid-air barrel rolls.
- **Mobile-First & Accessible**: Fluid on-screen touch controls with smart auto-acceleration, portrait/landscape adaptive layout, and natural modal zoom.
- **Garage Customization**: Unlock performance upgrades (Top Speed, Acceleration, Handling, Boost) and customize paint finishes, wheels, and neon underglow.
- **100% Offline PWA**: Built with Service Worker asset caching and local storage persistence. Fully playable without network connectivity.

---

## 🕹️ Controls

| Action | Desktop (Keyboard) | Mobile (Touch Controls) |
| :--- | :--- | :--- |
| **Steer** | `A` / `D` or `◀` / `▶` | `◀` / `▶` Buttons |
| **Accelerate** | `W` or `▲` | Automatic on Touch |
| **Brake / Drift** | `S` or `▼` / `Shift` | `🛑 BRAKE` Button |
| **Boost Overdrive** | `Space` | `⚡ BOOST` Button |
| **Stunt Flight / Roll** | `F` (Thrust) / `Q`, `E` (Roll) | `✈️ STUNT` Button |
| **Pause Game** | `Escape` or `P` | `⏸` HUD Button |

---

## 🛠️ Tech Stack

- **Graphics**: [Three.js](https://threejs.org/) (Procedural tracks, custom shader skies, particle systems, dynamic lighting)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing, modular physics, progression & input engine)
- **Audio**: Web Audio API (Synthesized engine pitch, thruster whoosh, drift friction, and cyber soundtrack)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Testing**: [Vitest](https://vitest.dev/) (Unit tests) & [Puppeteer](https://pptr.dev/) (Mobile-matrix E2E integration across 8 viewports)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/deepeshpankaj01/AERORUSH-SKYBOUND.git
cd AERORUSH-SKYBOUND
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

### 4. Run Test Suites
```bash
npm test         # Unit test suite (58 tests)
npm run test:e2e # Headless Chrome E2E test suite (Desktop + 8 mobile viewports)
```

---

## 📱 Mobile Viewport Compatibility

Tested and verified with real automated touch pointer events across 8 device configurations:
- **320 × 568** & **568 × 320** (Small Mobile / iPhone SE)
- **360 × 640** & **640 × 360** (Standard Android)
- **390 × 844** & **844 × 390** (Modern Mobile / iPhone 14)
- **430 × 932** & **932 × 430** (Large Mobile / iPhone Pro Max)

---

## 📄 License

Released under the [MIT License](LICENSE).
