'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Printer } from 'lucide-react';
import React, { useRef } from 'react';
import { addOns } from '../../../data/pricingData';
import Button from '../../ui/Button';
import { usePricingContext } from '../PricingContext';

const ThankYouStep: React.FC = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const {
    contactInfo,
    quotationId,
    selectedPlanData,
    billingCycle,
    calculations,
    selectedAddOns,
    appliedDiscount,
    formatIDR,
    handlePrint,
  } = usePricingContext();

  return (
    <div className="bg-dark-bg flex h-full items-center justify-center overflow-y-auto p-6">
      <div className="flex w-full max-w-4xl flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="mt-8 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.3)] ring-1 ring-emerald-500/50"
        >
          <CheckCircle2 className="h-8 w-8 text-emerald-500" />
        </motion.div>
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-white">Penawaran Siap!</h2>
        <p className="mb-8 text-base text-slate-400">
          Dokumen resmi telah dikirim ke
          <span className="font-bold text-white">
            {' '}
            {contactInfo.email}
          </span>
        </p>

        {/* Visible Quotation Preview */}
        <div className="relative mx-auto mb-8 w-full max-w-4xl overflow-hidden rounded-lg bg-white p-12 text-left text-slate-900 shadow-2xl">
          <div className="mb-12 flex items-start justify-between border-b-2 border-slate-900 pb-8">
            <div>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-900">QUOTATION</h1>
              <p className="font-sans text-sm tracking-widest text-slate-500 uppercase">
                Reference: #
                {quotationId}
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-primary-900 mb-1 text-2xl font-bold tracking-tight">BizOps</h2>
              <p className="font-sans text-sm text-slate-600">PT Divistant Teknologi Indonesia</p>
              <p className="mt-1 ml-auto max-w-[200px] font-sans text-xs text-slate-500">
                Eco-S Sahid Sudirman Residence
                {' '}
                <br />
                Jl. Jenderal Sudirman No.86, Jakarta 10250
              </p>
            </div>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-12">
            <div>
              <h3 className="mb-3 font-sans text-xs font-bold tracking-wider text-slate-400 uppercase">
                Quotation For
              </h3>
              <div className="text-slate-900">
                <p className="text-lg font-bold">{contactInfo.company}</p>
                <p className="mt-1 text-sm">
                  Attn:
                  {contactInfo.firstName}
                  {' '}
                  {contactInfo.lastName}
                </p>
                <p className="text-sm text-slate-600">{contactInfo.email}</p>
                <p className="text-sm text-slate-600">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="mb-4">
                <h3 className="mb-1 font-sans text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Issue Date
                </h3>
                <p className="font-medium text-slate-900">
                  {new Date().toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-sans text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Valid Until
                </h3>
                <p className="font-medium text-slate-900">
                  {new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>

          <table className="mb-12 w-full text-left">
            <thead>
              <tr className="border-b-2 border-slate-900 text-slate-900">
                <th className="w-1/2 pb-4 font-sans text-xs font-bold tracking-wider uppercase">
                  Description
                </th>
                <th className="pb-4 text-right font-sans text-xs font-bold tracking-wider uppercase">
                  Amount (IDR)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-4">
                  <span className="mb-1 block text-lg font-bold text-slate-900">
                    {selectedPlanData?.name}
                    {' '}
                    Package
                  </span>
                  <span className="font-sans text-sm text-slate-500">
                    Billing Cycle:
                    {billingCycle === 'yearly' ? 'Yearly (-20%)' : 'Monthly'}
                  </span>
                </td>
                <td className="py-4 text-right text-lg font-bold text-slate-900">
                  {calculations.basePrice > 0
                    ? formatIDR(
                        billingCycle === 'yearly'
                          ? calculations.basePrice * 12
                          : calculations.basePrice,
                      )
                    : 'Custom Price'}
                </td>
              </tr>
              {Object.entries(selectedAddOns).map(([id, qty]) => {
                const item = addOns.find(a => a.id === id);
                if (!item) {
                  return null;
                }
                const price
                  = item.unit.includes('one-time') || item.unit.includes('per')
                    ? item!.price * qty
                    : item!.price * qty * (billingCycle === 'yearly' ? 12 : 1);
                return (
                  <tr key={id}>
                    <td className="py-4">
                      <span className="block font-medium text-slate-800">{item.name}</span>
                      <span className="font-sans text-xs text-slate-500">
                        Qty:
                        {qty}
                        {' '}
                        x
                        {item.unit}
                      </span>
                    </td>
                    <td className="py-4 text-right font-medium text-slate-700">
                      {formatIDR(price)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-900">
                <td className="pt-6 text-xl font-bold tracking-tight text-slate-900 uppercase">
                  Total Investment
                </td>
                <td className="text-primary-900 pt-6 text-right text-2xl font-black">
                  {calculations.totalFirstPayment > 0
                    ? formatIDR(calculations.totalFirstPayment)
                    : 'Custom'}
                </td>
              </tr>
              {appliedDiscount && (
                <tr>
                  <td className="pt-2 font-sans text-sm text-emerald-600 italic">
                    Includes discount
                    {appliedDiscount.percent}
                    % (
                    {appliedDiscount.code}
                    )
                  </td>
                  <td></td>
                </tr>
              )}
              <tr>
                <td colSpan={2} className="pt-2 text-right font-sans text-xs text-slate-400 italic">
                  * Prices include applicable taxes
                </td>
              </tr>
            </tfoot>
          </table>

          <div className="grid break-inside-avoid grid-cols-2 gap-12 border-t border-slate-100 pt-8">
            <div>
              <h4 className="mb-2 font-sans text-sm font-bold text-slate-900">Payment Terms</h4>
              <ul className="list-disc space-y-1 pl-4 font-sans text-xs text-slate-600">
                <li>Payment is due within 14 days of invoice date.</li>
                <li>Bank transfer to BCA 1234567890 a/n PT Divistant Teknologi Indonesia.</li>
                <li>Please include invoice number in transfer description.</li>
              </ul>
            </div>
            <div className="mt-8 text-center">
              <div className="flex h-20 items-end justify-center">
                <p className="font-handwriting rotate-[-5deg] text-2xl text-slate-300 opacity-50">
                  Authorized
                </p>
              </div>
              <div className="mx-auto w-48 border-t border-slate-300 pt-2">
                <p className="text-xs font-bold text-slate-900 uppercase">Authorized Signature</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-100 pt-6 text-center font-sans text-[10px] text-slate-400">
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            PT Divistant Teknologi Indonesia. All rights reserved.
            <br />
            This is a computer-generated document. No signature is required.
          </div>
        </div>

        <div className="mb-12 flex gap-4">
          <Button
            variant="primary"
            onClick={handlePrint}
            className="h-12 rounded-full bg-white px-8 font-bold text-slate-900 shadow-lg hover:bg-slate-200"
          >
            <Printer className="mr-2 h-4 w-4" />
            {' '}
            Download / Print PDF
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="h-12 rounded-full border-slate-700 px-8 text-slate-300 hover:bg-white/5 hover:text-white"
          >
            Buat Baru
          </Button>
        </div>
      </div>

      {/* Hidden Print Area (Preserved for print layout consistency) */}
      <div
        className="fixed inset-0 z-9999 hidden bg-white p-16 text-black print:block"
        ref={quoteRef}
      >
        <div className="mb-16 flex items-start justify-between border-b-2 border-black pb-8">
          <div>
            <h1 className="mb-4 text-5xl font-bold tracking-tight">QUOTATION</h1>
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              Reference: #
              {quotationId}
            </p>
          </div>
          <div className="text-right">
            <h2 className="mb-2 text-3xl font-bold">BizOps</h2>
            <p className="text-base font-bold">PT Divistant Teknologi Indonesia</p>
            <p className="mt-1 ml-auto max-w-[250px] text-sm text-slate-600">
              Eco-S Sahid Sudirman Residence
              {' '}
              <br />
              Jl. Jenderal Sudirman No.86, Jakarta 10250
            </p>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-16">
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
              Quotation For
            </h3>
            <div className="space-y-1 text-black">
              <p className="text-xl font-bold">{contactInfo.company}</p>
              <p className="text-base">
                Attn:
                {contactInfo.firstName}
                {' '}
                {contactInfo.lastName}
              </p>
              <p className="text-base text-slate-600">{contactInfo.email}</p>
              <p className="text-base text-slate-600">{contactInfo.phone}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="mb-6">
              <h3 className="mb-2 text-xs font-bold tracking-wider text-gray-500 uppercase">
                Issue Date
              </h3>
              <p className="text-lg font-medium">
                {new Date().toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xs font-bold tracking-wider text-gray-500 uppercase">
                Valid Until
              </h3>
              <p className="text-lg font-medium">
                {new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>

        <table className="mb-16 w-full text-left">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="w-1/2 pb-4 text-xs font-bold tracking-wider uppercase">Description</th>
              <th className="pb-4 text-right text-xs font-bold tracking-wider uppercase">
                Amount (IDR)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="py-4">
                <span className="mb-1 block text-lg font-bold">
                  {selectedPlanData?.name}
                  {' '}
                  Package
                </span>
                <span className="text-sm text-slate-600">
                  Billing Cycle:
                  {billingCycle === 'yearly' ? 'Yearly (-20%)' : 'Monthly'}
                </span>
              </td>
              <td className="py-4 text-right text-lg font-bold">
                {calculations.basePrice > 0
                  ? formatIDR(
                      billingCycle === 'yearly'
                        ? calculations.basePrice * 12
                        : calculations.basePrice,
                    )
                  : 'Custom Price'}
              </td>
            </tr>
            {Object.entries(selectedAddOns).map(([id, qty]) => {
              const item = addOns.find(a => a.id === id);
              if (!item) {
                return null;
              }
              const price
                = item.unit.includes('one-time') || item.unit.includes('per')
                  ? item!.price * qty
                  : item!.price * qty * (billingCycle === 'yearly' ? 12 : 1);
              return (
                <tr key={id}>
                  <td className="py-4">
                    <span className="block font-medium">{item.name}</span>
                    <span className="text-xs text-slate-600">
                      Qty:
                      {qty}
                      {' '}
                      x
                      {item.unit}
                    </span>
                  </td>
                  <td className="py-4 text-right font-medium text-gray-800">{formatIDR(price)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-black">
              <td className="pt-6 text-xl font-bold tracking-tight uppercase">Total Investment</td>
              <td className="pt-6 text-right text-2xl font-black">
                {calculations.totalFirstPayment > 0
                  ? formatIDR(calculations.totalFirstPayment)
                  : 'Custom'}
              </td>
            </tr>
            {appliedDiscount && (
              <tr>
                <td className="pt-2 text-sm text-slate-600 italic">
                  Includes discount
                  {appliedDiscount.percent}
                  % (
                  {appliedDiscount.code}
                  )
                </td>
                <td></td>
              </tr>
            )}
            <tr>
              <td colSpan={2} className="pt-2 text-right text-xs text-gray-500 italic">
                * Prices include applicable taxes
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="grid grid-cols-2 gap-16 border-t border-gray-200 pt-8">
          <div>
            <h4 className="mb-2 text-sm font-bold">Payment Terms</h4>
            <ul className="list-disc space-y-1 pl-4 text-xs text-slate-600">
              <li>Payment is due within 14 days of invoice date.</li>
              <li>Bank transfer to BCA 1234567890 a/n PT Divistant Teknologi Indonesia.</li>
              <li>Please include invoice number in transfer description.</li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <div className="flex h-20 items-end justify-center">
              {/* Empty space for signature */}
            </div>
            <div className="mx-auto w-48 border-t border-gray-400 pt-2">
              <p className="text-xs font-bold uppercase">Authorized Signature</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-6 text-center text-[10px] text-gray-500">
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          PT Divistant Teknologi Indonesia. All rights reserved.
          <br />
          This is a computer-generated document. No signature is required.
        </div>
      </div>
    </div>
  );
};

export default ThankYouStep;
