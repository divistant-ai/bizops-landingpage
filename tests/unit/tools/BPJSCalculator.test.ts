import { describe, expect, it } from 'vitest';

type BPJSResult = {
  salary: number;
  kesehatan: {
    employeeContribution: number;
    employerContribution: number;
    total: number;
  };
  ketenagakerjaan: {
    jht: { employee: number; employer: number; total: number };
    jp: { employee: number; employer: number; total: number };
    jkk: number;
    jkm: number;
    total: number;
  };
  totalEmployee: number;
  totalEmployer: number;
  grandTotal: number;
};

function calculateBPJS(salary: number, jkkRate: number): BPJSResult {
  const baseSalary = salary;

  // BPJS Kesehatan: max Rp 12,000,000
  const kesehatanBase = Math.min(baseSalary, 12000000);
  const kesehatanEmployee = kesehatanBase * 0.01;
  const kesehatanEmployer = kesehatanBase * 0.04;
  const kesehatanTotal = kesehatanEmployee + kesehatanEmployer;

  // JHT (Jaminan Hari Tua): max Rp 9,559,600
  const jhtBase = Math.min(baseSalary, 9559600);
  const jhtEmployee = jhtBase * 0.02;
  const jhtEmployer = jhtBase * 0.037;
  const jhtTotal = jhtEmployee + jhtEmployer;

  // JP (Jaminan Pensiun): max Rp 9,559,600
  const jpBase = Math.min(baseSalary, 9559600);
  const jpEmployee = jpBase * 0.01;
  const jpEmployer = jpBase * 0.02;
  const jpTotal = jpEmployee + jpEmployer;

  // JKK (Jaminan Kecelakaan Kerja): based on risk rate
  const jkk = baseSalary * (jkkRate / 100);

  // JKM (Jaminan Kematian): fixed 0.3%
  const jkm = baseSalary * 0.003;

  const ketenagakerjaanTotal = jhtTotal + jpTotal + jkk + jkm;
  const totalEmployee = kesehatanEmployee + jhtEmployee + jpEmployee;
  const totalEmployer = kesehatanEmployer + jhtEmployer + jpEmployer + jkk + jkm;
  const grandTotal = totalEmployee + totalEmployer;

  return {
    salary: baseSalary,
    kesehatan: {
      employeeContribution: kesehatanEmployee,
      employerContribution: kesehatanEmployer,
      total: kesehatanTotal,
    },
    ketenagakerjaan: {
      jht: { employee: jhtEmployee, employer: jhtEmployer, total: jhtTotal },
      jp: { employee: jpEmployee, employer: jpEmployer, total: jpTotal },
      jkk,
      jkm,
      total: ketenagakerjaanTotal,
    },
    totalEmployee,
    totalEmployer,
    grandTotal,
  };
}

describe('BPJS Calculator', () => {
  describe('BPJS Kesehatan', () => {
    it('should calculate 1% employee contribution for salary below cap', () => {
      const result = calculateBPJS(10000000, 0.24);

      expect(result.kesehatan.employeeContribution).toBe(100000); // 1% of 10M
    });

    it('should cap kesehatan at Rp 12,000,000', () => {
      const result = calculateBPJS(20000000, 0.24);

      expect(result.kesehatan.employeeContribution).toBe(120000); // 1% of 12M cap
    });

    it('should calculate 4% employer contribution', () => {
      const result = calculateBPJS(10000000, 0.24);

      expect(result.kesehatan.employerContribution).toBe(400000); // 4% of 10M
    });
  });

  describe('JHT (Jaminan Hari Tua)', () => {
    it('should calculate 2% employee + 3.7% employer contribution', () => {
      const result = calculateBPJS(10000000, 0.24);

      expect(result.ketenagakerjaan.jht.employee).toBe(191192); // 2% of 9,559,600 cap
      expect(result.ketenagakerjaan.jht.employer).toBe(353705.2); // 3.7% of cap
    });

    it('should cap JHT at Rp 9,559,600', () => {
      const result = calculateBPJS(20000000, 0.24);
      const jhtBase = 9559600;

      expect(result.ketenagakerjaan.jht.employee).toBe(jhtBase * 0.02);
    });
  });

  describe('JP (Jaminan Pensiun)', () => {
    it('should calculate 1% employee + 2% employer contribution', () => {
      const result = calculateBPJS(10000000, 0.24);

      expect(result.ketenagakerjaan.jp.employee).toBe(95596); // 1% of cap
      expect(result.ketenagakerjaan.jp.employer).toBe(191192); // 2% of cap
    });
  });

  describe('JKK (Jaminan Kecelakaan Kerja)', () => {
    it('should calculate JKK based on risk rate', () => {
      const resultVeryLow = calculateBPJS(10000000, 0.24);
      const resultVeryHigh = calculateBPJS(10000000, 1.74);

      expect(resultVeryLow.ketenagakerjaan.jkk).toBe(24000); // 0.24% of 10M
      expect(resultVeryHigh.ketenagakerjaan.jkk).toBe(174000); // 1.74% of 10M
    });

    it('should have no cap for JKK', () => {
      const result = calculateBPJS(50000000, 0.24);

      expect(result.ketenagakerjaan.jkk).toBe(120000); // 0.24% of 50M
    });
  });

  describe('JKM (Jaminan Kematian)', () => {
    it('should calculate fixed 0.3% of salary', () => {
      const result = calculateBPJS(10000000, 0.24);

      expect(result.ketenagakerjaan.jkm).toBe(30000); // 0.3% of 10M
    });
  });

  describe('Total Calculations', () => {
    it('should calculate correct total employee contribution', () => {
      const result = calculateBPJS(10000000, 0.24);
      const expectedTotal
        = result.kesehatan.employeeContribution
        + result.ketenagakerjaan.jht.employee
        + result.ketenagakerjaan.jp.employee;

      expect(result.totalEmployee).toBeCloseTo(expectedTotal, 2);
    });

    it('should calculate correct total employer contribution', () => {
      const result = calculateBPJS(10000000, 0.24);
      const expectedTotal
        = result.kesehatan.employerContribution
        + result.ketenagakerjaan.jht.employer
        + result.ketenagakerjaan.jp.employer
        + result.ketenagakerjaan.jkk
        + result.ketenagakerjaan.jkm;

      expect(result.totalEmployer).toBeCloseTo(expectedTotal, 2);
    });

    it('should calculate grand total as sum of employee and employer', () => {
      const result = calculateBPJS(10000000, 0.24);

      expect(result.grandTotal).toBeCloseTo(result.totalEmployee + result.totalEmployer, 2);
    });
  });

  describe('Edge Cases', () => {
    it('should handle zero salary', () => {
      const result = calculateBPJS(0, 0.24);

      expect(result.totalEmployee).toBe(0);
      expect(result.totalEmployer).toBe(0);
    });

    it('should handle very high salary with caps', () => {
      const result = calculateBPJS(100000000, 1.74);

      // Kesehatan capped at 12M
      expect(result.kesehatan.employeeContribution).toBe(120000);
      // JHT and JP capped at 9,559,600
      expect(result.ketenagakerjaan.jht.employee).toBe(9559600 * 0.02);
    });
  });
});
