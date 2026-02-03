'use client';

import { Calculator } from 'lucide-react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Button, Stack, Typography } from '@/components/ui';
import { comparisonsData } from '@/data/comparisonData';
import { transformContent } from '@/libs/utils/transformContent';

type ComparisonsSidebarProps = {
  selectedId: string;
  setSelectedId: (id: string) => void;
};

export function ComparisonsSidebar({ selectedId, setSelectedId }: ComparisonsSidebarProps) {
  const locale = useLocale() as 'en' | 'id';

  return (
    <Stack direction="vertical" gap={6} className="lg:sticky lg:top-28 lg:col-span-3">
      <div className="rounded-3xl border border-slate-200/60 bg-white/80 p-3 shadow-xl shadow-slate-200/20 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/80 dark:shadow-black/20">
        <div className="mb-1 px-4 py-3 text-xs font-bold tracking-widest text-slate-400 uppercase dark:text-slate-300">
          Select System
        </div>
        <Stack
          direction="vertical"
          gap={2}
          className="scrollbar-hide overflow-x-auto pb-2 lg:overflow-visible lg:pb-0"
        >
          {Object.values(comparisonsData).map((item) => {
            const icon = transformContent({ icon: item.icon }).icon;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`group relative flex w-full min-w-[240px] items-center gap-4 overflow-hidden rounded-2xl p-4 text-left transition-all duration-300 lg:min-w-0 ${
                  selectedId === item.id
                    ? 'scale-[1.02] bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50'
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                    selectedId === item.id
                      ? 'bg-white/20 text-white dark:bg-slate-900/10 dark:text-slate-900'
                      : 'bg-slate-200/50 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {icon}
                </div>
                <div>
                  <div
                    className={`text-sm font-bold ${
                      selectedId === item.id
                        ? 'text-white dark:text-slate-900'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {item.name[locale]}
                  </div>
                  {selectedId === item.id && (
                    <div className="mt-0.5 text-[10px] font-medium opacity-70">Viewing Details</div>
                  )}
                </div>
              </button>
            );
          })}
        </Stack>
      </div>

      {/* CTA Mini */}
      <div className="group relative hidden overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 p-6 text-center text-white shadow-lg shadow-blue-500/20 lg:block">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-all group-hover:bg-white/20"></div>
        <div className="relative z-10">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/20 backdrop-blur-sm">
            <Calculator className="h-6 w-6 text-white" />
          </div>
          <Typography variant="h3" as="h3">
            <span className="text-white">Hitung Kerugian</span>
          </Typography>
          <Typography variant="body" className="leading-relaxed">
            <span className="text-white">
              Lihat berapa banyak biaya yang terbuang karena inefisiensi sistem lama.
            </span>
          </Typography>
          <Link href="/tools/roi-calculator">
            <Button
              size="sm"
              fullWidth
              className="mt-4 border-none bg-white font-bold text-blue-700 hover:bg-blue-50"
            >
              Buka Kalkulator ROI
            </Button>
          </Link>
        </div>
      </div>
    </Stack>
  );
}
