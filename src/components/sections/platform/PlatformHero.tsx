'use client';

import { ArrowRight, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Container } from '@/components/layout';

export const PlatformHero = () => {
  const t = useTranslations('Platform');

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/4 h-[800px] w-[800px] animate-pulse rounded-full bg-gradient-to-br from-blue-600/30 to-transparent blur-3xl"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute -right-1/4 -bottom-1/2 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-indigo-600/20 to-transparent blur-3xl"
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/4 right-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)]" />

      <Container size="7xl" className="relative z-10 flex min-h-[90vh] items-center py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">{t('badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              {t('hero_title_1')}
              {' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {t('hero_title_2')}
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path
                    d="M2 10C50 2 100 2 150 6C200 10 250 6 298 2"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="50%" stopColor="#22D3EE" />
                      <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mb-10 text-lg leading-relaxed text-slate-400 md:text-xl">
              {t('hero_description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/30"
              >
                {t('cta_demo')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/product-tour"
                className="flex h-14 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-8 font-medium text-slate-300 backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800"
              >
                <Play className="h-4 w-4" />
                {t('cta_pricing')}
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>Enterprise SLA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>24/7 Local Support</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Floating Dashboard Cards */}
          <div className="relative hidden lg:block">
            {/* Main Dashboard Card */}
            <div className="relative z-20 rounded-2xl border border-slate-700/50 bg-slate-800/80 p-1 shadow-2xl shadow-slate-900/50 backdrop-blur-xl">
              <div className="rounded-xl bg-slate-900/90 p-6">
                {/* Header bar */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="h-6 w-32 rounded-full bg-slate-800" />
                </div>

                {/* Stats row */}
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-4 ring-1 ring-blue-500/20">
                    <div className="text-2xl font-bold text-white">12.4K</div>
                    <div className="text-xs text-slate-400">Active Users</div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 p-4 ring-1 ring-emerald-500/20">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-xs text-slate-400">Uptime</div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 p-4 ring-1 ring-violet-500/20">
                    <div className="text-2xl font-bold text-white">2.1s</div>
                    <div className="text-xs text-slate-400">Avg Response</div>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="h-32 rounded-xl bg-slate-800/80 p-4 ring-1 ring-slate-700/50">
                  <div className="flex h-full items-end gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-cyan-400"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card 1 - Top right */}
            <div className="absolute -top-8 -right-8 z-30 rounded-xl border border-slate-700/50 bg-slate-800/90 p-4 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30">
                  <div className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">All Systems</div>
                  <div className="text-xs text-emerald-400">Operational</div>
                </div>
              </div>
            </div>

            {/* Floating card 2 - Bottom left */}
            <div className="absolute -bottom-4 -left-12 z-30 rounded-xl border border-slate-700/50 bg-slate-800/90 p-4 shadow-xl backdrop-blur-xl">
              <div className="mb-2 text-xs font-medium text-slate-400">Revenue Today</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">Rp 24.5M</span>
                <span className="text-xs font-medium text-emerald-400">+12.5%</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
};
