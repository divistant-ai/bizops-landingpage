'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Building2, CheckCircle, MessageSquare, Send, Shield, Users, Video, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OptimizedImage from '@/components/ui/OptimizedImage'; // Imported OptimizedImage
import { Select } from '@/components/ui/select';
import { Textarea as TextArea } from '@/components/ui/textarea';

type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('DemoModal');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('modalName') as HTMLInputElement).value;
    const email = (form.elements.namedItem('modalEmail') as HTMLInputElement).value;
    const phoneInput = (form.elements.namedItem('modalPhone') as HTMLInputElement).value;
    const company = (form.elements.namedItem('modalCompany') as HTMLInputElement).value;
    const employees = (form.elements.namedItem('modalEmployees') as HTMLSelectElement).value;
    const jobTitle = (form.elements.namedItem('modalJobTitle') as HTMLInputElement).value;
    const interest = (form.elements.namedItem('modalInterest') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('modalMessage') as HTMLTextAreaElement).value;

    const salesPhone = '622139702834'; // Sales Number

    // Construct a professional WhatsApp message
    const text
      = `*New Demo Request*\n\n`
        + `${t('whatsapp_greeting')}\n\n`
        + `*${t('whatsapp_contact_details')}*\n`
        + `${t('whatsapp_name')}: ${name}\n`
        + `${t('whatsapp_job_title')}: ${jobTitle}\n`
        + `${t('whatsapp_company')}: ${company}\n`
        + `${t('whatsapp_email')}: ${email}\n`
        + `${t('whatsapp_phone')}: ${phoneInput}\n\n`
        + `*${t('whatsapp_business_profile')}*\n`
        + `${t('whatsapp_size')}: ${employees} ${t('whatsapp_employees')}\n`
      + `${t('whatsapp_interest')}: ${interest}\n\n`
      + `*${t('whatsapp_notes')}*\n${message || '-'}\n\n`
      + `${t('whatsapp_closing')}`;

    const url = `https://wa.me/${salesPhone}?text=${encodeURIComponent(text)}`;

    // Simulate API call/Tracking then redirect
    setTimeout(() => {
      window.open(url, '_blank');
      setIsLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:max-h-[800px] md:flex-row dark:border-slate-700 dark:bg-slate-900"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100"
            >
              <X className="h-5 w-5" />
            </button>

            {/* LEFT: INFO SIDEBAR */}
            <div className="hidden flex-col justify-between overflow-y-auto border-r border-slate-200 bg-slate-50 p-8 md:flex md:w-4/12 dark:border-slate-700 dark:bg-slate-800/50">
              <div>
                <div className="mb-8">
                  <span className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold tracking-wider uppercase">
                    <Video className="h-3 w-3" />
                    {' '}
                    {t('badge')}
                  </span>
                  <h2 className="mb-2 text-2xl leading-tight font-bold text-slate-900 dark:text-slate-100">
                    {t('title')}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t('subtitle')}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-500 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-slate-900 dark:text-slate-100">
                        {t('feature_1_title')}
                      </h4>
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {t('feature_1_desc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-500 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-slate-900 dark:text-slate-100">
                        {t('feature_2_title')}
                      </h4>
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {t('feature_2_desc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-purple-500 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-slate-900 dark:text-slate-100">
                        {t('feature_3_title')}
                      </h4>
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {t('feature_3_desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
                <div className="mb-3 flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-slate-100 dark:border-slate-900 dark:bg-slate-700"
                    >
                      <OptimizedImage
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="User"
                        className="h-full w-full rounded-full"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[10px] font-bold text-slate-700 dark:border-slate-900 dark:bg-slate-700 dark:text-slate-300">
                    +2k
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">{t('social_proof')}</p>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="overflow-y-auto bg-white p-6 md:w-8/12 md:p-8 dark:bg-slate-900">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {t('form_title')}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t('form_subtitle')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="modalName">{t('label_full_name')}</Label>
                    <Input
                      id="modalName"
                      name="modalName"
                      required
                      placeholder={t('placeholder_full_name')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="modalJobTitle">{t('label_job_title')}</Label>
                    <Input
                      id="modalJobTitle"
                      name="modalJobTitle"
                      required
                      placeholder={t('placeholder_job_title')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="modalEmail">{t('label_work_email')}</Label>
                    <Input
                      id="modalEmail"
                      name="modalEmail"
                      type="email"
                      required
                      placeholder={t('placeholder_work_email')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="modalPhone">{t('label_phone')}</Label>
                    <Input
                      id="modalPhone"
                      name="modalPhone"
                      type="tel"
                      required
                      placeholder={t('placeholder_phone')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="modalCompany">{t('label_company_name')}</Label>
                    <Input
                      id="modalCompany"
                      name="modalCompany"
                      required
                      placeholder={t('placeholder_company_name')}
                      icon={<Building2 />}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="modalEmployees">{t('label_company_size')}</Label>
                    <Select
                      id="modalEmployees"
                      name="modalEmployees"
                      required
                      icon={<Users />}
                    >
                      {[
                        { value: '1-10', label: t('size_1_10') },
                        { value: '11-50', label: t('size_11_50') },
                        { value: '51-200', label: t('size_51_200') },
                        { value: '201-500', label: t('size_201_500') },
                        { value: '501-1000', label: t('size_501_1000') },
                        { value: '1000+', label: t('size_1000_plus') },
                      ].map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="modalInterest">{t('label_interest')}</Label>
                  <Select
                    id="modalInterest"
                    name="modalInterest"
                    required
                  >
                    {[
                      { value: 'General Overview', label: t('interest_general') },
                      { value: 'HR & Payroll', label: t('interest_hr') },
                      { value: 'Finance & Accounting', label: t('interest_finance') },
                      { value: 'Supply Chain', label: t('interest_supply') },
                      { value: 'CRM & Sales', label: t('interest_crm') },
                      { value: 'Custom Solution', label: t('interest_custom') },
                    ].map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="modalMessage">{t('label_message')}</Label>
                  <TextArea
                    id="modalMessage"
                    name="modalMessage"
                    placeholder={t('placeholder_message')}
                    rows={2}
                    className="resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    fullWidth
                    size="lg"
                    type="submit"
                    disabled={isLoading}
                    className="h-12 border border-slate-300 dark:border-slate-600"
                  >
                    {isLoading
                      ? (
                          t('button_loading')
                        )
                      : (
                          <span className="flex items-center gap-2 text-slate-700 dark:text-white">
                            <Send className="h-5 w-5" />
                            {' '}
                            {t('button_submit')}
                          </span>
                        )}
                  </Button>
                  <p className="mt-3 text-center text-[10px] text-slate-600 dark:text-slate-400">
                    {t('privacy_notice')}
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
