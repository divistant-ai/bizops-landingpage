import { describe, expect, it } from 'vitest';

type BEPResult = {
  fixedCosts: number;
  variableCostPerUnit: number;
  sellingPricePerUnit: number;
  contributionMargin: number;
  contributionMarginRatio: number;
  breakEvenUnits: number;
  breakEvenRevenue: number;
  monthsToBreakEven: number;
};

function calculateBEP(
  fixedCosts: number,
  variableCostPerUnit: number,
  sellingPricePerUnit: number,
  monthlySales: number,
): BEPResult {
  const contributionMargin = sellingPricePerUnit - variableCostPerUnit;
  const contributionMarginRatio = (contributionMargin / sellingPricePerUnit) * 100;

  const breakEvenUnits = contributionMargin > 0 ? fixedCosts / contributionMargin : 0;
  const breakEvenRevenue = breakEvenUnits * sellingPricePerUnit;
  const monthsToBreakEven = monthlySales > 0 ? breakEvenUnits / monthlySales : 0;

  return {
    fixedCosts,
    variableCostPerUnit,
    sellingPricePerUnit,
    contributionMargin,
    contributionMarginRatio,
    breakEvenUnits,
    breakEvenRevenue,
    monthsToBreakEven,
  };
}

describe('Break Even Point Calculator', () => {
  describe('Contribution Margin', () => {
    it('should calculate correct contribution margin per unit', () => {
      const result = calculateBEP(10000000, 60000, 100000, 100);

      expect(result.contributionMargin).toBe(40000); // 100k - 60k
    });

    it('should calculate correct contribution margin ratio', () => {
      const result = calculateBEP(10000000, 60000, 100000, 100);

      expect(result.contributionMarginRatio).toBe(40); // 40k/100k = 40%
    });

    it('should handle zero variable cost', () => {
      const result = calculateBEP(10000000, 0, 100000, 100);

      expect(result.contributionMargin).toBe(100000);
      expect(result.contributionMarginRatio).toBe(100);
    });
  });

  describe('Break-Even Units', () => {
    it('should calculate break-even units correctly', () => {
      // Fixed costs 10M, CM 40k per unit = 250 units to break even
      const result = calculateBEP(10000000, 60000, 100000, 100);

      expect(result.breakEvenUnits).toBe(250);
    });

    it('should calculate break-even revenue', () => {
      const result = calculateBEP(10000000, 60000, 100000, 100);

      expect(result.breakEvenRevenue).toBe(25000000); // 250 units × 100k
    });

    it('should handle high fixed costs', () => {
      const result = calculateBEP(100000000, 50000, 150000, 200);

      expect(result.breakEvenUnits).toBe(1000); // 100M / 100k CM
    });
  });

  describe('Time to Break Even', () => {
    it('should calculate months to break even', () => {
      // Need 250 units, selling 100/month = 2.5 months
      const result = calculateBEP(10000000, 60000, 100000, 100);

      expect(result.monthsToBreakEven).toBe(2.5);
    });

    it('should handle high monthly sales', () => {
      // Need 250 units, selling 500/month = 0.5 months
      const result = calculateBEP(10000000, 60000, 100000, 500);

      expect(result.monthsToBreakEven).toBe(0.5);
    });

    it('should handle low monthly sales', () => {
      // Need 250 units, selling 10/month = 25 months
      const result = calculateBEP(10000000, 60000, 100000, 10);

      expect(result.monthsToBreakEven).toBe(25);
    });
  });

  describe('Edge Cases', () => {
    it('should handle zero fixed costs', () => {
      const result = calculateBEP(0, 60000, 100000, 100);

      expect(result.breakEvenUnits).toBe(0);
      expect(result.breakEvenRevenue).toBe(0);
    });

    it('should handle zero selling price', () => {
      const result = calculateBEP(10000000, 0, 0, 100);

      expect(result.contributionMargin).toBe(0);
      expect(result.breakEvenUnits).toBe(0); // Can't break even with zero price
    });

    it('should handle zero monthly sales', () => {
      const result = calculateBEP(10000000, 60000, 100000, 0);

      expect(result.monthsToBreakEven).toBe(0); // Division by zero protection
    });

    it('should handle variable cost equal to selling price', () => {
      const result = calculateBEP(10000000, 100000, 100000, 100);

      expect(result.contributionMargin).toBe(0);
      expect(result.breakEvenUnits).toBe(0); // Can't break even
    });

    it('should handle negative contribution margin', () => {
      // Variable cost > selling price
      const result = calculateBEP(10000000, 150000, 100000, 100);

      expect(result.contributionMargin).toBe(-50000);
      expect(result.breakEvenUnits).toBe(0); // No break even possible
    });

    it('should calculate realistic business scenario', () => {
      // Coffee shop: Rent 5M, cost 15k per cup, sell 40k per cup, 50 cups/day
      const result = calculateBEP(5000000, 15000, 40000, 1500); // 50 cups × 30 days

      expect(result.contributionMargin).toBe(25000);
      expect(result.breakEvenUnits).toBe(200); // 200 cups
      expect(result.monthsToBreakEven).toBeCloseTo(0.13, 2); // ~4 days
    });
  });
});
