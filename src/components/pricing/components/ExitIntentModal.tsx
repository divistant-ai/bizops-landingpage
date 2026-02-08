'use client';

import { Clock, Gift, Mail, X } from 'lucide-react';
import React, { useState } from 'react';

import Button from '@/components/ui/Button';

type ExitIntentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  currentStep?: number;
};

export function ExitIntentModal({
  isOpen,
  onClose,
  onSubmit,
  currentStep = 1,
}: ExitIntentModalProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    onSubmit(email);
    setEmail('');
    setError('');
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-2xl" />

        <div className="relative p-6">
          {/* Header */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                <Gift className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Jangan Lewatkan!
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Estimasi harga hampir selesai
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="mb-4 flex items-center gap-2">
            <Clock className="h-4 w-4 text-amber-500" />
            <span className="text-xs text-slate-600 dark:text-slate-400">
              Anda sudah menyelesaikan
              {' '}
              {Math.min(currentStep * 16, 85)}
              % assessment
            </span>
          </div>

          {/* Description */}
          <div className="mb-6 space-y-3">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Tinggal beberapa langkah lagi untuk mendapatkan estimasi harga lengkap dengan
              rekomendasi paket terbaik untuk bisnis Anda.
            </p>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-500/20 dark:bg-amber-900/20">
              <p className="text-xs font-medium text-amber-800 dark:text-amber-200">
                Bonus: Dapatkan FREE consultation senilai Rp 2.000.000 setelah mengisi email!
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="exit-email"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Kirim estimasi ke email Anda
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="exit-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-slate-300 bg-white py-3 pr-4 pl-10 text-sm text-slate-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400"
                    autoFocus
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                  disabled={!email}
                >
                  Kirim
                </Button>
              </div>
              {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
            </div>
          </form>

          {/* Alternative actions */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={handleClose}
              className="text-xs text-slate-500 underline transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
            >
              Lanjutkan tanpa email
            </button>
            <span className="text-xs text-slate-400 dark:text-slate-500">
              Data terlindungi & aman
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
