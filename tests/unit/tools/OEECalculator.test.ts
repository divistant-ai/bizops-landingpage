import { describe, expect, it } from 'vitest';

type OEEResult = {
  availability: number;
  performance: number;
  quality: number;
  oee: number;
  classification: string;
};

function calculateOEE(
  plannedProductionTime: number,
  downtime: number,
  idealCycleTime: number,
  totalUnits: number,
  goodUnits: number,
): OEEResult {
  // Availability = Run Time / Planned Production Time
  const runTime = plannedProductionTime - downtime;
  const availability = (runTime / plannedProductionTime) * 100;

  // Performance = (Total Units / Ideal Production) * 100
  const idealProduction = runTime / idealCycleTime;
  const performance = (totalUnits / idealProduction) * 100;

  // Quality = Good Units / Total Units
  const quality = (goodUnits / totalUnits) * 100;

  // OEE = Availability × Performance × Quality
  const oee = (availability * performance * quality) / 10000;

  // Classification
  let classification: string;
  if (oee >= 85) {
    classification = 'World Class';
  } else if (oee >= 60) {
    classification = 'Good';
  } else if (oee >= 40) {
    classification = 'Fair';
  } else {
    classification = 'Poor';
  }

  return {
    availability,
    performance,
    quality,
    oee,
    classification,
  };
}

describe('OEE (Overall Equipment Effectiveness) Calculator', () => {
  describe('Availability Calculation', () => {
    it('should calculate 100% availability with no downtime', () => {
      const result = calculateOEE(480, 0, 1, 400, 400);

      expect(result.availability).toBe(100);
    });

    it('should calculate 50% availability with 50% downtime', () => {
      const result = calculateOEE(480, 240, 1, 200, 200);

      expect(result.availability).toBe(50);
    });

    it('should calculate availability with partial downtime', () => {
      const result = calculateOEE(480, 60, 1, 350, 350);

      expect(result.availability).toBeCloseTo(87.5, 2);
    });
  });

  describe('Performance Calculation', () => {
    it('should calculate 100% performance at ideal speed', () => {
      const result = calculateOEE(480, 0, 1, 480, 480);

      expect(result.performance).toBe(100);
    });

    it('should calculate 50% performance at half speed', () => {
      const result = calculateOEE(480, 0, 1, 240, 240);

      expect(result.performance).toBe(50);
    });

    it('should calculate performance with downtime considered', () => {
      // 420 min runtime, 1 min cycle = 420 ideal units, produced 400 = ~95.2%
      const result = calculateOEE(480, 60, 1, 400, 400);

      expect(result.performance).toBeCloseTo(95.24, 2);
    });
  });

  describe('Quality Calculation', () => {
    it('should calculate 100% quality with no defects', () => {
      const result = calculateOEE(480, 0, 1, 400, 400);

      expect(result.quality).toBe(100);
    });

    it('should calculate 90% quality with 10% defects', () => {
      const result = calculateOEE(480, 0, 1, 400, 360);

      expect(result.quality).toBe(90);
    });

    it('should calculate 50% quality with 50% defects', () => {
      const result = calculateOEE(480, 0, 1, 400, 200);

      expect(result.quality).toBe(50);
    });
  });

  describe('OEE Calculation', () => {
    it('should calculate perfect OEE (100%)', () => {
      const result = calculateOEE(480, 0, 1, 480, 480);

      expect(result.oee).toBe(100);
      expect(result.classification).toBe('World Class');
    });

    it('should calculate OEE formula correctly: A × P × Q', () => {
      // 90% availability, 90% performance, 90% quality
      // OEE = 0.9 × 0.9 × 0.9 = 0.729 = 72.9%
      const result = calculateOEE(480, 48, 1.111, 400, 400);

      expect(result.oee).toBeCloseTo(72.9, 1);
    });
  });

  describe('Classification', () => {
    it('should classify >= 85% as World Class', () => {
      const result = calculateOEE(480, 0, 1, 430, 430);

      expect(result.oee).toBeGreaterThanOrEqual(85);
      expect(result.classification).toBe('World Class');
    });

    it('should classify 60-84% as Good', () => {
      const result = calculateOEE(480, 100, 1.5, 300, 290);

      expect(result.oee).toBeGreaterThanOrEqual(60);
      expect(result.oee).toBeLessThan(85);
      expect(result.classification).toBe('Good');
    });

    it('should classify 40-59% as Fair', () => {
      const result = calculateOEE(480, 200, 2, 150, 140);

      expect(result.oee).toBeGreaterThanOrEqual(40);
      expect(result.oee).toBeLessThan(60);
      expect(result.classification).toBe('Fair');
    });

    it('should classify < 40% as Poor', () => {
      const result = calculateOEE(480, 300, 3, 80, 70);

      expect(result.oee).toBeLessThan(40);
      expect(result.classification).toBe('Poor');
    });
  });

  describe('Edge Cases', () => {
    it('should handle zero planned time', () => {
      const result = calculateOEE(0, 0, 1, 0, 0);

      expect(result.availability).toBeNaN(); // Division by zero
    });

    it('should handle zero units produced', () => {
      const result = calculateOEE(480, 0, 1, 0, 0);

      expect(result.quality).toBeNaN(); // Division by zero
    });

    it('should handle realistic production scenario', () => {
      // 8-hour shift, 1-hour downtime, 2-min cycle, 200 units, 190 good
      const result = calculateOEE(480, 60, 2, 200, 190);

      expect(result.availability).toBe(87.5);
      expect(result.quality).toBe(95);
      expect(result.oee).toBeGreaterThan(0);
    });
  });
});
