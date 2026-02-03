'use client';

import { AlertTriangle, Clock, Database, Download, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Button from '@/components/ui/Button';

type ROIResultSectionProps = {
  efficiencySavings: number;
  efficiencyRate: number;
  adminCount: number;
  overtimeSavings: number;
  monthlyLossSavings: number;
  techSavings: number;
  annualSavings: number;
  roiPercentage: number;
  paybackMonths: number;
  setShowLeadForm: (val: boolean) => void;
  formatCompactCurrency: (val: number) => string;
};

export const ROIResultSection: React.FC<ROIResultSectionProps> = ({
  efficiencySavings,
  efficiencyRate,
  adminCount,
  overtimeSavings,
  monthlyLossSavings,
  techSavings,
  annualSavings,
  roiPercentage,
  paybackMonths,
  setShowLeadForm,
  formatCompactCurrency,
}) => {
  return (
    <div className="space-y-6 lg:col-span-7">
      {/* Savings Breakdown Cards - 2x2 Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Efficiency */}
        <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 backdrop-blur-sm transition-all hover:bg-slate-100 dark:border-white/5 dark:bg-slate-900/50 dark:hover:bg-slate-900">
          <div className="mb-2 flex items-start justify-between">
            <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 transition-transform group-hover:scale-110 dark:text-blue-400">
              <TrendingUp className="size-5" />
            </div>
            <span className="rounded bg-blue-500/10 px-2 py-1 text-xs font-bold text-blue-600 dark:text-blue-400">
              Soft Savings
            </span>
          </div>
          <h3 className="mb-1 text-xs font-bold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            Nilai Produktivitas
          </h3>
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            {formatCompactCurrency(efficiencySavings)}
            <span className="text-xs font-normal text-slate-500">/bln</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Efisiensi
            {' '}
            {efficiencyRate}
            % dari
            {' '}
            {adminCount}
            {' '}
            staf.
          </p>
        </div>

        {/* Overtime */}
        <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 backdrop-blur-sm transition-all hover:bg-slate-100 dark:border-white/5 dark:bg-slate-900/50 dark:hover:bg-slate-900">
          <div className="mb-2 flex items-start justify-between">
            <div className="flex size-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 transition-transform group-hover:scale-110 dark:text-amber-400">
              <Clock className="size-5" />
            </div>
            <span className="rounded bg-amber-500/10 px-2 py-1 text-xs font-bold text-amber-600 dark:text-amber-400">
              Hard Savings
            </span>
          </div>
          <h3 className="mb-1 text-xs font-bold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            Penghematan Lembur
          </h3>
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            {formatCompactCurrency(overtimeSavings)}
            <span className="text-xs font-normal text-slate-500">/bln</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">Mengurangi 90% lembur manual.</p>
        </div>

        {/* Fraud */}
        <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 backdrop-blur-sm transition-all hover:bg-slate-100 dark:border-white/5 dark:bg-slate-900/50 dark:hover:bg-slate-900">
          <div className="mb-2 flex items-start justify-between">
            <div className="flex size-10 items-center justify-center rounded-lg bg-red-500/10 text-red-600 transition-transform group-hover:scale-110 dark:text-red-400">
              <AlertTriangle className="size-5" />
            </div>
            <span className="rounded bg-red-500/10 px-2 py-1 text-xs font-bold text-red-600 dark:text-red-400">
              Risk Avoidance
            </span>
          </div>
          <h3 className="mb-1 text-xs font-bold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            Loss Prevention
          </h3>
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            {formatCompactCurrency(monthlyLossSavings)}
            <span className="text-xs font-normal text-slate-500">/bln</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">Mengurangi 80% risiko kebocoran.</p>
        </div>

        {/* Tech Cost Savings */}
        <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 backdrop-blur-sm transition-all hover:bg-slate-100 dark:border-white/5 dark:bg-slate-900/50 dark:hover:bg-slate-900">
          <div className="mb-2 flex items-start justify-between">
            <div className="flex size-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 transition-transform group-hover:scale-110 dark:text-purple-400">
              <Database className="size-5" />
            </div>
            <span className="rounded bg-purple-500/10 px-2 py-1 text-xs font-bold text-purple-600 dark:text-purple-400">
              Hard Savings
            </span>
          </div>
          <h3 className="mb-1 text-xs font-bold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            Tech Cost Reduction
          </h3>
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            {formatCompactCurrency(techSavings)}
            <span className="text-xs font-normal text-slate-500">/bln</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">Biaya sistem lama yang dihapus.</p>
        </div>
      </div>

      {/* MAIN HERO RESULT */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-linear-to-br from-slate-100 to-slate-200 p-8 text-center shadow-2xl md:p-10 md:text-left dark:border-white/10 dark:from-slate-900 dark:to-slate-950">
        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex-1">
            <h2 className="mb-2 text-sm font-bold tracking-widest text-slate-600 uppercase dark:text-slate-400">
              Total Penghematan Tahunan
            </h2>
            <div className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
              {formatCompactCurrency(annualSavings)}
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
                <div className="rounded-full bg-emerald-500 p-1 text-black">
                  <TrendingUp className="size-3" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium text-emerald-600 dark:text-emerald-300">
                    ROI Year 1
                  </div>
                  <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
                    {roiPercentage.toFixed(0)}
                    %
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-2">
                <div className="rounded-full bg-blue-500 p-1 text-white">
                  <Clock className="size-3" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium text-blue-600 dark:text-blue-300">
                    Break Even
                  </div>
                  <div className="text-lg font-bold text-blue-700 dark:text-blue-400">
                    {paybackMonths < 1 ? '< 1 Bulan' : `${paybackMonths.toFixed(1)} Bulan`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-w-[200px] flex-col gap-3 md:w-auto">
            <Button
              onClick={() => setShowLeadForm(true)}
              size="lg"
              className="w-full border-none bg-white font-bold text-slate-950 shadow-xl shadow-white/10 hover:bg-slate-200"
            >
              <Download className="mr-2 size-4" />
              {' '}
              <span className="text-slate-800 dark:text-slate-600">Unduh Proposal</span>
            </Button>
            <Link href="/contact" className="w-full">
              <Button
                variant="outline-white"
                className="w-full border-white/20 text-slate-300 hover:bg-white/5 hover:text-white"
              >
                <span className="text-slate-800 dark:text-slate-600">Validasi Angka Ini</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Decor */}
        <div className="pointer-events-none absolute top-0 right-0 size-64 rounded-full bg-emerald-500/10 blur-[80px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 size-64 rounded-full bg-blue-500/10 blur-[80px]" />
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-100 p-6 dark:border-white/5 dark:bg-slate-900/30">
        <div className="mt-1 rounded-lg bg-slate-200 p-2 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          <AlertTriangle className="size-4" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-300">
            Catatan Analis
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-500">
            Perhitungan ini adalah estimasi konservatif (asumsi efisiensi 30%). Banyak klien
            kami melaporkan
            {' '}
            <strong>Intangible Benefits</strong>
            {' '}
            yang lebih besar seperti
            kepuasan karyawan, akurasi data real-time, dan kecepatan pengambilan keputusan
            strategis.
          </p>
        </div>
      </div>
    </div>
  );
};
