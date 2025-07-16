const { chromium } = require('playwright');

async function runPlaywrightTest() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();
  await browser.close();
  return `Page title is: ${title}`;
}

module.exports = { runPlaywrightTest };
