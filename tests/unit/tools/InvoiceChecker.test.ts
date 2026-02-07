import { describe, expect, it } from 'vitest';

type ValidationItem = {
  check: string;
  status: 'passed' | 'failed' | 'warning';
  message: string;
};

type ValidationResult = {
  score: number;
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  warningChecks: number;
  items: ValidationItem[];
};

function validateInvoice(
  invoiceNumber: string,
  invoiceDate: string,
  dueDate: string,
  vendorName: string,
  vendorTax: string,
  amount: number,
  taxAmount: number,
): ValidationResult {
  const items: ValidationItem[] = [];

  // Check 1: Invoice Number
  const invoiceNumberValid = invoiceNumber.length >= 5;
  items.push({
    check: 'invoice_number',
    status: invoiceNumberValid ? 'passed' : 'failed',
    message: invoiceNumberValid ? 'Valid format' : 'Number too short (min 5 chars)',
  });

  // Check 2: Invoice Date
  const invoiceDateValid = !!invoiceDate;
  items.push({
    check: 'invoice_date',
    status: invoiceDateValid ? 'passed' : 'failed',
    message: invoiceDateValid ? 'Valid date' : 'Date required',
  });

  // Check 3: Due Date
  const dueDateValid = !!dueDate;
  const dueDateAfterInvoice = new Date(dueDate) >= new Date(invoiceDate);
  items.push({
    check: 'due_date',
    status: dueDateValid && dueDateAfterInvoice ? 'passed' : 'failed',
    message: dueDateAfterInvoice ? 'Valid due date' : 'Due date must be after invoice date',
  });

  // Check 4: Vendor Name
  const vendorNameValid = vendorName.length >= 3;
  items.push({
    check: 'vendor_name',
    status: vendorNameValid ? 'passed' : 'failed',
    message: vendorNameValid ? 'Vendor name valid' : 'Vendor name too short',
  });

  // Check 5: Vendor Tax (NPWP)
  const npwpClean = vendorTax.replace(/\D/g, '');
  const npwpValid = npwpClean.length === 15;
  items.push({
    check: 'vendor_tax',
    status: vendorTax ? (npwpValid ? 'passed' : 'failed') : 'warning',
    message: vendorTax
      ? npwpValid
        ? 'Valid NPWP format'
        : 'NPWP must be 15 digits'
      : 'NPWP recommended for PKP vendors',
  });

  // Check 6: Amount
  const amountValid = amount > 0;
  items.push({
    check: 'amount',
    status: amountValid ? 'passed' : 'failed',
    message: amountValid ? 'Amount valid' : 'Amount must be greater than 0',
  });

  // Check 7: Tax Amount (11% of amount with 1% tolerance)
  const expectedTax = amount * 0.11;
  const taxDifference = Math.abs(taxAmount - expectedTax);
  const taxValid = taxDifference <= expectedTax * 0.01;
  items.push({
    check: 'tax_amount',
    status: taxAmount > 0 ? (taxValid ? 'passed' : 'failed') : 'warning',
    message:
      taxAmount > 0
        ? taxValid
          ? 'VAT calculation correct'
          : `VAT may be incorrect. Expected: Rp ${expectedTax.toLocaleString()}`
        : 'VAT not filled (if PKP, VAT required)',
  });

  const passedChecks = items.filter(i => i.status === 'passed').length;
  const failedChecks = items.filter(i => i.status === 'failed').length;
  const warningChecks = items.filter(i => i.status === 'warning').length;
  const totalChecks = items.length;
  const score = Math.round((passedChecks / totalChecks) * 100);

  return {
    score,
    totalChecks,
    passedChecks,
    failedChecks,
    warningChecks,
    items,
  };
}

describe('Invoice Checker', () => {
  describe('Invoice Number Validation', () => {
    it('should pass with valid invoice number (5+ chars)', () => {
      const result = validateInvoice(
        'INV-001',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '123456789012345',
        1000000,
        110000,
      );
      const invoiceCheck = result.items.find(i => i.check === 'invoice_number');

      expect(invoiceCheck?.status).toBe('passed');
    });

    it('should fail with short invoice number', () => {
      const result = validateInvoice(
        'INV',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '123456789012345',
        1000000,
        110000,
      );
      const invoiceCheck = result.items.find(i => i.check === 'invoice_number');

      expect(invoiceCheck?.status).toBe('failed');
    });
  });

  describe('Date Validation', () => {
    it('should pass with valid dates', () => {
      const result = validateInvoice(
        'INV-001',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '123456789012345',
        1000000,
        110000,
      );
      const dateCheck = result.items.find(i => i.check === 'invoice_date');
      const dueCheck = result.items.find(i => i.check === 'due_date');

      expect(dateCheck?.status).toBe('passed');
      expect(dueCheck?.status).toBe('passed');
    });

    it('should fail when due date is before invoice date', () => {
      const result = validateInvoice(
        'INV-001',
        '2024-01-15',
        '2024-01-01',
        'PT Test',
        '123456789012345',
        1000000,
        110000,
      );
      const dueCheck = result.items.find(i => i.check === 'due_date');

      expect(dueCheck?.status).toBe('failed');
    });
  });

  describe('NPWP Validation', () => {
    it('should pass with valid 15-digit NPWP', () => {
      const result = validateInvoice(
        'INV-001',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '123456789012345',
        1000000,
        110000,
      );
      const npwpCheck = result.items.find(i => i.check === 'vendor_tax');

      expect(npwpCheck?.status).toBe('passed');
    });

    it('should fail with invalid NPWP (not 15 digits)', () => {
      const result = validateInvoice(
        'INV-001',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '12345',
        1000000,
        110000,
      );
      const npwpCheck = result.items.find(i => i.check === 'vendor_tax');

      expect(npwpCheck?.status).toBe('failed');
    });

    it('should warn when NPWP is empty', () => {
      const result = validateInvoice(
        'INV-001',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '',
        1000000,
        110000,
      );
      const npwpCheck = result.items.find(i => i.check === 'vendor_tax');

      expect(npwpCheck?.status).toBe('warning');
    });
  });

  describe('VAT Validation', () => {
    it('should pass with correct 11% VAT', () => {
      const result = validateInvoice(
        'INV-001',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '123456789012345',
        1000000,
        110000,
      );
      const taxCheck = result.items.find(i => i.check === 'tax_amount');

      expect(taxCheck?.status).toBe('passed');
    });

    it('should fail with incorrect VAT', () => {
      const result = validateInvoice(
        'INV-001',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '123456789012345',
        1000000,
        50000,
      );
      const taxCheck = result.items.find(i => i.check === 'tax_amount');

      expect(taxCheck?.status).toBe('failed');
    });

    it('should warn when VAT is zero', () => {
      const result = validateInvoice(
        'INV-001',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '123456789012345',
        1000000,
        0,
      );
      const taxCheck = result.items.find(i => i.check === 'tax_amount');

      expect(taxCheck?.status).toBe('warning');
    });

    it('should allow 1% tolerance for VAT', () => {
      // 11% of 1M = 110k, allow 1% tolerance = 108.9k to 111.1k
      const result = validateInvoice(
        'INV-001',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '123456789012345',
        1000000,
        110500,
      );
      const taxCheck = result.items.find(i => i.check === 'tax_amount');

      expect(taxCheck?.status).toBe('passed');
    });
  });

  describe('Score Calculation', () => {
    it('should calculate 100% score for perfect invoice', () => {
      const result = validateInvoice(
        'INV-001',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '123456789012345',
        1000000,
        110000,
      );

      expect(result.score).toBe(100);
      expect(result.passedChecks).toBe(result.totalChecks);
      expect(result.failedChecks).toBe(0);
    });

    it('should calculate lower score for invalid invoice', () => {
      const result = validateInvoice('INV', '2024-01-01', '2024-01-15', 'PT Test', '12345', 0, 0);

      expect(result.score).toBeLessThan(100);
      expect(result.failedChecks).toBeGreaterThan(0);
    });

    it('should count warnings separately', () => {
      const result = validateInvoice(
        'INV-001',
        '2024-01-01',
        '2024-01-15',
        'PT Test',
        '',
        1000000,
        0,
      );

      expect(result.warningChecks).toBeGreaterThan(0);
    });
  });
});
