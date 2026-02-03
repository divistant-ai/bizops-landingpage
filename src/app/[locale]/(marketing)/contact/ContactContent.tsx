'use client';

import { Clock, Mail, MapPin, MessageSquare } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { FadeIn } from '@/components/ui/FadeIn';

export default function ContactContent() {
  const t = useTranslations('Contact');
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <Section className="bg-white pt-32 pb-20 dark:bg-slate-900">
        <Container size="4xl" className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
            {t('hero_title')}
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400">
            {t('hero_description')}
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <FadeIn className="space-y-8 lg:col-span-1">
              <div>
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  {t('sales_title')}
                </h3>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                      {t('sales_label')}
                    </p>
                    <a
                      href="mailto:sales@bizops.id"
                      className="hover:text-primary-600 dark:hover:text-primary-400 text-lg font-medium text-slate-900 dark:text-white"
                    >
                      sales@bizops.id
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  {t('support_title')}
                </h3>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                      {t('support_label')}
                    </p>
                    <a
                      href="mailto:support@bizops.id"
                      className="hover:text-primary-600 dark:hover:text-primary-400 text-lg font-medium text-slate-900 dark:text-white"
                    >
                      support@bizops.id
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  {t('office_title')}
                </h3>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                      {t('office_location')}
                    </p>
                    <p className="leading-relaxed text-slate-800 dark:text-slate-300">
                      {t('office_address_1')}
                      <br />
                      {t('office_address_2')}
                      <br />
                      {t('office_address_3')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8 dark:border-slate-700">
                <div className="mb-2 flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium tracking-wider uppercase">
                    {t('hours_title')}
                  </span>
                </div>
                <p className="text-slate-800 dark:text-slate-300">{t('hours_schedule')}</p>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10 dark:border-slate-800 dark:bg-slate-900">
                <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {t('form_title')}
                </h2>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        {t('label_name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="focus:ring-primary-500 dark:focus:ring-primary-400 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        placeholder={t('placeholder_name')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        {t('label_email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="focus:ring-primary-500 dark:focus:ring-primary-400 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        placeholder={t('placeholder_email')}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t('label_company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="focus:ring-primary-500 dark:focus:ring-primary-400 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      placeholder={t('placeholder_company')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t('label_topic')}
                    </label>
                    <select
                      id="interest"
                      className="focus:ring-primary-500 dark:focus:ring-primary-400 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    >
                      <option>{t('topic_demo')}</option>
                      <option>{t('topic_quote')}</option>
                      <option>{t('topic_technical')}</option>
                      <option>{t('topic_partnership')}</option>
                      <option>{t('topic_other')}</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t('label_message')}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="focus:ring-primary-500 dark:focus:ring-primary-400 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      placeholder={t('placeholder_message')}
                    >
                    </textarea>
                  </div>

                  <Button
                    size="lg"
                    className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  >
                    {t('submit_button')}
                  </Button>
                  <p className="text-center text-xs text-slate-500">
                    {t('privacy_text')}
                    {' '}
                    <Link href="/legal/privacy" className="text-primary-600 hover:underline">
                      {t('privacy_link')}
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </div>
  );
}
