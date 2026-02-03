'use client';

import { CheckCircle, Cpu } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

export const MAAnalyzing: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-slate-50 text-center dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="bg-primary-500/20 dark:bg-primary-500/10 absolute top-1/4 -left-20 size-72 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -right-20 bottom-1/4 size-96 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/10"
        />
      </div>

      <div className="relative z-10 px-4">
        {/* Spinning Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="relative mx-auto mb-8 flex size-32 items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800" />
          <div className="border-t-primary-600 dark:border-t-primary-500 absolute inset-0 rounded-full border-4 border-r-transparent border-b-transparent border-l-transparent" />
          <div className="bg-primary-100 dark:bg-primary-900/30 flex size-20 items-center justify-center rounded-full">
            <Cpu className="text-primary-600 dark:text-primary-400 size-10" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
            Memproses Hasil Assessment
          </h2>
          <p className="mx-auto mb-8 max-w-md text-lg text-slate-600 dark:text-slate-400">
            Sistem sedang mengkalkulasi skor dan menyusun rekomendasi strategis untuk bisnis Anda
          </p>

          {/* Progress Steps */}
          <div className="mx-auto max-w-lg space-y-3">
            {[
              { label: 'Menganalisis jawaban', delay: 0 },
              { label: 'Menghitung skor maturity', delay: 0.5 },
              { label: 'Menyusun rekomendasi', delay: 1 },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: step.delay }}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: step.delay,
                  }}
                  className="bg-primary-100 dark:bg-primary-900/30 flex size-8 items-center justify-center rounded-full"
                >
                  <CheckCircle className="text-primary-600 dark:text-primary-400 size-5" />
                </motion.div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {step.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
