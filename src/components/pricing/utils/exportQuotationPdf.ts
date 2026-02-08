import type { Calculations, ContactInfo } from '../types';
import type { PricingPlan, ServiceAddon } from '@/data/pricingData';

function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export type QuotationPdfPayload = {
  contactInfo: ContactInfo;
  quotationId: string;
  selectedPlanData: PricingPlan | undefined;
  billingCycle: 'monthly' | 'yearly';
  selectedAddOns: { [key: string]: number };
  addOns: ServiceAddon[];
  calculations: Calculations;
  appliedDiscount: { code: string; percent: number } | null;
};

export async function exportQuotationPdf(payload: QuotationPdfPayload): Promise<void> {
  const [jsPDFModule, autoTableModule] = await Promise.all([
    import('jspdf'),
    import('jspdf-autotable'),
  ]);
  const { default: JsPDF } = jsPDFModule;
  const doc = new JsPDF();
  const autoTable = autoTableModule.default;

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

  let y = 20;

  doc.setFontSize(22);
  doc.text('QUOTATION', 14, y);
  y += 8;
  doc.setFontSize(10);
  doc.text(`Reference: #${quotationId}`, 14, y);
  y += 6;

  doc.text('BizOps - PT Divistant Teknologi Indonesia', 14, y);
  doc.text('Eco-S Sahid Sudirman Residence, Jl. Jenderal Sudirman No.86, Jakarta 10250', 14, y + 5);
  y += 18;

  const issueDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const validUntil = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  doc.setFontSize(9);
  doc.text('Quotation For', 14, y);
  doc.text(contactInfo.company, 14, y + 5);
  doc.text(`Attn: ${contactInfo.firstName} ${contactInfo.lastName}`, 14, y + 10);
  doc.text(contactInfo.email, 14, y + 15);
  doc.text(contactInfo.phone, 14, y + 20);

  doc.text('Issue Date', 120, y);
  doc.text(issueDate, 120, y + 5);
  doc.text('Valid Until', 120, y + 12);
  doc.text(validUntil, 120, y + 17);
  y += 35;

  const tableData: string[][] = [];
  if (selectedPlanData) {
    const baseDisplay = calculations.basePrice > 0
      ? formatIDR(billingCycle === 'yearly' ? calculations.basePrice * 12 : calculations.basePrice)
      : 'Custom';
    tableData.push([
      `${selectedPlanData.name} Package (${billingCycle === 'yearly' ? 'Yearly' : 'Monthly'})`,
      baseDisplay,
    ]);
  }
  Object.entries(selectedAddOns).forEach(([id, qty]) => {
    const item = addOns.find(a => a.id === id);
    if (!item || qty === 0) {
      return;
    }
    const price = item.billingType === 'one-time' ? item.price * qty : item.price * qty * (billingCycle === 'yearly' ? 12 : 1);
    tableData.push([`${item.name} (${qty}x ${item.unit})`, formatIDR(price)]);
  });

  autoTable(doc, {
    startY: y,
    head: [['Description', 'Amount (IDR)']],
    body: tableData,
    theme: 'plain',
    columnStyles: { 1: { halign: 'right' } },
  });
  y = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 10;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Total Investment', 14, y);
  doc.text(
    calculations.totalFirstPayment > 0 ? formatIDR(calculations.totalFirstPayment) : 'Custom',
    196,
    y + 6,
    { align: 'right' },
  );
  if (appliedDiscount) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`Includes discount ${appliedDiscount.percent}% (${appliedDiscount.code})`, 14, y + 14);
  }

  doc.save(`penawaran-${quotationId}.pdf`);
}
