import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

/**
 * Accessibility (a11y) Tests using Axe-core
 *
 * These tests run automated accessibility checks on key pages
 * to ensure WCAG 2.1 AA compliance.
 */

test.describe('Accessibility Tests', () => {
  test.describe('Homepage', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('load');
    });

    test('should not have any automatically detectable accessibility issues', async ({ page }) => {
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should meet enhanced accessibility standards', async ({ page }) => {
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'])
        .exclude('.skip-a11y-check')
        .analyze();

      // Allow zero violations for critical and serious issues
      const criticalAndSerious = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious',
      );

      expect(criticalAndSerious).toEqual([]);
    });
  });

  test.describe('Pricing Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/pricing');
      await page.waitForLoadState('load');
    });

    test('should not have accessibility issues on pricing page', async ({ page }) => {
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('forms should be accessible', async ({ page }) => {
      // Check forms specifically
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withRules(['label', 'aria-required-children', 'aria-roles'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe('Tools Pages', () => {
    test('ROI Calculator should be accessible', async ({ page }) => {
      await page.goto('/tools/roi-calculator');
      await page.waitForLoadState('load');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Pricing Calculator should be accessible', async ({ page }) => {
      await page.goto('/tools/pricing-calculator');
      await page.waitForLoadState('load');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe('Interactive Components', () => {
    test('modal dialogs should be accessible', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('load');

      // Open a modal (adjust selector based on your app)
      const modalTrigger = page.locator('[data-testid="modal-trigger"]').first();

      await expect(modalTrigger).toBeVisible();

      await modalTrigger.click();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withRules(['aria-dialog-name', 'aria-modal', 'focus-trap'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('navigation should be keyboard accessible', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('load');

      // Check keyboard navigation
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withRules(['keyboard', 'focus-order-semantics', 'page-has-heading-one'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe('Color Contrast', () => {
    test('should meet color contrast requirements', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('load');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe('ARIA', () => {
    test('should have valid ARIA usage', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('load');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withRules([
          'aria-allowed-attr',
          'aria-allowed-role',
          'aria-command-name',
          'aria-conditional-attr',
          'aria-deprecated-role',
          'aria-hidden-body',
          'aria-hidden-focus',
          'aria-input-field-name',
          'aria-meter-name',
          'aria-progressbar-name',
          'aria-prohibited-attr',
          'aria-required-attr',
          'aria-required-children',
          'aria-required-parent',
          'aria-roledescription',
          'aria-roles',
          'aria-text',
          'aria-toggle-field-name',
          'aria-tooltip-name',
          'aria-treeitem-name',
          'aria-valid-attr-value',
          'aria-valid-attr',
        ])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
