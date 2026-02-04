'use client';

import type { CategoryKey } from '../context/types';
import {
  BarChart,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,
  Cpu,
  Download,
  Heart,
  Info,
  Lightbulb,
  Phone,
  RefreshCw,
  Settings,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { recommendations } from '@/data/assessmentQuestions';
import { MethodologyReference } from '../components/MethodologyReference';
import { useMaturityAssessment } from '../context/MaturityAssessmentContext';

const categoryLabels: Record<CategoryKey, string> = {
  strategy: 'Strategy & Leadership',
  customer: 'Customer Experience',
  operations: 'Operations & Process',
  technology: 'Technology & Data',
  people: 'People & Culture',
};

const categoryIcons: Record<CategoryKey, React.ReactElement> = {
  strategy: <Lightbulb className="size-5" />,
  customer: <Heart className="size-5" />,
  operations: <Settings className="size-5" />,
  technology: <Cpu className="size-5" />,
  people: <Users className="size-5" />,
};

export const MAResults: React.FC = () => {
  const { results, leadForm, assessmentDate, handleReset } = useMaturityAssessment();
  const [showMethodology, setShowMethodology] = useState(false);

  if (!results) { return null; }

  const getRecommendationLevel = (avgCategoryScore: number) => {
    if (avgCategoryScore <= 2.5) {
      return 'low';
    }
    if (avgCategoryScore <= 4) {
      return 'medium';
    }
    return 'high';
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white px-4 pt-24 pb-12 text-slate-900 sm:px-6 lg:px-8 dark:bg-slate-950 dark:text-white print:bg-white print:pt-0 print:pb-0 print:text-black">
      <div className="mx-auto max-w-6xl">
        {/* REPORT HEADER */}
        <div className="relative mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-slate-900/50 print:rounded-none print:border-b-2 print:border-gray-200 print:bg-transparent print:pb-8 print:shadow-none">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-green-600 bg-green-100 px-3 py-1 text-xs font-bold tracking-wider text-green-700 uppercase dark:border-green-800 dark:bg-green-900/30 dark:text-green-400 print:hidden">
                  <CheckCircle className="size-3" />
                  {' '}
                  Assessment Completed
                </div>
                <button
                  onClick={handleReset}
                  className="group flex items-center gap-1.5 text-xs text-slate-500 transition-colors hover:text-red-400 print:hidden"
                  title="Hapus data dan mulai dari awal"
                  aria-label="Hapus data dan mulai penilaian dari awal"
                >
                  <RefreshCw className="size-3 transition-transform duration-500 group-hover:rotate-180" aria-hidden="true" />
                  <span>Reset</span>
                </button>
              </div>

              <h1 className="text-3xl font-bold text-slate-900 dark:text-white print:text-black">
                Laporan Digital Maturity
              </h1>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 print:text-gray-500">
                ID Dokumen:
                {' '}
                {`RPT-${new Date().getFullYear()}${Math.floor(Math.random() * 1000)}`}
              </p>
            </div>

            {/* User Details Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-white/5 dark:bg-slate-950/50 dark:text-slate-300 print:border-gray-200 print:bg-gray-50 print:text-gray-800">
              <div className="flex items-center gap-2">
                <Building2 className="text-primary-600 dark:text-primary-400 size-4 print:text-slate-600" aria-hidden="true" />
                <span className="font-semibold">{leadForm.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-primary-400 size-4 print:text-slate-600" aria-hidden="true" />
                <span>{leadForm.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="text-primary-400 size-4 print:text-slate-600" aria-hidden="true" />
                <span>{leadForm.role || 'N/A'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-primary-400 size-4 print:text-slate-600" aria-hidden="true" />
                <span>{assessmentDate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12 print:mb-6 print:gap-8">
          {/* LEFT: Executive Summary & Score */}
          <div className="space-y-6 lg:col-span-4">
            <div className="h-fit rounded-3xl border border-slate-200 bg-white p-1 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/50 print:border-gray-300 print:bg-white print:text-black">
              <div className="relative flex flex-col items-center overflow-hidden rounded-[22px] bg-slate-50 p-8 text-center dark:bg-slate-900/80 print:bg-white print:p-0 print:pt-4 print:shadow-none">
                <div className="relative mb-6 flex size-40 items-center justify-center">
                  <svg className="size-full -rotate-90 transform" aria-hidden="true">
                    <circle
                      cx="80"
                      cy="80"
                      r="72"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      className="text-slate-200 dark:text-slate-800 print:text-gray-200"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="72"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeDasharray={452}
                      strokeDashoffset={452 - (452 * results.avgScore) / 5}
                      className={`${results.maturityLevel.color.replace('bg-', 'text-')} transition-all duration-1000 ease-out`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span
                      className={`text-5xl font-bold ${results.maturityLevel.color.replace('bg-', 'text-')}`}
                    >
                      {results.avgScore.toFixed(1)}
                    </span>
                    <span className="mt-1 text-xs font-medium tracking-widest text-slate-500 uppercase">
                      / 5.0
                    </span>
                  </div>
                </div>

                <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white print:text-black">
                  {results.maturityLevel.title}
                </h2>
                <div
                  className={`mb-4 rounded-full px-3 py-1 text-xs font-bold text-white ${results.maturityLevel.color} print:bg-gray-200 print:text-black`}
                >
                  Level
                  {' '}
                  {results.maturityLevel.level}
                </div>
              </div>
            </div>

            {/* Executive Summary Text */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-white/10 dark:bg-slate-900/50 print:border-gray-300 print:bg-white">
              <h3 className="mb-3 text-sm font-bold tracking-widest text-slate-600 uppercase dark:text-slate-400 print:text-black">
                Executive Summary
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 print:text-slate-700">
                Perusahaan Anda berada pada tahap
                {' '}
                <strong>{results.maturityLevel.title}</strong>
                .
                {' '}
                {results.maturityLevel.description}
                <br />
                <br />
                Untuk mencapai level berikutnya, fokus utama Anda harus pada integrasi lintas
                fungsi dan pemanfaatan data yang lebih strategis.
              </p>
              <button
                onClick={() => setShowMethodology(!showMethodology)}
                className="text-primary-400 hover:text-primary-300 flex items-center gap-2 text-xs font-medium transition-colors print:hidden"
                aria-expanded={showMethodology}
                aria-controls="methodology-modal"
              >
                <Info className="size-3" aria-hidden="true" />
                {' '}
                Bagaimana skor ini dihitung?
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 print:hidden">
              <Button
                onClick={handlePrint}
                fullWidth
                size="lg"
                className="bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-blue-900/20"
              >
                <Download className="mr-2 size-4" aria-hidden="true" />
                Download PDF Report
              </Button>
              <Link href="/contact" className="block w-full">
                <Button
                  variant="outline"
                  fullWidth
                  className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <Phone className="mr-2 size-4" aria-hidden="true" />
                  Konsultasi Gratis dengan Ahli
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT: Detailed Breakdown */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white print:text-black">
                <BarChart className="text-primary-500 size-5" aria-hidden="true" />
                Analisis Per Dimensi
              </h3>

              <div className="space-y-6">
                {Object.entries(results.categoryScores).map(([key, rawScoreData]) => {
                  const catKey = key as CategoryKey;
                  const scoreData = rawScoreData as { total: number; count: number };
                  const avgCatScore = scoreData.total / scoreData.count || 0;
                  const recLevel = getRecommendationLevel(avgCatScore);
                  const rec = recommendations[catKey][recLevel];

                  return (
                    <div
                      key={key}
                      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/5 dark:bg-slate-900/30 print:break-inside-avoid print:border-gray-200 print:bg-white print:shadow-none"
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary-50 dark:bg-primary-900/20 flex size-10 items-center justify-center rounded-lg text-blue-600 dark:text-blue-400 print:bg-gray-100 print:text-black">
                            {categoryIcons[catKey]}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white print:text-black">
                              {categoryLabels[catKey]}
                            </h4>
                            <div className="mt-1 h-2 w-32 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 print:bg-gray-200" role="progressbar" aria-valuenow={avgCatScore} aria-valuemin={0} aria-valuemax={5} aria-label={`Skor ${categoryLabels[catKey]}`}>
                              <div
                                style={{ width: `${(avgCatScore / 5) * 100}%` }}
                                className={`h-full rounded-full ${
                                  avgCatScore >= 4
                                    ? 'bg-emerald-500'
                                    : avgCatScore >= 2.5
                                      ? 'bg-blue-500'
                                      : 'bg-amber-500'
                                } print:bg-black`}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-slate-900 dark:text-white print:text-black">
                            {avgCatScore.toFixed(1)}
                          </div>
                          <div className="text-xs text-slate-500">Scale 1-5</div>
                        </div>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900 print:bg-gray-50">
                        <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-slate-500 uppercase print:text-gray-600">
                          <Lightbulb className="size-3 text-amber-500" aria-hidden="true" />
                          Rekomendasi Strategis
                        </div>
                        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 print:text-black">
                          {rec.advice}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Methodology Modal (Desktop Overlay or Mobile Modal) */}
            {showMethodology && (
              <div
                id="methodology-modal"
                className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/90 p-4 backdrop-blur-sm print:hidden"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-methodology-title"
              >
                <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 id="modal-methodology-title" className="text-xl font-bold text-white">Metodologi & Leveling</h3>
                    <button
                      onClick={() => setShowMethodology(false)}
                      className="text-slate-500 hover:text-white"
                      aria-label="Tutup Modal"
                    >
                      Tutup
                    </button>
                  </div>
                  <MethodologyReference />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
