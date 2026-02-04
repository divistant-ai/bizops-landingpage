'use client';

import { Lock, RefreshCw, Server, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
            bg: 'bg-green-500/10',
          },
          {
            icon: Lock,
            title: t('security_2_title'),
            desc: t('security_2_desc'),
            color: 'text-blue-500 dark:text-blue-400',
            bg: 'bg-blue-500/10',
          },
          {
            icon: Server,
            title: t('security_3_title'),
            desc: t('security_3_desc'),
            color: 'text-purple-500 dark:text-purple-400',
            bg: 'bg-purple-500/10',
          },
          {
            icon: RefreshCw,
            title: t('security_4_title'),
            desc: t('security_4_desc'),
            color: 'text-amber-500 dark:text-amber-400',
            bg: 'bg-amber-500/10',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:shadow-blue-500/5"
          >
            <div
              className={`mb-2 rounded-2xl p-4 transition-transform duration-300 group-hover:scale-110 ${item.bg} ${item.color}`}
            >
              <item.icon className="h-8 w-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
