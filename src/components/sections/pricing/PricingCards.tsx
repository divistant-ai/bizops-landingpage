'use client';

import { Check, Sparkles, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button, CardSlider } from '@/components/ui';

type PricingCardsProps = {
  annual: boolean;
};

export function PricingCards({ annual }: PricingCardsProps) {
  const t = useTranslations('Pricing');

  return (
    <div className="mb-24">
      <CardSlider
        desktopClassName="md:grid md:grid-cols-3 md:gap-8 md:items-start"
        mobileItemWidth="w-[85vw] sm:w-[350px]"
        className="pb-12"
      >
        {/* Plan 1: Business */}
        <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/10 dark:bg-slate-900/40 dark:hover:border-blue-500/30">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('plan_business_name')}
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {t('plan_business_desc')}
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {t('price_idr')}
              </span>
              <span className="text-5xl leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white">
                {annual ? '2.5' : '3'}
              </span>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                {t('price_million')}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-slate-500 dark:text-slate-400">
                {t('price_per_month')}
              </span>
              {annual && (
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {t('price_save_yearly', { amount: '6 Jt' })}
                </span>
              )}
            </div>
          </div>

          <div className="mb-8">
            <Link href="/demo?plan=business" className="block w-full">
              <Button
                size="md"
                fullWidth
                variant="outline"
                className="h-12 w-full border-slate-200 font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
              >
                {t('plan_business_cta')}
              </Button>
            </Link>
          </div>

          <div className="grow space-y-4 border-t border-slate-200/60 pt-8 dark:border-white/10">
            <p className="text-sm font-bold tracking-wider text-slate-900 dark:text-white">
              {t('features_heading')}
            </p>
            {[
              t('plan_business_feature_1'),
              t('plan_business_feature_2'),
              t('plan_business_feature_3'),
              t('plan_business_feature_4'),
              t('plan_business_feature_5'),
            ].map((f, i) => (
              <div key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="mt-0.5 min-w-[18px]">
                  <Check className="h-4.5 w-4.5 text-blue-500 dark:text-blue-400" />
                </div>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Plan 2: Growth (Popular) */}
        <div className="relative z-10 flex h-full flex-col rounded-[2rem] bg-slate-900 p-[2px] shadow-2xl shadow-blue-500/20 md:origin-top md:scale-110 dark:shadow-blue-900/30">
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 rounded-[2rem] bg-linear-to-b from-blue-400 via-indigo-500 to-purple-600 opacity-100" />

          <div className="relative flex h-full flex-col rounded-[calc(2rem-2px)] bg-slate-50 p-8 dark:bg-slate-950">
            <div className="absolute -top-6 right-0 left-0 flex justify-center">
              <div className="flex items-center gap-1.5 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase shadow-lg shadow-blue-500/30">
                <Zap className="h-3.5 w-3.5 fill-current" />
                {t('plan_growth_badge')}
              </div>
            </div>

            <div className="mt-4 mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t('plan_growth_name')}
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {t('plan_growth_desc')}
              </p>
            </div>

            <div className="mb-8 rounded-2xl bg-white/50 p-6 ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {t('price_idr')}
                </span>
                <span className="bg-linear-to-r from-slate-900 to-slate-600 bg-clip-text text-5xl leading-tight font-black tracking-tight text-transparent dark:from-white dark:to-slate-300">
                  {annual ? '7.5' : '9'}
                </span>
                <span className="text-xl font-bold text-slate-900 dark:text-white">
                  {t('price_million')}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  {t('price_per_month')}
                </span>
                {annual && (
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                    {t('price_save_yearly', { amount: '18 Jt' })}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-8">
              <Link href="/demo?plan=growth" className="block w-full">
                <Button
                  fullWidth
                  variant="clay"
                  size="lg"
                  className="h-14 w-full text-lg font-bold shadow-xl shadow-blue-500/20"
                >
                  {t('plan_growth_cta')}
                </Button>
              </Link>
            </div>

            <div className="grow space-y-4 border-t border-slate-200 pt-8 dark:border-white/10">
              <p className="text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400">
                {t('plan_growth_prefix')}
              </p>
              {[
                t('plan_growth_feature_1'),
                t('plan_growth_feature_2'),
                t('plan_growth_feature_3'),
                t('plan_growth_feature_4'),
                t('plan_growth_feature_5'),
                t('plan_growth_feature_6'),
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex gap-3 text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  <div className="mt-0.5 min-w-[18px]">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                      <Check className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plan 3: Enterprise */}
        <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/5 dark:border-white/10 dark:bg-slate-900/40 dark:hover:border-amber-500/30">
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              {t('plan_enterprise_name')}
              <Sparkles className="h-5 w-5 text-amber-500" />
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {t('plan_enterprise_desc')}
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white">
                {t('plan_enterprise_price')}
              </span>
            </div>
            <div className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              {t('plan_enterprise_price_desc')}
            </div>
          </div>

          <div className="mb-8">
            <Link href="/contact" className="block w-full">
              <Button
                size="md"
                fullWidth
                variant="outline"
                className="h-12 w-full border-slate-200 font-bold text-slate-700 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-amber-500/50 dark:hover:bg-amber-950/30 dark:hover:text-amber-400"
              >
                {t('plan_enterprise_cta')}
              </Button>
            </Link>
          </div>

          <div className="grow space-y-4 border-t border-slate-200/60 pt-8 dark:border-white/10">
            <p className="text-sm font-bold tracking-wider text-slate-900 dark:text-white">
              {t('plan_enterprise_prefix')}
            </p>
            {[
              t('plan_enterprise_feature_1'),
              t('plan_enterprise_feature_2'),
              t('plan_enterprise_feature_3'),
              t('plan_enterprise_feature_4'),
              t('plan_enterprise_feature_5'),
              t('plan_enterprise_feature_6'),
            ].map((f, i) => (
              <div key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="mt-0.5 min-w-[18px]">
                  <Check className="h-4.5 w-4.5 text-amber-500 dark:text-amber-400" />
                </div>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </CardSlider>
    </div>
  );
}
