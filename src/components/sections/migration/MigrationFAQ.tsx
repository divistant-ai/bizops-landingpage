'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Container, Section } from '@/components/layout';
import { migrationFaqs } from '@/data/supportContent';

export function MigrationFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Section className="bg-white dark:bg-slate-900">
      <Container size="4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {migrationFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <span className="pr-4 font-bold text-slate-900 dark:text-white">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
