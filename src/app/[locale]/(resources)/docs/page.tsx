'use client';

import { motion } from 'framer-motion';
import { Book, Check, Copy, MessageSquare, Search, Shield, Terminal, Zap } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Section } from '@/components/layout';
import Container from '@/components/layout/Container';
import { CardSlider, Grid, Typography } from '@/components/ui';
import Card from '@/components/ui/Card';
import { docsData } from '@/data/resourcesContent';

export default function DocsPage() {
  const t = useTranslations('Docs');
  const locale = useLocale() as 'en' | 'id';
  const [searchFocused, setSearchFocused] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      'curl -X GET "https://api.bizops.id/v2/resource/Employee" -H "Authorization: Token xyz:123"',
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 transition-colors dark:bg-slate-950">
      {/* HERO SECTION */}
      <Section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 dark:bg-slate-950">
        <Container size="4xl" className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white px-3 py-1 text-xs font-bold tracking-wider text-blue-700 uppercase backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50 dark:text-blue-300"
          >
            <Book className="h-3 w-3" />
            {' '}
            Docs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-4xl leading-tight font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            {t('hero_title')}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`group relative mx-auto max-w-2xl transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}
          >
            <div className="bg-primary-500/20 group-hover:bg-primary-500/30 absolute inset-0 rounded-2xl blur-xl transition-colors"></div>
            <div className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
              <Search className="ml-5 h-6 w-6 shrink-0 text-slate-400" />
              <input
                type="text"
                placeholder={t('search_placeholder')}
                className="w-full border-none bg-transparent px-4 py-5 text-lg text-slate-900 placeholder-slate-400 focus:ring-0 focus:outline-none dark:text-white"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <div className="hidden items-center gap-1 pr-5 text-xs font-medium text-slate-400 sm:flex">
                <span className="rounded border border-slate-200 bg-slate-100 px-2 py-1 dark:border-slate-700 dark:bg-slate-800">
                  ⌘ K
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400"
          >
            <span className="text-slate-700 dark:text-slate-500">
              {t('popular_topics', { default: 'Popular topics:' })}
            </span>
            <Link
              href="/docs/import-data"
              className="decoration-primary-500 underline-offset-4 transition-all hover:text-slate-900 hover:underline dark:hover:text-white"
            >
              {t('topic_import_excel', { default: 'Import Excel Data' })}
            </Link>
            <Link
              href="/docs/setup-payroll"
              className="decoration-primary-500 underline-offset-4 transition-all hover:text-slate-900 hover:underline dark:hover:text-white"
            >
              {t('topic_setup_pph21', { default: 'Setup PPh 21 TER' })}
            </Link>
            <Link
              href="/docs/api-keys"
              className="decoration-primary-500 underline-offset-4 transition-all hover:text-slate-900 hover:underline dark:hover:text-white"
            >
              {t('topic_generate_api', { default: 'Generate API Key' })}
            </Link>
            <Link
              href="/docs/troubleshoot"
              className="decoration-primary-500 underline-offset-4 transition-all hover:text-slate-900 hover:underline dark:hover:text-white"
            >
              {t('topic_connection_error', { default: 'Connection Error 502' })}
            </Link>
          </motion.div>
        </Container>
      </Section>

      <Container size="7xl" className="relative z-20 -mt-16 pb-24">
        {/* USER GUIDES */}
        <div className="mb-24">
          <div className="md:hidden">
            <CardSlider>
              {docsData.categories[locale].map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-[85vw] sm:w-[350px]"
                  >
                    <Card hoverEffect className="flex h-full flex-col">
                      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/20">
                        <Icon className="h-10 w-10" />
                      </div>
                      <Typography
                        variant="h3"
                        as="h3"
                        className="mb-3 font-bold text-slate-900 dark:text-white"
                      >
                        {cat.title}
                      </Typography>
                      <Typography
                        variant="small"
                        className="leading-relaxed text-slate-600 dark:text-slate-400"
                      >
                        {cat.desc}
                      </Typography>
                    </Card>
                  </motion.div>
                );
              })}
            </CardSlider>
          </div>

          <Grid cols={3} gap={8} className="hidden md:grid">
            {docsData.categories[locale].map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card hoverEffect className="flex h-full flex-col">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/20">
                      <Icon className="h-7 w-7" />
                    </div>
                    <Typography
                      variant="h3"
                      as="h3"
                      className="mb-3 font-bold text-slate-900 dark:text-white"
                    >
                      {cat.title}
                    </Typography>
                    <Typography
                      variant="small"
                      className="leading-relaxed text-slate-600 dark:text-slate-400"
                    >
                      {cat.desc}
                    </Typography>
                  </Card>
                </motion.div>
              );
            })}
          </Grid>
        </div>

        {/* API PREVIEW */}
        <div className="mb-24 rounded-3xl border border-slate-200 bg-slate-100 p-8 md:p-12 dark:border-slate-800 dark:bg-slate-900">
          <Grid cols={2} mdCols={1} gap={12} className="items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold tracking-wider text-blue-700 uppercase dark:bg-slate-800 dark:text-blue-300">
                <Terminal className="h-3 w-3" />
                {' '}
                {t('api_reference', { default: 'API Reference' })}
              </div>
              <Typography
                variant="h2"
                as="h2"
                className="mb-6 font-bold text-slate-900 dark:text-white"
              >
                {t('api_section_title', { default: 'Integrate with REST API' })}
              </Typography>
              <Typography
                variant="body"
                className="mb-8 leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {t('api_section_desc', {
                  default:
                    'BizOps provides a complete and consistent REST API for integration with external systems. All endpoints use token-based authentication.',
                })}
              </Typography>

              <div className="space-y-4">
                {docsData.apiPreview[locale].map((api, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-xl border border-slate-300 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/50"
                  >
                    <div
                      className={`rounded-lg px-3 py-1 text-xs font-bold ${
                        api.method === 'GET'
                          ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                          : api.method === 'POST'
                            ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                            : 'bg-amber-500/20 text-amber-600 dark:text-amber-400'
                      }`}
                    >
                      {api.method}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-mono text-sm text-slate-900 dark:text-white">
                        {api.endpoint}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">{api.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-slate-300 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-300 bg-slate-200 px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-600 dark:text-slate-500">bash</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="group flex items-center gap-1.5 text-xs text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      {copied
                        ? (
                            <Check className="h-3 w-3 text-green-500 dark:text-green-400" />
                          )
                        : (
                            <Copy className="h-3 w-3 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                          )}
                      {copied
                        ? (
                            <span className="text-green-500 dark:text-green-400">Copied!</span>
                          )
                        : (
                            'Copy'
                          )}
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto p-6 text-sm leading-relaxed">
                  <div className="font-mono text-slate-700 dark:text-slate-300">
                    <span className="text-purple-600 dark:text-purple-400">curl</span>
                    {' '}
                    --request GET
                    \
                    <br />
                    &nbsp;&nbsp;--url
                    {' '}
                    <span className="text-green-600 dark:text-green-400">
                      'https://api.bizops.id/v2/resource/Employee'
                    </span>
                    {' '}
                    \
                    <br />
                    &nbsp;&nbsp;--header
                    {' '}
                    <span className="text-green-600 dark:text-green-400">
                      'Authorization: Token xyz:123'
                    </span>
                    {' '}
                    \
                    <br />
                    &nbsp;&nbsp;--header
                    {' '}
                    <span className="text-green-600 dark:text-green-400">
                      'Content-Type: application/json'
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </div>

        {/* COMMUNITY & SUPPORT */}
        <div className="text-center">
          <Typography variant="h2" as="h2" className="mb-4">
            {t('need_help_title')}
          </Typography>
          <Typography variant="body" className="mb-12 text-slate-600 dark:text-slate-400">
            {t('need_help_desc')}
          </Typography>

          <Grid cols={3} gap={6}>
            <a
              href="https://discord.gg/bizops"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card hoverEffect className="flex h-full flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <Typography variant="h3" as="h3" className="mb-3">
                  {t('community_title', { default: 'Developer Community' })}
                </Typography>
                <Typography variant="small" className="mb-4 text-slate-500 dark:text-slate-400">
                  {t('community_desc', {
                    default:
                      'Join 2,000+ developers. Discuss API integration, share custom scripts, and get help.',
                  })}
                </Typography>
                <span className="text-sm font-bold text-indigo-600">
                  {t('community_cta', { default: 'Join Discord →' })}
                </span>
              </Card>
            </a>

            <Link href="/roadmap" className="block h-full">
              <Card hoverEffect className="flex h-full flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 dark:bg-amber-900/30">
                  <Zap className="h-8 w-8" />
                </div>
                <Typography variant="h3" as="h3" className="mb-3">
                  {t('feature_requests_title', { default: 'Feature Requests' })}
                </Typography>
                <Typography variant="small" className="mb-4 text-slate-500 dark:text-slate-400">
                  {t('feature_requests_desc', {
                    default: 'Missing a feature? Submit a request or vote on our public roadmap.',
                  })}
                </Typography>
                <span className="text-sm font-bold text-amber-600">
                  {t('feature_requests_cta', { default: 'View Roadmap →' })}
                </span>
              </Card>
            </Link>

            <Link href="/contact" className="block h-full">
              <Card hoverEffect className="flex h-full flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/30">
                  <Shield className="h-8 w-8" />
                </div>
                <Typography variant="h3" as="h3" className="mb-3">
                  {t('premium_support_title', { default: 'Premium Support' })}
                </Typography>
                <Typography variant="small" className="mb-4 text-slate-500 dark:text-slate-400">
                  {t('premium_support_desc', {
                    default:
                      'Priority support channel for Enterprise and Partner plans. 24/7 SLAs available.',
                  })}
                </Typography>
                <span className="text-sm font-bold text-blue-600">
                  {t('premium_support_cta', { default: 'Open Ticket →' })}
                </span>
              </Card>
            </Link>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
