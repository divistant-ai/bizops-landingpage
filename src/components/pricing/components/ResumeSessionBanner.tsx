'use client';

import { Clock, RotateCcw, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui';

type ResumeSessionBannerProps = {
  onResume: () => void;
  onDismiss: () => void;
  lastActiveText?: string;
};

export function ResumeSessionBanner({
  onResume,
  onDismiss,
  lastActiveText = 'Session sebelumnya tersedia',
}: ResumeSessionBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss();
  };

  return (
    <div className="relative mb-6 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-lg dark:border-blue-800 dark:from-blue-900/20 dark:to-indigo-900/20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-400/10 blur-2xl" />

      <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800">
            <Clock className="h-6 w-6 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Lanjutkan Perhitungan Sebelumnya?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{lastActiveText}</p>
          </div>
        </div>

        <div className="flex w-full gap-3 sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDismiss}
            className="flex-1 gap-2 border-slate-300 sm:flex-none dark:border-slate-700"
          >
            <X className="h-4 w-4" />
            Mulai Baru
          </Button>
          <Button
            size="sm"
            onClick={() => {
              setIsVisible(false);
              onResume();
            }}
            className="flex-1 gap-2 bg-blue-600 text-white hover:bg-blue-700 sm:flex-none"
          >
            <RotateCcw className="h-4 w-4" />
            Lanjutkan
          </Button>
        </div>
      </div>
    </div>
  );
}
