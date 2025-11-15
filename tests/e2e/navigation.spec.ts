import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate between wedding site pages', async ({ page }) => {
    // Start at homepage
    await page.goto('/');
    await expect(page).toHaveTitle(/Ugo & Jeanne/);

    // Navigate to programme page
    await page.click('a[href="/programme"]');
    await expect(page).toHaveURL('/programme');

    // Navigate to hebergements page
    await page.click('a[href="/hebergements"]');
    await expect(page).toHaveURL('/hebergements');

    // Navigate to infos page
    await page.click('a[href="/infos"]');
    await expect(page).toHaveURL('/infos');

    // Navigate to RSVP page
    await page.click('a[href="/rsvp"]');
    await expect(page).toHaveURL('/rsvp');

    // Navigate back to homepage
    await page.click('a[href="/"]');
    await expect(page).toHaveURL('/');
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');

    // Check that navigation is keyboard accessible
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON']).toContain(focusedElement);

    // Check that navigation has proper ARIA attributes
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should highlight active page in navigation', async ({ page }) => {
    await page.goto('/programme');

    // Check that the programme link has an active state
    const programmeLink = page.locator('nav a[href="/programme"]');
    await expect(programmeLink).toHaveAttribute('aria-current', 'page');
  });
});
