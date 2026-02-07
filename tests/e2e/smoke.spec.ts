import { expect, test } from '@playwright/test';

/**
 * Smoke Tests
 *
 * These tests verify that critical application paths work after deployment.
 * They are designed to be fast and comprehensive, checking the most
 * important user flows.
 */

const BASE_URL = process.env.SMOKE_TEST_URL || 'http://localhost:3000';

test.describe('Smoke Tests - Critical Paths', () => {
  test.describe('Homepage', () => {
    test('homepage loads successfully', async ({ page }) => {
      const response = await page.goto(BASE_URL);

      expect(response?.status()).toBe(200);
      expect(await page.title()).toContain('BizOps');
    });

    test('hero section is visible', async ({ page }) => {
      await page.goto(BASE_URL);

      await expect(page.locator('h1')).toBeVisible();
    });

    test('navigation is present', async ({ page }) => {
      await page.goto(BASE_URL);

      await expect(page.locator('nav')).toBeVisible();
    });

    test('footer is present', async ({ page }) => {
      await page.goto(BASE_URL);

      await expect(page.locator('footer')).toBeVisible();
    });
  });

  test.describe('Navigation', () => {
    const criticalPages = [
      { path: '/', name: 'Homepage' },
      { path: '/pricing', name: 'Pricing' },
      { path: '/contact', name: 'Contact' },
      { path: '/demo', name: 'Demo' },
      { path: '/careers', name: 'Careers' },
    ];

    for (const page of criticalPages) {
      test(`${page.name} page loads with 200`, async ({ page: pwPage }) => {
        const response = await pwPage.goto(`${BASE_URL}${page.path}`);

        expect(response?.status()).toBe(200);
      });
    }
  });

  test.describe('Calculator Tools', () => {
    const tools = [
      { path: '/tools/roi-calculator', name: 'ROI Calculator' },
      { path: '/tools/pricing-calculator', name: 'Pricing Calculator' },
      { path: '/tools/margin-markup', name: 'Margin Markup Calculator' },
    ];

    for (const tool of tools) {
      test(`${tool.name} loads and has form`, async ({ page }) => {
        const response = await page.goto(`${BASE_URL}${tool.path}`);

        expect(response?.status()).toBe(200);

        // Check that the form or calculator interface is present
        const hasForm = (await page.locator('form, [data-testid="calculator"]').count()) > 0;

        expect(hasForm).toBe(true);
      });
    }
  });

  test.describe('API Endpoints', () => {
    test('health check endpoint responds', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/health`);

      // Health endpoint should return 200 if it exists
      expect(response.status()).toBe(200);

      const body = await response.json();

      expect(body.status).toBe('ok');
    });

    test('sitemap.xml is accessible', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/sitemap.xml`);

      expect(response.status()).toBe(200);

      const contentType = response.headers()['content-type'];

      expect(contentType).toContain('xml');
    });

    test('robots.txt is accessible', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/robots.txt`);

      expect(response.status()).toBe(200);
    });
  });

  test.describe('Internationalization', () => {
    test('Indonesian version loads', async ({ page }) => {
      const response = await page.goto(`${BASE_URL}/id`);

      expect(response?.status()).toBe(200);
    });

    test('English version loads', async ({ page }) => {
      const response = await page.goto(`${BASE_URL}/en`);

      expect(response?.status()).toBe(200);
    });
  });

  test.describe('Assets', () => {
    test('CSS is loaded', async ({ page }) => {
      await page.goto(BASE_URL);

      // Check that styles are applied (no FOUC)
      const body = page.locator('body');
      const computedStyle = await body.evaluate((el) => {
        return window.getComputedStyle(el).opacity;
      });

      expect(computedStyle).not.toBe('0');
    });

    test('favicon is accessible', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/favicon.ico`);

      expect(response.status()).toBeLessThan(400);
    });
  });

  test.describe('Error Pages', () => {
    test('404 page works', async ({ page }) => {
      const response = await page.goto(`${BASE_URL}/this-page-does-not-exist`);

      expect(response?.status()).toBe(404);

      // Should show custom 404 page
      const pageContent = await page.content();

      expect(pageContent).toContain('404');
    });
  });

  test.describe('Core Web Vitals - Basic Checks', () => {
    test('page loads within 3 seconds', async ({ page }) => {
      const startTime = Date.now();
      await page.goto(BASE_URL);
      await page.waitForLoadState('load');
      const loadTime = Date.now() - startTime;

      expect(loadTime).toBeLessThan(3000);
    });

    test('no console errors on load', async ({ page }) => {
      const errors: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      await page.goto(BASE_URL);
      await page.waitForLoadState('load');

      // Filter out third-party errors
      const criticalErrors = errors.filter(
        error =>
          !error.includes('favicon') && !error.includes('analytics') && !error.includes('posthog'),
      );

      expect(criticalErrors).toHaveLength(0);
    });
  });
});
