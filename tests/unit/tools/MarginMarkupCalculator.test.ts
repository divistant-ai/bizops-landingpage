import { describe, expect, it } from 'vitest';

type MarginResult = {
  cost: number;
  sellingPrice: number;
  profit: number;
  margin: number;
  markup: number;
};

// Calculate from target margin
function calculateFromMargin(cost: number, targetMargin: number): MarginResult {
  const sellingPrice = cost / (1 - targetMargin / 100);
  const profit = sellingPrice - cost;
  const margin = targetMargin;
  const markup = (profit / cost) * 100;

  return {
    cost,
    sellingPrice,
    profit,
    margin,
    markup,
  };
}

// Calculate from target markup
function calculateFromMarkup(cost: number, targetMarkup: number): MarginResult {
  const profit = cost * (targetMarkup / 100);
  const sellingPrice = cost + profit;
  const margin = (profit / sellingPrice) * 100;
  const markup = targetMarkup;

  return {
    cost,
    sellingPrice,
    profit,
    margin,
    markup,
  };
}

// Calculate from selling price
function calculateFromSellingPrice(cost: number, sellingPrice: number): MarginResult {
  const profit = sellingPrice - cost;
  const margin = (profit / sellingPrice) * 100;
  const markup = (profit / cost) * 100;

  return {
    cost,
    sellingPrice,
    profit,
    margin,
    markup,
  };
}

describe('Margin & Markup Calculator', () => {
  describe('From Margin Mode', () => {
    it('should calculate selling price from 20% margin', () => {
      const result = calculateFromMargin(100000, 20);

      expect(result.sellingPrice).toBe(125000); // 100k / 0.8
      expect(result.profit).toBe(25000);
      expect(result.margin).toBe(20);
    });

    it('should calculate 25% markup from 20% margin', () => {
      const result = calculateFromMargin(100000, 20);

      expect(result.markup).toBe(25);
    });

    it('should handle 50% margin', () => {
      const result = calculateFromMargin(100000, 50);

      expect(result.sellingPrice).toBe(200000);
      expect(result.profit).toBe(100000);
    });
  });

  describe('From Markup Mode', () => {
    it('should calculate selling price from 25% markup', () => {
      const result = calculateFromMarkup(100000, 25);

      expect(result.sellingPrice).toBe(125000);
      expect(result.profit).toBe(25000);
    });

    it('should calculate margin from 25% markup', () => {
      const result = calculateFromMarkup(100000, 25);

      expect(result.margin).toBe(20); // 25k/125k = 20%
    });

    it('should handle 100% markup', () => {
      const result = calculateFromMarkup(100000, 100);

      expect(result.sellingPrice).toBe(200000);
      expect(result.margin).toBe(50);
    });
  });

  describe('From Selling Price Mode', () => {
    it('should calculate margin and markup from given selling price', () => {
      const result = calculateFromSellingPrice(100000, 125000);

      expect(result.profit).toBe(25000);
      expect(result.margin).toBe(20);
      expect(result.markup).toBe(25);
    });

    it('should calculate 50% margin when selling price is double cost', () => {
      const result = calculateFromSellingPrice(100000, 200000);

      expect(result.margin).toBe(50);
      expect(result.markup).toBe(100);
    });
  });

  describe('Edge Cases', () => {
    it('should handle zero cost', () => {
      const result = calculateFromMargin(0, 20);

      expect(result.sellingPrice).toBe(0);
      expect(result.profit).toBe(0);
    });

    it('should handle very small margin (1%)', () => {
      const result = calculateFromMargin(100000, 1);

      expect(result.margin).toBe(1);
      expect(result.markup).toBeCloseTo(1.01, 2);
    });

    it('should maintain relationship: margin < markup for positive values', () => {
      const result = calculateFromMargin(100000, 30);

      expect(result.markup).toBeGreaterThan(result.margin);
    });
  });
});
