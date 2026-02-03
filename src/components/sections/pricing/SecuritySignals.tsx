'use client';

import { useTranslations } from 'next-intl';
import { Shield, Lock, Server, RefreshCw } from 'lucide-react';

export function SecuritySignals() {
  const t = useTranslations('Pricing');

  return (
    <div className="mb-32">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {t('security_heading')}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Shield,
            title: t('security_1_title'),
            desc: t('security_1_desc'),
            color: 'text-green-500 dark:text-green-400',
          },
          {
            icon: Lock,
            title: t('security_2_title'),
            desc: t('security_2_desc'),
            color: 'text-blue-500 dark:text-blue-400',
          },
          {
            icon: Server,
            title: t('security_3_title'),
            desc: t('security_3_desc'),
            color: 'text-purple-500 dark:text-purple-400',
          },
          {
            icon: RefreshCw,
            title: t('security_4_title'),
            desc: t('security_4_desc'),
            color: 'text-amber-500 dark:text-amber-400',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-200 hover:border-slate-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600"
          >
            <div
              className={`mb-4 rounded-xl bg-slate-50 p-3 shadow-sm dark:bg-slate-800 ${item.color}`}
            >
              <item.icon className="h-8 w-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
