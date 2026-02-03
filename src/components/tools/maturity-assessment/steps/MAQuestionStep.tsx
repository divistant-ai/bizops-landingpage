'use client';

import type { CategoryKey } from '../context/types';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Cpu, Heart, Lightbulb, Settings, Users } from 'lucide-react';
import React from 'react';
import { assessmentQuestions } from '@/data/assessmentQuestions';
import { useMaturityAssessment } from '../context/MaturityAssessmentContext';

const categoryIcons: Record<CategoryKey, React.ReactElement> = {
  strategy: <Lightbulb className="size-5" />,
  customer: <Heart className="size-5" />,
  operations: <Settings className="size-5" />,
  technology: <Cpu className="size-5" />,
  people: <Users className="size-5" />,
};

const categoryLabels: Record<CategoryKey, string> = {
  strategy: 'Strategy & Leadership',
  customer: 'Customer Experience',
  operations: 'Operations & Process',
  technology: 'Technology & Data',
  people: 'People & Culture',
};

export const MAQuestionStep: React.FC = () => {
  const {
    currentStep,
    setCurrentStep,
    answers,
    handleAnswer,
    progress,
  } = useMaturityAssessment();

  const currentQuestion = assessmentQuestions[currentStep] || assessmentQuestions[0]!;
  const currentCategory = (currentQuestion?.category as CategoryKey) || 'strategy';

  const questionsByCategory = assessmentQuestions.reduce(
    (acc, q, idx) => {
      const cat = q.category as CategoryKey;
      if (!acc[cat]) {
        acc[cat] = [];
      }
      acc[cat].push({ ...q, index: idx });
      return acc;
    },
    {} as Record<CategoryKey, (typeof assessmentQuestions[0] & { index: number })[]>,
  );

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Dynamic Background based on Category */}
      <div className="absolute inset-0 transition-colors duration-1000">
        <div
          className={`absolute top-0 right-0 size-[500px] rounded-full blur-[120px] transition-colors duration-1000 ${
            currentCategory === 'strategy'
              ? 'bg-amber-500/10'
              : currentCategory === 'customer'
                ? 'bg-red-500/10'
                : currentCategory === 'operations'
                  ? 'bg-blue-500/10'
                  : currentCategory === 'technology'
                    ? 'bg-purple-500/10'
                    : 'bg-green-500/10'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 pt-20 pb-12">
        {/* Header / Nav */}
        <div className="mb-10 flex items-center justify-between">
          <button
            onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              currentStep === 0
                ? 'cursor-not-allowed text-slate-300 opacity-50 dark:text-slate-700'
                : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
            }`}
          >
            <ArrowLeft className="size-4" />
            <span>Sebelumnya</span>
          </button>

          <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            <span className="text-slate-900 dark:text-white">{currentStep + 1}</span>
            {' '}
            /
            {' '}
            {assessmentQuestions.length}
          </div>
        </div>

        {/* Progress Bar & Category Indicators */}
        <div className="mb-12">
          {/* Main Progress Line */}
          <div
            className="relative mb-8 h-1 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progress Assessment"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="bg-primary-500 h-full"
            />
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {Object.keys(categoryLabels).map((catKey) => {
              const cat = catKey as CategoryKey;
              const catQuestions = questionsByCategory[cat];
              const isCurrentCat = currentCategory === cat;
              const isCompletedCat = catQuestions?.every(q => answers[q.id] !== undefined);

              return (
                <div
                  key={cat}
                  className={`relative flex items-center gap-3 rounded-xl border p-3 transition-all duration-300 ${
                    isCurrentCat
                      ? 'border-primary-500 bg-white shadow-lg ring-1 ring-black/5 dark:bg-slate-900'
                      : isCompletedCat
                        ? 'border-emerald-500/30 bg-emerald-50/50 opacity-80 dark:bg-emerald-900/10'
                        : 'border-transparent bg-slate-100 opacity-50 dark:bg-slate-900'
                  }`}
                >
                  <div
                    className={`rounded-lg p-2 ${
                      isCurrentCat
                        ? 'bg-primary-100 text-primary-600 dark:bg-slate-800 dark:text-white'
                        : isCompletedCat
                          ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
                          : 'bg-slate-200 text-slate-500 dark:bg-slate-800'
                    }`}
                  >
                    {categoryIcons[cat]}
                  </div>
                  <div className="hidden md:block">
                    <div
                      className={`text-xs leading-tight font-bold ${
                        isCurrentCat
                          ? 'text-slate-900 dark:text-white'
                          : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {categoryLabels[cat]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Question Card */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-3xl"
            >
              <h2 className="mb-8 text-3xl leading-snug font-bold text-slate-900 dark:text-white">
                {currentQuestion.question}
              </h2>

              <div className="space-y-4">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id] === option.score;

                  return (
                    <motion.button
                      key={idx}
                      onClick={() => handleAnswer(option.score)}
                      whileHover={{ scale: 1.01, x: 4 }}
                      whileTap={{ scale: 0.99 }}
                      className={`group relative flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50 ring-primary-200 shadow-lg ring-2 dark:bg-blue-900/20 dark:ring-blue-900'
                          : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-md dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20'
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isSelected
                            ? 'border-primary-500 bg-primary-500 text-white'
                            : 'border-slate-300 bg-slate-50 group-hover:border-blue-400 dark:border-slate-600 dark:bg-slate-800'
                        }`}
                      >
                        {isSelected && <div className="size-2 rounded-full bg-white" />}
                      </div>
                      <div>
                        <div
                          className={`font-semibold transition-colors ${
                            isSelected
                              ? 'text-primary-900 dark:text-white'
                              : 'text-slate-800 group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400'
                          }`}
                        >
                          {option.label}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
