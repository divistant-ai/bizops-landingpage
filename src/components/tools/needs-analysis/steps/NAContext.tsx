'use client';

import React from 'react';
import { industries } from '@/data/needsAnalysisData';
import { NAStepLayout } from '../components/NAStepLayout';
import { useNeedsAnalysis } from '../context/NeedsAnalysisContext';

export const NAContext: React.FC<{
  displayStep: number;
  totalSteps: number;
}> = ({ displayStep, totalSteps }) => {
  const { contextData, setContextData, setStep, handleFinish } = useNeedsAnalysis();

  return (
    <NAStepLayout
      title="Profil & Kontak"
      desc="Data ini digunakan untuk personalisasi laporan Anda."
      prevStep="intro"
      nextStep="tech-stack"
      disableNext={!contextData.company || !contextData.email}
      setStep={setStep}
      displayStep={displayStep}
      totalSteps={totalSteps}
      handleFinish={handleFinish}
    >
      <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/50">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={contextData.name}
              onChange={e => setContextData({ ...contextData, name: e.target.value })}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-slate-800 dark:text-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Nama Perusahaan
              {' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={contextData.company}
              onChange={e => setContextData({ ...contextData, company: e.target.value })}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-slate-800 dark:text-white"
              placeholder="PT. Contoh Indonesia"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
              {' '}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={contextData.email}
              onChange={e => setContextData({ ...contextData, email: e.target.value })}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-slate-800 dark:text-white"
              placeholder="john@company.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              No. Telepon (WA)
            </label>
            <input
              type="tel"
              value={contextData.phone}
              onChange={e => setContextData({ ...contextData, phone: e.target.value })}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-slate-800 dark:text-white"
              placeholder="+62 812 3456 7890"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Posisi/Jabatan
            </label>
            <input
              type="text"
              value={contextData.role}
              onChange={e => setContextData({ ...contextData, role: e.target.value })}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-slate-800 dark:text-white"
              placeholder="IT Manager"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Jumlah Karyawan
            </label>
            <select
              value={contextData.teamSize}
              onChange={e => setContextData({ ...contextData, teamSize: e.target.value })}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-slate-800 dark:text-white"
            >
              <option value="">Pilih...</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="500+">500+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Industri
          </label>
          <select
            value={contextData.industry}
            onChange={e => setContextData({ ...contextData, industry: e.target.value })}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-slate-800 dark:text-white"
          >
            <option value="">Pilih Industri...</option>
            {industries.map(ind => (
              <option key={ind.id} value={ind.id}>
                {ind.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </NAStepLayout>
  );
};
