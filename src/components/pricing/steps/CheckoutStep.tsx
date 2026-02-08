'use client';

import { CheckCircle2, User } from 'lucide-react';
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
    <div className="dark:bg-dark-bg flex h-full items-center justify-center overflow-y-auto bg-slate-50 p-6">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2">

        {/* Contact Form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-slate-900">
          <div className="mb-8 flex items-center gap-4 border-b border-slate-100 pb-6 dark:border-white/5">
            <div className="bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 flex h-12 w-12 items-center justify-center rounded-2xl">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Informasi Kontak</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Lengkapi data diri untuk proses selanjutnya.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                  Nama Depan
                  {' '}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`focus:border-primary-500 focus:ring-primary-500/10 w-full rounded-xl border bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-900 transition-all outline-none focus:bg-white focus:ring-4 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800 ${formErrors.firstName ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                  placeholder="John"
                  value={contactInfo.firstName}
                  onChange={e => setContactInfo({ ...contactInfo, firstName: e.target.value })}
                />
                {formErrors.firstName && <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.firstName}</p>}
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                  Nama Belakang
                </label>
                <input
                  type="text"
                  className="focus:border-primary-500 focus:ring-primary-500/10 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-900 transition-all outline-none focus:bg-white focus:ring-4 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800"
                  placeholder="Doe"
                  value={contactInfo.lastName}
                  onChange={e => setContactInfo({ ...contactInfo, lastName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                Email Bisnis
                {' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className={`focus:border-primary-500 focus:ring-primary-500/10 w-full rounded-xl border bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-900 transition-all outline-none focus:bg-white focus:ring-4 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800 ${formErrors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                placeholder="john@company.com"
                value={contactInfo.email}
                onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })}
              />
              {formErrors.email && <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.email}</p>}
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                Nama Perusahaan
                {' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`focus:border-primary-500 focus:ring-primary-500/10 w-full rounded-xl border bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-900 transition-all outline-none focus:bg-white focus:ring-4 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800 ${formErrors.company ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                placeholder="Company Ltd."
                value={contactInfo.company}
                onChange={e => setContactInfo({ ...contactInfo, company: e.target.value })}
              />
              {formErrors.company && <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.company}</p>}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                  No. Telepon
                  {' '}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className={`focus:border-primary-500 focus:ring-primary-500/10 w-full rounded-xl border bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-900 transition-all outline-none focus:bg-white focus:ring-4 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800 ${formErrors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                  placeholder="+62"
                  value={contactInfo.phone}
                  onChange={e => setContactInfo({ ...contactInfo, phone: e.target.value })}
                />
                {formErrors.phone && <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.phone}</p>}
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                  Posisi
                </label>
                <input
                  type="text"
                  className="focus:border-primary-500 focus:ring-primary-500/10 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-900 transition-all outline-none focus:bg-white focus:ring-4 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800"
                  placeholder="CEO / Manager"
                  value={contactInfo.role}
                  onChange={e => setContactInfo({ ...contactInfo, role: e.target.value })}
                />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6 dark:border-white/5">
              <label className="mb-2 block text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                Kode Voucher
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  className="focus:border-primary-500 focus:ring-primary-500/10 w-full flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-bold text-slate-900 uppercase transition-all outline-none focus:bg-white focus:ring-4 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800"
                  placeholder="EX: PROMO2024"
                  value={discountCode}
                  onChange={e => setDiscountCode(e.target.value)}
                />
                <Button
                  variant="outline"
                  onClick={handleApplyDiscount}
                  className="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700"
                >
                  Gunakan
                </Button>
              </div>
              {appliedDiscount && (
                <p className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-50 p-2 text-xs font-medium text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Voucher berhasil digunakan! Hemat
                  {' '}
                  {formatIDR(calculations.discountAmount)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex h-full flex-col justify-between space-y-6">
          <div className="relative grow overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900">
            <div className="bg-primary-500/5 pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full blur-3xl"></div>

            <div className="border-b border-slate-100 p-8 dark:border-white/5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ringkasan Pesanan</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Review pesanan Anda sebelum finalisasi.</p>
            </div>

            <div className="relative z-10 space-y-4 p-8 text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-4 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400">Paket Terpilih</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedPlanData?.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-4 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400">Siklus Pembayaran</span>
                <span className="font-bold text-slate-900 capitalize dark:text-white">
                  {billingCycle === 'yearly' ? 'Tahunan' : 'Bulanan'}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-4 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400">Kapasitas User</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {assessment.userCount}
                  {' '}
                  Akun
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-4 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400">Add-ons Tambahan</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {Object.keys(selectedAddOns).length}
                  {' '}
                  Item
                </span>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-6 dark:bg-black/20">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">Grand Total</span>
                    <p className="text-[10px] text-slate-500">Estimasi investasi awal</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl font-black text-slate-900 dark:text-white">
                      {calculations.totalFirstPayment > 0
                        ? formatIDR(calculations.totalFirstPayment)
                        : 'Custom'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              fullWidth
              variant="primary"
              onClick={handleRequestQuotation}
              className="h-14 rounded-2xl bg-slate-900 text-lg font-bold text-white shadow-xl hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Dapatkan Penawaran Resmi
            </Button>
            <button
              onClick={() => changeStep('jump', 'customize')}
              className="w-full py-3 text-center text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
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
