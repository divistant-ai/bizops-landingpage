import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';

export default function PartnerApplyPage() {
  const t = useTranslations('PartnerApply');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Section className="pt-32 pb-20">
        <Container size="4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12 dark:border-slate-800 dark:bg-slate-900">
            <h1 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('title')}
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-600 dark:text-slate-400">
              {t('subtitle')}
            </p>

            {/* Placeholder for actual form integration (e.g. Typeform or Hubspot) */}
            <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-10 dark:border-slate-800 dark:bg-slate-950">
              <p className="mb-6 text-slate-500 italic dark:text-slate-400">
                [{t('form_placeholder')}]
              </p>
              <Button
                size="lg"
                className="rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100"
              >
                <span className="text-white dark:!text-slate-900">{t('apply_button')}</span>
              </Button>
            </div>

            <div className="mx-auto max-w-lg text-left">
              <h3 className="mb-4 font-bold text-slate-900 dark:text-white">
                {t('minimum_requirements_title')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="text-primary-600 dark:text-primary-500 mt-0.5 h-5 w-5 shrink-0" />
                  <span>{t('minimum_requirement_1')}</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="text-primary-600 dark:text-primary-500 mt-0.5 h-5 w-5 shrink-0" />
                  <span>{t('minimum_requirement_2')}</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="text-primary-600 dark:text-primary-500 mt-0.5 h-5 w-5 shrink-0" />
                  <span>{t('minimum_requirement_3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
