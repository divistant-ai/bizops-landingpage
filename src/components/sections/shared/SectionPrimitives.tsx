'use client';

import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import Container from '@/components/layout/Container';

type PageHeroProps = {
  badge?: {
    icon?: LucideIcon;
    text: string;
  };
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  centered?: boolean;
  className?: string;
};

export function PageHero({
  badge,
  title,
  subtitle,
  children,
  size = 'md',
  centered = true,
  className = '',
}: PageHeroProps) {
  const containerSize = size === 'sm' ? '3xl' : size === 'lg' ? '7xl' : '5xl';

  return (
    <section
      className={`dark:bg-dark-bg relative overflow-hidden bg-white pt-32 pb-24 lg:pb-32 dark:text-white ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-indigo-600/20 blur-[120px]" />

      <Container size={containerSize} className={`relative z-10 ${centered ? 'text-center' : ''}`}>
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-1.5 text-xs font-bold tracking-wider text-indigo-700 uppercase backdrop-blur-md dark:bg-slate-800/50 dark:text-indigo-300"
          >
            {badge.icon && <badge.icon className="h-3 w-3" />}
            {badge.text}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-8 text-4xl leading-[1.1] font-extrabold tracking-tight md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light text-slate-700 dark:text-slate-300"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            {children}
          </motion.div>
        )}
      </Container>
    </section>
  );
}

// Stat Card component
type StatCardProps = {
  value: string;
  label: string;
  icon: LucideIcon;
  index?: number;
};

export function StatCard({ value, label, icon: Icon, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mb-1 text-3xl font-bold text-slate-900 dark:text-white">{value}</div>
      <div className="text-sm text-slate-600 dark:text-slate-400">{label}</div>
    </motion.div>
  );
}

// CTA Section component
type CTASectionProps = {
  badge?: {
    icon?: LucideIcon;
    text: string;
  };
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
};

export function CTASection({ badge, title, subtitle, children, className = '' }: CTASectionProps) {
  return (
    <section className={`bg-slate-100 py-24 dark:bg-slate-950 ${className}`}>
      <Container size="4xl" className="text-center">
        {badge && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-100 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-700 uppercase backdrop-blur-sm dark:border-white/20 dark:bg-white/10 dark:text-blue-300">
            {badge.icon && <badge.icon className="h-3 w-3" />}
            {badge.text}
          </div>
        )}
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-slate-700 dark:text-slate-300">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="flex flex-col justify-center gap-4 sm:flex-row">{children}</div>
        )}
      </Container>
    </section>
  );
}

// Value Card component
type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  manifesto: string;
  proof?: string;
  index?: number;
};

export function ValueCard({ icon: Icon, title, manifesto, proof, index = 0 }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-3xl border border-slate-200 bg-white p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-slate-50 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-indigo-500/10" />
      <div className="relative">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110 dark:bg-blue-500/20 dark:text-blue-400">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="mb-6 leading-relaxed text-slate-700 italic dark:text-slate-300">
          "
          {manifesto}
          "
        </p>
        {proof && (
          <div className="border-t border-slate-200 pt-6 dark:border-white/10">
            <p className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-500">✓</span>
              {proof}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
