import { describe, expect, it } from 'vitest';

// PPh 21 Tax Calculator Constants and Logic
const PTKP_RATES = {
  TK0: 54000000,
  TK1: 58500000,
  TK2: 63000000,
  TK3: 67500000,
  K0: 58500000,
  K1: 63000000,
  K2: 67500000,
  K3: 72000000,
};

const TAX_BRACKETS = [
  { limit: 60000000, rate: 0.05 },
  { limit: 250000000, rate: 0.15 },
  { limit: 500000000, rate: 0.25 },
  { limit: 5000000000, rate: 0.3 },
  { limit: Infinity, rate: 0.35 },
];

type TaxResult = {
  grossSalary: number;
  ptkp: number;
  taxableIncome: number;
  annualTax: number;
  monthlyTax: number;
  netSalary: number;
  effectiveRate: number;
  breakdown: {
    bracket: number;
    rate: number;
    amount: number;
  }[];
};

function calculateTax(grossSalary: number, maritalStatus: string, dependents: number): TaxResult {
  const monthly = grossSalary;
  const annual = monthly * 12;

  const ptkpKey = `${maritalStatus.charAt(0)}${dependents}` as keyof typeof PTKP_RATES;
  const ptkp = PTKP_RATES[ptkpKey] || PTKP_RATES.TK0;

  const taxableIncome = Math.max(0, annual - ptkp);

  let remainingIncome = taxableIncome;
  let totalTax = 0;
  const breakdown: TaxResult['breakdown'] = [];

  for (const bracket of TAX_BRACKETS) {
    if (remainingIncome <= 0) {
      break;
    }

    const taxableInBracket = Math.min(remainingIncome, bracket.limit);
    const taxForBracket = taxableInBracket * bracket.rate;

    breakdown.push({
      bracket: taxableInBracket,
      rate: bracket.rate * 100,
      amount: taxForBracket,
    });

    totalTax += taxForBracket;
    remainingIncome -= taxableInBracket;
  }

  const monthlyTax = totalTax / 12;
  const netSalary = monthly - monthlyTax;
  const effectiveRate = annual > 0 ? (totalTax / annual) * 100 : 0;

  return {
    grossSalary: monthly,
    ptkp,
    taxableIncome,
    annualTax: totalTax,
    monthlyTax,
    netSalary,
    effectiveRate,
    breakdown,
  };
}

describe('Pajak PPh 21 Calculator', () => {
  describe('PTKP Calculation', () => {
    it('should calculate correct PTKP for TK0 (single, no dependents)', () => {
      const result = calculateTax(10000000, 'TK', 0);

      expect(result.ptkp).toBe(54000000);
    });

    it('should calculate correct PTKP for K0 (married, no dependents)', () => {
      const result = calculateTax(10000000, 'K', 0);

      expect(result.ptkp).toBe(58500000);
    });

    it('should calculate correct PTKP for TK3 (single, 3 dependents)', () => {
      const result = calculateTax(10000000, 'TK', 3);

      expect(result.ptkp).toBe(67500000);
    });

    it('should calculate correct PTKP for K3 (married, 3 dependents)', () => {
      const result = calculateTax(10000000, 'K', 3);

      expect(result.ptkp).toBe(72000000);
    });
  });

  describe('Tax Bracket Calculations', () => {
    it('should apply 5% rate for first bracket (up to 60M annual)', () => {
      const result = calculateTax(5000000, 'TK', 0); // 60M annual

      expect(result.annualTax).toBeGreaterThan(0);
      expect(result.breakdown.length).toBeGreaterThan(0);
      expect(result.breakdown[0]?.rate).toBe(5);
    });

    it('should calculate zero tax when income is below PTKP', () => {
      const result = calculateTax(3000000, 'TK', 0); // 36M annual < 54M PTKP

      expect(result.taxableIncome).toBe(0);
      expect(result.annualTax).toBe(0);
      expect(result.monthlyTax).toBe(0);
    });

    it('should calculate progressive tax for high income', () => {
      const result = calculateTax(50000000, 'TK', 0); // 600M annual

      expect(result.annualTax).toBeGreaterThan(0);
      expect(result.breakdown.length).toBeGreaterThan(1);
    });
  });

  describe('Net Salary Calculation', () => {
    it('should calculate correct net salary', () => {
      const result = calculateTax(10000000, 'TK', 0);

      expect(result.netSalary).toBe(result.grossSalary - result.monthlyTax);
    });

    it('should have effective rate less than 35%', () => {
      const result = calculateTax(100000000, 'TK', 0);

      expect(result.effectiveRate).toBeLessThan(35);
    });
  });

  describe('Edge Cases', () => {
    it('should handle zero salary', () => {
      const result = calculateTax(0, 'TK', 0);

      expect(result.annualTax).toBe(0);
      expect(result.netSalary).toBe(0);
    });

    it('should handle very high salary', () => {
      const result = calculateTax(100000000, 'K', 3); // 1.2B annual

      expect(result.annualTax).toBeGreaterThan(0);
      expect(result.breakdown.length).toBe(5);
    });
  });
});
