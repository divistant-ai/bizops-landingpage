'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Users, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

type ValuesGridProps = {
  className?: string;
};

export function ValuesGrid({ className = '' }: ValuesGridProps) {
  const t = useTranslations('About');
  const icons = [Zap, ShieldCheck, Users];

  return (
    <section className={`relative overflow-hidden bg-slate-100 py-24 dark:bg-slate-900 ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-[120px] dark:bg-blue-600/10" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-indigo-600/5 blur-[120px] dark:bg-indigo-600/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            {t('values_title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-slate-600 dark:text-slate-300">
            {t('values_subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((idx) => {
            const Icon = icons[idx - 1] || Users;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx - 1) * 0.1 }}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-slate-50 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-indigo-500/10" />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110 dark:bg-blue-500/20 dark:text-blue-400">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                    {t(`value_${idx}_title` as any)}
                  </h3>
                  <p className="mb-6 leading-relaxed text-slate-700 italic dark:text-slate-300">
                    "{t(`value_${idx}_manifesto` as any)}"
                  </p>
                  <div className="border-t border-slate-200 pt-6 dark:border-white/10">
                    <p className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-500" />
                      {t(`value_${idx}_proof` as any)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
