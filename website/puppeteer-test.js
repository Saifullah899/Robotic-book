const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log('Visiting the Vercel site...');
    await page.goto('https://robotic-book-five.vercel.app/', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    const title = await page.title();
    console.log('Page title:', title);

    const url = page.url();
    console.log('Current URL:', url);

    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    console.log('Screenshot saved as screenshot.png');

    // Get some basic info about the page
    const h1Text = await page.$eval('h1', el => el.textContent).catch(() => 'No h1 found');
    console.log('Main heading:', h1Text);

    const headings = await page.$$eval('h1, h2, h3', els => els.map(el => el.textContent));
    console.log('Headings found:', headings.length);

    console.log('Page loaded successfully!');
  } catch (error) {
    console.error('Error visiting the site:', error.message);
  } finally {
    await browser.close();
  }
})();