'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { Container, Section } from '@/components/layout';
import { Button, HeroBackground } from '@/components/ui';
import { modularTypography, sectionPaddingHybrid } from '@/design-tokens';

type HeroSectionProps = {
  headline: string;
  subheadline?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  breadcrumbs?: Array<{ label: string; path: string }>;
  ctaBtnText: string;
  ctaBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  image?: string;
  layout?: 'centered' | 'split';
};

const HeroVisual = ({ icon }: { icon?: React.ReactNode }) => {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[500px] lg:h-[500px]">
      {/* Abstract Shapes */}
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-500/20 blur-[80px]" />
      <div className="absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-indigo-500/20 blur-[60px]" />

      {/* Main Glass Card */}
      <motion.div
        initial={{ rotateX: 10, rotateY: -10, y: 50, opacity: 0 }}
        animate={{ rotateX: 0, rotateY: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}
        className="perspective-1000 absolute inset-0 z-10 flex items-center justify-center"
      >
        <div className="relative flex h-[320px] w-[320px] flex-col items-center justify-center rounded-[3rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:scale-105 md:h-[380px] md:w-[380px] dark:border-white/10 dark:bg-slate-900/40 dark:shadow-blue-900/20">
          {/* Inner Glow */}
          <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-white/20 to-transparent opacity-50" />

          {/* Icon Container */}
          <div className="relative z-20 mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30">
            <div className="text-white [&>svg]:h-12 [&>svg]:w-12">
              {icon}
            </div>
          </div>

          {/* Dummy Lines for Abstract UI */}
          <div className="w-full space-y-3 px-4">
            <div className="h-2 w-3/4 rounded-full bg-slate-400/20" />
            <div className="h-2 w-1/2 rounded-full bg-slate-400/20" />
            <div className="mt-6 flex gap-3">
              <div className="h-16 w-1/3 rounded-2xl bg-blue-500/10" />
              <div className="h-16 w-1/3 rounded-2xl bg-indigo-500/10" />
              <div className="h-16 w-1/3 rounded-2xl bg-slate-400/10" />
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute top-12 -right-8 rounded-2xl border border-white/20 bg-white/20 p-3 shadow-lg backdrop-blur-md dark:bg-slate-800/60"
          >
            <Sparkles className="h-6 w-6 fill-amber-400 text-amber-400" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
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
  image, // Kept for backward compat, but HeroVisual is preferred for Services
  layout = 'centered',
}) => {
  // Force split layout if it's a service page (implied by icon presence + no image)
  const effectiveLayout = icon && !image ? 'split' : layout;
  const isSplit = effectiveLayout === 'split';

  return (
    <Section
      id="hero"
      className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center overflow-hidden bg-slate-50 lg:min-h-[calc(100vh-7rem)] dark:bg-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.hero}
    >
      <HeroBackground />

      <Container size="7xl" className="relative z-10">
        <div className={`grid gap-12 lg:gap-8 ${isSplit ? 'items-center lg:grid-cols-2' : 'grid-cols-1 text-center'}`}>

          {/* CONTENT COLUMN */}
          <div className={`flex flex-col ${isSplit ? 'items-start text-left' : 'mx-auto max-w-4xl items-center'}`}>
            {breadcrumbs && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Breadcrumbs items={breadcrumbs} />
              </motion.div>
            )}

            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300">
                  <Sparkles className="mr-2 h-3.5 w-3.5 fill-blue-500 text-blue-500" />
                  {subtitle}
                </span>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <h1 className={`${modularTypography.hero} leading-[1.1] text-slate-900 dark:text-white`}>
                {headline}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`mb-10 text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-400 ${isSplit ? 'max-w-xl' : 'mx-auto max-w-2xl'}`}
            >
              {subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`flex flex-col gap-4 sm:flex-row ${isSplit ? '' : 'items-center justify-center'}`}
            >
              <Button
                asChild
                variant="clay"
                size="lg"
                className="h-14 px-8 text-lg font-bold shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                <Link href={ctaBtnLink}>
                  {ctaBtnText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="h-14 rounded-full px-8 text-base"
              >
                <Link href={secondaryBtnLink}>{secondaryBtnText || 'Contact Sales'}</Link>
              </Button>
            </motion.div>
          </div>

          {/* VISUAL COLUMN */}
          {isSplit && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative hidden lg:block"
            >
              {image ? (
                <Image src={image} alt="Hero" width={600} height={600} className="rounded-2xl shadow-2xl" />
              ) : (
                <HeroVisual icon={icon} />
              )}
            </motion.div>
          )}

        </div>
      </Container>
    </Section>
  );
};
