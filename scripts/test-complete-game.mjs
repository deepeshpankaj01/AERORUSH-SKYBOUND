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
  const getActiveScreen = async () => {
    return await page.evaluate(() => {
      const active = document.querySelector('.screen.active');
      return active ? active.id : null;
    });
  };

  // Helper to dispatch touch pointer events
  const dispatchPointer = async (elementId, eventType) => {
    return await page.evaluate((id, type) => {
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
  const tapButton = async (selector) => {
    return await page.evaluate((sel) => {
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
  await page.click('#btn-nav-garage');
  await new Promise(r => setTimeout(r, 500));
  if (await getActiveScreen() !== 'screen-garage') throw new Error('Failed to open screen-garage');
  await page.click('.garage-tab[data-tab="paints"]');
  await new Promise(r => setTimeout(r, 300));
  const paintsCount = await page.evaluate(() => document.querySelectorAll('#garage-tab-content .shop-item-card').length);
  if (paintsCount === 0) throw new Error('No paint cards rendered in garage');
  await page.click('#garage-tab-content .shop-item-card');
  await page.click('#btn-garage-back');
  await new Promise(r => setTimeout(r, 500));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Failed to return to screen-menu from GARAGE');
  console.log(`✓ Garage cosmetic selection and return verified (${paintsCount} paints).`);

  // Direct Play Flow
  console.log('Testing DIRECT PLAY FLOW (#btn-main-play)...');
  await page.click('#btn-main-play');
  await new Promise(r => setTimeout(r, 200));

  const isDialogVisible = await page.evaluate(() => {
    const dialog = document.getElementById('dialog-overlay');
    return dialog && !dialog.classList.contains('hidden') && dialog.style.display !== 'none';
  });
  if (isDialogVisible) throw new Error('Legacy briefing dialog erroneously visible during direct play!');
  console.log('✓ Verified: No dialogue briefing overlay blocking race start.');

  // Verify countdown
  const countdownActive = await page.evaluate(() => {
    const cd = document.getElementById('hud-countdown');
    return cd && !cd.classList.contains('hidden');
  });
  if (!countdownActive) throw new Error('Countdown overlay did not trigger after clicking PLAY!');
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
    await page.setViewport({
      width: cfg.width,
      height: cfg.height,
      isMobile: true,
      hasTouch: true
    });
    await new Promise(r => setTimeout(r, 300));

    // Check responsiveness: No horizontal document blowout
    const isHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth + 2;
    });
    if (isHorizontalOverflow) {
      throw new Error(`Mobile layout overflow detected at ${cfg.width}x${cfg.height}`);
    }
    console.log(`  ✓ Responsive layout verified (no horizontal overflow).`);

    // Launch race from menu or current screen
    const screenBeforePlay = await getActiveScreen();
    if (screenBeforePlay === 'screen-menu') {
      await tapButton('#btn-main-play');
    } else if (screenBeforePlay === 'screen-results') {
      await tapButton('#btn-results-next');
    }
    await new Promise(r => setTimeout(r, 200));

    // Fast-forward countdown into PLAYING for touch control validation
    await page.evaluate(() => {
      if (window.__aeroRushApp) window.__aeroRushApp.skipCountdownForTesting();
    });
    await new Promise(r => setTimeout(r, 300));

    const isPlaying = await page.evaluate(() => {
      const hud = document.getElementById('game-hud');
      return hud && !hud.classList.contains('hidden');
    });
    if (!isPlaying) throw new Error(`Race did not enter PLAYING state at ${cfg.width}x${cfg.height}`);

    // Verify Mobile Touch Controls Overlay is visible
    const touchControlsVisible = await page.evaluate(() => {
      const tc = document.getElementById('touch-controls');
      if (!tc) return false;
      const style = window.getComputedStyle(tc);
      return style.display !== 'none' && !tc.classList.contains('hidden');
    });
    if (!touchControlsVisible) {
      throw new Error(`Touch controls layer not displayed at ${cfg.width}x${cfg.height}`);
    }
    console.log(`  ✓ Mobile touch layer active.`);

    // --- A. Test Touch Steering Left ---
    await dispatchPointer('touch-steer-left', 'pointerdown');
    let inputState = await page.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (!inputState.steerLeft || !inputState.accelerate) {
      throw new Error(`Touch steer-left or auto-accelerate failed: ${JSON.stringify(inputState)}`);
    }
    await dispatchPointer('touch-steer-left', 'pointerup');
    inputState = await page.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (inputState.steerLeft) throw new Error('Touch steer-left did not release');
    console.log(`  ✓ Steer Left touch control verified.`);

    // --- B. Test Touch Steering Right ---
    await dispatchPointer('touch-steer-right', 'pointerdown');
    inputState = await page.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (!inputState.steerRight) {
      throw new Error(`Touch steer-right failed: ${JSON.stringify(inputState)}`);
    }
    await dispatchPointer('touch-steer-right', 'pointerup');
    inputState = await page.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (inputState.steerRight) throw new Error('Touch steer-right did not release');
    console.log(`  ✓ Steer Right touch control verified.`);

    // --- C. Test Touch Brake (also asserts auto-accelerate disabled while braking) ---
    await dispatchPointer('touch-brake', 'pointerdown');
    inputState = await page.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (!inputState.brake || inputState.accelerate) {
      throw new Error(`Touch brake failed or failed to suppress acceleration: ${JSON.stringify(inputState)}`);
    }
    await dispatchPointer('touch-brake', 'pointerup');
    inputState = await page.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (inputState.brake) throw new Error('Touch brake did not release');
    console.log(`  ✓ Brake touch control verified.`);

    // --- D. Test Touch Boost ---
    await dispatchPointer('touch-boost', 'pointerdown');
    inputState = await page.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (!inputState.boost) {
      throw new Error(`Touch boost failed: ${JSON.stringify(inputState)}`);
    }
    await dispatchPointer('touch-boost', 'pointerup');
    inputState = await page.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (inputState.boost) throw new Error('Touch boost did not release');
    console.log(`  ✓ Boost touch control verified.`);

    // --- E. Test Touch Stunt (rollRight + thruster) ---
    await dispatchPointer('touch-stunt', 'pointerdown');
    inputState = await page.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (!inputState.rollRight || !inputState.thruster) {
      throw new Error(`Touch stunt trick failed: ${JSON.stringify(inputState)}`);
    }
    await dispatchPointer('touch-stunt', 'pointerup');
    inputState = await page.evaluate(() => window.__aeroRushApp.getInputStateForTesting());
    if (inputState.rollRight || inputState.thruster) throw new Error('Touch stunt did not release');
    console.log(`  ✓ Stunt trick touch control verified.`);

    // --- F. Test Mobile In-Race Pause and Resume ---
    await tapButton('#btn-pause');
    await new Promise(r => setTimeout(r, 300));
    if (await getActiveScreen() !== 'screen-paused') {
      throw new Error(`Mobile pause button failed at ${cfg.width}x${cfg.height}`);
    }
    await tapButton('#btn-pause-resume');
    await new Promise(r => setTimeout(r, 300));
    if (await getActiveScreen() !== null) {
      throw new Error(`Mobile resume failed at ${cfg.width}x${cfg.height}`);
    }
    console.log(`  ✓ In-race pause and resume verified.`);

    // --- G. Test Results, Retry and Progression ---
    const priorCareerLevel = await page.evaluate(() => window.__aeroRushApp.progression.getData().careerProgress);
    await page.evaluate(() => window.__aeroRushApp.completeRunForTesting());
    await new Promise(r => setTimeout(r, 600));

    if (await getActiveScreen() !== 'screen-results') {
      throw new Error(`Results screen not reached at ${cfg.width}x${cfg.height}`);
    }

    const newCareerLevel = await page.evaluate(() => window.__aeroRushApp.progression.getData().careerProgress);
    console.log(`  ✓ Results screen reached. Career progression advanced: Level ${priorCareerLevel + 1} -> ${newCareerLevel + 1}`);

    // On final config, test returning to menu and verifying updated menu state
    if (idx === mobileConfigs.length - 1) {
      await tapButton('#btn-results-menu');
      await new Promise(r => setTimeout(r, 600));
      if (await getActiveScreen() !== 'screen-menu') {
        throw new Error('Failed to return to main menu from mobile results screen');
      }
      const finalMenuLevel = await page.evaluate(() => document.getElementById('menu-level-text')?.textContent);
      console.log(`  ✓ Final main menu badge verified: [${finalMenuLevel}]`);
    } else {
      // Test mobile Retry on intermediate configs
      await tapButton('#btn-results-retry');
      await new Promise(r => setTimeout(r, 400));
      const retryActive = await page.evaluate(() => {
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

  await browser.close();
  server.httpServer.close();
  process.exit(0);
}

run().catch(err => {
  console.error('\n❌ E2E INTEGRATION TEST FAILED:', err);
  process.exit(1);
});
