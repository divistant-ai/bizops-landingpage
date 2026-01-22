'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle, FileCheck, Lock, Shield, Video, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Checkbox, Input, Select } from '@/components/Form';
import Container from '@/components/layout/Container';
import { Grid, Typography } from '@/components/ui';
import Button from '@/components/ui/Button';
import Stack from '@/components/ui/Stack';
import { traceAction } from '@/libs/utils/telemetry';

export function DemoContent() {
  const t = useTranslations('Demo');
  const router = useRouter();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const fullName = formData.get('fullName') as string;
    const email = formData.get('workEmail') as string;
    const company = formData.get('companyName') as string;
    const whatsapp = formData.get('whatsapp') as string;
    const consent = formData.get('consent') as string;

    if (!fullName) {
      newErrors.fullName = t('error_name_required');
    } else if (fullName.length < 3) {
      newErrors.fullName = t('error_name_min');
    } else if (fullName.length > 100) {
      newErrors.fullName = t('error_name_max');
    } else if (!/^[a-z\s.]+$/i.test(fullName)) {
      newErrors.fullName = t('error_name_format');
    }

    const emailRegex = /^[\w.-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i;
    if (!email) {
      newErrors.workEmail = t('error_email_required');
    } else if (!emailRegex.test(email)) {
      newErrors.workEmail = t('error_email_format');
    } else if (
      email.includes('gmail.com') ||
      email.includes('yahoo.com') ||
      email.includes('hotmail.com')
    ) {
      newErrors.workEmail = t('error_email_personal');
    }

    if (!company) {
      newErrors.companyName = t('error_company_required');
    } else if (company.length < 3) {
      newErrors.companyName = t('error_company_min');
    } else if (company.length > 100) {
      newErrors.companyName = t('error_company_max');
    }

    const phoneRegex = /^(\+62|62|0)\d{9,15}$/;
    const cleanPhone = whatsapp?.replace(/[\s-]/g, '');
    if (!whatsapp) {
      newErrors.whatsapp = t('error_whatsapp_required');
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.whatsapp = t('error_whatsapp_format');
    }

    if (!consent) {
      newErrors.consent = t('error_consent_required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    if (!validate(formData)) {
      return;
    }

    setFormState('submitting');

    const name = formData.get('fullName') as string;
    const company = formData.get('companyName') as string;
    const email = formData.get('workEmail') as string;
    const industry = formData.get('industry') as string;

    const phone = '622139702834';
    const message = `Halo BizOps, saya ${name} dari ${company}. Saya tertarik untuk demo produk (Industri: ${industry}). Email saya: ${email}.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    await traceAction('business.lead.submit', async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      window.open(whatsappUrl, '_blank');
      setFormState('success');
    });
  };

  if (formState === 'success') {
    return (
      <Stack
        direction="vertical"
        gap={4}
        align="center"
        justify="center"
        className="min-h-screen bg-slate-50 px-4 text-center dark:bg-[#0B0F19]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.3)] ring-1 ring-emerald-500/50"
        >
          <CheckCircle className="h-10 w-10 text-emerald-500" aria-hidden="true" />
        </motion.div>
        <Typography variant="h2" as="h2" className="text-slate-900 dark:text-white">
          {t('success_title')}
        </Typography>
        <Typography variant="body" className="text-slate-600 dark:text-slate-400">
          {t('success_description')}
        </Typography>
        <Button size="md" variant="primary" onClick={() => router.push('/')}>
          {t('success_button')}
        </Button>
      </Stack>
    );
  }

  return (
    <div className="selection:bg-primary-500/30 min-h-screen bg-slate-50 font-sans text-slate-900 dark:bg-[#0B0F19] dark:text-slate-200">
      <div className="relative overflow-hidden pt-28 pb-24">
        <div className="bg-primary-600/20 pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-30 blur-[120px] dark:opacity-60"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10"></div>

        <Container size="7xl" className="relative z-10">
          <Grid cols={12} gap={12}>
            {/* Left: Value Proposition */}
            <Stack direction="vertical" gap={4} justify="center" className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Stack
                  direction="horizontal"
                  gap={1}
                  align="center"
                  className="bg-primary-100 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 mb-6 py-1 text-sm font-bold tracking-wider uppercase"
                >
                  <Video className="h-5 w-5" /> {t('badge_text')}
                </Stack>
                <Typography
                  variant="h1"
                  as="h1"
                  className="leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white"
                >
                  {t('hero_title_part1')} <br />
                  <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent dark:to-cyan-400">
                    {t('hero_title_part2')}
                  </span>
                </Typography>
                <Typography variant="body" className="pb-6 text-slate-600 dark:text-slate-400">
                  {t('hero_description')}
                </Typography>

                <Stack direction="vertical" gap={8} className="mb-12">
                  {[
                    {
                      icon: Calendar,
                      title: t('step1_title'),
                      desc: t('step1_description'),
                    },
                    {
                      icon: Video,
                      title: t('step2_title'),
                      desc: t('step2_description'),
                    },
                    {
                      icon: FileCheck,
                      title: t('step3_title'),
                      desc: t('step3_description'),
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5">
                      <Stack
                        direction="horizontal"
                        gap={4}
                        align="center"
                        justify="center"
                        className="h-12 w-12 rounded-2xl border border-slate-200 bg-slate-100 shadow-inner dark:border-white/10 dark:bg-white/5"
                      >
                        <item.icon className="text-primary-600 dark:text-primary-400 h-6 w-6" />
                      </Stack>
                      <div>
                        <Typography
                          variant="h4"
                          as="h4"
                          className="font-bold text-slate-900 dark:text-white"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="small"
                          className="leading-relaxed text-slate-600 dark:text-slate-400"
                        >
                          {item.desc}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </Stack>

                <Grid
                  cols={3}
                  gap={4}
                  className="border-t border-slate-200 pt-8 dark:border-white/10"
                >
                  <Stack direction="vertical" gap={2}>
                    <Shield className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                    <span className="text-xs font-bold text-slate-600 uppercase dark:text-slate-400">
                      {t('badge_iso')}
                    </span>
                  </Stack>
                  <Stack direction="vertical" gap={2}>
                    <Lock className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                    <span className="text-xs font-bold text-slate-600 uppercase dark:text-slate-400">
                      {t('badge_tls')}
                    </span>
                  </Stack>
                  <Stack direction="vertical" gap={2}>
                    <FileCheck className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                    <span className="text-xs font-bold text-slate-600 uppercase dark:text-slate-400">
                      {t('badge_nda')}
                    </span>
                  </Stack>
                </Grid>
              </motion.div>
            </Stack>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl backdrop-blur-xl md:p-10 dark:border-white/10 dark:bg-slate-900/50"
              >
                <div className="mb-8">
                  <Typography variant="h3" as="h3" className="text-slate-900 dark:text-white">
                    {t('form_title')}
                  </Typography>
                  <Typography variant="small" className="text-slate-600 dark:text-slate-400">
                    {t('form_subtitle')}
                  </Typography>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <Grid cols={2} gap={6}>
                    <Input
                      id="fullName"
                      name="fullName"
                      required
                      label={t('label_fullname')}
                      placeholder={t('placeholder_fullname')}
                      error={errors.fullName}
                      className="focus:!border-primary-500 !border-slate-200 !bg-white !text-slate-900 placeholder:!text-slate-400 dark:!border-slate-700 dark:!bg-slate-800 dark:!text-white dark:placeholder:!text-slate-500"
                      labelClassName="text-slate-700 dark:text-slate-300"
                    />
                    <Input
                      id="workEmail"
                      name="workEmail"
                      required
                      type="email"
                      label={t('label_work_email')}
                      placeholder={t('placeholder_work_email')}
                      helperText={t('helper_work_email')}
                      error={errors.workEmail}
                      className="focus:!border-primary-500 !border-slate-200 !bg-white !text-slate-900 placeholder:!text-slate-400 dark:!border-slate-700 dark:!bg-slate-800 dark:!text-white dark:placeholder:!text-slate-500"
                      labelClassName="text-slate-700 dark:text-slate-300"
                    />
                  </Grid>

                  <Input
                    id="companyName"
                    name="companyName"
                    required
                    label={t('label_company')}
                    error={errors.companyName}
                    className="focus:!border-primary-500 !border-slate-200 !bg-white !text-slate-900 dark:!border-slate-700 dark:!bg-slate-800 dark:!text-white"
                    labelClassName="text-slate-700 dark:text-slate-300"
                  />

                  <Grid cols={2} gap={6}>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      required
                      type="tel"
                      label={t('label_whatsapp')}
                      placeholder={t('placeholder_whatsapp')}
                      helperText={t('helper_whatsapp')}
                      error={errors.whatsapp}
                      className="focus:!border-primary-500 !border-slate-200 !bg-white !text-slate-900 placeholder:!text-slate-400 dark:!border-slate-700 dark:!bg-slate-800 dark:!text-white dark:placeholder:!text-slate-500"
                      labelClassName="text-slate-700 dark:text-slate-300"
                    />
                    <Select
                      id="employeeCount"
                      name="employeeCount"
                      label={t('label_employee_count')}
                      className="focus:!border-primary-500 !border-slate-200 !bg-white !text-slate-900 dark:!border-slate-700 dark:!bg-slate-800 dark:!text-white"
                      labelClassName="text-slate-700 dark:text-slate-300"
                      options={[
                        { value: '<50', label: t('employee_lt50') },
                        { value: '50-200', label: t('employee_50_200') },
                        { value: '200-1000', label: t('employee_200_1000') },
                        { value: '>1000', label: t('employee_gt1000') },
                      ]}
                    />
                  </Grid>

                  <Select
                    id="industry"
                    name="industry"
                    label={t('label_industry')}
                    helperText={t('helper_industry')}
                    className="focus:!border-primary-500 !border-slate-200 !bg-white !text-slate-900 dark:!border-slate-700 dark:!bg-slate-800 dark:!text-white"
                    labelClassName="text-slate-700 dark:text-slate-300"
                    options={[
                      { value: 'Construction', label: t('industry_construction') },
                      { value: 'Professional Services', label: t('industry_services') },
                      { value: 'Retail', label: t('industry_retail') },
                      { value: 'Manufacturing', label: t('industry_manufacturing') },
                      { value: 'Healthcare', label: t('industry_healthcare') },
                      { value: 'Education', label: t('industry_education') },
                      { value: 'Others', label: t('industry_others') },
                    ]}
                  />

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
                    <span className="mb-4 block flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                      <Zap className="h-4 w-4 text-amber-500 dark:text-amber-400" />{' '}
                      {t('needs_title')}
                    </span>
                    <Grid cols={1} gap={4}>
                      <Checkbox
                        label={t('feature_hr')}
                        name="feature_hr"
                        labelClassName="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                      />
                      <Checkbox
                        label={t('feature_project')}
                        name="feature_project"
                        labelClassName="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                      />
                      <Checkbox
                        label={t('feature_inv')}
                        name="feature_inv"
                        labelClassName="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                      />
                      <Checkbox
                        label={t('feature_crm')}
                        name="feature_crm"
                        labelClassName="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                      />
                      <Checkbox
                        label={t('feature_finance')}
                        name="feature_finance"
                        labelClassName="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                      />
                      <Checkbox
                        label={t('feature_partner')}
                        name="feature_partner"
                        labelClassName="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                      />
                    </Grid>
                  </div>

                  <div className="pt-2">
                    <Checkbox
                      name="consent"
                      label={
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {t('consent_text')}{' '}
                          <Link
                            href="/legal/privacy"
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                            target="_blank"
                          >
                            {t('consent_link')}
                          </Link>{' '}
                          {t('consent_text_end')}
                        </span>
                      }
                      required
                    />
                    {errors.consent && (
                      <Typography variant="body">
                        <Shield className="h-3 w-3" /> {errors.consent}
                      </Typography>
                    )}
                  </div>

                  <Button
                    size="md"
                    type="submit"
                    fullWidth
                    variant="primary"
                    className="shadow-primary-500/20 bg-primary-600 hover:bg-primary-500 h-14 rounded-xl bg-slate-50 text-lg font-bold text-white shadow-xl dark:bg-slate-600"
                    isLoading={formState === 'submitting'}
                  >
                    <span className="text-slate-600 dark:text-white">
                      {formState === 'submitting' ? t('submit_loading') : t('submit_button')}
                    </span>
                  </Button>
                </form>
              </motion.div>
            </div>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
