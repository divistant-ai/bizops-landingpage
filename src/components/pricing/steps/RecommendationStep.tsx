'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import React from 'react';
import { pricingPlans } from '../../../data/pricingData';
import Button from '../../ui/Button';
import { usePricingContext } from '../PricingContext';

const RecommendationStep: React.FC = () => {
  const {
    billingCycle,
    setBillingCycle,
    selectedPlanId,
    setSelectedPlanId,
    recommendedPlanId,
    changeStep,
  } = usePricingContext();

  return (
    <div className="dark:bg-dark-bg flex h-full flex-col overflow-hidden bg-slate-50">
      <div className="scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-white/10 grow overflow-y-auto p-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 pt-4 text-center">
            <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
              Rekomendasi Paket
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Solusi terbaik berdasarkan profil bisnis & kebutuhan teknis Anda.
            </p>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="mb-8 flex justify-center">
            <div className="relative flex rounded-xl border border-slate-300 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/5">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative z-10 w-[140px] rounded-lg py-2 text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
              >
                Bulanan
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`relative z-10 w-[140px] rounded-lg py-2 text-sm font-bold transition-all ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
              >
                <span className="inline-flex items-center justify-center gap-1.5">
                  Tahunan
                  <span className="rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] text-white">
                    -20%
                  </span>
                </span>
              </button>
              <motion.div
                className="absolute top-1 bottom-1 rounded-lg bg-slate-900 shadow-lg dark:bg-slate-700"
                initial={false}
                animate={{
                  left: billingCycle === 'monthly' ? '4px' : 'calc(50% + 2px)',
                  width: 'calc(50% - 6px)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>

          <div className="grid items-center gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => {
              const isSelected = plan.id === selectedPlanId;
              const isRec = plan.id === recommendedPlanId;
              const priceValue = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`relative flex h-full cursor-pointer flex-col rounded-3xl border p-6 transition-all duration-300 ${isSelected ? 'z-10 scale-105 border-slate-900 bg-slate-100 shadow-2xl ring-2 ring-slate-900/20 dark:border-slate-600 dark:bg-slate-800/80 dark:ring-slate-500' : 'scale-100 border-slate-200 bg-white opacity-80 hover:border-slate-300 hover:bg-slate-50 hover:opacity-100 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-white/10 dark:hover:bg-slate-800/50'}`}
                >
                  {isRec && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase shadow-lg shadow-emerald-500/20">
                      Best Match
                    </div>
                  )}
                  <div className="mt-2 mb-6 text-center">
                    <h3
                      className={`text-lg font-bold ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}
                    >
                      {plan.name}
                    </h3>
                    <div className="mt-2 flex items-baseline justify-center gap-1">
                      {priceValue > 0
                        ? (
                            <>
                              <span
                                className={`text-3xl font-black ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}
                              >
                                {priceValue / 1000000}
                              </span>
                              <span className="text-xs font-bold text-slate-500 uppercase dark:text-slate-500">
                                Juta / bln
                              </span>
                            </>
                          )
                        : (
                            <span
                              className={`text-3xl font-black ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}
                            >
                              Custom
                            </span>
                          )}
                    </div>
                    <div className="mt-1 text-[10px] text-slate-500 dark:text-slate-500">
                      {plan.id === 'enterprise'
                        ? 'Custom SLA & Integrations'
                        : billingCycle === 'yearly'
                          ? 'Dibayar per tahun'
                          : 'Dibayar per bulan'}
                    </div>
                  </div>
                  <div className="mb-8 grow space-y-3">
                    {plan.features.slice(0, 5).map((f, i) => (
                      <div
                        key={i}
                        className="flex gap-3 text-xs text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle2
                          className={`h-3 w-3 shrink-0 ${isSelected ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-600'}`}
                        />
                        {' '}
                        {f}
                      </div>
                    ))}
                  </div>
                  <Button
                    fullWidth
                    variant={isSelected ? 'primary' : 'outline'}
                    className={`h-10 rounded-xl text-xs font-bold ${isSelected ? 'bg-slate-900 text-white shadow-lg hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200' : 'border-slate-300 text-slate-600 hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:text-white'}`}
                  >
                    {isSelected ? 'Paket Terpilih' : 'Pilih Paket Ini'}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="dark:bg-dark-bg/90 z-20 flex justify-center border-t border-slate-200 bg-white/90 p-4 backdrop-blur dark:border-white/10">
        <Button
          variant="primary"
          onClick={() => changeStep('jump', 'customize')}
          className="h-12 rounded-full bg-slate-900 px-12 text-sm font-bold text-white shadow-xl hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600"
        >
          Lanjut Konfigurasi Add-ons
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default RecommendationStep;
