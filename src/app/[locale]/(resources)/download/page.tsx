'use client';

import { motion } from 'framer-motion';
import {
  Bell,
  CheckCircle2,
  Download,
  FileCode,
  Fingerprint,
  Layers,
  ShieldCheck,
  Smartphone,
  Star,
  WifiOff,
  Zap,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Section } from '@/components/layout';
import Container from '@/components/layout/Container';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Grid, Typography } from '@/components/ui';
import Stack from '@/components/ui/Stack';

export default function DownloadPage() {
  const t = useTranslations('Download');

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 font-sans transition-colors duration-500 dark:bg-slate-950">
      {/* Enhanced Background Ambience */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] h-[800px] w-[800px] animate-pulse rounded-full bg-blue-200/40 blur-[120px] dark:bg-blue-900/20"></div>
        <div className="absolute right-[0%] bottom-[20%] h-[800px] w-[800px] animate-pulse rounded-full bg-indigo-200/40 blur-[120px] delay-1000 dark:bg-indigo-900/20"></div>
        <div className="absolute top-[40%] left-[30%] h-[400px] w-[400px] rounded-full bg-purple-200/30 blur-[100px] dark:bg-purple-900/10"></div>
      </div>

      {/* Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>

      {/* --- HERO SECTION --- */}
      <Section className="relative z-10 pt-32 pb-20">
        <Container className="px-4 md:px-6 lg:px-8" size="7xl">
          <Grid cols={2} gap={12} className="items-center lg:gap-20">
            {/* Left Content */}
            <div className="relative z-10 flex flex-col items-start text-left">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50/80 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase shadow-lg shadow-blue-500/10 backdrop-blur-md dark:bg-blue-900/20 dark:text-blue-400">
                <Smartphone className="h-4 w-4 animate-bounce" />
                {t('badge')}
              </div>

              <Typography
                variant="h1"
                as="h1"
                className="mb-6 text-5xl leading-tight font-extrabold tracking-tight text-slate-900 lg:text-7xl dark:text-white"
              >
                {t('hero_title_line1')}
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                  {t('hero_title_line2')}
                </span>
              </Typography>

              <Typography
                variant="body"
                className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600 lg:text-xl dark:text-slate-400"
              >
                {t('hero_subtitle')}
              </Typography>

              {/* Store Buttons */}
              <Stack direction="vertical" gap={4} className="mb-12 w-full sm:w-auto">
                <Link
                  href="https://apps.apple.com/id/app/bizops/id6733236612?l=id"
                  target="_blank"
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-slate-900 px-7 py-4 text-white shadow-xl shadow-slate-900/20 transition-all hover:scale-[1.02] hover:bg-slate-800 hover:shadow-2xl dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <svg className="relative z-10 h-9 w-9 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.12-1.02.05-2.27.69-3.02 1.55-.67.78-1.26 2.03-1.11 3.17 1.14.09 2.3-.63 3.06-1.6z" />
                  </svg>
                  <div className="relative z-10 text-left leading-none">
                    <div className="mb-1.5 text-[11px] font-medium tracking-wide uppercase opacity-80">
                      {t('download_on')}
                    </div>
                    <div className="font-sans text-xl font-bold">{t('app_store')}</div>
                  </div>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.divistant.ex_mobile.ex_mobile"
                  target="_blank"
                  className="group relative flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/50 px-7 py-4 text-slate-900 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-blue-500/30 hover:bg-white hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:hover:bg-slate-800"
                >
                  <svg className="relative z-10 h-8 w-8 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,25.88L5.03,24.86L16.81,13.08L16.81,15.12M21.83,12.79L18.12,16.42L14.7,13L21.83,12.79M16.81,8.88L5.03,1.96L6.05,0.94L16.81,11.7V8.88Z"
                      transform="rotate(45 12 12)"
                    />
                  </svg>
                  <div className="relative z-10 text-left leading-none">
                    <div className="mb-1.5 text-[11px] font-medium tracking-wide uppercase opacity-80">
                      {t('get_it_on')}
                    </div>
                    <div className="font-sans text-xl font-bold">{t('google_play')}</div>
                  </div>
                </Link>
              </Stack>

              {/* QR Code & Ratings */}
              <div className="flex items-center gap-8">
                <div className="hidden transform rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50 transition-transform duration-300 hover:rotate-2 sm:block dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
                  <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-slate-950 p-1 text-center text-[9px] leading-tight font-bold tracking-wider text-white">
                    {t('scan_to_download')}
                  </div>
                </div>
                <div className="hidden h-16 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent sm:block dark:via-slate-700"></div>
                <div>
                  <div className="mb-2 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-sm"
                      />
                    ))}
                    <span className="ml-3 text-lg font-bold text-slate-900 dark:text-white">
                      4.8
                    </span>
                  </div>
                  <Typography
                    variant="body"
                    className="text-sm font-medium text-slate-500 dark:text-slate-400"
                  >
                    {t('reviews_text')}
                  </Typography>
                </div>
              </div>
            </div>

            {/* Right Visual (Phone) */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-[100px]"></div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-[340px]"
              >
                <div className="relative overflow-hidden rounded-[3.5rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl ring-1 ring-white/20">
                  {/* Glass Reflection */}
                  <div className="pointer-events-none absolute top-0 right-0 z-30 h-full w-1/2 rounded-tr-[3rem] bg-linear-to-bl from-white/5 to-transparent"></div>

                  <div className="relative h-[680px] overflow-hidden rounded-[3rem] bg-white dark:bg-slate-950">
                    {/* Status Bar */}
                    <div className="absolute inset-x-0 top-0 z-20 flex h-8 items-center justify-between px-6 pt-2">
                      <span className="text-[10px] font-bold text-slate-900 dark:text-white">
                        9:41
                      </span>
                      <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-slate-900 opacity-20 dark:bg-white"></div>
                        <div className="h-3 w-3 rounded-full bg-slate-900 dark:bg-white"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="relative z-10 border-b border-slate-200 bg-slate-50 px-6 pt-12 pb-6 backdrop-blur-md dark:border-white/5 dark:bg-slate-900/50">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-blue-500/30">
                          BS
                        </div>
                        <div className="rounded-full bg-white p-2 shadow-sm dark:bg-white/10">
                          <Bell className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                        </div>
                      </div>
                      <Typography variant="h2" as="h2" className="text-slate-900 dark:text-white">
                        {t('good_morning')}
                      </Typography>
                      <Typography
                        variant="body"
                        className="text-sm font-medium text-slate-500 dark:text-slate-400"
                      >
                        {t('site_manager')}
                      </Typography>
                    </div>

                    {/* App Body */}
                    <Stack
                      direction="vertical"
                      gap={4}
                      className="relative z-20 h-full overflow-y-auto p-5 pb-20"
                    >
                      {/* Stats Card */}
                      <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none">
                        <div className="mb-4 flex items-center justify-between">
                          <Typography
                            variant="h3"
                            as="h3"
                            className="text-base font-bold text-slate-900 dark:text-white"
                          >
                            {t('todays_approval')}
                          </Typography>
                          <span className="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400">
                            3
                            {' '}
                            {t('pending')}
                          </span>
                        </div>
                        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-2">
                          {[1, 2, 3].map(i => (
                            <div
                              key={i}
                              className="h-11 w-11 shrink-0 rounded-full border-2 border-white bg-slate-100 shadow-sm dark:border-slate-800 dark:bg-slate-800"
                            >
                            </div>
                          ))}
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-slate-200 text-slate-400 dark:border-slate-700">
                            <PlusIcon className="h-4 w-4" />
                          </div>
                        </div>
                      </div>

                      {/* Menu Grid */}
                      <Grid cols={2} gap={3}>
                        {[
                          {
                            icon: Layers,
                            label: t('stock'),
                            color:
                              'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
                          },
                          {
                            icon: Zap,
                            label: t('sales'),
                            color:
                              'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
                          },
                          {
                            icon: FileCode,
                            label: t('report'),
                            color:
                              'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
                          },
                          {
                            icon: ShieldCheck,
                            label: t('audit'),
                            color:
                              'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex aspect-[1.1] flex-col items-center justify-center gap-3 rounded-3xl border border-slate-100 bg-white p-4 transition-all hover:scale-[1.02] hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-800"
                          >
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
                            >
                              <item.icon className="h-6 w-6" />
                            </div>
                            <Typography
                              variant="small"
                              className="font-bold text-slate-700 dark:text-slate-300"
                            >
                              {item.label}
                            </Typography>
                          </div>
                        ))}
                      </Grid>
                    </Stack>

                    {/* Floating Action Button */}
                    <div className="absolute right-6 bottom-8 z-30 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/40 transition-transform hover:scale-110 active:scale-95">
                      <Download className="h-7 w-7" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* --- FEATURES GRID --- */}
      <Section className="relative z-10 border-t border-slate-200/50 bg-white/50 py-24 backdrop-blur-xl dark:border-white/5 dark:bg-slate-900/50">
        <Container className="px-4 md:px-6 lg:px-8" size="7xl">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <Typography
              variant="h2"
              as="h2"
              className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl dark:text-white"
            >
              {t('features_title')}
            </Typography>
            <Typography
              variant="body"
              className="text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {t('features_subtitle')}
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: WifiOff,
                title: t('offline_mode_title'),
                desc: t('offline_mode_desc'),
                color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/10 dark:text-amber-400',
              },
              {
                icon: Fingerprint,
                title: t('biometric_title'),
                desc: t('biometric_desc'),
                color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/10 dark:text-blue-400',
              },
              {
                icon: Bell,
                title: t('push_notif_title'),
                desc: t('push_notif_desc'),
                color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/10 dark:text-purple-400',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 dark:hover:shadow-none"
              >
                <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-current text-slate-400 opacity-5 blur-2xl transition-opacity group-hover:opacity-10"></div>

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <Typography
                  variant="h3"
                  as="h3"
                  className="mb-3 text-xl font-bold text-slate-900 dark:text-white"
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="small"
                  className="text-base leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  {feature.desc}
                </Typography>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* --- SYSTEM REQUIREMENTS --- */}
      <Section className="relative z-10 border-t border-slate-200/50 bg-slate-50/50 py-24 dark:border-white/5 dark:bg-slate-950/50">
        <Container className="px-4 md:px-6 lg:px-8" size="7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Typography
              variant="h2"
              as="h2"
              className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl dark:text-white"
            >
              "System Requirements"
            </Typography>
            <Typography
              variant="body"
              className="text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              "Check device compatibility before downloading"
            </Typography>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* iOS */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">
                <svg
                  className="h-7 w-7 text-slate-900 dark:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.12-1.02.05-2.27.69-3.02 1.55-.67.78-1.26 2.03-1.11 3.17 1.14.09 2.3-.63 3.06-1.6z" />
                </svg>
              </div>
              <Typography
                variant="h3"
                as="h3"
                className="mb-4 text-xl font-bold text-slate-900 dark:text-white"
              >
                iOS
              </Typography>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>iOS 14.0 atau lebih baru</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>iPhone 6s atau lebih baru</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>iPad (semua model)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>120MB storage</span>
                </li>
              </ul>
            </div>

            {/* Android */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900/20">
                <svg
                  className="h-7 w-7 text-green-600 dark:text-green-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0225 3.503C15.5902 8.4797 13.8539 8.208 12 8.208c-1.8539 0-3.5902.2717-5.1367.7621L4.8408 5.4671a.4161.4161 0 00-.5677-.1521.4161.4161 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589.3432 18.6617h23.3136c0-4.0028-2.3457-7.475-5.7753-9.3403" />
                </svg>
              </div>
              <Typography
                variant="h3"
                as="h3"
                className="mb-4 text-xl font-bold text-slate-900 dark:text-white"
              >
                Android
              </Typography>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>Android 8.0 (Oreo) atau lebih baru</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>RAM 3GB minimum</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>Smartphone & Tablet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>85MB storage</span>
                </li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/20">
                <ShieldCheck className="h-7 w-7 text-purple-600 dark:text-purple-400" />
              </div>
              <Typography
                variant="h3"
                as="h3"
                className="mb-4 text-xl font-bold text-slate-900 dark:text-white"
              >
                Enterprise
              </Typography>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>MDM Support (Intune, VMWare)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>Single Sign-On (SSO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>Certificate Pinning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>Audit Logging</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* --- APP VS WEB COMPARISON --- */}
      <Section className="relative z-10 border-t border-slate-200/50 bg-white py-24 backdrop-blur-xl dark:border-white/5 dark:bg-slate-900/50">
        <Container className="px-4 md:px-6 lg:px-8" size="7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Typography
              variant="h2"
              as="h2"
              className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl dark:text-white"
            >
              "App vs Web"
            </Typography>
            <Typography
              variant="body"
              className="text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              "Compare features between mobile app and web browser"
            </Typography>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 p-4 text-center text-sm font-bold text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
              <div className="text-left">Fitur</div>
              <div>Mobile App</div>
              <div>Web Browser</div>
            </div>
            {[
              { feature: 'Offline Mode', app: true, web: false },
              { feature: 'Push Notifications', app: true, web: 'Limited' },
              { feature: 'Biometric Login', app: true, web: false },
              { feature: 'Camera/Scanner', app: 'Native', web: 'Basic' },
              { feature: 'GPS Tracking', app: 'Precise', web: 'Approximate' },
              { feature: 'File Downloads', app: true, web: true },
              { feature: 'Background Sync', app: true, web: false },
              { feature: 'Battery Optimized', app: true, web: 'N/A' },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-slate-100 p-4 last:border-b-0 dark:border-slate-800"
              >
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  {row.feature}
                </div>
                <div className="text-center">
                  {row.app === true ? (
                    <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
                  ) : row.app === false ? (
                    <span className="text-slate-300 dark:text-slate-600">—</span>
                  ) : (
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {row.app}
                    </span>
                  )}
                </div>
                <div className="text-center">
                  {row.web === true ? (
                    <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
                  ) : row.web === false ? (
                    <span className="text-slate-300 dark:text-slate-600">—</span>
                  ) : (
                    <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                      {row.web}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* --- MOBILE TESTIMONIALS --- */}
      <Section className="relative z-10 overflow-hidden bg-slate-900 py-24 text-white">
        {/* Premium Background Effects */}
        <div className="absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-[-10%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-[20%] rounded-full bg-purple-600/10 blur-[120px]" />

        <Container className="relative z-10 px-4 md:px-6 lg:px-8" size="7xl">
          <div className="grid items-start gap-20 lg:grid-cols-2">
            {/* Left Column */}
            <div className="sticky top-32">
              <span className="mb-6 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-400 uppercase">
                User Reviews
              </span>
              <h2 className="mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
                Apa Kata Pengguna Mobile Kami
              </h2>
              <p className="mb-10 text-xl leading-relaxed text-slate-300">
                Ribuan profesional di Indonesia telah beralih ke BizOps Mobile untuk produktivitas
                yang lebih baik.
              </p>

              {/* Trust Indicators */}
              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="mb-4 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Trusted by teams
                </p>
                <div className="flex gap-12">
                  <div>
                    <div className="text-3xl font-bold text-white">4.8</div>
                    <div className="text-xs text-slate-400">App Store Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">10K+</div>
                    <div className="text-xs text-slate-400">Downloads</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Testimonials Stack */}
            <div className="flex flex-col gap-6">
              {[
                {
                  quote:
                    'Approval PO jadi super cepat, tinggal tap-tap di HP. Fitur offline mode-nya lifesaver banget saat di lapangan.',
                  author: 'Andi Pratama',
                  role: 'Site Manager',
                },
                {
                  quote:
                    'Push notification-nya real-time. Saya langsung tahu kalau ada approval yang pending. Gak perlu buka laptop lagi.',
                  author: 'Budi Santoso',
                  role: 'Finance Director',
                },
                {
                  quote:
                    'UI-nya intuitif, staff lapangan saya yang kurang tech-savvy bisa langsung pakai tanpa training panjang.',
                  author: 'Dewi Kusuma',
                  role: 'Operations Manager',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:shadow-2xl"
                >
                  <div className="mb-4 flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="relative z-10 mb-8 text-lg leading-relaxed font-medium text-slate-200">
                    "
                    {item.quote}
                    "
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-white/20 bg-slate-800">
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white">
                        {item.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white">{item.author}</div>
                      <div className="text-sm text-slate-400">{item.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* --- FAQ SECTION --- */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: 'Apakah aplikasi bisa digunakan offline?',
            answer:
              'Ya! BizOps Mobile mendukung offline mode. Data tersimpan lokal di perangkat Anda dan akan sync otomatis saat koneksi internet tersedia kembali.',
          },
          {
            question: 'Bagaimana cara mengaktifkan biometric login?',
            answer:
              'Setelah login pertama kali, masuk ke Settings > Security > Biometric Lock. Aktifkan Face ID atau Fingerprint sesuai perangkat Anda.',
          },
          {
            question: 'Apakah data di aplikasi aman?',
            answer:
              'Sangat aman. Kami menggunakan enkripsi AES-256, certificate pinning, dan compliance dengan standar keamanan enterprise. Data Anda tidak tersimpan di pihak ketiga.',
          },
          {
            question: 'Bisakah saya pakai di tablet?',
            answer:
              'Tentu! Aplikasi responsive dan fully optimized untuk iPad dan Android tablet. Layout akan menyesuaikan otomatis dengan ukuran layar.',
          },
          {
            question: 'Bagaimana update aplikasi?',
            answer:
              'Update akan muncul otomatis di App Store (iOS) atau Google Play Store (Android). Untuk enterprise deployment, update dikelola melalui MDM Anda.',
          },
        ]}
      />

      {/* --- ENTERPRISE SIDELOAD --- */}
      <CTABannerSection
        title={t('enterprise_title')}
        subtitle={t('enterprise_subtitle')}
        badgeText="Enterprise Deployment"
        demoBtnText={t('download_apk')}
        demoBtnLink="/download/enterprise.apk"
        pricingBtnText={t('mdm_config')}
        pricingBtnLink="/docs/mdm"
        trustText1="Signed & Secure"
        trustText2="Corporate IT Ready"
      />
    </div>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
