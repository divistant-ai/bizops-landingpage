'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Code,
  Download,
  FileText,
  Map,
  Wrench,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Container, Section } from '@/components/layout';
import { Button, OptimizedImage } from '@/components/ui';

export default function ResourcesContent() {
  const t = useTranslations('Resources');

  // Temporary data - should come from props or data file
  const resourceCategories = [
    {
      title: t('category_blog_title'),
      desc: t('category_blog_desc'),
      icon: BookOpen,
      link: '/blog',
      color: 'bg-blue-50 text-blue-700',
    },
    {
      title: t('category_events_title'),
      desc: t('category_events_desc'),
      icon: Calendar,
      link: '/events',
      color: 'bg-purple-50 text-purple-700',
    },
    {
      title: t('category_tools_title'),
      desc: t('category_tools_desc'),
      icon: Wrench,
      link: '/tools',
      color: 'bg-amber-50 text-amber-700',
    },
    {
      title: t('category_docs_title'),
      desc: t('category_docs_desc'),
      icon: Code,
      link: '/docs',
      color: 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
    },
    {
      title: t('category_roadmap_title'),
      desc: t('category_roadmap_desc'),
      icon: Map,
      link: '/roadmap',
      color: 'bg-green-50 text-green-700',
    },
  ];

  const latestBlogs = [
    {
      title: t('blog_1_title'),
      summary: t('blog_1_summary'),
      category: t('blog_1_category'),
      date: '15 Nov 2024',
      author: 'Tim BizOps',
      slug: '10-tanda-butuh-erp',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
    {
      title: t('blog_2_title'),
      summary: t('blog_2_summary'),
      category: t('blog_2_category'),
      date: '10 Nov 2024',
      author: 'Andi Wijaya',
      slug: 'panduan-erp-umkm',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    },
    {
      title: t('blog_3_title'),
      summary: t('blog_3_summary'),
      category: t('blog_3_category'),
      date: '5 Nov 2024',
      author: 'Sarah Chen',
      slug: 'hitung-roi-erp',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative border-b border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8 dark:border-slate-700 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-white"
          >
            {t('hero_title_1')}
            {' '}
            <span className="text-primary-600 dark:text-primary-400">{t('hero_title_2')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-12 max-w-2xl text-lg text-slate-600 dark:text-slate-400"
          >
            {t('hero_description')}
          </motion.p>

          {/* Quick Category Nav */}
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {resourceCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                >
                  <Link
                    href={cat.link}
                    className="group flex h-full flex-col items-center rounded-xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
                  >
                    <div
                      className={`mb-3 rounded-full p-3 ${cat.color} transition-transform group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <p className="line-clamp-2 text-center text-xs text-slate-500 dark:text-slate-400">
                      {cat.desc}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Insight (Blog) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
              {t('blog_heading')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400">{t('blog_description')}</p>
          </div>
          <Link
            href="/blog"
            className="text-primary-600 dark:text-primary-400 hidden items-center font-bold hover:underline sm:flex"
          >
            {t('blog_view_all')}
            {' '}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Featured Post */}
          {latestBlogs[0] && (
            <div className="group relative min-h-[400px] overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl lg:col-span-2">
              <OptimizedImage
                src={latestBlogs[0].image}
                alt={latestBlogs[0].title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="bg-primary-600 mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold text-white">
                  {latestBlogs[0].category}
                </span>
                <h3 className="group-hover:text-primary-200 mb-3 text-xl font-bold text-white transition-colors md:text-3xl">
                  <Link href={`/blog/${latestBlogs[0].slug}`}>{latestBlogs[0].title}</Link>
                </h3>
                <p className="mb-4 line-clamp-2 max-w-2xl text-sm text-slate-300 md:text-base">
                  {latestBlogs[0].summary}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-300 md:text-sm">
                  <span>{latestBlogs[0].date}</span>
                  <span>•</span>
                  <span>{latestBlogs[0].author}</span>
                </div>
              </div>
            </div>
          )}

          {/* Side Posts */}
          <div className="flex flex-col space-y-8">
            {latestBlogs.slice(1, 3).map((post, idx) => (
              <div
                key={idx}
                className="hover:border-primary-300 flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-colors dark:border-slate-700 dark:bg-slate-900"
              >
                <span className="text-primary-600 dark:text-primary-400 mb-2 text-xs font-bold">
                  {post.category}
                </span>
                <h3 className="hover:text-primary-600 mb-2 line-clamp-2 text-lg font-bold text-slate-900 dark:text-white">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mb-4 line-clamp-2 grow text-sm text-slate-600 dark:text-slate-400">
                  {post.summary}
                </p>
                <div className="mt-auto text-xs text-slate-500 dark:text-slate-500">
                  {post.date}
                  {' '}
                  • 5
                  {t('blog_min_read')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tool / Interactive */}
      <section className="relative overflow-hidden bg-white py-16 text-slate-800 md:py-24 dark:bg-slate-900 dark:text-white">
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[100px]"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold">{t('tool_heading')}</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-300">
                {t('tool_description')}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/tools/assessment">
                  <Button
                    size="lg"
                    className="bg-primary-600 hover:bg-primary-500 w-full border-none sm:w-auto"
                  >
                    <span className="text-slate-800 dark:text-white">
                      {t('tool_cta_assessment')}
                    </span>
                  </Button>
                </Link>
                <Link href="/tools/roi-calculator">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-slate-600 text-white hover:bg-white/10 sm:w-auto"
                  >
                    <span className="text-slate-800 dark:text-white">
                      {t('tool_cta_calculator')}
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-transform duration-500 md:rotate-2 md:transform md:p-8 md:hover:rotate-0">
                <div className="mb-8 flex items-center justify-between">
                  <div className="text-sm font-bold text-slate-400">{t('tool_score_label')}</div>
                  <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">
                    {t('tool_score_excellent')}
                  </div>
                </div>
                <div className="mb-2 text-5xl font-bold">
                  85
                  <span className="text-2xl text-slate-400">/100</span>
                </div>
                <div className="mb-6 h-2 w-full rounded-full bg-slate-700">
                  <div className="h-2 w-[85%] rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>{t('tool_metric_1')}</span>
                    <span className="font-bold">90%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{t('tool_metric_2')}</span>
                    <span className="font-bold">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Tools Teaser */}
      <Section className="!bg-primary-50 dark:!bg-slate-950">
        <Container>
          <div className="border-primary-200 shadow-primary-500/5 flex flex-col items-center justify-between gap-8 rounded-[2.5rem] border bg-white p-8 shadow-xl md:flex-row md:p-12 dark:border-slate-700 dark:bg-slate-900">
            <div className="max-w-xl">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                {t('migration_heading')}
              </h2>
              <p className="mb-6 text-lg text-slate-600 dark:text-slate-400">
                {t('migration_description')}
              </p>
              <div className="flex gap-4">
                <Link href="/migration">
                  <Button
                    size="lg"
                    className="bg-primary-600 hover:bg-primary-700 rounded-full text-white"
                  >
                    <span className="text-slate-800 dark:text-white">
                      {t('migration_cta_guide')}
                    </span>
                  </Button>
                </Link>
                <Link href="/migration">
                  <Button
                    variant="outline"
                    className="gap-2 rounded-full border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800"
                  >
                    <Download className="h-4 w-4" />
                    {' '}
                    {t('migration_cta_template')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full max-w-xs opacity-80">
              <div className="from-primary-100 to-primary-50 flex aspect-square items-center justify-center rounded-full bg-linear-to-tr">
                <FileText className="text-primary-300 h-32 w-32" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
