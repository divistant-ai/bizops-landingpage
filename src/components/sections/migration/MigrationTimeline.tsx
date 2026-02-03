'use client';

import { motion } from 'framer-motion';
import { Calendar, Check } from 'lucide-react';
import { Container, Section } from '@/components/layout';
import { migrationSteps } from '@/data/migrationDetails';

export function MigrationTimeline() {
  return (
    <Section className="bg-slate-50 dark:bg-slate-950">
      <Container size="6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
            Timeline Migrasi
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Proses end-to-end biasanya 4-6 minggu
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {migrationSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <div className="bg-primary-600 absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full font-bold text-white shadow-lg">
                  {idx + 1}
                </div>
                <div className="mb-4">
                  <div className="text-primary-600 dark:text-primary-400 mb-1 text-sm font-medium">
                    {step.phase}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    {step.duration}
                  </div>
                </div>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
