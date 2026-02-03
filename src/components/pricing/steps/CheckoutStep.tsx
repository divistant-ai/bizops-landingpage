'use client';

import { AlertCircle, CheckCircle2, User } from 'lucide-react';
import React from 'react';
import Button from '../../ui/Button';
import { usePricingContext } from '../PricingContext';

const CheckoutStep: React.FC = () => {
  const {
    contactInfo,
    setContactInfo,
    discountCode,
    setDiscountCode,
    appliedDiscount,
    formErrors,
    handleApplyDiscount,
    selectedPlanData,
    billingCycle,
    assessment,
    selectedAddOns,
    calculations,
    formatIDR,
    changeStep,
    handleRequestQuotation,
  } = usePricingContext();

  return (
    <div className="bg-dark-bg flex h-full items-center justify-center overflow-y-auto p-6">
      <div className="grid w-full max-w-5xl gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-white/5 bg-slate-900 p-8 shadow-2xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="bg-primary-500/20 text-primary-400 flex h-8 w-8 items-center justify-center rounded-full">
              <User className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-bold text-white">Informasi Kontak</h3>
          </div>
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 ml-1 block text-[10px] font-bold text-slate-500 uppercase">
                  Nama Depan
                </label>
                <input
                  type="text"
                  className="focus:border-primary-500 w-full rounded-xl border border-slate-700 bg-black/20 px-4 py-3 text-sm text-white transition-colors outline-none focus:bg-black/40"
                  value={contactInfo.firstName}
                  onChange={e => setContactInfo({ ...contactInfo, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-1 ml-1 block text-[10px] font-bold text-slate-500 uppercase">
                  Nama Belakang
                </label>
                <input
                  type="text"
                  className="focus:border-primary-500 w-full rounded-xl border border-slate-700 bg-black/20 px-4 py-3 text-sm text-white transition-colors outline-none focus:bg-black/40"
                  value={contactInfo.lastName}
                  onChange={e => setContactInfo({ ...contactInfo, lastName: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="mb-1 ml-1 block text-[10px] font-bold text-slate-500 uppercase">
                Email Bisnis
              </label>
              <input
                type="email"
                className="focus:border-primary-500 w-full rounded-xl border border-slate-700 bg-black/20 px-4 py-3 text-sm text-white transition-colors outline-none focus:bg-black/40"
                value={contactInfo.email}
                onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })}
              />
            </div>
            <div>
              <label className="mb-1 ml-1 block text-[10px] font-bold text-slate-500 uppercase">
                Nama Perusahaan
              </label>
              <input
                type="text"
                className="focus:border-primary-500 w-full rounded-xl border border-slate-700 bg-black/20 px-4 py-3 text-sm text-white transition-colors outline-none focus:bg-black/40"
                value={contactInfo.company}
                onChange={e => setContactInfo({ ...contactInfo, company: e.target.value })}
              />
            </div>
            <div>
              <label className="mb-1 ml-1 block text-[10px] font-bold text-slate-500 uppercase">
                No. Telepon / WhatsApp
              </label>
              <input
                type="tel"
                className="focus:border-primary-500 w-full rounded-xl border border-slate-700 bg-black/20 px-4 py-3 text-sm text-white transition-colors outline-none focus:bg-black/40"
                value={contactInfo.phone}
                onChange={e => setContactInfo({ ...contactInfo, phone: e.target.value })}
              />
            </div>

            <div className="border-t border-white/5 pt-4">
              <label className="mb-1 ml-1 block text-[10px] font-bold text-slate-500 uppercase">
                Kode Voucher
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="focus:border-primary-500 flex-1 rounded-xl border border-slate-700 bg-black/20 px-4 py-3 text-sm text-white uppercase outline-none"
                  value={discountCode}
                  onChange={e => setDiscountCode(e.target.value)}
                />
                <Button
                  variant="outline"
                  onClick={handleApplyDiscount}
                  className="rounded-xl border-slate-700 px-6 text-xs hover:bg-white/5 hover:text-white"
                >
                  Gunakan
                </Button>
              </div>
              {appliedDiscount && (
                <p className="mt-2 flex items-center gap-1 text-xs text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" />
                  {' '}
                  Voucher berhasil digunakan!
                </p>
              )}
              {Object.keys(formErrors).length > 0 && (
                <p className="mt-2 flex items-center gap-1 text-xs text-red-400">
                  <AlertCircle className="h-3 w-3" />
                  {' '}
                  Mohon lengkapi semua field wajib.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col justify-between space-y-6">
          <div className="relative grow overflow-hidden rounded-3xl border border-white/5 bg-linear-to-br from-slate-800 to-slate-900 p-8 shadow-2xl">
            <div className="bg-primary-500/10 pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl"></div>
            <h3 className="mb-6 text-xl font-bold text-white">Ringkasan Pesanan</h3>
            <div className="relative z-10 space-y-4 text-sm">
              <div className="flex justify-between border-b border-white/5 pb-3 text-slate-400">
                <span>Paket Terpilih</span>
                {' '}
                <span className="font-bold text-white">{selectedPlanData?.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3 text-slate-400">
                <span>Siklus</span>
                {' '}
                <span className="font-bold text-white capitalize">
                  {billingCycle === 'yearly' ? 'Tahunan' : 'Bulanan'}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3 text-slate-400">
                <span>Total User</span>
                {' '}
                <span className="font-bold text-white">
                  {assessment.userCount}
                  {' '}
                  Akun
                </span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3 text-slate-400">
                <span>Add-ons</span>
                {' '}
                <span className="font-bold text-white">
                  {Object.keys(selectedAddOns).length}
                  {' '}
                  Item
                </span>
              </div>
              <div className="flex items-end justify-between pt-4">
                <span className="text-lg font-bold text-white">Grand Total</span>
                <div className="text-right">
                  <span className="block text-3xl font-black text-white">
                    {calculations.totalFirstPayment > 0
                      ? formatIDR(calculations.totalFirstPayment)
                      : 'Custom'}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                    Estimasi Awal
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <Button
              fullWidth
              variant="primary"
              onClick={handleRequestQuotation}
              className="h-14 rounded-2xl bg-white text-base font-bold text-slate-900 shadow-xl hover:bg-slate-200"
            >
              Dapatkan Penawaran Resmi
            </Button>
            <button
              onClick={() => changeStep('jump', 'customize')}
              className="w-full py-2 text-center text-xs text-slate-500 transition-colors hover:text-white"
            >
              Kembali ke Konfigurasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep;
