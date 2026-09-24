// Renders slide 9 (Vision) -> media/thumbnail.jpg for use as the deck's og:image.
// Corner elements (.chip label, .logo mark) are hidden for the capture so only
// the centered statement text shows, per Lee's request.
// Usage: node scripts/render-thumbnail.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
  const context = await browser.newContext({
    viewport: { width: 1600, height: 900 },
    deviceScaleFactor: 1.5,
  });
  await context.addInitScript(() => {
    try { localStorage.setItem('imxp_deck_access', '1'); } catch (_) {}
  });
  const page = await context.newPage();
  await page.goto('file://' + path.join(root, 'index.html') + '#9');
  await page.waitForTimeout(1800); // webfonts + bg video first frame
  await page.evaluate(() => {
    document.querySelectorAll('.slide.active .chip, .slide.active .logo')
      .forEach(el => el.style.display = 'none');
  });
  await page.waitForTimeout(150);
  const stage = await page.$('#stage');
  await stage.screenshot({ path: path.join(root, 'media/thumbnail.jpg'), quality: 90, type: 'jpeg' });
  await browser.close();
  console.log('rendered media/thumbnail.jpg');
})();
