import { test, expect } from '@playwright/test';

test('all routes render without horizontal overflow at target viewport widths', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  const routes = ['/', '/about', '/services', '/services/electrical', '/services/plumbing', '/services/refrigeration', '/projects', '/contact', '/missing-page'];
  for (const width of [320, 375, 430, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('h1')).toHaveCount(1);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${route} at ${width}px`).toBe(true);
    }
  }
  expect(errors).toEqual([]);
});

test('mobile menu supports navigation, Escape, and correct active state', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Open menu' });
  await toggle.click();
  await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('navigation').getByRole('link', { name: 'Services', exact: true }).focus();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.getByRole('navigation').getByRole('link', { name: 'Services', exact: true }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(page.getByRole('navigation')).toBeHidden();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('gallery dialog opens, closes with Escape, and restores focus', async ({ page }) => {
  await page.goto('/projects');
  const trigger = page.getByRole('button', { name: /View Spaces/ });
  await trigger.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close project preview' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toBeHidden();
  await expect(trigger).toBeFocused();
});

test('contact validates, preserves service context, and prepares an honest email draft', async ({ page }) => {
  await page.goto('/services/plumbing');
  await page.getByRole('link', { name: 'Enquire about this service' }).click();
  await expect(page.getByLabel('Service required')).toHaveValue('plumbing');
  await page.getByRole('button', { name: 'Prepare your enquiry' }).click();
  await expect(page.getByRole('status')).toHaveCount(0);
  await page.getByLabel('Your name').fill('Test Customer');
  await page.getByLabel('Phone number').fill('+254 700 000 000');
  await page.getByLabel('Email address').fill('test@example.com');
  await page.getByLabel('Project location').fill('Test location');
  await page.getByLabel('How can we help?').fill('Please discuss the plumbing repair requirements.');
  await page.getByRole('button', { name: 'Prepare your enquiry' }).click();
  await expect(page.getByRole('status')).toContainText('Nothing has been sent yet');
  const href = await page.getByRole('link', { name: 'Open email app' }).getAttribute('href');
  expect(href).toContain('mailto:Sharmyelectro@gmail.com');
  expect(decodeURIComponent(href!)).toContain('Service: plumbing');
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download copy' }).click();
  expect((await download).suggestedFilename()).toBe('sharmy-project-enquiry.txt');
  await page.getByLabel('Your name').fill('Edited name');
  await expect(page.getByRole('status')).toHaveCount(0);
});

test('capture desktop and mobile homepage previews', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('.concept-art img').evaluateAll(async elements => {
    await Promise.all(elements.map(async element => {
      const image = element as HTMLImageElement;
      image.loading = 'eager';
      await image.decode();
      if (!image.naturalWidth) throw new Error(`Image failed to load: ${image.src}`);
    }));
  });
  await page.screenshot({ path: 'test-results/home-desktop.png', fullPage: true });
  await page.screenshot({ path: 'test-results/hero-desktop.png' });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: 'test-results/home-mobile.png', fullPage: true });
  await page.screenshot({ path: 'test-results/hero-mobile.png' });
});
