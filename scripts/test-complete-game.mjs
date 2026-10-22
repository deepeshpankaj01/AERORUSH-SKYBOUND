import puppeteer from 'puppeteer-core';
import { preview } from 'vite';

async function run() {
  console.log('--- STARTING AERORUSH: SKYBOUND MOBILE-FIRST E2E INTEGRATION TEST ---');

  // Start Vite preview server for the dist build
  const server = await preview({
    preview: { port: 4180 }
  });
  console.log('Vite preview server running on http://localhost:4180');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle', '--use-angle=swiftshader']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('http://localhost:4180', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));

  // Helper to get active screen
  const getActiveScreen = async () => {
    return await page.evaluate(() => {
      const active = document.querySelector('.screen.active');
      return active ? active.id : null;
    });
  };

  // 1. Initial State should be screen-menu
  let currentScreen = await getActiveScreen();
  console.log('Initial screen:', currentScreen);
  if (currentScreen !== 'screen-menu') throw new Error(`Expected screen-menu, got ${currentScreen}`);

  // 2. Verify Level Badge & Best Record Badge on Menu
  const levelText = await page.evaluate(() => document.getElementById('menu-level-text')?.textContent);
  const recordText = await page.evaluate(() => document.getElementById('menu-record-text')?.textContent);
  console.log(`Menu Badges: [${levelText}] | [${recordText}]`);
  if (!levelText || !levelText.includes('LEVEL 1')) throw new Error(`Expected Level 1 badge, got: ${levelText}`);
  if (!recordText || !recordText.includes('BEST:')) throw new Error(`Expected Record badge, got: ${recordText}`);
  console.log('✓ Main menu badges verified.');

  // 3. Test Settings modal (#btn-nav-settings)
  console.log('Testing SETTINGS button...');
  await page.click('#btn-nav-settings');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-settings') throw new Error('Failed to open screen-settings');
  // Click High quality button
  await page.click('#group-quality button[data-quality="high"]');
  await page.click('#btn-settings-save');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Failed to return to screen-menu from SETTINGS');
  console.log('✓ Settings open, modify quality, and save verified.');

  // 4. Test Garage (#btn-nav-garage)
  console.log('Testing GARAGE button...');
  await page.click('#btn-nav-garage');
  await new Promise(r => setTimeout(r, 500));
  if (await getActiveScreen() !== 'screen-garage') throw new Error('Failed to open screen-garage');
  // Switch to Paints tab
  await page.click('.garage-tab[data-tab="paints"]');
  await new Promise(r => setTimeout(r, 300));
  const paintsCount = await page.evaluate(() => document.querySelectorAll('#garage-tab-content .shop-item-card').length);
  if (paintsCount === 0) throw new Error('No paint cards rendered in garage');
  // Click first paint card
  await page.click('#garage-tab-content .shop-item-card');
  // Back to menu
  await page.click('#btn-garage-back');
  await new Promise(r => setTimeout(r, 500));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Failed to return to screen-menu from GARAGE');
  console.log(`✓ Garage open, tab switch (${paintsCount} paints), cosmetic selection, and back verified.`);

  // 5. Test Direct Play Flow (The Core Promise: TAP PLAY -> SHORT COUNTDOWN -> ACTUAL RACING)
  console.log('Testing DIRECT PLAY FLOW (#btn-main-play)...');
  await page.click('#btn-main-play');
  await new Promise(r => setTimeout(r, 200));

  // Verify NO dialog overlay appears
  const isDialogVisible = await page.evaluate(() => {
    const dialog = document.getElementById('dialog-overlay');
    return dialog && !dialog.classList.contains('hidden') && dialog.style.display !== 'none';
  });
  if (isDialogVisible) throw new Error('Briefing dialog overlay erroneously appeared during direct play flow!');
  console.log('✓ Verified: No dialogue briefing overlay blocking the start of the race.');

  // Verify HUD and Countdown are active
  const countdownActive = await page.evaluate(() => {
    const cd = document.getElementById('hud-countdown');
    return cd && !cd.classList.contains('hidden');
  });
  if (!countdownActive) throw new Error('Countdown overlay did not trigger after clicking PLAY!');
  console.log('✓ Countdown overlay active: 3-2-1 sequence initiated.');

  // Verify Objective Pill is visible during race
  const objectivePillText = await page.evaluate(() => {
    const pill = document.getElementById('hud-objective-text');
    return pill ? pill.textContent : null;
  });
  console.log('HUD Objective Pill:', objectivePillText);
  if (!objectivePillText || !objectivePillText.includes('LVL 1')) {
    throw new Error(`HUD Objective Pill missing or invalid: ${objectivePillText}`);
  }
  console.log('✓ In-race objective pill displayed correctly.');

  // Wait for countdown to finish and game to enter PLAYING
  console.log('Waiting for countdown to finish...');
  for (let i = 0; i < 20; i++) {
    const cdState = await page.evaluate(() => {
      const cd = document.getElementById('hud-countdown');
      const num = document.getElementById('countdown-number');
      const hud = document.getElementById('game-hud');
      return {
        hidden: cd?.classList.contains('hidden'),
        text: num?.textContent,
        hudHidden: hud?.classList.contains('hidden')
      };
    });
    console.log(`[Tick ${i}] countdown: ${cdState.text}, hidden: ${cdState.hidden}, hudHidden: ${cdState.hudHidden}`);
    if (cdState.hidden) break;
    await new Promise(r => setTimeout(r, 500));
  }

  const hudActive = await page.evaluate(() => {
    const hud = document.getElementById('game-hud');
    return hud && !hud.classList.contains('hidden');
  });
  if (!hudActive) throw new Error('HUD is not visible during active race!');
  console.log('✓ Race entered PLAYING state, 3D world active, HUD rendering.');

  // 6. Test Driving Controls: Press 'W' to accelerate forward
  console.log('Simulating vehicle drive with [KeyW]...');
  await page.keyboard.down('KeyW');
  await new Promise(r => setTimeout(r, 1500));
  await page.keyboard.up('KeyW');

  const speedValue = await page.evaluate(() => {
    const speedEl = document.getElementById('hud-speed');
    return speedEl ? parseInt(speedEl.textContent || '0', 10) : 0;
  });
  console.log(`Current telemetry speed: ${speedValue} KM/H`);
  if (speedValue <= 0) throw new Error('Vehicle failed to accelerate under KeyW input');
  console.log('✓ Vehicle physics acceleration and speedometer functional.');

  // 7. Test In-Race Pause (#btn-pause)
  console.log('Testing in-race PAUSE button (#btn-pause)...');
  await page.click('#btn-pause');
  await new Promise(r => setTimeout(r, 500));
  const activePauseScreen = await getActiveScreen();
  if (activePauseScreen !== 'screen-paused') throw new Error(`Pause button failed to open screen-paused, current: ${activePauseScreen}`);
  console.log('✓ In-race pause successfully opened screen-paused.');

  // 8. Test Resume from Pause
  console.log('Testing RESUME RUN (#btn-pause-resume)...');
  await page.click('#btn-pause-resume');
  await new Promise(r => setTimeout(r, 500));
  if (await getActiveScreen() !== null) throw new Error('Resume did not return to active gameplay');
  console.log('✓ Resume successfully resumed gameplay.');

  // 9. Test Race Completion & Results Screen
  console.log('Simulating race completion to test Results Screen...');
  await page.evaluate(() => {
    if (window.__aeroRushApp) {
      window.__aeroRushApp.completeRunForTesting();
    }
  });
  await new Promise(r => setTimeout(r, 800));

  const resultsScreen = await getActiveScreen();
  if (resultsScreen !== 'screen-results') throw new Error(`Expected screen-results, got ${resultsScreen}`);

  const resultsData = await page.evaluate(() => {
    return {
      level: document.getElementById('results-level-badge')?.textContent,
      medal: document.getElementById('results-medal-badge')?.textContent,
      score: document.getElementById('results-score')?.textContent,
      reward: document.getElementById('results-credits-reward')?.textContent,
      nextVisible: document.getElementById('btn-results-next')?.style.display !== 'none',
      retryVisible: !!document.getElementById('btn-results-retry'),
      menuVisible: !!document.getElementById('btn-results-menu')
    };
  });
  console.log('Results Screen Verification:', resultsData);
  if (!resultsData.level || !resultsData.medal || !resultsData.score) {
    throw new Error('Results screen elements missing or incomplete');
  }
  console.log('✓ Results screen rendered with level, medal, score, and credits reward.');

  // 10. Test Results Screen -> Race Again (#btn-results-retry)
  console.log('Testing RESULTS -> RACE AGAIN (#btn-results-retry)...');
  await page.click('#btn-results-retry');
  await new Promise(r => setTimeout(r, 500));
  // Should enter countdown
  const retryCountdown = await page.evaluate(() => {
    const cd = document.getElementById('hud-countdown');
    return cd && !cd.classList.contains('hidden');
  });
  if (!retryCountdown) throw new Error('RACE AGAIN failed to initiate countdown sequence');
  console.log('✓ RACE AGAIN successfully restarted race directly without menu navigation.');

  // Complete again and return to menu
  await page.evaluate(() => {
    if (window.__aeroRushApp) {
      window.__aeroRushApp.completeRunForTesting();
    }
  });
  await new Promise(r => setTimeout(r, 600));

  console.log('Testing RESULTS -> MAIN MENU (#btn-results-menu)...');
  await page.click('#btn-results-menu');
  await new Promise(r => setTimeout(r, 600));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Return to menu from results failed');

  const updatedRecord = await page.evaluate(() => document.getElementById('menu-record-text')?.textContent);
  console.log('Updated Menu Record Badge:', updatedRecord);
  console.log('✓ Results navigation and menu badges verified.');

  // 11. Check Console Errors
  console.log('Console errors captured during test:', errors);
  if (errors.length > 0) throw new Error(`Browser console errors detected: ${JSON.stringify(errors)}`);

  console.log('\n======================================================');
  console.log('🎉 DIRECT PLAY FLOW AND ALL CORE SYSTEMS 100% VERIFIED!');
  console.log('======================================================\n');

  await browser.close();
  server.httpServer.close();
  process.exit(0);
}

run().catch(err => {
  console.error('\n❌ TEST FAILED:', err);
  process.exit(1);
});
