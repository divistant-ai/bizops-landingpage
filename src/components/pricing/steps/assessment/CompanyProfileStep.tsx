'use client';

import { Building2, Globe, Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { industriesData as solutionsContent } from '@/data/solutionsContent';

import { usePricingContext } from '../../PricingContext';

export function CompanyProfileStep() {
  const t = useTranslations('Pricing');
  const { assessment, updateAssessment } = usePricingContext();

  const INDUSTRIES = Object.entries(solutionsContent).map(([id, content]) => ({
    id,
    name: content.title,
    icon: content.icon,
  }));

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <div className="text-center">
        <h2 className="bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-white dark:via-slate-200 dark:to-white">
          {t('calculator_step_profile')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Mari mulai dengan memahami skala bisnis Anda untuk menentukan infrastruktur yang tepat.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* User Capacity Slider */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-slate-900">
          <div className="mb-6 flex items-center justify-between">
            <label className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
              <div className="bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 flex h-8 w-8 items-center justify-center rounded-lg">
                <Rocket className="h-5 w-5" />
              </div>
              User Capacity
            </label>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-slate-900 dark:text-white">
                {assessment.userCount}
              </span>
              <span className="text-sm font-medium text-slate-500">users</span>
            </div>
          </div>

          <div className="relative mb-2 h-12 pt-4">
            <input
              type="range"
              min="5"
              max="500"
              step="5"
              value={assessment.userCount}
              onChange={e => updateAssessment('userCount', Number.parseInt(e.target.value))}
              className="accent-primary-600 hover:accent-primary-500 h-3 w-full cursor-pointer appearance-none rounded-full bg-slate-100 transition-all outline-none focus:ring-0 dark:bg-slate-800"
            />
            {/* Range Labels */}
            <div className="mt-4 flex justify-between text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              <span>Startup (5)</span>
              <span>SME (50+)</span>
              <span>Enterprise (200+)</span>
            </div>
          </div>
        </div>

        {/* Branch Count Slider */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-slate-900">
          <div className="mb-6 flex items-center justify-between">
            <label className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                <Building2 className="h-5 w-5" />
              </div>
              Locations
            </label>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-slate-900 dark:text-white">
                {assessment.branchCount}
              </span>
              <span className="text-sm font-medium text-slate-500">branches</span>
            </div>
          </div>

          <div className="relative mb-2 h-12 pt-4">
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={assessment.branchCount}
              onChange={e => updateAssessment('branchCount', Number.parseInt(e.target.value))}
              className="h-3 w-full cursor-pointer appearance-none rounded-full bg-slate-100 accent-amber-600 transition-all outline-none hover:accent-amber-500 focus:ring-0 dark:bg-slate-800"
            />
            <div className="mt-4 flex justify-between text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              <span>Single HQ</span>
              <span>Multi-Branch</span>
              <span>National</span>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Selection */}
      <div className="space-y-6">
        <label className="flex items-center gap-2 text-sm font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
          <Globe className="h-4 w-4" />
          Industry Sector
        </label>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {INDUSTRIES.map(ind => (
            <div
              key={ind.id}
              onClick={() => updateAssessment('industry', ind.id)}
              className={`group relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border p-4 text-center transition-all duration-300 ${
                assessment.industry === ind.id
                  ? 'border-transparent bg-slate-900 shadow-xl ring-2 ring-slate-900 ring-offset-2 dark:bg-white dark:ring-white dark:ring-offset-slate-900'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20'
              }`}
            >
              <ind.icon
                className={`h-6 w-6 transition-transform duration-300 group-hover:scale-110 ${
                  assessment.industry === ind.id
                    ? 'text-white dark:text-slate-900'
                    : 'text-slate-500 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white'
                }`}
              />
              <span
                className={`text-xs leading-tight font-semibold ${
                  assessment.industry === ind.id
                    ? 'text-white dark:text-slate-900'
                    : 'text-slate-600 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white'
                }`}
              >
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
