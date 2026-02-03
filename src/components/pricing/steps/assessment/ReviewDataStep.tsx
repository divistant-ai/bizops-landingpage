'use client';

import {
  Building2,
  Calendar,
  Cpu,
  LayoutGrid,
  Server,
} from 'lucide-react';

import type { AssessmentData } from '../../types';
import { usePricingContext } from '../../PricingContext';

export function ReviewDataStep() {
  const { assessment } = usePricingContext();

  const selectedModules = Object.keys(assessment)
    .filter(k => k.startsWith('needs') && assessment[k as keyof AssessmentData] === true)
    .map(k => k.replace('needs', '').replace(/([A-Z])/g, ' $1').trim());

  return (
    <div className="space-y-6">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
          Review Data
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Pastikan spesifikasi kebutuhan Anda sudah lengkap & akurat.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Profile Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-white/5">
            <Building2 className="text-primary-500 dark:text-primary-400 h-4 w-4" />
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              Business Profile
            </h4>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Industry</span>
              <span className="font-medium text-slate-800 capitalize dark:text-white">
                {assessment.industry || 'Not Set'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Size</span>
              <span className="font-medium text-slate-800 capitalize dark:text-white">
                {assessment.companySize}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Estimated Users</span>
              <span className="font-bold text-slate-800 dark:text-white">
                {assessment.userCount} Accounts
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Branches</span>
              <span className="font-bold text-slate-800 dark:text-white">
                {assessment.branchCount} Locations
              </span>
            </div>
          </div>
        </div>

        {/* Infrastructure Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-white/5">
            <Server className="h-4 w-4 text-blue-500 dark:text-blue-400" />
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              Infrastructure
            </h4>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Deployment</span>
              <span className="font-medium text-slate-900 capitalize dark:text-white">
                {assessment.deployment === 'onprem'
                  ? 'On-Premise'
                  : assessment.deployment === 'dedicated'
                    ? 'Private Cloud'
                    : 'Shared Cloud'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Region</span>
              <span className="font-medium text-slate-900 capitalize dark:text-white">
                {assessment.serverLocation}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Multi-Entity</span>
              <span className={`font-medium ${assessment.hasMultiCompany ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
                {assessment.hasMultiCompany ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>

        {/* Modules Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:bg-slate-100 md:col-span-2 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-white/5">
            <LayoutGrid className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              Selected Modules
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedModules.length > 0 ? (
              selectedModules.map(m => (
                <span
                  key={m}
                  className="rounded-full border border-emerald-500/30 bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 capitalize dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
                >
                  {m}
                </span>
              ))
            ) : (
              <span className="text-sm text-slate-500 italic">No modules selected</span>
            )}
          </div>
        </div>

        {/* Technical Specifications Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-white/5">
            <Cpu className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              Technical Specifications
            </h4>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Data Migration</span>
              <span className="font-medium text-slate-900 capitalize dark:text-white">
                {assessment.dataVolume} Volume
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">API Integrations</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {assessment.apiIntegrations} Endpoints
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Custom Module</span>
              <span className={`font-medium ${assessment.needsCustomModule ? 'text-purple-600 dark:text-purple-400' : 'text-slate-900 dark:text-white'}`}>
                {assessment.needsCustomModule ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>

        {/* Plan & Service Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-white/5">
            <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              Plan & Service
            </h4>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Go-Live Target</span>
              <span className="font-medium text-slate-900 capitalize dark:text-white">
                {assessment.goLiveTimeline === 'urgent'
                  ? '< 1 Month'
                  : assessment.goLiveTimeline === '1month'
                    ? '1-2 Months'
                    : '3+ Months'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Training</span>
              <span className="font-medium text-slate-900 capitalize dark:text-white">
                {assessment.trainingPreference}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Support Level</span>
              <span className="font-medium text-slate-900 capitalize dark:text-white">
                {assessment.supportLevel} SLA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
