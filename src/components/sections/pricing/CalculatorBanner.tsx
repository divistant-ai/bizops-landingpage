'use client';

import { ArrowRight, Calculator } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui';

export function CalculatorBanner() {
  const t = useTranslations('Pricing');

  return (
    <div className="mb-24 md:mb-32">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/30 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative z-10 flex flex-col items-center gap-8 p-8 md:p-16 lg:flex-row">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
              <Calculator className="h-3.5 w-3.5" />
              {t('calculator_badge')}
            </div>
            <h3 className="text-3xl leading-tight font-extrabold text-white md:text-4xl">
              {t('calculator_title')}
              <br />
              <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t('calculator_subtitle')}
              </span>
            </h3>
            <p className="text-lg leading-relaxed text-slate-300">
              {t('calculator_description')}
            </p>
            <Link href="/tools/pricing-calculator" className="inline-block w-full md:w-auto">
              <Button
                variant="white"
                size="lg"
                className="w-full bg-white px-8 text-lg font-bold text-slate-900 shadow-xl shadow-blue-900/50 transition-all duration-300 hover:scale-105 hover:bg-slate-50 hover:shadow-blue-900/70 md:w-auto"
              >
                {t('calculator_cta')}
                {' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Abstract Graphic */}
          <div className="flex w-full justify-center lg:w-1/3 lg:justify-end">
            <div className="flex h-64 w-64 rotate-3 transform flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-transform duration-500 hover:rotate-0">
              <div className="space-y-4 opacity-80">
                <div className="h-4 w-3/4 rounded bg-white/20"></div>
                <div className="h-4 w-full rounded bg-white/10"></div>
                <div className="h-4 w-5/6 rounded bg-white/10"></div>
                <div className="mt-4 h-12 w-full rounded-lg bg-blue-500/80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
