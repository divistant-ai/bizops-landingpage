'use client';

import { Activity, LayoutGrid, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';

import {
  ADVANCED_MODULES,
  CORE_MODULES,
  SPECIALIZED_MODULES,
} from '../../../../data/pricingAssessmentModules';
import { ModuleSelector } from '../../components/ModuleSelector';

export function BusinessModulesStep() {
  const t = useTranslations('Pricing');
  return (
    <div className="mx-auto max-w-5xl space-y-12">
      <div className="text-center">
        <h2 className="bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-white dark:via-slate-200 dark:to-white">
          {t('calculator_step_modules')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Pilih modul yang sesuai dengan kebutuhan operasional bisnis Anda.
          <br className="hidden sm:block" />
          <span className="text-sm font-medium text-slate-500">
            Biaya disesuaikan dengan kompleksitas modul yang dipilih.
          </span>
        </p>
      </div>

      <div className="space-y-10">
        {/* Core Operations */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3 dark:border-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100/50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              <LayoutGrid className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Core Operations</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Modul dasar untuk fondasi operasional perusahaan.</p>
            </div>
          </div>
          <ModuleSelector modules={CORE_MODULES} />
        </section>

        {/* Specialized */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3 dark:border-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100/50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
              <Settings className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Specialized Modules</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Fungsionalitas spesifik untuk industri tertentu.</p>
            </div>
          </div>
          <ModuleSelector modules={SPECIALIZED_MODULES} />
        </section>

        {/* Advanced */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3 dark:border-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100/50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Advanced Add-ons</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Tingkatkan efisiensi dengan otomatisasi dan analitik.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ModuleSelector modules={ADVANCED_MODULES} />
          </div>
        </section>
      </div>
    </div>
  );
}
