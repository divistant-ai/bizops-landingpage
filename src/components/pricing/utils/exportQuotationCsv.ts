import type { Calculations, ContactInfo } from '../types';
import type { PricingPlan, ServiceAddon } from '@/data/pricingData';

function escapeCsv(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export type QuotationCsvPayload = {
  contactInfo: ContactInfo;
  quotationId: string;
  selectedPlanData: PricingPlan | undefined;
  billingCycle: 'monthly' | 'yearly';
  selectedAddOns: { [key: string]: number };
  addOns: ServiceAddon[];
  calculations: Calculations;
  appliedDiscount: { code: string; percent: number } | null;
};

export function exportQuotationCsv(payload: QuotationCsvPayload): void {
  const {
    contactInfo,
    quotationId,
    selectedPlanData,
    billingCycle,
    selectedAddOns,
    addOns,
    calculations,
    appliedDiscount,
  } = payload;

  const date = new Date().toLocaleDateString('id-ID');
  const addonsList = Object.entries(selectedAddOns)
    .map(([id, qty]) => {
      const a = addOns.find(x => x.id === id);
      return a ? `${a.name} (${qty}x)` : '';
    })
    .filter(Boolean)
    .join('; ');

  const row = [
    contactInfo.company,
    `${contactInfo.firstName} ${contactInfo.lastName}`.trim(),
    contactInfo.email,
    contactInfo.phone,
    contactInfo.role,
    selectedPlanData?.name ?? '',
    billingCycle === 'yearly' ? 'Tahunan' : 'Bulanan',
    addonsList,
    calculations.subtotal,
    appliedDiscount ? `${appliedDiscount.code} ${appliedDiscount.percent}%` : '',
    calculations.totalFirstPayment,
    quotationId,
    date,
  ].map(String).map(escapeCsv);

  const header = [
    'Company',
    'Contact',
    'Email',
    'Phone',
    'Role',
    'Plan',
    'Billing',
    'Add-ons',
    'Subtotal',
    'Discount',
    'Total',
    'Quotation ID',
    'Date',
  ].map(escapeCsv);

  const csv = `\uFEFF${[header.join(','), row.join(',')].join('\r\n')}`;
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `penawaran-${quotationId}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
