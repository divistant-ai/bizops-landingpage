'use client';

import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Typography } from '@/components/ui';
import { InfiniteScrollLoop } from '@/components/ui/LazyComponents';
import { getHomeIndustriesData, getHomeRolesData } from '@/data/homeContent';
import { sectionPaddingHybrid } from '@/design-tokens';

const INDUSTRY_IMAGES = [
  'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=600&fit=crop',
];

const COLOR_THEMES = [
  {
    bg: 'bg-blue-600',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-100 dark:border-blue-900',
    overlay: 'from-blue-900/60',
  },
  {
    bg: 'bg-emerald-600',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-100 dark:border-emerald-900',
    overlay: 'from-emerald-900/60',
  },
  {
    bg: 'bg-amber-500',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-100 dark:border-amber-900',
    overlay: 'from-amber-900/60',
  },
  {
    bg: 'bg-purple-600',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-100 dark:border-purple-900',
    overlay: 'from-purple-900/60',
  },
  {
    bg: 'bg-rose-600',
    text: 'text-rose-600 dark:text-rose-400',
    border: 'border-rose-100 dark:border-rose-900',
    overlay: 'from-rose-900/60',
  },
  {
    bg: 'bg-cyan-600',
    text: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-100 dark:border-cyan-900',
    overlay: 'from-cyan-900/60',
  },
];

const ROLE_COLORS = [
  {
    bg: 'bg-blue-600',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-100 dark:border-blue-900',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    bg: 'bg-emerald-600',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-100 dark:border-emerald-900',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    bg: 'bg-amber-500',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-100 dark:border-amber-900',
    gradient: 'from-amber-500 to-amber-600',
  },
  {
    bg: 'bg-purple-600',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-100 dark:border-purple-900',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    bg: 'bg-rose-600',
    text: 'text-rose-600 dark:text-rose-400',
    border: 'border-rose-100 dark:border-rose-900',
    gradient: 'from-rose-500 to-rose-600',
  },
];

export function HomeIndustriesSection() {
  const t = useTranslations('Homepage');
  const homeIndustriesData = getHomeIndustriesData(key => t(key.replace('Homepage.', '') as any));
  const homeRolesData = getHomeRolesData(key => t(key.replace('Homepage.', '') as any));

  const industries = Object.entries(homeIndustriesData).map(([key, val]) => ({ id: key, ...val }));
  const roles = Object.entries(homeRolesData).map(([key, val]) => ({ id: key, ...val }));

  return (
    <Section
      id="industries"
      className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="bg-primary-500/5 absolute right-10 bottom-20 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Industries Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold tracking-wider uppercase">
            {t('industries_title')}
          </div>
          <Typography variant="h2" as="h2" color="default" className="mb-4">
            {t('industries_desc')}
          </Typography>
        </div>

        {/* Industries Slider */}
        <div className="-mx-5 mb-20 pt-4 pb-8 sm:-mx-6 md:-mx-8 lg:-mx-12">
          <InfiniteScrollLoop speed={40} className="py-4">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const theme = COLOR_THEMES[idx % COLOR_THEMES.length]!;

              return (
                <Link
                  key={ind.id}
                  href={`/solutions/${ind.id}`}
                  className="group mx-2 flex w-[220px] shrink-0 flex-col py-2 sm:w-[250px]"
                >
                  <div
                    className={`relative flex h-full flex-col overflow-visible rounded-2xl border bg-white dark:bg-slate-900 ${theme.border} shadow-lg transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-2xl`}
                  >
                    {/* Top image banner */}
                    <div className="relative h-44 shrink-0 overflow-hidden rounded-t-2xl">
                      <img
                        src={INDUSTRY_IMAGES[idx % INDUSTRY_IMAGES.length]}
                        alt={ind.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-linear-to-t ${theme.overlay} via-transparent to-transparent opacity-60`}
                      />
                      <div className="absolute right-0 bottom-0 left-0 h-20 bg-linear-to-t from-white to-transparent dark:from-slate-900" />
                    </div>

                    {/* Icon */}
                    <div className="relative -mt-8 shrink-0 px-5">
                      <div
                        className={`inline-flex h-16 w-16 items-center justify-center rounded-xl ${theme.bg} border-4 border-white shadow-xl dark:border-slate-900`}
                      >
                        <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5 pt-3">
                      <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-2 text-lg font-bold text-slate-900 transition-colors dark:text-white">
                        {ind.title}
                      </h3>
                      <p className="mb-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {ind.description}
                      </p>
                      <div
                        className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold ${theme.text}`}
                      >
                        <span>{t('learn_more_short' as any)}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </InfiniteScrollLoop>
        </div>

        {/* Roles Section */}
        <div className="border-t border-slate-200 pt-14 dark:border-slate-800">
          <div className="mb-10 text-center">
            <h3 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              {t('roles_title')}
            </h3>
            <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-400">
              {t('roles_desc')}
            </p>
          </div>

          {/* Roles Infinite Scroll */}
          <div className="-mx-5 pb-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
            <InfiniteScrollLoop speed={35} direction="right" className="py-2">
              {roles.map((role, idx) => {
                const Icon = role.icon;
                const theme = ROLE_COLORS[idx % ROLE_COLORS.length]!;

                return (
                  <Link
                    key={role.id}
                    href={`/role/${role.id}`}
                    className="group mx-2 block shrink-0"
                  >
                    <div
                      className={`relative h-[140px] w-[220px] overflow-hidden rounded-2xl border sm:h-[160px] sm:w-[260px] ${theme.border} bg-white transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl dark:bg-slate-900`}
                    >
                      {/* Background gradient accent */}
                      <div
                        className={`absolute top-0 right-0 h-24 w-24 bg-linear-to-br ${theme.gradient} translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-2xl`}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex h-full flex-col justify-between p-5">
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${theme.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                          >
                            <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 truncate text-base font-bold text-slate-900 transition-colors dark:text-white">
                              {role.title}
                            </h4>
                            <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                              {role.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-end">
                          <span
                            className={`text-xs font-semibold ${theme.text} flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                          >
                            {t('view_detail')}
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </InfiniteScrollLoop>
          </div>
        </div>
      </div>
    </Section>
  );
}
