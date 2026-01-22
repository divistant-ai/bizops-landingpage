'use client';

import { motion } from 'framer-motion';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Globe,
  Image as ImageIcon,
  Mail,
  Palette,
  Type,
  X,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import Container from '@/components/layout/Container';
import { CardSlider, Grid, Typography } from '@/components/ui';
import Button from '@/components/ui/Button';
import Stack from '@/components/ui/Stack';

export default function MediaKitContent() {
  const t = useTranslations('MediaKit');
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <div className="bg-slate-50 font-sans transition-colors duration-300 dark:bg-slate-950">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pb-32 dark:bg-[#0B1120] dark:text-white">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-indigo-600/20 blur-[120px]"></div>

        <Container size="5xl" className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-1.5 text-xs font-bold tracking-wider text-indigo-700 uppercase backdrop-blur-md dark:bg-slate-800/50 dark:text-indigo-300"
          >
            <Download className="h-3 w-3" /> {t('hero_badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-8 text-4xl leading-[1.1] font-extrabold tracking-tight md:text-6xl lg:text-7xl"
          >
            {t('hero_title_1')} <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-300">
              {t('hero_title_2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light text-slate-700 dark:text-slate-300"
          >
            {t('hero_subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="border-none bg-slate-900 font-bold text-white shadow-xl hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              {t('hero_download_all')} <Download className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-200 dark:border-slate-700 dark:text-white dark:hover:bg-white/10"
            >
              {t('hero_brand_guidelines')} <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </Container>
      </section>

      <Container size="7xl" className="space-y-32 py-24">
        {/* LOGO PACK */}
        <section>
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
              <ImageIcon className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h2" as="h2">
                {t('logo_title')}
              </Typography>
              <Typography variant="body" className="text-slate-500 dark:text-slate-400">
                {t('logo_subtitle')}
              </Typography>
            </div>
          </div>

          <Grid cols={2} gap={8}>
            {/* Primary Logo */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="bg-opacity-50 mb-10 flex min-h-[160px] w-full flex-grow items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
                <Image
                  src="/assets/images/Logo BizOps - Light.svg"
                  alt="BizOps Logo Dark"
                  width={256}
                  height={54}
                  className="h-auto w-64"
                />
              </div>
              <div className="w-full border-t border-slate-100 pt-6 dark:border-slate-700">
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <Typography variant="h3" as="h3" className="text-slate-900 dark:text-white">
                      {t('logo_primary_dark')}
                    </Typography>
                    <Typography variant="small" className="text-slate-500 dark:text-slate-400">
                      {t('logo_primary_dark_desc')}
                    </Typography>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-8 text-xs">
                      SVG
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 text-xs">
                      PNG
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Inverse/Dark Logo */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-10 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="absolute inset-0 bg-slate-800/50 mix-blend-overlay"></div>
              <div className="relative z-10 mb-10 flex min-h-[160px] w-full flex-grow items-center justify-center">
                <Image
                  src="/assets/images/Logo BizOps - Dark.svg"
                  alt="BizOps Logo Light"
                  width={256}
                  height={54}
                  className="h-auto w-64"
                />
              </div>
              <div className="relative z-10 w-full border-t border-slate-700/50 pt-6">
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <Typography variant="h3" as="h3" className="text-white">
                      {t('logo_primary_white')}
                    </Typography>
                    <Typography variant="small" className="text-slate-400">
                      {t('logo_primary_white_desc')}
                    </Typography>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 border-slate-600 text-xs text-white hover:bg-slate-800"
                    >
                      SVG
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 border-slate-600 text-xs text-white hover:bg-slate-800"
                    >
                      PNG
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Grid>

          {/* Do's and Don'ts */}
          <Grid cols={4} gap={6} className="mt-8">
            <div className="flex flex-col items-center rounded-2xl border border-green-100 bg-green-50 p-6 text-center dark:border-green-900/30 dark:bg-green-900/10">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-slate-300">
                <Check className="h-4 w-4" />
              </div>
              <Typography variant="body" className="dark:text-green-400">
                {t('dos_donts_1')}
              </Typography>
            </div>
            <div className="flex flex-col items-center rounded-2xl border border-red-100 bg-red-50 p-6 text-center dark:border-red-900/30 dark:bg-red-900/10">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-slate-300">
                <X className="h-4 w-4" />
              </div>
              <Typography variant="body" className="dark:text-red-400">
                {t('dos_donts_2')}
              </Typography>
            </div>
            <div className="flex flex-col items-center rounded-2xl border border-red-100 bg-red-50 p-6 text-center dark:border-red-900/30 dark:bg-red-900/10">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-slate-300">
                <X className="h-4 w-4" />
              </div>
              <Typography variant="body" className="dark:text-red-400">
                {t('dos_donts_3')}
              </Typography>
            </div>
            <div className="flex flex-col items-center rounded-2xl border border-red-100 bg-red-50 p-6 text-center dark:border-red-900/30 dark:bg-red-900/10">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-slate-300">
                <X className="h-4 w-4" />
              </div>
              <Typography variant="body" className="dark:text-red-400">
                {t('dos_donts_4')}
              </Typography>
            </div>
          </Grid>
        </section>

        {/* COLOR PALETTE */}
        <section>
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Palette className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h2" as="h2">
                {t('colors_title')}
              </Typography>
              <Typography variant="body" className="text-slate-500 dark:text-slate-400">
                {t('colors_subtitle')}
              </Typography>
            </div>
          </div>

          <div className="md:hidden">
            <CardSlider mobileItemWidth="w-[85vw] sm:w-[350px]">
              <motion.div whileHover={{ y: -5 }} className="group h-full">
                <div className="bg-primary-600 group-hover:shadow-primary-500/30 mb-4 flex h-40 items-center justify-center rounded-3xl shadow-lg transition-shadow">
                  <span className="text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
                    Primary
                  </span>
                </div>
                <div className="flex items-center justify-between px-2">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Electric Blue</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Brand Primary</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('#2563EB', 'c1')}
                    className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    {copied === 'c1' ? (
                      <Check className="h-3 w-3 text-green-500 dark:text-green-400" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                    {copied !== 'c1' && '#2563EB'}
                  </button>
                </div>
              </motion.div>
            </CardSlider>
          </div>

          <Grid cols={4} gap={8} className="hidden md:grid">
            <motion.div whileHover={{ y: -5 }} className="group h-full">
              <div className="bg-primary-600 group-hover:shadow-primary-500/30 mb-4 flex h-40 items-center justify-center rounded-3xl shadow-lg transition-shadow">
                <span className="text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
                  Primary
                </span>
              </div>
              <div className="flex items-center justify-between px-2">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {t('color_primary')}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t('color_primary_desc')}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('#2563EB', 'c1')}
                  className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  {copied === 'c1' ? (
                    <Check className="h-3 w-3 text-green-500 dark:text-green-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied !== 'c1' && '#2563EB'}
                </button>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="group h-full">
              <div className="mb-4 flex h-40 items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 shadow-lg">
                <span className="text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
                  Neutral
                </span>
              </div>
              <div className="flex items-center justify-between px-2">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {t('color_neutral')}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t('color_neutral_desc')}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('#0F172A', 'c2')}
                  className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  {copied === 'c2' ? (
                    <Check className="h-3 w-3 text-green-500 dark:text-green-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied !== 'c2' && '#0F172A'}
                </button>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="group h-full">
              <div className="mb-4 flex h-40 items-center justify-center rounded-3xl bg-emerald-500 shadow-lg transition-shadow group-hover:shadow-emerald-500/30">
                <span className="text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
                  Success
                </span>
              </div>
              <div className="flex items-center justify-between px-2">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {t('color_success')}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t('color_success_desc')}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('#10B981', 'c3')}
                  className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  {copied === 'c3' ? (
                    <Check className="h-3 w-3 text-green-500 dark:text-green-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied !== 'c3' && '#10B981'}
                </button>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="group h-full">
              <div className="mb-4 flex h-40 items-center justify-center rounded-3xl bg-amber-500 shadow-lg transition-shadow group-hover:shadow-amber-500/30">
                <span className="text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
                  Warning
                </span>
              </div>
              <div className="flex items-center justify-between px-2">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {t('color_warning')}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t('color_warning_desc')}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('#F59E0B', 'c4')}
                  className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  {copied === 'c4' ? (
                    <Check className="h-3 w-3 text-green-500 dark:text-green-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied !== 'c4' && '#F59E0B'}
                </button>
              </div>
            </motion.div>
          </Grid>
        </section>

        {/* TYPOGRAPHY */}
        <section className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <Type className="h-6 w-6" />
              </div>
              <div>
                <Typography variant="h2" as="h2">
                  {t('typography_title')}
                </Typography>
                <Typography variant="body" className="text-slate-500 dark:text-slate-400">
                  {t('typography_subtitle')}
                </Typography>
              </div>
            </div>
            <Typography
              variant="body"
              className="leading-relaxed text-slate-600 dark:text-slate-400"
              dangerouslySetInnerHTML={{ __html: t('typography_desc') }}
            />
          </div>

          <div>
            <Stack direction="vertical" gap={6}>
              <div>
                <span className="text-6xl leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Aa
                </span>
                <span className="ml-4 text-6xl leading-tight font-normal text-slate-900 dark:text-white">
                  Aa
                </span>
              </div>
              <Grid cols={3} gap={4}>
                <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                  <div className="mb-1 text-2xl font-bold text-slate-900 dark:text-white">
                    {t('font_bold')}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t('font_bold_use')}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                  <div className="mb-1 text-2xl font-medium text-slate-900 dark:text-white">
                    {t('font_medium')}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t('font_medium_use')}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                  <div className="mb-1 text-2xl font-normal text-slate-900 dark:text-white">
                    {t('font_regular')}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t('font_regular_use')}
                  </div>
                </div>
              </Grid>
            </Stack>
          </div>

          <div className="relative lg:col-span-2">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-70 blur-xl"></div>
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
              <Stack direction="vertical" gap={4}>
                <Typography variant="h1" as="h1">
                  The Quick Brown Fox
                </Typography>
                <Typography variant="h2" as="h2">
                  Jumps Over The Lazy Dog
                </Typography>
                <Typography variant="h3" as="h3">
                  1234567890
                </Typography>
                <Typography
                  variant="body"
                  className="leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  BizOps adalah platform Business Operating System yang membantu perusahaan
                  Indonesia mendigitalisasi operasional dari hulu ke hilir. Satu sistem terintegrasi
                  untuk HR, Finance, Operations, Sales, dan Supply Chain.
                </Typography>
              </Stack>
            </div>
          </div>
        </section>

        {/* BOILERPLATE */}
        <section>
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h2" as="h2">
                {t('boilerplate_title')}
              </Typography>
              <Typography variant="body" className="text-slate-500 dark:text-slate-400">
                {t('boilerplate_subtitle')}
              </Typography>
            </div>
          </div>

          <Grid cols={2} gap={8}>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6 flex items-center justify-between">
                <Typography
                  variant="h3"
                  as="h3"
                  className="font-bold text-slate-900 dark:text-white"
                >
                  {t('boilerplate_short_title')}
                  <Typography variant="small" className="text-slate-500 dark:text-slate-400">
                    {t('boilerplate_short_words')}
                  </Typography>
                </Typography>
                <button
                  onClick={() => copyToClipboard(t('boilerplate_short_text'), 'short')}
                  className="text-primary-600 hover:text-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-bold transition-colors"
                >
                  {copied === 'short' ? (
                    <>
                      <Check className="h-4 w-4" /> {t('copied')}
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> {t('copy_text')}
                    </>
                  )}
                </button>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-sm leading-relaxed text-slate-700 italic dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
                "{t('boilerplate_short_text')}"
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6 flex items-center justify-between">
                <Typography
                  variant="h3"
                  as="h3"
                  className="font-bold text-slate-900 dark:text-white"
                >
                  {t('boilerplate_standard_title')}
                  <Typography variant="small" className="text-slate-500 dark:text-slate-400">
                    {t('boilerplate_standard_words')}
                  </Typography>
                </Typography>
                <button
                  onClick={() => copyToClipboard(t('boilerplate_standard_text'), 'standard')}
                  className="text-primary-600 hover:text-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-bold transition-colors"
                >
                  {copied === 'standard' ? (
                    <>
                      <Check className="h-4 w-4" /> {t('copied')}
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> {t('copy_text')}
                    </>
                  )}
                </button>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-sm leading-relaxed text-slate-700 italic dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
                "{t('boilerplate_standard_text')}"
              </div>
            </div>
          </Grid>
        </section>

        {/* PRESS CONTACT */}
        <section className="relative overflow-hidden rounded-3xl bg-white p-8 text-center md:rounded-[3rem] md:p-12 lg:text-left dark:bg-slate-900">
          <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[100px]"></div>
          <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]"></div>

          <Stack
            direction="vertical"
            gap={12}
            className="relative z-10 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="max-w-xl">
              <Typography variant="h2" as="h2" className="text-slate-900 dark:text-white">
                {t('press_title')}
              </Typography>
              <Typography
                variant="body"
                className="leading-relaxed text-slate-600 dark:text-slate-300"
              >
                {t('press_subtitle')}
              </Typography>
              <Stack direction="vertical" gap={4} className="mt-6">
                <a
                  href="mailto:pr@divistant.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  <Mail className="h-4 w-4" /> {t('press_contact_button')}
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-transparent px-6 py-3 font-bold text-slate-900 transition-colors hover:bg-slate-200 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
                >
                  {t('press_whatsapp')}
                </a>
              </Stack>
            </div>

            <div className="w-full max-w-sm rounded-3xl border border-slate-300 bg-white p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-indigo-400 bg-gradient-to-br from-indigo-400 to-purple-500 text-lg font-bold text-white">
                  SJ
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    {t('press_contact_name')}
                  </div>
                  <div className="text-sm text-indigo-600 dark:text-indigo-300">
                    {t('press_contact_role')}
                  </div>
                </div>
              </div>
              <Stack
                direction="vertical"
                gap={3}
                className="text-sm text-slate-600 dark:text-slate-300"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-slate-500 dark:text-slate-400" /> pr@divistant.com
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-slate-500 dark:text-slate-400" />{' '}
                  {t('press_contact_location')}
                </div>
              </Stack>
            </div>
          </Stack>
        </section>
      </Container>
    </div>
  );
}
