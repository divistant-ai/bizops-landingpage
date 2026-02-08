import { describe, expect, it } from 'vitest';
import {
  calculateCostPerUser,
  calculatePriceBreakdown,
  calculateYearlySavings,
  estimateImplementationTimeline,
  estimateTrainingHours,
  formatIDR,
  validateDiscountCode,
} from './pricingCalculations';

describe('pricingCalculations', () => {
  // Mock data
  const mockPlan: any = {
    id: 'growth',
    priceMonthly: 9000000,
    priceYearly: 7500000,
  };

  const mockAddOns: any[] = [
    { id: 'storage', price: 500000, billingType: 'recurring' },
    { id: 'setup', price: 1000000, billingType: 'one-time' },
  ];

  describe('calculatePriceBreakdown', () => {
    it('should return zero values when no plan is selected', () => {
      const result = calculatePriceBreakdown(undefined, {}, mockAddOns, 'monthly', null);

      expect(result.basePrice).toBe(0);
      expect(result.totalFirstPayment).toBe(0);
    });

    it('should calculate monthly price correctly', () => {
      const result = calculatePriceBreakdown(mockPlan, { storage: 2 }, mockAddOns, 'monthly', null);

      expect(result.basePrice).toBe(9000000);
      expect(result.monthlyRecurring).toBe(10000000); // 9M + (500K * 2)
      expect(result.subtotal).toBe(10000000);
    });

    it('should calculate yearly price with discount correctly', () => {
      const result = calculatePriceBreakdown(mockPlan, { storage: 1 }, mockAddOns, 'yearly', {
        code: 'BIZOPS10',
        percent: 10,
      });

      expect(result.basePrice).toBe(7500000);

      const expectedSubtotal = 8000000 * 12; // (7.5M + 500K) * 12

      expect(result.subtotal).toBe(expectedSubtotal);
      expect(result.discountAmount).toBe(expectedSubtotal * 0.1);
    });

    it('should include one-time fees in subtotal', () => {
      const result = calculatePriceBreakdown(mockPlan, { setup: 1 }, mockAddOns, 'monthly', null);

      expect(result.oneTimeFees).toBe(1000000);
      expect(result.subtotal).toBe(10000000); // 9M + 1M
    });
  });

  describe('validateDiscountCode', () => {
    it('should return discount for valid BIZOPS10 code', () => {
      const result = validateDiscountCode('BIZOPS10');

      expect(result).toEqual({ code: 'BIZOPS10', percent: 10 });
    });

    it('should return discount for valid PARTNER20 code', () => {
      const result = validateDiscountCode('PARTNER20');

      expect(result).toEqual({ code: 'PARTNER20', percent: 20 });
    });

    it('should return null for invalid code', () => {
      const result = validateDiscountCode('INVALID');

      expect(result).toBeNull();
    });

    it('should handle lowercase input', () => {
      const result = validateDiscountCode('bizops10');

      expect(result).toEqual({ code: 'BIZOPS10', percent: 10 });
    });

    it('should handle whitespace', () => {
      const result = validateDiscountCode('  BIZOPS10  ');

      expect(result).toEqual({ code: 'BIZOPS10', percent: 10 });
    });
  });

  describe('calculateYearlySavings', () => {
    it('should calculate savings correctly', () => {
      const monthlyRecurring = 10000000;
      const priceYearly = 90000000;

      const savings = calculateYearlySavings(monthlyRecurring, priceYearly);

      expect(savings).toBe(30000000); // (10M * 12) - 90M = 30M
    });

    it('should return negative if yearly is more expensive', () => {
      const monthlyRecurring = 1000000;
      const priceYearly = 15000000;

      const savings = calculateYearlySavings(monthlyRecurring, priceYearly);

      expect(savings).toBe(-3000000);
    });
  });

  describe('calculateCostPerUser', () => {
    it('should calculate cost per user correctly', () => {
      expect(calculateCostPerUser(1000000, 50)).toBe(20000);
    });

    it('should return 0 for zero users', () => {
      expect(calculateCostPerUser(1000000, 0)).toBe(0);
    });

    it('should handle negative user count', () => {
      expect(calculateCostPerUser(1000000, -5)).toBe(0);
    });
  });

  describe('formatIDR', () => {
    it('should format currency correctly', () => {
      expect(formatIDR(1000000)).toBe('Rp\u00A01.000.000');
    });

    it('should format large numbers correctly', () => {
      expect(formatIDR(1000000000)).toBe('Rp\u00A01.000.000.000');
    });

    it('should format zero correctly', () => {
      expect(formatIDR(0)).toBe('Rp\u00A00');
    });
  });

  describe('estimateImplementationTimeline', () => {
    it('should return base timeline for simple project', () => {
      const result = estimateImplementationTimeline(10, 10, false);

      expect(result.minWeeks).toBe(2);
      expect(result.recommended).toBe(4);
    });

    it('should add weeks for high complexity', () => {
      const result = estimateImplementationTimeline(90, 10, false);

      expect(result.recommended).toBe(12); // 4 + 8
    });

    it('should add weeks for many users', () => {
      const result = estimateImplementationTimeline(10, 400, false);

      expect(result.recommended).toBe(8); // 4 + 4
    });

    it('should add weeks for multi-company', () => {
      const result = estimateImplementationTimeline(10, 10, true);

      expect(result.recommended).toBe(6); // 4 + 2
    });
  });

  describe('estimateTrainingHours', () => {
    it('should return base hours for minimal setup', () => {
      expect(estimateTrainingHours(1, [])).toBe(4.5); // 4 + (1 * 0.5)
    });

    it('should add hours per user', () => {
      expect(estimateTrainingHours(10, [])).toBe(9); // 4 + (10 * 0.5)
    });

    it('should add hours per module', () => {
      expect(estimateTrainingHours(1, ['crm', 'accounting'])).toBe(8.5); // 4 + (1 * 0.5) + (2 * 2)
    });

    it('should cap at 40 hours', () => {
      expect(estimateTrainingHours(100, ['crm', 'accounting', 'inventory', 'hrm'])).toBe(40);
    });
  });
});
