import { test, expect } from '@playwright/test';

test('service shortlist survives reload and includes additional services in the draft', async ({ page }) => {
  await page.goto('/services');
  await page.getByRole('button', { name: 'Add to enquiry: Electrical services' }).click();
  await page.getByRole('button', { name: 'Add to enquiry: Plumbing repairs' }).click();
  await page.reload();
  await expect(page.getByLabel('Your service shortlist')).toContainText('2 services');
  await page.getByRole('link', { name: 'Continue enquiry' }).click();
  await expect(page.getByLabel('Service required')).toHaveValue('electrical');
  await expect(page.getByRole('checkbox', { name: 'Plumbing repairs' })).toBeChecked();
  await page.getByLabel('Your name').fill('Test Customer');
  await page.getByLabel('Phone number').fill('-------');
  await page.getByLabel('Email address').fill('test@example.com');
  await page.getByLabel('Project location').fill('Nairobi');
  await page.getByLabel('How can we help?').fill('Please discuss my project requirements.');
  await page.getByRole('button', { name: 'Prepare your enquiry' }).click();
  await expect(page.getByRole('alert')).toContainText('at least 7 digits');
  await page.getByLabel('Phone number').fill('+254700000000');
  await page.getByLabel('Your name').fill('   ');
  await page.getByRole('button', { name: 'Prepare your enquiry' }).click();
  await expect(page.getByRole('alert')).toContainText('name');
  await page.getByLabel('Your name').fill('Test Customer');
  await page.getByRole('button', { name: 'Prepare your enquiry' }).click();
  await expect(page.getByRole('status')).toBeFocused();
  const href = await page.getByRole('link', { name: 'Open email app' }).getAttribute('href');
  expect(decodeURIComponent(href!)).toContain('Additional services: Plumbing repairs');
  await page.getByRole('checkbox', { name: 'Plumbing repairs' }).uncheck();
  await expect(page.getByRole('status')).toHaveCount(0);
  await expect(page.getByLabel('Service required')).toHaveValue('electrical');
});

test('gallery enquiry preserves electrical context and reduced motion disables animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.hero-copy')).toHaveCSS('animation-name', 'none');
  await page.goto('/projects');
  await page.getByRole('button', { name: /View Precision/ }).click();
  await page.getByRole('link', { name: 'Discuss your requirements' }).click();
  await expect(page.getByLabel('Service required')).toHaveValue('electrical');
});
