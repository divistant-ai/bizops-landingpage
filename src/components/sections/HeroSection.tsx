'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import Link from 'next/link';
import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';

type HeroSectionProps = {
  headline: string;
  subheadline?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  breadcrumbs?: Array<{ label: string; path: string }>;
  ctaBtnText: string; // primary button text
  ctaBtnLink?: string; // primary button link
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  onCtaClick?: () => void; // Optional click handler if not using Link directly
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subheadline,
  subtitle,
  icon,
  breadcrumbs,
  ctaBtnText,
  ctaBtnLink = '/demo',
  secondaryBtnText,
  secondaryBtnLink = '/contact',
}) => {
  return (
    <Section
      id="hero"
      className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center overflow-hidden bg-slate-50 lg:min-h-[calc(100vh-7rem)] dark:bg-slate-950"
      noPadding
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/5" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <Container size="5xl" className="relative z-10 py-16">
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center justify-center"
          >
            <Breadcrumbs items={breadcrumbs} />
          </motion.div>
        )}

        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          {icon && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-8 inline-flex"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-600 to-indigo-600 opacity-40 blur-xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-blue-600 to-indigo-600 shadow-2xl ring-4 shadow-blue-600/30 ring-white/50 dark:ring-slate-800/50">
                  <span className="text-white">{icon}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Badge */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                {subtitle}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-3xl leading-tight font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl dark:text-white"
          >
            {headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400"
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              variant="clay"
              size="lg"
              className="h-14 px-10 text-lg font-bold shadow-xl shadow-blue-500/30"
            >
              <Link href={ctaBtnLink}>
                {ctaBtnText}
                {' '}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {secondaryBtnText && (
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="h-14 border border-slate-200 px-8 text-base font-medium text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-400"
              >
                <Link href={secondaryBtnLink}>{secondaryBtnText}</Link>
              </Button>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
