'use client';

import { ArrowRight, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { sectionPaddingHybrid } from '@/design-tokens';

export function PricingComparisonSection() {
  const t = useTranslations('Homepage');

  return (
    <Section
      id="pricing-comparison"
      className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />
        <div className="absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-12 text-center lg:mb-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-linear-to-r from-slate-100 to-slate-50 px-4 py-2 text-sm font-bold tracking-wider uppercase dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
          <span className="text-slate-600 dark:text-slate-400">
            {t('pricing_comparison_badge' as any)}
          </span>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          {t('pricing_title')}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {t('pricing_desc')}
        </p>
      </div>

      {/* VS Comparison Cards */}
      <div className="relative z-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Problem Card - "Before" Style */}
        <div className="group relative">
          <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-red-500 via-red-600 to-rose-600 p-1">
            <div className="h-full rounded-[22px] bg-white p-6 sm:p-8 dark:bg-slate-900">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30">
                    <X className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {t('pricing_problem_title')}
                    </h3>
                    <p className="text-sm font-medium text-red-500">
                      {t('pricing_old_approach' as any)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pain Points */}
              <ul className="mb-8 space-y-4">
                {[
                  'pricing_problem_1',
                  'pricing_problem_2',
                  'pricing_problem_3',
                  'pricing_problem_4',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/50 p-3 dark:border-red-900/30 dark:bg-red-950/20"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
                      <X className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {t(item as any)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Cost Footer */}
              <div className="mt-auto border-t-2 border-dashed border-red-200 pt-6 dark:border-red-900/50">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="mb-1 text-xs font-bold tracking-wider text-red-500 uppercase">
                      {t('pricing_hidden_cost')}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                        15jt
                      </span>
                      <span className="text-lg text-slate-500">++</span>
                      <span className="text-sm text-slate-400">
                        /
                        {t('month')}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30">
                    <ArrowUpRight className="h-6 w-6 text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Card - "After" Style */}
        <div className="group relative">
          {/* Glow effect */}
          <div className="via-primary-500 absolute -inset-1 rounded-[28px] bg-linear-to-r from-emerald-500 to-emerald-500 opacity-20 blur-lg transition-opacity duration-500 group-hover:opacity-30" />

          <div className="via-primary-500 relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-emerald-500 to-emerald-600 p-1">
            <div className="h-full rounded-[22px] bg-linear-to-br from-white to-emerald-50/50 p-6 sm:p-8 dark:from-slate-900 dark:to-emerald-950/20">
              {/* Recommended Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <div className="to-primary-500 flex items-center gap-1.5 rounded-full bg-linear-to-r from-emerald-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  {t('pricing_recommended')}
                </div>
              </div>

              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="to-primary-500 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t('pricing_solution_title')}
                  </h3>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {t('bizops_platform' as any)}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <ul className="mb-8 space-y-4">
                {[
                  'pricing_solution_1',
                  'pricing_solution_2',
                  'pricing_solution_3',
                  'pricing_solution_4',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3 dark:border-emerald-900/30 dark:bg-emerald-950/30"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-md shadow-emerald-500/30">
                      <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {t(item as any)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Pricing Footer */}
              <div className="to-primary-500/10 dark:to-primary-500/20 mt-auto rounded-2xl border border-emerald-200/50 bg-linear-to-br from-emerald-500/10 p-5 dark:border-emerald-800/50 dark:from-emerald-500/20">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                      {t('pricing_starting_from')}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                        {t('pricing_amount' as any)}
                      </span>
                      <span className="text-sm text-slate-500">
                        /
                        {t('month')}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{t('pricing_subtitle')}</p>
                  </div>
                  <div className="to-primary-500 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 shadow-lg shadow-emerald-500/30">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="to-primary-500 hover:to-primary-600 h-12 w-full border-0 bg-linear-to-r from-emerald-500 text-base font-bold text-white shadow-lg shadow-emerald-500/30 hover:from-emerald-600 hover:shadow-xl hover:shadow-emerald-500/40"
                >
                  <Link href="/tools/pricing-calculator">{t('cta_view_pricing')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VS Badge - Center */}
      <div className="absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-100 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-800">
          <span className="text-xl font-black text-slate-400">VS</span>
        </div>
      </div>
    </Section>
  );
}
