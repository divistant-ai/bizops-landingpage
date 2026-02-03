'use client';

import type { UseFormReturn } from 'react-hook-form';
import type { DemoFormState, DemoFormValues } from '@/hooks/useDemoForm';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Grid, Typography } from '@/components/ui';
import Button from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

type DemoFormProps = {
  form: UseFormReturn<DemoFormValues>;
  formState: DemoFormState;
  onSubmit: (data: DemoFormValues) => Promise<void>;
};

export function DemoForm({ form, formState, onSubmit }: DemoFormProps) {
  const t = useTranslations('Demo');

  return (
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Grid cols={2} gap={6}>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('label_fullname')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('placeholder_fullname')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="workEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('label_work_email')}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t('placeholder_work_email')}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>{t('helper_work_email')}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Grid>

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('label_company')}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Grid cols={2} gap={6}>
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('label_whatsapp')}</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder={t('placeholder_whatsapp')}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>{t('helper_whatsapp')}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="employeeCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('label_employee_count')}</FormLabel>
                    <FormControl>
                      <Select {...field} onChange={e => field.onChange(e.target.value)}>
                        <option value="">{t('select_placeholder')}</option>
                        <option value="<50">{t('employee_lt50')}</option>
                        <option value="50-200">{t('employee_50_200')}</option>
                        <option value="200-1000">{t('employee_200_1000')}</option>
                        <option value=">1000">{t('employee_gt1000')}</option>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Grid>

            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('label_industry')}</FormLabel>
                  <FormControl>
                    <Select {...field} onChange={e => field.onChange(e.target.value)}>
                      <option value="">{t('select_placeholder')}</option>
                      <option value="Construction">{t('industry_construction')}</option>
                      <option value="Professional Services">
                        {t('industry_services')}
                      </option>
                      <option value="Retail">{t('industry_retail')}</option>
                      <option value="Manufacturing">
                        {t('industry_manufacturing')}
                      </option>
                      <option value="Healthcare">{t('industry_healthcare')}</option>
                      <option value="Education">{t('industry_education')}</option>
                      <option value="Others">{t('industry_others')}</option>
                    </Select>
                  </FormControl>
                  <FormDescription>{t('helper_industry')}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <span className="mb-4 block flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <Zap className="h-4 w-4 text-amber-500 dark:text-amber-400" />
                {' '}
                {t('needs_title')}
              </span>
              <Grid cols={1} gap={4}>
                {(
                  [
                    'feature_hr',
                    'feature_project',
                    'feature_inv',
                    'feature_crm',
                    'feature_finance',
                    'feature_partner',
                  ] as const
                ).map((key) => {
                  const featureKey = key.replace('feature_', '');
                  return (
                    <FormField
                      key={key}
                      control={form.control}
                      name={`features.${featureKey}` as any}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-y-0 space-x-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-slate-700 dark:text-slate-300">
                            {t(key)}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  );
                })}
              </Grid>
            </div>

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row items-start space-y-0 space-x-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal text-slate-600 dark:text-slate-400">
                        {t('consent_text')}
                        {' '}
                        <Link
                          href="/legal/privacy"
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                          target="_blank"
                        >
                          {t('consent_link')}
                        </Link>
                        {' '}
                        {t('consent_text_end')}
                      </FormLabel>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              size="lg"
              type="submit"
              fullWidth
              variant="primary"
              className="h-14 rounded-xl text-lg font-bold"
              isLoading={formState === 'submitting'}
            >
              {formState === 'submitting'
                ? t('submit_loading')
                : t('submit_button')}
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
