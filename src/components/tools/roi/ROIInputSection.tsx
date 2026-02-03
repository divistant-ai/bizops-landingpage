'use client';

import { Settings } from 'lucide-react';
import React from 'react';

type PricingTier = {
  id: string;
  name: string;
  cost: number;
  label: string;
};

type ROIInputSectionProps = {
  adminCount: number;
  setAdminCount: (val: number) => void;
  salary: number;
  setSalary: (val: number) => void;
  efficiencyRate: number;
  setEfficiencyRate: (val: number) => void;
  overtime: number;
  setOvertime: (val: number) => void;
  losses: number;
  setLosses: (val: number) => void;
  existingTechCost: number;
  setExistingTechCost: (val: number) => void;
  selectedPlanId: string;
  setSelectedPlanId: (val: string) => void;
  handleReset: () => void;
  pricingTiers: PricingTier[];
  subscriptionCost: number;
  formatCurrency: (val: number) => string;
};

export const ROIInputSection: React.FC<ROIInputSectionProps> = ({
  adminCount,
  setAdminCount,
  salary,
  setSalary,
  efficiencyRate,
  setEfficiencyRate,
  overtime,
  setOvertime,
  losses,
  setLosses,
  existingTechCost,
  setExistingTechCost,
  selectedPlanId,
  setSelectedPlanId,
  handleReset,
  pricingTiers,
  subscriptionCost,
  formatCurrency,
}) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl backdrop-blur-xl lg:col-span-5 dark:border-white/10 dark:bg-slate-900/50">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white">
          <Settings className="size-5 text-blue-500 dark:text-blue-400" />
          <span className="text-slate-800 dark:text-white">Parameter Operasional</span>
        </h2>
        <button
          onClick={handleReset}
          className="text-xs text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white"
        >
          Reset Default
        </button>
      </div>

      <div className="space-y-8">
        {/* 1. Admin Count */}
        <div>
          <div className="mb-2 flex justify-between">
            <label htmlFor="admin-count-slider" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Jumlah Staf Admin
            </label>
            <span className="rounded bg-blue-500/10 px-2 py-0.5 text-sm font-bold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
              {adminCount}
              {' '}
              Orang
            </span>
          </div>
          <input
            id="admin-count-slider"
            type="range"
            min="1"
            max="50"
            value={adminCount}
            onChange={e => setAdminCount(Number.parseInt(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-500 hover:accent-blue-400 dark:bg-slate-800"
            aria-valuemin={1}
            aria-valuemax={50}
            aria-valuenow={adminCount}
          />
        </div>

        {/* 2. Salary & Efficiency */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="salary-input" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Gaji Rata-rata
            </label>
            <div className="group relative">
              <span className="absolute top-3 left-3 text-xs text-slate-500" aria-hidden="true">Rp</span>
              <input
                id="salary-input"
                type="number"
                value={salary}
                onChange={e => setSalary(Number.parseInt(e.target.value))}
                className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pr-2 pl-8 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                aria-label="Gaji Rata-rata dalam Rupiah"
              />
            </div>
          </div>
          <div>
            <label htmlFor="efficiency-slider" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Estimasi Efisiensi
            </label>
            <div className="flex items-center gap-2">
              <input
                id="efficiency-slider"
                type="range"
                min="10"
                max="90"
                step="5"
                value={efficiencyRate}
                onChange={e => setEfficiencyRate(Number.parseInt(e.target.value))}
                className="h-2 flex-1 cursor-pointer appearance-none rounded-lg bg-slate-200 accent-emerald-500 dark:bg-slate-800"
                aria-valuemin={10}
                aria-valuemax={90}
                aria-valuenow={efficiencyRate}
              />
              <span className="w-10 text-sm font-bold text-emerald-400">
                {efficiencyRate}
                %
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500" id="efficiency-desc">
              Persentase waktu yang dihemat staf admin setelah tugas rutin diotomatisasi
              (Contoh: Input data, rekap laporan).
            </p>
          </div>
        </div>

        {/* 3. Overtime */}
        <div>
          <div className="mb-2 flex justify-between">
            <label htmlFor="overtime-slider" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Lembur (Jam/Orang/Bulan)
            </label>
            <span className="rounded bg-amber-500/10 px-2 py-0.5 text-sm font-bold text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
              {overtime}
              {' '}
              Jam
            </span>
          </div>
          <input
            id="overtime-slider"
            type="range"
            min="0"
            max="100"
            value={overtime}
            onChange={e => setOvertime(Number.parseInt(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-amber-500 hover:accent-amber-400 dark:bg-slate-800"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={overtime}
          />
        </div>

        {/* 4. Losses & Existing Cost */}
        <div className="space-y-4">
          <div>
            <label htmlFor="losses-input" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Estimasi Kebocoran (IDR/Tahun)
            </label>
            <div className="relative">
              <span className="absolute top-3.5 left-4 text-sm text-slate-500" aria-hidden="true">Rp</span>
              <input
                id="losses-input"
                type="number"
                value={losses}
                onChange={e => setLosses(Number.parseInt(e.target.value))}
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pr-4 pl-10 text-slate-900 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                aria-label="Estimasi Kebocoran dalam Rupiah per Tahun"
              />
            </div>
          </div>

          <div>
            <label htmlFor="tech-cost-input" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Biaya Aplikasi/Server Lama (IDR/Bulan)
            </label>
            <div className="relative">
              <span className="absolute top-3.5 left-4 text-sm text-slate-500" aria-hidden="true">Rp</span>
              <input
                id="tech-cost-input"
                type="number"
                value={existingTechCost}
                onChange={e => setExistingTechCost(Number.parseInt(e.target.value))}
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pr-4 pl-10 text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                aria-label="Biaya Aplikasi Lama dalam Rupiah per Bulan"
                aria-describedby="tech-cost-desc"
              />
            </div>
            <p className="mt-2 text-xs text-slate-500" id="tech-cost-desc">
              Biaya maintenance, hosting, atau langganan aplikasi yang bisa dihentikan.
            </p>
          </div>
        </div>

        <hr className="border-white/5" />

        {/* Plan Selection */}
        <div role="group" aria-labelledby="plan-selection-label">
          <label id="plan-selection-label" className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Pilih Paket BizOps
          </label>
          <div className="grid grid-cols-3 gap-2">
            {pricingTiers.map(plan => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                aria-pressed={selectedPlanId === plan.id}
                className={`rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                  selectedPlanId === plan.id
                    ? 'border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                    : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-white/10 dark:bg-slate-950 dark:text-slate-400 dark:hover:bg-slate-900'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
          <p className="mt-2 text-right text-xs text-slate-500">
            Biaya:
            {' '}
            {formatCurrency(subscriptionCost)}
            /bulan
          </p>
        </div>
      </div>
    </div>
  );
};
