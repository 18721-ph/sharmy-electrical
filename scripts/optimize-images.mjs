import { chromium } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';

// Encode generated originals to responsive WebP without changing their composition.
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const page = await browser.newPage();
  for (const name of ['architecture-v2', 'electrical-v2', 'mechanical-v2']) {
    const original = readFileSync(new URL(`../public/images/${name}.png`, import.meta.url));
    for (const width of [640, 1200]) {
      const data = await page.evaluate(async ({ base64, width }) => {
        const image = new Image();
        image.src = `data:image/png;base64,${base64}`;
        await image.decode();
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = Math.round(width * image.naturalHeight / image.naturalWidth);
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL('image/webp', 0.86).split(',')[1];
      }, { base64: original.toString('base64'), width });
      const encoded = Buffer.from(data, 'base64');
      writeFileSync(new URL(`../public/images/${name}-${width}.webp`, import.meta.url), encoded);
      console.log(`${name}-${width}.webp: ${Math.round(encoded.length / 1024)} KB`);
    }
  }
} finally {
  await browser.close();
}
