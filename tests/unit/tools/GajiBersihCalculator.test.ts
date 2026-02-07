import { describe, expect, it } from 'vitest';

type SalaryResult = {
  grossSalary: number;
  pph21: number;
  bpjsKesehatan: number;
  bpjsKetenagakerjaan: number;
  otherDeductions: number;
  totalDeductions: number;
  netSalary: number;
  takeHomePercentage: number;
};

function calculateNetSalary(
  grossSalary: number,
  includeBPJS: boolean,
  otherDeductions: number = 0,
): SalaryResult {
  // PPh 21: 5% if gross > 5M, else 0
  const pph21 = grossSalary > 5000000 ? grossSalary * 0.05 : 0;

  // BPJS Kesehatan: 1%
  const bpjsKesehatan = includeBPJS ? grossSalary * 0.01 : 0;

  // BPJS Ketenagakerjaan: 2% (JHT + JP)
  const bpjsKetenagakerjaan = includeBPJS ? grossSalary * 0.02 : 0;

  const totalDeductions = pph21 + bpjsKesehatan + bpjsKetenagakerjaan + otherDeductions;
  const netSalary = grossSalary - totalDeductions;
  const takeHomePercentage = grossSalary > 0 ? (netSalary / grossSalary) * 100 : 0;

  return {
    grossSalary,
    pph21,
    bpjsKesehatan,
    bpjsKetenagakerjaan,
    otherDeductions,
    totalDeductions,
    netSalary,
    takeHomePercentage,
  };
}

describe('Gaji Bersih (Net Salary) Calculator', () => {
  describe('PPh 21 Calculation', () => {
    it('should apply 5% tax when salary > 5,000,000', () => {
      const result = calculateNetSalary(10000000, false);

      expect(result.pph21).toBe(500000); // 5% of 10M
    });

    it('should apply zero tax when salary <= 5,000,000', () => {
      const result = calculateNetSalary(5000000, false);

      expect(result.pph21).toBe(0);
    });

    it('should apply zero tax for low salary', () => {
      const result = calculateNetSalary(3000000, false);

      expect(result.pph21).toBe(0);
    });
  });

  describe('BPJS Deductions', () => {
    it('should calculate BPJS Kesehatan at 1%', () => {
      const result = calculateNetSalary(10000000, true);

      expect(result.bpjsKesehatan).toBe(100000); // 1% of 10M
    });

    it('should calculate BPJS Ketenagakerjaan at 2%', () => {
      const result = calculateNetSalary(10000000, true);

      expect(result.bpjsKetenagakerjaan).toBe(200000); // 2% of 10M
    });

    it('should not include BPJS when disabled', () => {
      const result = calculateNetSalary(10000000, false);

      expect(result.bpjsKesehatan).toBe(0);
      expect(result.bpjsKetenagakerjaan).toBe(0);
    });
  });

  describe('Total Deductions', () => {
    it('should calculate correct total with all deductions', () => {
      const result = calculateNetSalary(10000000, true, 500000);
      const expectedTotal = 500000 + 100000 + 200000 + 500000; // PPh + Kesehatan + Ketenagakerjaan + Other

      expect(result.totalDeductions).toBe(expectedTotal);
    });

    it('should calculate net salary correctly', () => {
      const result = calculateNetSalary(10000000, true);

      expect(result.netSalary).toBe(result.grossSalary - result.totalDeductions);
    });
  });

  describe('Take Home Percentage', () => {
    it('should calculate take home percentage correctly', () => {
      const result = calculateNetSalary(10000000, true);
      const expectedPercentage = (result.netSalary / 10000000) * 100;

      expect(result.takeHomePercentage).toBeCloseTo(expectedPercentage, 2);
    });

    it('should be 100% when no deductions', () => {
      const result = calculateNetSalary(3000000, false, 0);

      expect(result.takeHomePercentage).toBe(100);
    });
  });

  describe('Edge Cases', () => {
    it('should handle zero salary', () => {
      const result = calculateNetSalary(0, true);

      expect(result.netSalary).toBe(0);
      expect(result.totalDeductions).toBe(0);
    });

    it('should handle high salary', () => {
      const result = calculateNetSalary(50000000, true, 1000000);

      expect(result.pph21).toBe(2500000); // 5% of 50M
      expect(result.bpjsKesehatan).toBe(500000); // 1% of 50M
      expect(result.bpjsKetenagakerjaan).toBe(1000000); // 2% of 50M
    });
  });
});
