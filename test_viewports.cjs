const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp3': 'audio/mpeg',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/about' || reqPath === '/blog' || !path.extname(reqPath)) {
    reqPath = '/index.html';
  }
  let filePath = path.join(__dirname, 'dist', reqPath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'public', reqPath);
  }
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    return res.end('Not found');
  }
  const ext = path.extname(filePath);
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(4173, async () => {
  console.log('Server started on 4173');
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const widths = [320, 360, 375, 390, 414, 430, 480, 640, 768, 1024, 1280];
    for (const w of widths) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.goto('http://localhost:4173/about', { waitUntil: 'networkidle' });
      
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const innerWidth = await page.evaluate(() => window.innerWidth);
      const hasOverflow = scrollWidth > innerWidth;
      console.log('Viewport ' + w + 'px: scrollWidth=' + scrollWidth + ', innerWidth=' + innerWidth + ', overflow=' + hasOverflow);
    }

    // Test FAQ interactive click
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('http://localhost:4173/about', { waitUntil: 'networkidle' });
    const btn = await page.$('#faq-btn-faq-1');
    if (btn) {
      await btn.click();
      await page.waitForTimeout(300);
      const expanded = await btn.getAttribute('aria-expanded');
      console.log('FAQ-1 clicked. aria-expanded=' + expanded);
    }

    await browser.close();
  } catch (e) {
    console.error('Error during test:', e);
  } finally {
    server.close();
    process.exit(0);
  }
});
