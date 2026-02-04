'use client';

import { MessageSquare, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Accordion from '@/components/ui/Accordion';

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

          <div className="rounded-3xl border border-slate-200 bg-white/50 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <h4 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
              {t('faq_contact_heading')}
            </h4>
            <p className="mb-8 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t('faq_contact_description')}
            </p>
            <div className="space-y-4">
              <a
                href="mailto:sales@bizops.id"
                className="group flex items-center gap-4 rounded-xl border border-transparent bg-white/50 p-3 transition-all hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm dark:bg-white/5 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Email Us</div>
                  <div className="font-semibold text-slate-900 dark:text-white">sales@bizops.id</div>
                </div>
              </a>
              <a
                href="tel:+622139702834"
                className="group flex items-center gap-4 rounded-xl border border-transparent bg-white/50 p-3 transition-all hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm dark:bg-white/5 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Call Us</div>
                  <div className="font-semibold text-slate-900 dark:text-white">+62 21 3970 2834</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
}
