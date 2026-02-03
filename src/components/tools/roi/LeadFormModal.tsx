'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Building2, FileText, Mail, Phone, User } from 'lucide-react';
import React from 'react';
import Button from '@/components/ui/Button';

export type LeadData = {
  name: string;
  company: string;
  email: string;
  phone: string;
};

type LeadFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  leadData: LeadData;
  setLeadData: (data: LeadData) => void;
};

export const LeadFormModal: React.FC<LeadFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  leadData,
  setLeadData,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-md rounded-3xl border border-slate-300 bg-slate-100 p-8 shadow-2xl dark:border-white/10 dark:bg-slate-900"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              aria-label="Tutup Modal"
            >
              ✕
            </button>

            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <FileText className="size-6" />
              </div>
              <h3 id="modal-title" className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                Simpan Kalkulasi ROI
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Masukkan detail Anda untuk mengunduh laporan PDF lengkap.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="lead-name" className="mb-1 block text-xs font-semibold text-slate-600 uppercase dark:text-slate-400">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="absolute top-3 left-3 size-4 text-slate-500" aria-hidden="true" />
                  <input
                    id="lead-name"
                    required
                    type="text"
                    value={leadData.name}
                    onChange={e => setLeadData({ ...leadData, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pr-4 pl-10 text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
                    placeholder="Nama Anda"
                    autoFocus
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lead-company" className="mb-1 block text-xs font-semibold text-slate-600 uppercase dark:text-slate-400">
                  Perusahaan
                </label>
                <div className="relative">
                  <Building2 className="absolute top-3 left-3 size-4 text-slate-500" aria-hidden="true" />
                  <input
                    id="lead-company"
                    required
                    type="text"
                    value={leadData.company}
                    onChange={e => setLeadData({ ...leadData, company: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pr-4 pl-10 text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
                    placeholder="Nama PT"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lead-email" className="mb-1 block text-xs font-semibold text-slate-600 uppercase dark:text-slate-400">
                  Email Bisnis
                </label>
                <div className="relative">
                  <Mail className="absolute top-3 left-3 size-4 text-slate-500" aria-hidden="true" />
                  <input
                    id="lead-email"
                    required
                    type="email"
                    value={leadData.email}
                    onChange={e => setLeadData({ ...leadData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pr-4 pl-10 text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
                    placeholder="email@kantor.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lead-phone" className="mb-1 block text-xs font-semibold text-slate-600 uppercase dark:text-slate-400">
                  WhatsApp
                </label>
                <div className="relative">
                  <Phone className="absolute top-3 left-3 size-4 text-slate-500" aria-hidden="true" />
                  <input
                    id="lead-phone"
                    type="tel"
                    value={leadData.phone}
                    onChange={e => setLeadData({ ...leadData, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pr-4 pl-10 text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
                    placeholder="0812..."
                  />
                </div>
              </div>

              <Button
                type="submit"
                fullWidth
                className="mt-2 bg-emerald-600 hover:bg-emerald-500"
              >
                <span className="text-white dark:text-slate-600">Unduh PDF Sekarang</span>
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
