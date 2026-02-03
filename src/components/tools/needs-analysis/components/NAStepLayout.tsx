'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Search } from 'lucide-react';
import React from 'react';
import Button from '@/components/ui/Button';

type NAStepLayoutProps = {
  title: string;
  desc: string;
  children: React.ReactNode;
  prevStep: string;
  nextStep: string | (() => void);
  disableNext: boolean;
  setStep: (step: any) => void;
  displayStep: number;
  totalSteps: number;
  handleFinish: () => void;
};

export const NAStepLayout: React.FC<NAStepLayoutProps> = ({
  title,
  desc,
  children,
  prevStep,
  nextStep,
  disableNext,
  setStep,
  displayStep,
  totalSteps,
  handleFinish,
}) => {
  const headingRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    // Move focus to heading when step changes
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, [displayStep]);

  return (
    <div className="min-h-screen bg-slate-50 px-4 pt-24 pb-12 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div
            className="mb-2 text-xs font-bold tracking-widest text-blue-500 uppercase"
            role="status"
            aria-label={`Step ${displayStep} of ${totalSteps}`}
          >
            Step
            {' '}
            {displayStep}
            {' '}
            of
            {' '}
            {totalSteps}
          </div>
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="mb-2 text-3xl font-bold outline-none focus:ring-0"
          >
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">{desc}</p>
        </div>

        <motion.div
          // ... rest of component
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 min-h-[400px]"
        >
          {children}
        </motion.div>

        <div className="flex justify-between border-t border-slate-200 pt-6 dark:border-white/10">
          <button
            onClick={() => setStep(prevStep)}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
          >
            <ArrowLeft className="size-4" />
            {' '}
            Kembali
          </button>
          <Button
            onClick={typeof nextStep === 'string' ? () => setStep(nextStep) : nextStep}
            disabled={disableNext}
            className={
              disableNext
                ? 'opacity-50'
                : nextStep === handleFinish
                  ? 'bg-emerald-600 hover:bg-emerald-500'
                  : ''
            }
          >
            <span className="white flex items-center text-slate-800 dark:text-slate-600">
              {nextStep !== handleFinish && 'Lanjut'}
              {nextStep !== handleFinish && (
                <ChevronRight className="ml-2 size-4 text-slate-800 dark:text-slate-600" />
              )}
            </span>
            {nextStep === handleFinish && <span className="text-white">Lihat hasil analisis</span>}
            {nextStep === handleFinish && <Search className="ml-2 size-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};
