'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  CheckCircle,
  Download,
  Mail,
  Phone,
  RefreshCw,
  Share2,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Button from '@/components/ui/Button';
import { budgets, timelines } from '@/data/needsAnalysisData';
import { useNeedsAnalysis } from '../context/NeedsAnalysisContext';

export const NAResults: React.FC = () => {
  const {
    contextData,
    selectedTimeline,
    selectedBudget,
    getRecommendedModules,
    getRecommendedServices,
    handleReset,
  } = useNeedsAnalysis();

  const recommended = getRecommendedModules();
  const recommendedServices = getRecommendedServices();
  const timelineLabel = timelines.find(t => t.id === selectedTimeline)?.label || 'N/A';
  const budgetLabel = budgets.find(b => b.id === selectedBudget)?.label || 'N/A';

  return (
    <div className="min-h-screen bg-slate-50 px-4 pt-24 pb-12 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
          >
            <CheckCircle className="size-10" />
          </motion.div>
          <h1 className="mb-4 text-4xl font-bold">Analisis Selesai!</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Berikut rekomendasi solusi yang dipersonalisasi untuk
            {' '}
            {contextData.company}
            .
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left: Summary */}
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900/50">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-600 dark:text-blue-100">
                <Briefcase className="size-5 text-blue-500" />
                {' '}
                Ringkasan Profil
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2 dark:border-white/5">
                  <span className="text-slate-500">Nama</span>
                  <span className="font-medium">{contextData.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2 dark:border-white/5">
                  <span className="text-slate-500">Perusahaan</span>
                  <span className="font-medium">{contextData.company}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2 dark:border-white/5">
                  <span className="text-slate-500">Industri</span>
                  <span className="font-medium capitalize">{contextData.industry}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2 dark:border-white/5">
                  <span className="text-slate-500">Tim</span>
                  <span className="font-medium">
                    {contextData.teamSize}
                    {' '}
                    orang
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2 dark:border-white/5">
                  <span className="text-slate-500">Timeline</span>
                  <span className="font-medium">{timelineLabel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Budget Range</span>
                  <span className="font-medium">{budgetLabel}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button fullWidth className="bg-blue-600 hover:bg-blue-500">
                <Download className="mr-2 size-4" />
                Download PDF Report
              </Button>
              <Button fullWidth variant="outline" onClick={handleReset}>
                <RefreshCw className="mr-2 size-4" />
                Mulai Ulang
              </Button>
            </div>
          </div>

          {/* Right: Recommendations */}
          <div className="space-y-8 lg:col-span-8">
            {/* 1. Recommended Modules */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Rekomendasi Modul Software</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {recommended.length > 0
                  ? (
                      recommended.map(mod => (
                        <div
                          key={mod.id}
                          className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/10 dark:border-white/10 dark:bg-slate-900/50"
                        >
                          <div className="relative z-10">
                            <div className="mb-4 flex items-start justify-between">
                              <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500">
                                {mod.icon ? <mod.icon className="size-6" /> : <Briefcase className="size-6" />}
                              </div>
                              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-500">
                                {mod.matchScore}
                                {' '}
                                matches
                              </span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold">{mod.title}</h3>
                            <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                              {mod.desc}
                            </p>
                            <Link href={`#${mod.id}`} className="text-sm font-bold text-blue-500 hover:underline">
                              Pelajari Lebih Lanjut →
                            </Link>
                          </div>
                        </div>
                      ))
                    )
                  : (
                      <p>Tidak ada modul spesifik yang ditemukan. Hubungi kami untuk konsultasi manual.</p>
                    )}
              </div>
            </div>

            {/* 2. Services */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Layanan Pendukung</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {recommendedServices.map(svc => (
                  <div
                    key={svc.id}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/5 dark:bg-slate-900/30"
                  >
                    <div className="rounded-lg bg-slate-200 p-2 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      <svc.icon className="size-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold">{svc.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
              <h3 className="mb-3 text-2xl font-bold">Siap Transformasi Bisnis?</h3>
              <p className="mx-auto mb-8 max-w-2xl text-blue-100">
                Hasil analisis ini hanyalah langkah awal. Diskusikan detail teknis dan strategi
                implementasi bersama konsultan ahli kami.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="bg-white text-blue-700 hover:bg-blue-50">
                  <Phone className="mr-2 size-4" />
                  Jadwalkan Demo
                </Button>
                <Button className="border border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <Mail className="mr-2 size-4" />
                  Email Saya Laporan Ini
                </Button>
                <Button className="border border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <Share2 className="mr-2 size-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
