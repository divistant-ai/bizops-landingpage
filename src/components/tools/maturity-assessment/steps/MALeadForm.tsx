'use client';

import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, Mail, Phone, Users } from 'lucide-react';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { useMaturityAssessment } from '../context/MaturityAssessmentContext';

export const MALeadForm: React.FC = () => {
  const { leadForm, setLeadForm, handleLeadSubmit, setViewState } = useMaturityAssessment();
  const [emailError, setEmailError] = useState('');

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white p-4 text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Background Mesh */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="bg-primary-900/10 absolute -top-[20%] -right-[10%] size-[50%] rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900"
        >
          <div className="mb-8 text-center">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-slate-200 bg-linear-to-br from-blue-50 to-indigo-50 shadow-inner dark:border-white/5 dark:from-slate-800 dark:to-slate-900">
              <Users className="dark:text-primary-400 size-8 text-blue-600" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
              Profil Penilai
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Laporan detail dan benchmark industri akan dikirimkan ke kontak yang Anda daftarkan.
            </p>
          </div>

          <form onSubmit={handleLeadSubmit} className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="ma-name" className="ml-1 text-xs font-semibold tracking-wider text-slate-600 uppercase dark:text-slate-400">
                  Nama Lengkap
                </Label>
                <Input
                  id="ma-name"
                  name="name"
                  type="text"
                  required
                  value={leadForm.name}
                  onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
                  placeholder="Nama Anda"
                  autoFocus
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ma-company" className="ml-1 text-xs font-semibold tracking-wider text-slate-600 uppercase dark:text-slate-400">
                  Perusahaan
                </Label>
                <Input
                  id="ma-company"
                  name="company"
                  type="text"
                  required
                  value={leadForm.company}
                  onChange={e => setLeadForm({ ...leadForm, company: e.target.value })}
                  placeholder="Nama PT"
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="ma-email" className="ml-1 flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-600 uppercase dark:text-slate-400">
                  <Mail className="size-3" aria-hidden="true" />
                  {' '}
                  Email Bisnis
                </Label>
                <Input
                  id="ma-email"
                  name="email"
                  type="email"
                  required
                  className={
                    emailError
                      ? 'border-red-500 bg-red-50 focus-visible:ring-red-500 dark:border-red-500 dark:bg-slate-950'
                      : ''
                  }
                  value={leadForm.email}
                  onChange={(e) => {
                    setLeadForm({ ...leadForm, email: e.target.value });
                    if (emailError) {
                      setEmailError('');
                    }
                  }}
                  placeholder="name@company.com"
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? 'email-error' : undefined}
                />
                {emailError && (
                  <p id="email-error" className="mt-1 ml-1 flex items-center text-xs text-red-400 dark:text-red-400">
                    <AlertCircle className="mr-1 size-3" />
                    {' '}
                    {emailError}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="ma-phone" className="ml-1 flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-600 uppercase dark:text-slate-400">
                  <Phone className="size-3" aria-hidden="true" />
                  {' '}
                  WhatsApp (Opsional)
                </Label>
                <Input
                  id="ma-phone"
                  name="phone"
                  type="tel"
                  value={leadForm.phone}
                  onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                  placeholder="0812..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="ml-1 block text-xs font-semibold tracking-wider text-slate-600 uppercase dark:text-slate-400">
                Posisi / Jabatan
              </Label>
              <Input
                name="role"
                type="text"
                value={leadForm.role}
                onChange={e => setLeadForm({ ...leadForm, role: e.target.value })}
                placeholder="Manager IT / Ops"
              />
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                fullWidth
                size="lg"
                className="bg-primary-600 shadow-primary-900/20 hover:bg-primary-500 shadow-lg"
              >
                <span className="text-slate-800 dark:text-white">Lanjut ke Pertanyaan</span>
                {' '}
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <button
                type="button"
                onClick={() => setViewState('intro')}
                className="mt-4 w-full text-center text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Kembali ke Intro
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
