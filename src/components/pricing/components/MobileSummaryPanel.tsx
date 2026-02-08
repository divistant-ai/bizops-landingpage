'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Calculator, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';
import { calculatePriceEstimate } from '../../../utils/pricingUtils';
import { usePricingContext } from '../PricingContext';

export function MobileSummaryPanel() {
  const { assessment } = usePricingContext();
  const [isOpen, setIsOpen] = useState(false);
  const priceEstimate = calculatePriceEstimate(assessment);

  return (
    <>
      {/* Mobile Top Summary Bar */}
      <div className="z-30 block border-b border-slate-200 bg-white/50 px-4 py-2 backdrop-blur-md lg:hidden dark:border-white/5 dark:bg-slate-900/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
              Est.
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Rp
                {' '}
                {priceEstimate.monthlyMin}
                -
                {priceEstimate.monthlyMax}
                {' '}
                jt
              </span>
              <span className="text-[10px] text-slate-500">/bln</span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1 rounded-full bg-slate-200/50 px-2 py-1 text-[10px] font-bold text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800/50 dark:text-slate-300"
          >
            Details
            <ChevronUp className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Expanded Details Modal/Sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 bottom-0 left-0 z-50 rounded-t-2xl bg-white p-6 shadow-2xl lg:hidden dark:bg-slate-900"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <Calculator className="h-4 w-4 text-emerald-600" />
                    Rincian Estimasi
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Berdasarkan konfigurasi pilihan Anda.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-slate-100 p-2 text-slate-500 dark:bg-slate-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/5 dark:bg-slate-800/50">
                <div className="flex justify-between border-b border-slate-200 pb-2 dark:border-white/5">
                  <span className="text-xs text-slate-600 dark:text-slate-400">Total Pengguna</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {assessment.userCount}
                    {' '}
                    User
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2 dark:border-white/5">
                  <span className="text-xs text-slate-600 dark:text-slate-400">Modul</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {Object.keys(assessment).filter(k => k.startsWith('needs') && (assessment as any)[k]).length}
                    {' '}
                    Selected
                  </span>
                </div>

                <div>
                  <div className="mb-1 text-xs text-emerald-600 dark:text-emerald-400">Biaya Bulanan</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    Rp
                    {' '}
                    {priceEstimate.monthlyMin}
                    {' '}
                    -
                    {' '}
                    {priceEstimate.monthlyMax}
                    {' '}
                    jt
                    <span className="ml-1 text-xs font-normal text-slate-500">/bulan</span>
                  </div>
                </div>

                <div>
                  <div className="mb-1 text-xs text-emerald-600 dark:text-emerald-400">Setup One-time</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    Rp
                    {' '}
                    {priceEstimate.setupMin}
                    {' '}
                    -
                    {' '}
                    {priceEstimate.setupMax}
                    {' '}
                    jt
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center text-[10px] text-slate-500">
                Harga final akan dikonfirmasi setelah konsultasi teknis.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
