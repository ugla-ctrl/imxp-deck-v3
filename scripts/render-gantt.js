// Renders media/people/product-gantt.html -> media/people/product-gantt.jpg
// Usage: node scripts/render-gantt.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
  const page = await browser.newPage({ viewport: { width: 1800, height: 700 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(root, 'media/people/product-gantt.html'));
  await page.waitForTimeout(1200); // webfonts
  const el = await page.$('body');
  await el.screenshot({ path: path.join(root, 'media/people/product-gantt.jpg'), type: 'jpeg', quality: 92 });
  await browser.close();
  console.log('rendered media/people/product-gantt.jpg');
})();
