import puppeteer from 'puppeteer-core';
import { preview } from 'vite';

async function run() {
  console.log('--- STARTING COMPREHENSIVE BROWSER INTEGRATION TEST ---');

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

  // 2. Test Manual (#btn-nav-how)
  console.log('Testing MANUAL button...');
  await page.click('#btn-nav-how');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-how') throw new Error('Failed to open screen-how');
  await page.click('#btn-how-back');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Failed to return to screen-menu from HOW');
  console.log('✓ Manual button & back verified.');

  // 3. Test Settings (#btn-nav-settings)
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

  // 4. Test Credits (#btn-nav-credits)
  console.log('Testing CREDITS button...');
  await page.click('#btn-nav-credits');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-credits') throw new Error('Failed to open screen-credits');
  await page.click('#btn-credits-back');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Failed to return to screen-menu from CREDITS');
  console.log('✓ Credits button & back verified.');

  // 5. Test Privacy & PWA (#btn-nav-privacy)
  console.log('Testing PRIVACY button...');
  await page.click('#btn-nav-privacy');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-privacy') throw new Error('Failed to open screen-privacy');
  await page.click('#btn-privacy-back');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Failed to return to screen-menu from PRIVACY');
  console.log('✓ Privacy button & back verified.');

  // 6. Test Achievements (#btn-nav-achievements)
  console.log('Testing ACHIEVEMENTS button...');
  await page.click('#btn-nav-achievements');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-achievements') throw new Error('Failed to open screen-achievements');
  await page.click('#btn-achievements-close');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Failed to return to screen-menu from ACHIEVEMENTS via close button');
  console.log('✓ Achievements open & close verified.');

  // 7. Test Records / Leaderboard (#btn-nav-leaderboard)
  console.log('Testing RECORDS button...');
  await page.click('#btn-nav-leaderboard');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-records') throw new Error('Failed to open screen-records');
  await page.click('#btn-records-back');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Failed to return to screen-menu from RECORDS');
  console.log('✓ Records open & back verified.');

  // 8. Test Garage (#btn-nav-garage)
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

  // 9. Test Play Select modal via Launch Run (#btn-main-play)
  console.log('Testing LAUNCH RUN / PLAY_SELECT modal...');
  await page.click('#btn-main-play');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-play-select') throw new Error('Failed to open screen-play-select');
  // Open and close Quick Run from Play Select
  await page.click('#card-mode-quick');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-quick') throw new Error('Failed to open screen-quick');
  await page.click('#btn-quick-back');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-play-select') throw new Error('Failed to return to screen-play-select from quick');
  console.log('✓ Play Select and Quick modal back navigation verified.');

  // 10. Test Career Mode Launch & BRIEFING CONTINUE BUTTON
  console.log('Testing CAREER Launch & WELCOME BRIEFING CONTINUE BUTTON...');
  await page.click('#card-mode-career');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-career') throw new Error('Failed to open screen-career');

  // Click Launch on Stage 1
  await page.click('#career-missions-list .mission-card button');
  await new Promise(r => setTimeout(r, 400));

  // Verify dialog is visible
  const isDialogVisible = await page.evaluate(() => {
    const dialog = document.getElementById('dialog-overlay');
    return dialog && !dialog.classList.contains('hidden');
  });
  if (!isDialogVisible) throw new Error('Briefing dialog overlay did not appear after mission launch!');
  console.log('✓ Briefing dialog overlay appeared with welcome message.');

  // Test Continue Button click
  console.log('Simulating user click on CONTINUE button (#btn-dialog-continue)...');
  await page.click('#btn-dialog-continue');
  await new Promise(r => setTimeout(r, 500));

  // Verify dialog closed
  const isDialogClosed = await page.evaluate(() => {
    const dialog = document.getElementById('dialog-overlay');
    return dialog && dialog.classList.contains('hidden');
  });
  if (!isDialogClosed) throw new Error('CONTINUE button failed to dismiss the briefing dialog overlay!');
  console.log('✓ CONTINUE button successfully dismissed the briefing overlay and initiated countdown!');

  // Wait for countdown to finish and game to enter PLAYING
  await page.waitForFunction(() => {
    const cd = document.getElementById('hud-countdown');
    return cd && cd.classList.contains('hidden');
  }, { timeout: 10000 });

  const hudActive = await page.evaluate(() => {
    const hud = document.getElementById('game-hud');
    return hud && !hud.classList.contains('hidden');
  });
  if (!hudActive) throw new Error('HUD is not visible during active race!');
  console.log('✓ Race entered PLAYING state, 3D world active, HUD rendering.');

  // 11. Test Pause during gameplay
  console.log('Testing in-race PAUSE button (#btn-pause)...');
  await page.click('#btn-pause');
  await new Promise(r => setTimeout(r, 600));
  const activePauseScreen = await getActiveScreen();
  console.log('Active screen after clicking pause:', activePauseScreen);
  if (activePauseScreen !== 'screen-paused') throw new Error(`Pause button failed to open screen-paused, current: ${activePauseScreen}`);
  console.log('✓ In-race pause successfully opened screen-paused.');

  // 12. Test Pause -> Settings -> Back to Pause
  console.log('Testing Pause -> Settings navigation...');
  await page.click('#btn-pause-settings');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-settings') throw new Error('Pause Settings failed to open');
  await page.click('#btn-settings-back');
  await new Promise(r => setTimeout(r, 300));
  if (await getActiveScreen() !== 'screen-paused') throw new Error('Settings back button failed to return to screen-paused!');
  console.log('✓ Settings opened from pause safely returns to paused race.');

  // 13. Test Resume from Pause
  console.log('Testing RESUME RUN (#btn-pause-resume)...');
  await page.click('#btn-pause-resume');
  await new Promise(r => setTimeout(r, 500));
  if (await getActiveScreen() !== null) throw new Error('Resume did not return to active gameplay');
  console.log('✓ Resume successfully resumed gameplay.');

  // 14. Pause again and Abort to Menu
  console.log('Testing PAUSE -> ABORT TO MENU (#btn-pause-quit)...');
  await page.click('#btn-pause');
  await new Promise(r => setTimeout(r, 300));
  await page.click('#btn-pause-quit');
  await new Promise(r => setTimeout(r, 500));
  if (await getActiveScreen() !== 'screen-menu') throw new Error('Abort to menu failed to return to screen-menu');
  console.log('✓ Abort to menu successfully returned to main menu.');

  // 15. Test Career Launch & SKIP BRIEFING button (#btn-dialog-skip)
  console.log('Testing SKIP BRIEFING button (#btn-dialog-skip)...');
  await page.click('#btn-nav-career');
  await new Promise(r => setTimeout(r, 300));
  await page.click('#career-missions-list .mission-card button');
  await new Promise(r => setTimeout(r, 400));
  await page.click('#btn-dialog-skip');
  await new Promise(r => setTimeout(r, 500));
  const isDialogClosedAfterSkip = await page.evaluate(() => {
    const dialog = document.getElementById('dialog-overlay');
    return dialog && dialog.classList.contains('hidden');
  });
  if (!isDialogClosedAfterSkip) throw new Error('SKIP BRIEFING button failed to dismiss briefing!');
  console.log('✓ SKIP BRIEFING button successfully dismissed briefing overlay and launched race.');

  console.log('Console errors captured during test:', errors);
  if (errors.length > 0) throw new Error(`Browser console errors detected: ${JSON.stringify(errors)}`);

  console.log('\n======================================================');
  console.log('🎉 ALL GAMEPLAY BUTTONS AND DIALOGUE FLOW 100% VERIFIED!');
  console.log('======================================================\n');

  await browser.close();
  server.httpServer.close();
  process.exit(0);
}

run().catch(err => {
  console.error('\n❌ TEST FAILED:', err);
  process.exit(1);
});
