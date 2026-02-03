'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle, Crosshair, Layers, Lightbulb } from 'lucide-react';
import React from 'react';
import Button from '@/components/ui/Button';
import { useNeedsAnalysis } from '../context/NeedsAnalysisContext';

export const NAIntro: React.FC = () => {
  const { setStep } = useNeedsAnalysis();

  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="absolute top-0 right-0 size-[500px] rounded-full bg-blue-900/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 size-[500px] rounded-full bg-emerald-900/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 pb-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Headline & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm">
              <Crosshair className="size-4" />
              {' '}
              Solution Finder 2.0
            </div>

            <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight md:text-6xl">
              Temukan Solusi BizOps
              {' '}
              <br />
              <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Yang Paling Tepat.
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-400">
              Bingung mulai dari mana? Dapatkan
              {' '}
              <strong>Strategic Blueprint</strong>
              {' '}
              yang
              dipersonalisasi—mencakup rekomendasi software dan strategi implementasi (PPT) hanya
              dalam 2 menit.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => setStep('context')}
                size="lg"
                className="h-14 rounded-xl bg-blue-600 px-8 text-lg shadow-lg shadow-blue-900/20 hover:bg-blue-500"
              >
                <span className="text-white dark:text-slate-600">Mulai Diagnosa Gratis</span>
                {' '}
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-emerald-500" />
                {' '}
                Free Analysis
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-emerald-500" />
                {' '}
                No Sign-up Required
              </div>
            </div>
          </motion.div>

          {/* Right Column: Feature Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Floating Cards */}
            <div className="relative z-10 grid gap-5">
              {/* Card 1: Holistic */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60">
                <div className="rounded-xl bg-blue-500/20 p-3 text-blue-400">
                  <Layers className="size-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                    Holistic Diagnosis
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Kami tidak hanya melihat software, tapi juga kesiapan tim (People) dan alur
                    kerja (Process).
                  </p>
                </div>
              </div>

              {/* Card 2: Roadmap */}
              <div className="flex translate-x-8 items-start gap-4 rounded-2xl border border-slate-200 bg-slate-100 p-6 backdrop-blur-md transition-transform duration-300 hover:translate-x-8 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60">
                <div className="rounded-xl bg-emerald-500/20 p-3 text-emerald-400">
                  <Calendar className="size-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                    Actionable Roadmap
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Dapatkan timeline implementasi langkah demi langkah, dari Quick Win hingga
                    Optimization.
                  </p>
                </div>
              </div>

              {/* Card 3: Difference */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60">
                <div className="rounded-xl bg-amber-500/20 p-3 text-amber-400">
                  <Lightbulb className="size-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                    Practical Solution
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Berbeda dengan Maturity Assessment yang hanya memberi skor, kami memberi resep
                    solusi.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -z-10 size-[400px] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite] rounded-full border border-blue-500/20" />
            <div className="absolute top-1/2 left-1/2 -z-10 size-[250px] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse] rounded-full border border-emerald-500/20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
