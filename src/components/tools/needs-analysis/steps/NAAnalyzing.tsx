'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const NAAnalyzing: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
          className="mx-auto mb-6 size-16 rounded-full border-4 border-blue-500 border-t-transparent"
        />
        <h2 className="mb-2 text-2xl font-bold" aria-live="polite">Menganalisis Data Anda...</h2>
        <p className="text-slate-600 dark:text-slate-400" aria-live="polite">Mohon tunggu sebentar.</p>
      </div>
    </div>
  );
};
