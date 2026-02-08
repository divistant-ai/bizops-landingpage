'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
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

  const handlePlanSelect = (planId: string) => {
    setSelectedPlanId(planId);
  };

  return (
    <div className="dark:bg-dark-bg flex h-full flex-col overflow-hidden bg-slate-50">
      <div className="scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-white/10 grow overflow-y-auto p-6">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-white dark:via-slate-200 dark:to-white">
              Pilih Paket Solusi
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Sesuaikan solusi BizOps dengan skala bisnis Anda saat ini.
            </p>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="flex justify-center">
            <div className="relative flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-slate-900">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative z-10 w-[140px] rounded-lg py-2.5 text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
              >
                Bulanan
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`relative z-10 w-[140px] rounded-lg py-2.5 text-sm font-bold transition-all ${billingCycle === 'yearly' ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
              >
                <span className="inline-flex items-center justify-center gap-1.5">
                  Tahunan
                  <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    -20%
                  </span>
                </span>
              </button>
              <motion.div
                className="absolute top-1 bottom-1 rounded-lg bg-slate-100 shadow-sm dark:bg-slate-800"
                initial={false}
                animate={{
                  left: billingCycle === 'monthly' ? '4px' : 'calc(50% + 2px)',
                  width: 'calc(50% - 6px)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>

          {/* Plan Selection */}
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => {
              const isSelected = plan.id === selectedPlanId;
              const isRec = plan.id === recommendedPlanId;
              const priceValue = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`group relative flex cursor-pointer flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isSelected
                      ? 'z-10 border-slate-900 bg-white ring-2 ring-slate-900 ring-offset-2 dark:border-white dark:bg-slate-900 dark:ring-white dark:ring-offset-slate-900'
                      : 'border-slate-200 bg-white hover:border-slate-300 dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20'
                  }`}
                >
                  {isRec && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg dark:bg-white dark:text-slate-900">
                      Rekomendasi
                    </div>
                  )}

                  <div className="mb-6 text-center">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <div className="mt-4 flex items-baseline justify-center gap-1">
                      {priceValue > 0 ? (
                        <>
                          <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                            {priceValue / 1000000}
                          </span>
                          <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                            jt / bln
                          </span>
                        </>
                      ) : (
                        <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                          Custom
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-500">
                      {plan.id === 'enterprise'
                        ? 'Full Customization'
                        : billingCycle === 'yearly'
                          ? 'Ditagih per tahun'
                          : 'Ditagih per bulan'}
                    </div>
                  </div>

                  <div className="mb-8 grow space-y-4">
                    {plan.features.slice(0, 6).map((f, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="text-primary-600 dark:text-primary-400 mt-0.5 h-4 w-4 shrink-0" />
                        <span className="leading-tight">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    fullWidth
                    variant={isSelected ? 'primary' : 'outline'}
                    className={`h-12 rounded-xl text-sm font-bold transition-all ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-lg hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200'
                        : 'border-slate-200 text-slate-900 hover:border-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-white/5'
                    }`}
                  >
                    {isSelected ? 'Paket Terpilih' : 'Pilih Paket'}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="z-20 border-t border-slate-200 bg-white/80 p-4 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-end">
          <Button
            variant="primary"
            onClick={() => changeStep('jump', 'customize')}
            disabled={!selectedPlanId}
            className="bg-primary-600 hover:bg-primary-700 h-12 rounded-full px-8 text-base font-bold text-white shadow-xl disabled:opacity-50 disabled:shadow-none dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Lanjut Kustomisasi
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationStep;
