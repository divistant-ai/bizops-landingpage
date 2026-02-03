'use client';

import { useTranslations } from 'next-intl';
import { MessageSquare, Phone } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export function FAQContactSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const t = useTranslations('Pricing');

  return (
    <div className="mx-auto mb-24 grid max-w-7xl gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="sticky top-24 space-y-6">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
              {t('faq_heading')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('faq_description')}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-900">
            <h4 className="mb-1 text-xl font-bold text-slate-900 dark:text-white">
              {t('faq_contact_heading')}
            </h4>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              {t('faq_contact_description')}
            </p>
            <div className="space-y-3">
              <a
                href="mailto:sales@bizops.id"
                className="flex items-center gap-3 text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
              >
                <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <span className="font-medium">sales@bizops.id</span>
              </a>
              <a
                href="tel:+622139702834"
                className="flex items-center gap-3 text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
              >
                <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-medium">+62 21 39702834</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <FAQAccordion faqs={faqs} />
      </div>
    </div>
  );
}
