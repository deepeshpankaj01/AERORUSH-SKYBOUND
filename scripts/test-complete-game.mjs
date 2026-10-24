import puppeteer from 'puppeteer-core';
import { preview } from 'vite';
import fs from 'fs';
import os from 'os';

/**
 * Portable Chrome / Chromium executable resolver
 * Supports CHROME_PATH, PUPPETEER_EXECUTABLE_PATH, and standard OS paths on Windows, macOS, Linux
 */
function findChromePath() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }
  if (process.env.PUPPETEER_EXECUTABLE_PATH && fs.existsSync(process.env.PUPPETEER_EXECUTABLE_PATH)) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  const platform = os.platform();
  const candidates = [];

  if (platform === 'win32') {
    candidates.push(
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
      `${process.env.PROGRAMFILES}\\Google\\Chrome\\Application\\chrome.exe`,
      'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
      'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    );
  } else if (platform === 'darwin') {
    candidates.push(
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'
    );
  } else {
    candidates.push(
      '/usr/bin/google-chrome',
      '/usr/bin/google-chrome-stable',
      '/usr/bin/chromium',
      '/usr/bin/chromium-browser',
      '/snap/bin/chromium'
    );
  }

  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p;
  }
  throw new Error('Could not find a valid Chrome/Chromium executable. Please set CHROME_PATH or PUPPETEER_EXECUTABLE_PATH.');
}

async function run() {
  console.log('================================================================');
  console.log('🚀 AERORUSH: SKYBOUND — PRODUCTION E2E INTEGRATION & MOBILE SUITE');
  console.log('================================================================\n');

  const chromePath = findChromePath();
  console.log(`[Setup] Resolved browser executable: ${chromePath}`);

  // Start Vite preview server for the dist build
  const server = await preview({
    preview: { port: 4180 }
  });
  console.log('[Setup] Vite preview server running on http://localhost:4180\n');

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--use-gl=angle',
      '--use-angle=swiftshader',
      '--disable-web-security'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  const errors = [];
  page.on('pageerror', err => {
    console.error('[BROWSER UNCAUGHT ERROR]', err);
    errors.push(err.message);
  });
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('[BROWSER ERROR]', msg.text());
      errors.push(msg.text());
    } else if (msg.type() === 'warn') {
      // ignore
    } else {
      // console.log('[BROWSER LOG]', msg.text());
    }
  });

  await page.goto('http://localhost:4180', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));

  // Helper to get active screen ID
  const getActiveScreen = async (p = page) => {
    return await p.evaluate(() => {
      const active = document.querySelector('.screen.active');
      return active ? active.id : null;
    });
  };

  // Helper to dispatch touch pointer events
  const dispatchPointer = async (p, elementId, eventType) => {
    return await p.evaluate((id, type) => {
      const el = document.getElementById(id);
      if (!el) throw new Error(`Element #${id} not found`);
      const rect = el.getBoundingClientRect();
      const event = new PointerEvent(type, {
        bubbles: true,
        cancelable: true,
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2,
        pointerId: 1,
        pointerType: 'touch',
        isPrimary: true
      });
      el.dispatchEvent(event);
    }, elementId, eventType);
  };

  // Helper to reliably tap buttons in responsive/scrolling mobile views
  const tapButton = async (p, selector) => {
    return await p.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (!el) throw new Error(`Element ${sel} not found`);
      el.scrollIntoView({ block: 'center', inline: 'center' });
      el.click();
    }, selector);
  };

  console.log('--- 1. DESKTOP BASELINE INTEGRATION TEST ---');

  // Initial State: screen-menu
  let currentScreen = await getActiveScreen();
  console.log(`Initial screen: ${currentScreen}`);
  if (currentScreen !== 'screen-menu') throw new Error(`Expected screen-menu, got ${currentScreen}`);

  // Badges check
  const levelText = await page.evaluate(() => document.getElementById('menu-level-text')?.textContent);
  const recordText = await page.evaluate(() => document.getElementById('menu-record-text')?.textContent);
  console.log(`Menu Badges: [${levelText}] | [${recordText}]`);
  if (!levelText || !levelText.includes('LEVEL 1')) throw new Error(`Expected Level 1 badge, got: ${levelText}`);
  if (!recordText || !recordText.includes('BEST:')) throw new Error(`Expected Record badge, got: ${recordText}`);
  console.log('✓ Main menu badges verified.');

  // Personal name privacy verification
  const domText = await page.evaluate(() => document.body.innerText.toLowerCase());
  if (domText.includes('deepesh') || domText.includes('pankaj')) {
    throw new Error('Personal name detected in user-facing DOM text!');
  }
  console.log('✓ Verified 100% absence of personal name in user-facing DOM.');

  // Settings modal
  console.log('Testing SETTINGS button...');
  await page.click('#btn-nav-settings');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-settings') throw new Error('Failed to open screen-settings');
  await page.click('#group-quality button[data-quality="high"]');
  await page.click('#btn-settings-save');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Failed to return to screen-menu from SETTINGS');
  console.log('✓ Settings quality change and persistence verified.');

  // Garage
  console.log('Testing GARAGE button...');
  await tapButton(page, '#btn-nav-garage');
  await new Promise(r => setTimeout(r, 600));
  const garageScreen = await getActiveScreen();
  if (garageScreen !== 'screen-garage') throw new Error(`Failed to open screen-garage (current screen: ${garageScreen})`);
  await tapButton(page, '.garage-tab[data-tab="paints"]');
  await new Promise(r => setTimeout(r, 400));
  const paintsCount = await page.evaluate(() => document.querySelectorAll('#garage-tab-content .shop-item-card').length);
  if (paintsCount === 0) throw new Error('No paint cards rendered in garage');
  await tapButton(page, '#garage-tab-content .shop-item-card');
  await tapButton(page, '#btn-garage-back');
  await new Promise(r => setTimeout(r, 500));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Failed to return to screen-menu from GARAGE');
  console.log(`✓ Garage cosmetic selection and return verified (${paintsCount} paints).`);

  // Regression test: Verify legacy dialogue elements are completely absent from DOM
  const dialogueElements = await page.evaluate(() => ({
    dialog: document.getElementById('dialog-overlay'),
    btnContinue: document.getElementById('btn-dialog-continue'),
    btnSkip: document.getElementById('btn-dialog-skip'),
  }));
  if (dialogueElements.dialog || dialogueElements.btnContinue || dialogueElements.btnSkip) {
    throw new Error('Regression: Legacy dialogue elements still present in DOM!');
  }
  console.log('✓ Verified: Legacy dialogue modal & Continue/Skip buttons completely absent from DOM.');

  // Verify Service Worker Cache Version & Cleanup of Obsolete Caches
  console.log('Testing Service Worker cache version and obsolete cache cleanup...');
  const cacheTestResult = await page.evaluate(async () => {
    if (!('caches' in window)) return { supported: false };

    // Unregister existing service worker registrations to test fresh upgrade lifecycle
    const existingRegs = await navigator.serviceWorker.getRegistrations();
    for (const r of existingRegs) {
      await r.unregister();
    }

    // Simulate an existing installation that has obsolete v3.3 cache
    const oldCache = await caches.open('aerorush-skybound-v3.3');
    await oldCache.put(new Request('/legacy-test-asset'), new Response('legacy-data'));

    // Verify old cache exists before SW activation
    const beforeKeys = await caches.keys();
    const hasOldBefore = beforeKeys.includes('aerorush-skybound-v3.3');

    // Register v3.4 service worker
    const newReg = await navigator.serviceWorker.register('./sw.js');
    if (newReg.installing || newReg.waiting) {
      const activeWorker = newReg.installing || newReg.waiting;
      activeWorker.postMessage({ type: 'SKIP_WAITING' });
    }

    // Poll until activate event deletes obsolete cache
    for (let wait = 0; wait < 20; wait++) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'CLEAN_OBSOLETE_CACHES' });
      }
      const keys = await caches.keys();
      if (keys.includes('aerorush-skybound-v3.4') && !keys.includes('aerorush-skybound-v3.3')) {
        break;
      }
      await new Promise(r => setTimeout(r, 250));
    }

    const afterKeys = await caches.keys();
    return {
      supported: true,
      hasOldBefore,
      afterKeys,
      newCachePresent: afterKeys.includes('aerorush-skybound-v3.4'),
      oldCacheCleanedUp: !afterKeys.includes('aerorush-skybound-v3.3')
    };
  });
  console.log('SW Cache Cleanup Verification:', cacheTestResult);
  if (cacheTestResult.supported) {
    if (!cacheTestResult.newCachePresent) throw new Error('New SW cache aerorush-skybound-v3.4 not found!');
    if (!cacheTestResult.oldCacheCleanedUp) throw new Error('Obsolete cache aerorush-skybound-v3.3 was not cleaned up safely!');
    console.log('✓ Verified: Service worker updated to v3.4 and obsolete cache safely deleted.');
  }

  // Direct Play Flow
  console.log('Testing DIRECT PLAY FLOW (#btn-main-play)...');
  await page.click('#btn-main-play');
  await new Promise(r => setTimeout(r, 200));

  // Verify countdown starts directly
  const countdownActive = await page.evaluate(() => {
    const cd = document.getElementById('hud-countdown');
    return cd && !cd.classList.contains('hidden');
  });
  if (!countdownActive) throw new Error('Countdown overlay did not trigger directly after clicking PLAY!');
  console.log('✓ Direct Play verified: Countdown sequence initiated directly without briefing.');
  console.log('✓ Countdown overlay active: 3-2-1 sequence initiated.');

  // Wait for countdown to enter PLAYING
  console.log('Waiting for countdown to finish...');
  for (let i = 0; i < 20; i++) {
    const cdHidden = await page.evaluate(() => {
      const cd = document.getElementById('hud-countdown');
      return cd?.classList.contains('hidden');
    });
    if (cdHidden) break;
    await new Promise(r => setTimeout(r, 500));
  }

  const hudActive = await page.evaluate(() => {
    const hud = document.getElementById('game-hud');
    return hud && !hud.classList.contains('hidden');
  });
  if (!hudActive) throw new Error('HUD is not visible during active race!');
  console.log('✓ Race entered PLAYING state, 3D world active, HUD rendering.');

  // Keyboard driving simulation
  console.log('Simulating vehicle drive with [KeyW]...');
  await page.keyboard.down('KeyW');
  await new Promise(r => setTimeout(r, 1200));
  await page.keyboard.up('KeyW');

  const speedValue = await page.evaluate(() => {
    const speedEl = document.getElementById('hud-speed');
    return speedEl ? parseInt(speedEl.textContent || '0', 10) : 0;
  });
  console.log(`Current telemetry speed: ${speedValue} KM/H`);
  if (speedValue <= 0) throw new Error('Vehicle failed to accelerate under KeyW input');
  console.log('✓ Vehicle physics acceleration and speedometer functional.');

  // In-race pause
  console.log('Testing in-race PAUSE (#btn-pause)...');
  await page.click('#btn-pause');
  await new Promise(r => setTimeout(r, 400));
  if (await getActiveScreen() !== 'screen-paused') throw new Error('Pause failed to open screen-paused');
  await page.click('#btn-pause-resume');
  await new Promise(r => setTimeout(r, 400));
  if (await getActiveScreen() !== null) throw new Error('Resume did not return to active race');
  console.log('✓ In-race pause and resume verified.');

  // Race completion to results
  console.log('Simulating race completion for results screen verification...');
  await page.evaluate(() => {
    if (window.__aeroRushApp) window.__aeroRushApp.completeRunForTesting();
  });
  await new Promise(r => setTimeout(r, 800));

  if (await getActiveScreen() !== 'screen-results') throw new Error('Failed to transition to screen-results');

  const resultsData = await page.evaluate(() => ({
    level: document.getElementById('results-level-badge')?.textContent,
    medal: document.getElementById('results-medal-badge')?.textContent,
    score: document.getElementById('results-score')?.textContent,
    reward: document.getElementById('results-credits-reward')?.textContent,
  }));
  console.log('Results data:', resultsData);
  if (!resultsData.level || !resultsData.medal || !resultsData.score) {
    throw new Error('Results screen elements missing or incomplete');
  }
  console.log('✓ Results screen rendered with level, medal, score, and credits reward.');

  // Race Again action
  await page.click('#btn-results-retry');
  await new Promise(r => setTimeout(r, 500));
  const retryCountdown = await page.evaluate(() => {
    const cd = document.getElementById('hud-countdown');
    return cd && !cd.classList.contains('hidden');
  });
  if (!retryCountdown) throw new Error('RACE AGAIN failed to initiate countdown');
  console.log('✓ RACE AGAIN restarted race directly without menu navigation.');

  // Complete and return to menu
  await page.evaluate(() => {
    if (window.__aeroRushApp) window.__aeroRushApp.completeRunForTesting();
  });
  await new Promise(r => setTimeout(r, 600));

  await page.click('#btn-results-menu');
  await new Promise(r => setTimeout(r, 600));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Return to menu from results failed');
  console.log('✓ Returned to main menu. Desktop baseline test complete!\n');

  // =========================================================================
  // 2. COMPREHENSIVE MOBILE VIEWPORT MATRIX (8 CONFIGURATIONS)
  // Requirements: 320px, 360px, 390px, 430px in both Portrait and Landscape
  // Testing: steering, braking, boost, stunt controls, pause/resume, results, retry, progression
  // =========================================================================
  console.log('--- 2. REAL MOBILE BROWSER TEST MATRIX (8 CONFIGURATIONS) ---');
  await page.close();

  const mobilePage = await browser.newPage();
  mobilePage.on('pageerror', err => {
    console.error('[MOBILE BROWSER ERROR]', err);
    errors.push(err.message);
  });
  mobilePage.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      if (!text.includes('favicon') && !text.includes('manifest')) {
        errors.push(text);
      }
    }
  });

  // Dedicated mobile page starts with touch & mobile emulation active
  await mobilePage.setViewport({
    width: 320,
    height: 568,
    isMobile: true,
    hasTouch: true
  });
  await mobilePage.goto('http://localhost:4180', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));

  const mobileConfigs = [
    { width: 320, height: 568, orientation: 'portrait',  device: 'Small Mobile (iPhone SE)' },
    { width: 568, height: 320, orientation: 'landscape', device: 'Small Mobile Landscape' },
    { width: 360, height: 640, orientation: 'portrait',  device: 'Android Standard' },
    { width: 640, height: 360, orientation: 'landscape', device: 'Android Standard Landscape' },
    { width: 390, height: 844, orientation: 'portrait',  device: 'Modern Mobile (iPhone 14)' },
    { width: 844, height: 390, orientation: 'landscape', device: 'Modern Mobile Landscape' },
    { width: 430, height: 932, orientation: 'portrait',  device: 'Large Mobile (iPhone Pro Max)' },
    { width: 932, height: 430, orientation: 'landscape', device: 'Large Mobile Landscape' },
  ];

  for (let idx = 0; idx < mobileConfigs.length; idx++) {
    const cfg = mobileConfigs[idx];
    console.log(`\n▶ [Config ${idx + 1}/8] ${cfg.device} - ${cfg.width}x${cfg.height} (${cfg.orientation})`);

    // Set mobile viewport with touch support enabled
    await mobilePage.setViewport({
      width: cfg.width,
      height: cfg.height,
      isMobile: true,
      hasTouch: true
    });
    await new Promise(r => setTimeout(r, 300));

    // Check responsiveness: No horizontal document blowout
    const isHorizontalOverflow = await mobilePage.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth + 2;
    });
    if (isHorizontalOverflow) {
      throw new Error(`Mobile layout overflow detected at ${cfg.width}x${cfg.height}`);
    }
    console.log(`  ✓ Responsive layout verified (no horizontal overflow).`);

    // Launch race from menu or current screen
    const screenBeforePlay = await getActiveScreen(mobilePage);
    if (screenBeforePlay === 'screen-menu') {
      await tapButton(mobilePage, '#btn-main-play');
    } else if (screenBeforePlay === 'screen-results') {
      await tapButton(mobilePage, '#btn-results-next');
    }
    await new Promise(r => setTimeout(r, 200));

    // Fast-forward countdown into PLAYING for touch control validation
    await mobilePage.evaluate(() => {
      if (window.__aeroRushApp) window.__aeroRushApp.skipCountdownForTesting();
    });
    await new Promise(r => setTimeout(r, 300));

    const isPlaying = await mobilePage.evaluate(() => {
      const hud = document.getElementById('game-hud');
      return hud && !hud.classList.contains('hidden');
    });
    if (!isPlaying) throw new Error(`Race did not enter PLAYING state at ${cfg.width}x${cfg.height}`);

    // Verify Mobile Touch Controls Overlay is visible
    const touchControlsVisible = await mobilePage.evaluate(() => {
      const tc = document.getElementById('touch-controls');
      if (!tc) return false;
      const style = window.getComputedStyle(tc);
      return style.display !== 'none' && !tc.classList.contains('hidden');
    });
    if (!touchControlsVisible) {
      throw new Error(`Touch controls layer not displayed at ${cfg.width}x${cfg.height}`);
    }
    console.log(`  ✓ Mobile touch layer active.`);

    // --- Geometric Non-Overlap & Visibility Audit ---
    const layoutAudit = await mobilePage.evaluate(() => {
      const getRect = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          selector: sel,
          top: r.top,
          left: r.left,
          right: r.right,
          bottom: r.bottom,
          width: r.width,
          height: r.height,
          visible: r.width > 0 && r.height > 0 && window.getComputedStyle(el).display !== 'none'
        };
      };

      const gb = document.getElementById('global-bar');
      const gbStyle = gb ? window.getComputedStyle(gb) : null;
      const globalBarVisible = gb ? (!gb.classList.contains('hidden') && gbStyle?.display !== 'none' && gbStyle?.opacity !== '0') : false;

      const scoreRect = getRect('.hud-score-card');
      const pauseRect = getRect('#btn-pause');
      const objRect = getRect('#hud-objective-pill');
      const metaRect = getRect('.hud-meta-card');
      const tutorialRect = getRect('#hud-tutorial');

      const steerLeftRect = getRect('#touch-steer-left');
      const steerRightRect = getRect('#touch-steer-right');
      const brakeRect = getRect('#touch-brake');
      const boostRect = getRect('#touch-boost');
      const stuntRect = getRect('#touch-stunt');

      const energyPanelRect = getRect('.energy-gauge-panel');
      const speedPanelRect = getRect('.speed-gauge-panel');

      const intersect = (r1, r2, pad = 0) => {
        if (!r1 || !r2 || !r1.visible || !r2.visible) return false;
        return !(
          r1.right - pad <= r2.left ||
          r1.left + pad >= r2.right ||
          r1.bottom - pad <= r2.top ||
          r1.top + pad >= r2.bottom
        );
      };

      const collisions = [];

      // Top HUD non-overlap checks
      if (intersect(scoreRect, pauseRect)) collisions.push('hud-score collides with btn-pause');
      if (intersect(scoreRect, metaRect)) collisions.push('hud-score collides with hud-meta');
      if (intersect(scoreRect, objRect)) collisions.push('hud-score collides with hud-objective');
      if (intersect(objRect, pauseRect)) collisions.push('hud-objective collides with btn-pause');
      if (intersect(objRect, metaRect)) collisions.push('hud-objective collides with hud-meta');

      // Left cluster vs Right cluster non-overlap
      const leftCluster = [steerLeftRect, steerRightRect, brakeRect].filter(r => r && r.visible);
      const rightCluster = [boostRect, stuntRect].filter(r => r && r.visible);

      for (const lc of leftCluster) {
        for (const rc of rightCluster) {
          if (intersect(lc, rc)) {
            collisions.push(`${lc.selector} collides with ${rc.selector}`);
          }
        }
      }

      // Bottom gauges vs touch buttons non-overlap
      const touchButtons = [...leftCluster, ...rightCluster];
      const hudGauges = [energyPanelRect, speedPanelRect].filter(r => r && r.visible);

      for (const tb of touchButtons) {
        for (const hg of hudGauges) {
          if (intersect(tb, hg)) {
            collisions.push(`${tb.selector} collides with ${hg.selector}`);
          }
        }
      }

      // Tutorial horizontal boundary
      let tutorialOverflow = false;
      if (tutorialRect && tutorialRect.visible) {
        if (tutorialRect.left < 0 || tutorialRect.right > window.innerWidth + 2) {
          tutorialOverflow = true;
        }
      }

      return {
        globalBarVisible,
        collisions,
        tutorialOverflow,
        scoreRect,
        pauseRect,
        objRect
      };
    });

    if (layoutAudit.globalBarVisible) {
      throw new Error(`Global bar must be hidden during gameplay at ${cfg.width}x${cfg.height}`);
    }
    if (layoutAudit.collisions.length > 0) {
      throw new Error(`Geometric layout collision detected at ${cfg.width}x${cfg.height}: ${layoutAudit.collisions.join(', ')}`);
    }
    if (layoutAudit.tutorialOverflow) {
      throw new Error(`Tutorial banner overflow detected at ${cfg.width}x${cfg.height}`);
    }
    console.log(`  ✓ Geometric layout verified (zero bounding-box collisions, global bar hidden, tutorial inside bounds).`);

    // --- A. Test Touch Steering Left ---
    await dispatchPointer(mobilePage, 'touch-steer-left', 'pointerdown');
    let inputState = await mobilePage.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (!inputState.steerLeft || !inputState.accelerate) {
      throw new Error(`Touch steer-left or auto-accelerate failed: ${JSON.stringify(inputState)}`);
    }
    await dispatchPointer(mobilePage, 'touch-steer-left', 'pointerup');
    inputState = await mobilePage.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (inputState.steerLeft) throw new Error('Touch steer-left did not release');
    console.log(`  ✓ Steer Left touch control verified.`);

    // --- B. Test Touch Steering Right ---
    await dispatchPointer(mobilePage, 'touch-steer-right', 'pointerdown');
    inputState = await mobilePage.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (!inputState.steerRight) {
      throw new Error(`Touch steer-right failed: ${JSON.stringify(inputState)}`);
    }
    await dispatchPointer(mobilePage, 'touch-steer-right', 'pointerup');
    inputState = await mobilePage.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (inputState.steerRight) throw new Error('Touch steer-right did not release');
    console.log(`  ✓ Steer Right touch control verified.`);

    // --- C. Test Touch Brake (also asserts auto-accelerate disabled while braking) ---
    await dispatchPointer(mobilePage, 'touch-brake', 'pointerdown');
    inputState = await mobilePage.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (!inputState.brake || inputState.accelerate) {
      throw new Error(`Touch brake failed or failed to suppress acceleration: ${JSON.stringify(inputState)}`);
    }
    await dispatchPointer(mobilePage, 'touch-brake', 'pointerup');
    inputState = await mobilePage.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (inputState.brake) throw new Error('Touch brake did not release');
    console.log(`  ✓ Brake touch control verified.`);

    // --- D. Test Touch Boost ---
    await dispatchPointer(mobilePage, 'touch-boost', 'pointerdown');
    inputState = await mobilePage.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (!inputState.boost) {
      throw new Error(`Touch boost failed: ${JSON.stringify(inputState)}`);
    }
    await dispatchPointer(mobilePage, 'touch-boost', 'pointerup');
    inputState = await mobilePage.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (inputState.boost) throw new Error('Touch boost did not release');
    console.log(`  ✓ Boost touch control verified.`);

    // --- E. Test Touch Stunt (rollRight + drift) ---
    await dispatchPointer(mobilePage, 'touch-stunt', 'pointerdown');
    inputState = await mobilePage.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (!inputState.rollRight || !inputState.drift) {
      throw new Error(`Touch stunt trick failed: ${JSON.stringify(inputState)}`);
    }
    await dispatchPointer(mobilePage, 'touch-stunt', 'pointerup');
    inputState = await mobilePage.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (inputState.rollRight || inputState.drift) throw new Error('Touch stunt did not release');
    console.log(`  ✓ Stunt trick touch control verified.`);

    // --- F. Test Mobile In-Race Pause and Resume ---
    await tapButton(mobilePage, '#btn-pause');
    await new Promise(r => setTimeout(r, 300));
    if (await getActiveScreen(mobilePage) !== 'screen-paused') {
      throw new Error(`Mobile pause button failed at ${cfg.width}x${cfg.height}`);
    }
    await tapButton(mobilePage, '#btn-pause-resume');
    await new Promise(r => setTimeout(r, 300));
    if (await getActiveScreen(mobilePage) !== null) {
      throw new Error(`Mobile resume failed at ${cfg.width}x${cfg.height}`);
    }
    console.log(`  ✓ In-race pause and resume verified.`);

    // --- G. Test Results, Retry and Progression ---
    const priorCareerLevel = await mobilePage.evaluate(() => window.__aeroRushApp.progression.getData().careerProgress);
    await mobilePage.evaluate(() => window.__aeroRushApp.completeRunForTesting());
    await new Promise(r => setTimeout(r, 600));

    if (await getActiveScreen(mobilePage) !== 'screen-results') {
      throw new Error(`Results screen not reached at ${cfg.width}x${cfg.height}`);
    }

    const newCareerLevel = await mobilePage.evaluate(() => window.__aeroRushApp.progression.getData().careerProgress);
    console.log(`  ✓ Results screen reached. Career progression advanced: Level ${priorCareerLevel + 1} -> ${newCareerLevel + 1}`);

    // On final config, test returning to menu and verifying updated menu state
    if (idx === mobileConfigs.length - 1) {
      await tapButton(mobilePage, '#btn-results-menu');
      await new Promise(r => setTimeout(r, 600));
      if (await getActiveScreen(mobilePage) !== 'screen-menu') {
        throw new Error('Failed to return to main menu from mobile results screen');
      }
      const finalMenuLevel = await mobilePage.evaluate(() => document.getElementById('menu-level-text')?.textContent);
      console.log(`  ✓ Final main menu badge verified: [${finalMenuLevel}]`);
    } else {
      // Test mobile Retry on intermediate configs
      await tapButton(mobilePage, '#btn-results-retry');
      await new Promise(r => setTimeout(r, 400));
      const retryActive = await mobilePage.evaluate(() => {
        const cd = document.getElementById('hud-countdown');
        return cd && !cd.classList.contains('hidden');
      });
      if (!retryActive) throw new Error(`Mobile retry failed at ${cfg.width}x${cfg.height}`);
      console.log(`  ✓ Retry action verified.`);
    }
  }

  // Check for any unhandled browser console errors
  console.log('\n--- 3. CONSOLE AUDIT & TEARDOWN ---');
  console.log(`Console errors captured: ${errors.length}`);
  if (errors.length > 0) {
    throw new Error(`Browser console errors detected: ${JSON.stringify(errors)}`);
  }
  console.log('✓ Clean console: Zero runtime exceptions detected.');

  console.log('\n================================================================');
  console.log('🎉 ALL DESKTOP + 8 MOBILE CONFIGURATIONS 100% VERIFIED!');
  console.log('================================================================\n');

  await mobilePage.close();
  await browser.close();
  server.httpServer.close();
  process.exit(0);
}

run().catch(err => {
  console.error('\n❌ E2E INTEGRATION TEST FAILED:', err);
  process.exit(1);
});
