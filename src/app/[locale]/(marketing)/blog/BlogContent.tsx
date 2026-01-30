'use client';

import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Calendar, Clock, Search, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Pagination from '@/components/Pagination';
import { OptimizedImage } from '@/components/ui';
import Button from '@/components/ui/Button';
import { blogPosts } from '@/data/blogData';

// SpotlightCard Component
const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(59, 130, 246, 0.1)',
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative overflow-hidden border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const ITEMS_PER_PAGE = 6;

const featuredPost = blogPosts[0]!;

export default function BlogContent() {
  const t = useTranslations('Blog');
  const locale = useLocale() as 'en' | 'id';
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Extract unique categories and counts
  const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category))).sort()];

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') {
      return blogPosts.length;
    }
    return blogPosts.filter((p) => p.category === cat).length;
  };

  // Filter Logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchSearch =
      post.title[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary[locale].toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  // If filtering, show all matches. If not filtering (All), exclude featured from grid to avoid duplicate
  const gridPosts =
    selectedCategory === 'All' && !searchQuery && featuredPost
      ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
      : filteredPosts;

  // Pagination Logic
  const totalPages = Math.ceil(gridPosts.length / ITEMS_PER_PAGE);
  const paginatedPosts = gridPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative border-b border-slate-200 bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8 dark:border-slate-700 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-white">
              {t('hero_title')}{' '}
              <span className="text-primary-600 dark:text-primary-400">
                {t('hero_title_highlight')}
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              {t('hero_subtitle')}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-8 max-w-2xl"
          >
            <div className="relative">
              <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder={t('search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="focus:ring-primary-500 w-full rounded-2xl border border-slate-300 bg-white py-4 pr-12 pl-12 text-slate-900 placeholder-slate-400 transition-all focus:ring-2 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary-600 dark:bg-primary-500 text-slate-900 shadow-lg dark:text-white'
                    : 'hover:border-primary-400 border border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {cat} <span className="text-xs opacity-70">({getCategoryCount(cat)})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post (only show if no filters) */}
      {selectedCategory === 'All' && !searchQuery && featuredPost && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="group relative min-h-[500px] overflow-hidden rounded-3xl shadow-2xl">
            <OptimizedImage
              src={featuredPost.image}
              alt={featuredPost.title[locale]}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={1200}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 max-w-3xl p-8 md:p-12">
              <span className="bg-primary-600 mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase">
                {t('featured_badge')}
              </span>
              <h2 className="group-hover:text-primary-200 mb-4 text-3xl font-bold text-white transition-colors md:text-5xl">
                <Link href={`/${locale}/blog/${featuredPost.slug}`}>
                  {featuredPost.title[locale]}
                </Link>
              </h2>
              <p className="mb-6 line-clamp-2 text-lg text-slate-300">
                {featuredPost.summary[locale]}
              </p>
              <div className="flex items-center gap-6 text-slate-300">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date[locale]}
                </span>
                <span>•</span>
                <span>{featuredPost.author[locale]}</span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime[locale]}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section id="blog-grid" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array.from({ length: 6 })].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="mb-4 h-48 rounded-2xl bg-slate-200 dark:bg-slate-800"></div>
                <div className="mb-2 h-4 rounded bg-slate-200 dark:bg-slate-800"></div>
                <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800"></div>
              </div>
            ))}
          </div>
        ) : paginatedPosts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-slate-500 dark:text-slate-400">{t('no_results')}</p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-6"
            >
              {t('reset_filter')}
            </Button>
          </div>
        ) : (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {paginatedPosts.map((post) => (
                  <Link key={post.slug} href={`/${locale}/blog/${post.slug}`}>
                    <SpotlightCard className="h-full rounded-2xl">
                      <article className="flex h-full flex-col p-6">
                        <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
                          <OptimizedImage
                            src={post.image}
                            alt={post.title[locale]}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            width={400}
                            height={300}
                          />
                        </div>
                        <span className="text-primary-600 dark:text-primary-400 mb-2 text-xs font-bold tracking-wider uppercase">
                          {post.category}
                        </span>
                        <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-3 line-clamp-2 text-xl font-bold text-slate-900 transition-colors dark:text-white">
                          {post.title[locale]}
                        </h3>
                        <p className="mb-4 line-clamp-3 flex-grow text-sm text-slate-600 dark:text-slate-400">
                          {post.summary[locale]}
                        </p>
                        <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
                          <span>{post.date[locale]}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime[locale]}
                          </span>
                        </div>
                      </article>
                    </SpotlightCard>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
            {t('cta_title')}
          </h2>
          <p className="mb-8 text-slate-600 dark:text-slate-300">{t('cta_subtitle')}</p>
          <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder={t('cta_email_placeholder')}
              className="focus:ring-primary-500 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:ring-2 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
            <Button className="bg-primary-600 hover:bg-primary-700 text-slate-900 dark:text-white">
              {t('cta_subscribe')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
