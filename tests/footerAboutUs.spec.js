import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://reteflix.reteicons.com/');
  await page.getByLabel('Widget menu').getByRole('link', { name: 'About us' }).click();
  await page.getByText('"Eagle\'s Eye Productions -').click();
  await expect(page.getByText('"Eagle\'s Eye Productions -')).toBeVisible();
  await expect(page.getByRole('strong')).toContainText('Eagle\'s Eye Productions - our films shape moments and inspire change."');
});