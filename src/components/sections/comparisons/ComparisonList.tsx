'use client';

import {
  ArrowRight,
  CheckCircle2,
  Info,
  LayoutGrid,
  TrendingUp,
  XCircle,
} from 'lucide-react';
import { useLocale } from 'next-intl';
import { Grid, Stack, Typography } from '@/components/ui';

type ComparisonListProps = {
  selectedData: any;
  isBizOps: boolean;
};

export function ComparisonList({ selectedData, isBizOps }: ComparisonListProps) {
  const locale = useLocale() as 'en' | 'id';

  return (
    <Stack direction="vertical" gap={6}>
      <div className="flex items-center justify-between px-2">
        <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">
          <LayoutGrid className="text-primary-500 inline h-5 w-5" />
          {' '}
          Detail Perbandingan
        </Typography>
      </div>

      {selectedData.points[locale].map((point: any, idx: number) => (
        <div
          key={idx}
          className="hover:border-primary-500/20 group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-xl md:p-8 dark:border-slate-800 dark:bg-slate-900"
        >
          <Grid cols={12} gap={8} className="relative z-10 items-center">
            {/* Col 1: Feature & Limit */}
            <Stack direction="vertical" gap={4} className="md:col-span-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  {idx + 1}
                </div>
                <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white">
                  {point.feature}
                </Typography>
              </div>

              <div
                className={`rounded-xl border p-4 ${isBizOps ? 'border-blue-100 bg-blue-50 dark:border-blue-900/20 dark:bg-blue-900/10' : 'border-red-100 bg-red-50 dark:border-red-900/20 dark:bg-red-900/10'}`}
              >
                <div
                  className={`mb-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase ${isBizOps ? 'text-blue-500' : 'text-red-500 dark:text-red-400'}`}
                >
                  {isBizOps
                    ? (
                        <Info className="h-3 w-3" />
                      )
                    : (
                        <XCircle className="h-3 w-3" />
                      )}
                  {isBizOps ? 'Standard Capability' : 'Current Limit'}
                </div>
                <Typography
                  variant="small"
                  className="leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  {point.them}
                </Typography>
              </div>
            </Stack>

            {/* Arrow */}
            <div className="hidden justify-center md:col-span-1 md:flex">
              <ArrowRight className="h-6 w-6 text-slate-300 dark:text-slate-700" />
            </div>

            {/* Col 2: BizOps Solution */}
            <Grid cols={2} gap={6} className="md:col-span-7">
              <div className="relative rounded-xl border border-emerald-100 bg-emerald-50 p-5 dark:border-emerald-900/20 dark:bg-emerald-900/10">
                <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" />
                  {' '}
                  {isBizOps ? 'BizOps Advantage' : 'BizOps Solution'}
                </div>
                <Typography
                  variant="body"
                  className="leading-relaxed text-slate-900 dark:text-white"
                >
                  {point.us}
                </Typography>
              </div>

              <div className="flex flex-col justify-center border-l border-slate-100 pl-4 dark:border-slate-800">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5">
                    <TrendingUp className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="mb-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase dark:text-slate-300">
                      Business Impact
                    </div>
                    <Typography
                      variant="small"
                      className="leading-relaxed text-slate-600 dark:text-slate-400"
                    >
                      "
                      {point.impact}
                      "
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
    </Stack>
  );
}
