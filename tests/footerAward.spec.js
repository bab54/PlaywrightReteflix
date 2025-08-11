import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://reteflix.reteicons.com/');
  await page.getByLabel('Widget menu').getByRole('link', { name: 'Awards' }).click();
  await expect(page.getByText('Eagle\'s Eye Productions - our')).toBeVisible();
  await expect(page.getByRole('strong')).toContainText('Eagle\'s Eye Productions - our films shape moments and inspire change."');
});