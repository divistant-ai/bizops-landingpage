'use client';

import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Container, Section } from '@/components/layout';

type ModuleItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
};

type ModulesBentoGridProps = {
  modules: ModuleItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
};

export const ModulesBentoGrid: React.FC<ModulesBentoGridProps> = ({
  modules,
  title,
  subtitle,
  badge,
}) => {
  const t = useTranslations('Platform');

  // Color schemes for each module - using gradients for premium look
  const getModuleColor = (_id: string, index: number) => {
    const colorSchemes = [
      { gradient: 'from-pink-500 to-rose-500', bg: 'bg-pink-50', text: 'text-pink-600', darkBg: 'dark:bg-pink-950/30', border: 'border-pink-100 dark:border-pink-900/30' },
      { gradient: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50', text: 'text-emerald-600', darkBg: 'dark:bg-emerald-950/30', border: 'border-emerald-100 dark:border-emerald-900/30' },
      { gradient: 'from-blue-500 to-indigo-500', bg: 'bg-blue-50', text: 'text-blue-600', darkBg: 'dark:bg-blue-950/30', border: 'border-blue-100 dark:border-blue-900/30' },
      { gradient: 'from-amber-500 to-orange-500', bg: 'bg-amber-50', text: 'text-amber-600', darkBg: 'dark:bg-amber-950/30', border: 'border-amber-100 dark:border-amber-900/30' },
      { gradient: 'from-violet-500 to-purple-500', bg: 'bg-violet-50', text: 'text-violet-600', darkBg: 'dark:bg-violet-950/30', border: 'border-violet-100 dark:border-violet-900/30' },
      { gradient: 'from-slate-600 to-slate-700', bg: 'bg-slate-100', text: 'text-slate-700', darkBg: 'dark:bg-slate-900/50', border: 'border-slate-200 dark:border-slate-800' },
    ];
    return colorSchemes[index % colorSchemes.length];
  };

  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 dark:from-slate-900 dark:to-slate-950">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_50%)]" />

      <Container size="7xl" className="relative">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 px-4 py-2 text-sm font-semibold text-blue-600 ring-1 ring-blue-500/20 dark:from-blue-500/20 dark:to-emerald-500/20 dark:text-blue-400 dark:ring-blue-400/30">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            {badge || 'Core Modules'}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            {title || t('modules_title')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {subtitle || t('modules_subtitle')}
          </p>
        </div>

        {/* 2x3 Grid - Equal sized cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const colors = getModuleColor(module.id, index);

            return (
              <Link
                key={module.id}
                href={`/platform/modules/${module.id}`}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border ${colors?.border} bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900/80`}
              >
                {/* Top gradient accent */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colors?.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {/* Icon with gradient background */}
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${colors?.gradient} shadow-lg`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-slate-700 dark:text-white dark:group-hover:text-slate-100">
                    {module.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {module.subtitle}
                  </p>
                </div>

                {/* Footer link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900 transition-all duration-300 group-hover:gap-3 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  <span>{t('view_detail')}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-gradient-to-br ${colors?.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`} />
              </Link>
            );
          })}
        </div>

        {/* View all modules link */}
        <div className="mt-12 text-center">
          <Link
            href="/platform/modules"
            className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 transition-all hover:gap-3 dark:text-blue-400"
          >
            {t('view_all_modules')}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};
