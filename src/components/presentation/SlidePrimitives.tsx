'use client';

import { motion } from 'framer-motion';
import React from 'react';

// --- ANIMATION VARIANTS ---
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
};

// --- ANIMATED SLIDE WRAPPER ---
type AnimatedSlideProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedSlide({ children, className = '' }: AnimatedSlideProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`relative z-10 flex h-full w-full flex-col items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}

// --- MOTION ITEM WRAPPER ---
type MotionItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function MotionItem({ children, className = '' }: MotionItemProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// --- SLIDE BACKGROUND ---
type SlideBgVariant = 'default' | 'blue' | 'dark';

type SlideBgProps = {
  variant?: SlideBgVariant;
};

export function SlideBg({ variant = 'default' }: SlideBgProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {variant === 'default' && (
        <>
          <div className="absolute top-0 left-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-900/10" />
          <div className="absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-900/10" />
        </>
      )}
      {variant === 'blue' && (
        <div className="absolute inset-0 bg-linear-to-br from-blue-100 via-slate-100 to-slate-100 dark:from-blue-950 dark:via-slate-950 dark:to-slate-950" />
      )}
      {variant === 'dark' && (
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-950 to-black" />
      )}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
    </div>
  );
}

// --- REUSABLE SLIDE CARD ---
type SlideCardProps = {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  desc: string;
  color?: string;
  children?: React.ReactNode;
};

export function SlideCard({ title, icon: Icon, desc, color = 'blue', children }: SlideCardProps) {
  return (
    <div
      className={`hover:border-${color}-500/30 group h-full rounded-3xl border border-slate-200 bg-slate-100 p-8 px-10 py-5 backdrop-blur-sm transition-all duration-300 hover:bg-slate-200 dark:border-white/5 dark:bg-slate-900/50 dark:hover:bg-slate-800/50`}
    >
      <div className="mb-6 flex items-start justify-between">
        <div
          className={`bg-${color}-500/10 text-${color}-600 dark:text-${color}-400 rounded-2xl p-3 transition-transform duration-300 group-hover:scale-110`}
        >
          {Icon && <Icon className="h-8 w-8" />}
        </div>
      </div>
      <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
      {children}
    </div>
  );
}

// --- FEATURE CARD ---
type FeatureCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  color: string;
};

export function FeatureCard({ icon: Icon, title, desc, color }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-slate-100 p-6 transition-all duration-300 hover:border-slate-300 hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
      <div className={`bg-${color}-500/20 text-${color}-600 dark:text-${color}-400 mb-4 w-fit rounded-xl p-3`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{desc}</p>
    </div>
  );
}

// --- TIMELINE ITEM ---
type TimelineItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  duration: string;
  color: string;
};

export function TimelineItem({ icon: Icon, title, subtitle, duration, color }: TimelineItemProps) {
  return (
    <MotionItem>
      <div className="relative flex items-start gap-6">
        <div className="relative z-10 flex flex-col items-center">
          <div
            className={`bg-${color}-100 dark:bg-${color}-900/30 flex h-14 w-14 items-center justify-center rounded-full`}
          >
            <Icon className={`text-${color}-600 dark:text-${color}-400 h-7 w-7`} />
          </div>
          <div className="mt-4 h-full w-0.5 bg-slate-300 dark:bg-white/10" />
        </div>
        <div className="grow pt-2 pb-10">
          <p className={`text-${color}-600 dark:text-${color}-400 mb-1 text-xs font-bold uppercase`}>
            {duration}
          </p>
          <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
        </div>
      </div>
    </MotionItem>
  );
}
