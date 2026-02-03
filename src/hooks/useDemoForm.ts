
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { traceAction } from '@/libs/utils/telemetry';

export type DemoFormState = 'idle' | 'submitting' | 'success';

// Define schema outside hook to be stable, or inside if it needs translations (it does)
export function useDemoFormSchema() {
  const t = useTranslations('Demo');

  const schema = z.object({
    fullName: z
      .string()
      .min(3, t('error_name_min'))
      .max(100, t('error_name_max'))
      .regex(/^[a-z\s.]+$/i, t('error_name_format')),
    workEmail: z
      .string()
      .email(t('error_email_format'))
      .refine(
        email =>
          !['gmail.com', 'yahoo.com', 'hotmail.com'].some(domain =>
            email.includes(domain),
          ),
        t('error_email_personal'),
      ),
    companyName: z
      .string()
      .min(3, t('error_company_min'))
      .max(100, t('error_company_max')),
    whatsapp: z.string().min(1, t('error_whatsapp_required')), // Regex validation can be added
    employeeCount: z.string().optional(),
    industry: z.string().optional(),
    features: z.object({
      hr: z.boolean().default(false),
      project: z.boolean().default(false),
      inv: z.boolean().default(false),
      crm: z.boolean().default(false),
      finance: z.boolean().default(false),
      partner: z.boolean().default(false),
    }),
    consent: z.boolean().refine(val => val === true, t('error_consent_required')),
  });

  return schema;
}

export type DemoFormValues = z.infer<ReturnType<typeof useDemoFormSchema>>;

export function useDemoForm() {
  const [formState, setFormState] = useState<DemoFormState>('idle');
  const schema = useDemoFormSchema();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      companyName: '',
      whatsapp: '',
      employeeCount: '',
      industry: '',
      features: {
        hr: false,
        project: false,
        inv: false,
        crm: false,
        finance: false,
        partner: false,
      },
      consent: false,
    },
  });

  const onSubmit = async (data: DemoFormValues) => {
    setFormState('submitting');
    
    // Simulate API call / business logic
    const phone = '622139702834';
    const message = `Halo BizOps, saya ${data.fullName} dari ${data.companyName}. Saya tertarik untuk demo produk (Industri: ${data.industry}). Email saya: ${data.workEmail}.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message,
    )}`;

    await traceAction('business.lead.submit', async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      window.open(whatsappUrl, '_blank');
      setFormState('success');
    });
  };

  return {
    form,
    formState,
    onSubmit,
  };
}
