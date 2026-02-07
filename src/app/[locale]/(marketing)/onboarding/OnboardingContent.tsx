'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { IndustrySelector } from '@/components/IndustrySelector';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';

export default function OnboardingContent() {
  const t = useTranslations('IndustryOnboarding');
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleContinue = async () => {
    if (selectedIndustries.length === 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call to save preferences
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-16 dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl bg-white p-8 text-center shadow-xl dark:bg-slate-900"
          >
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
            </div>

            <Typography variant="h2" as="h1" className="mb-4">
              {t('success_title')}
            </Typography>

            <Typography variant="body" color="muted" className="mb-8">
              {t('success_description')}
            </Typography>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/demo">
                <Button size="lg" className="w-full sm:w-auto">
                  {t('book_demo')}
                  {' '}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {t('view_pricing')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-12 dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="bg-primary-100 dark:bg-primary-900/30 flex items-center gap-2 rounded-full px-4 py-2">
              <Sparkles className="text-primary-600 h-4 w-4" />
              <span className="text-primary-700 dark:text-primary-300 text-sm font-medium">
                {t('badge')}
              </span>
            </div>
          </div>

          <Typography variant="h1" as="h1" className="mb-4">
            {t('title')}
          </Typography>

          <Typography variant="bodyLarge" color="muted" className="mx-auto max-w-2xl">
            {t('subtitle')}
          </Typography>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="bg-primary-600 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
              1
            </div>
            <div className="bg-primary-600 h-1 w-16 rounded-full" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-600 dark:bg-slate-700 dark:text-slate-400">
              2
            </div>
            <div className="h-1 w-16 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-600 dark:bg-slate-700 dark:text-slate-400">
              3
            </div>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-white p-6 shadow-xl md:p-10 dark:bg-slate-900"
        >
          <IndustrySelector
            selectedIndustries={selectedIndustries}
            onChange={setSelectedIndustries}
            maxSelection={3}
            showDescription={true}
          />

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700">
            <Typography variant="small" color="muted">
              {selectedIndustries.length === 0
                ? t('select_at_least_one')
                : t('can_select_more', { count: 3 - selectedIndustries.length })}
            </Typography>

            <div className="flex gap-3">
              <Link href="/">
                <Button variant="ghost">{t('skip_for_now')}</Button>
              </Link>
              <Button
                onClick={handleContinue}
                disabled={selectedIndustries.length === 0 || isSubmitting}
                size="lg"
                className="min-w-[160px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    {t('saving')}
                  </>
                ) : (
                  <>
                    {t('continue')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <Typography variant="small" color="muted">
            {t('trust_text')}
          </Typography>
        </div>
      </div>
    </div>
  );
}
