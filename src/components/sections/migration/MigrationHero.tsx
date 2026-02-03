'use client';

import { motion } from 'framer-motion';
import { Database } from 'lucide-react';
import { Container, Section } from '@/components/layout';
import { Typography } from '@/components/ui';

export function MigrationHero() {
  return (
    <Section className="bg-slate-50 pt-32 pb-20 text-white dark:bg-slate-800">
      <Container size="6xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium"
          >
            <Database className="h-4 w-4 text-slate-800 dark:text-slate-50" />
            <span className="text-slate-800 dark:text-slate-50">Migration Center</span>
          </motion.div>
          <Typography variant="h1" as="h1" className="mb-6 text-slate-800 dark:text-white">
            Migrasi Data dengan Aman & Efisien
          </Typography>
          <Typography
            variant="body"
            className="mx-auto max-w-3xl text-lg text-slate-700 dark:text-slate-300"
          >
            Panduan lengkap untuk migrasi data Anda dari sistem lama ke BizOps. Setiap sumber
            memiliki tantangan unik—kami siap membantu.
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
