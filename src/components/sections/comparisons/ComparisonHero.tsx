'use client';

import { useLocale } from 'next-intl';
import { Stack, Typography } from '@/components/ui';

type ComparisonHeroProps = {
  selectedData: any;
  getScoreBg: (score: number) => string;
  getScoreColor: (score: number) => string;
};

export function ComparisonHero({
  selectedData,
  getScoreBg,
  getScoreColor,
}: ComparisonHeroProps) {
  const locale = useLocale() as 'en' | 'id';

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-2xl md:p-12 dark:border-slate-800 dark:bg-slate-900">
      <div
        className={`pointer-events-none absolute top-0 right-0 -mt-32 -mr-32 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px] ${getScoreBg(selectedData.bottleneckScore)}`}
      >
      </div>

      <div className="relative z-10">
        <Stack direction="vertical" gap={10} className="mb-12 items-start">
          {/* Text Content */}
          <div className="flex-1">
            <div className="mb-6 flex items-center gap-3">
              <span
                className={`rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm ${
                  selectedData.bottleneckScore <= 20
                    ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : selectedData.bottleneckScore > 70
                      ? 'border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400'
                      : 'border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400'
                }`}
              >
                {selectedData.bottleneckLabel[locale]}
              </span>
            </div>
            <Typography
              variant="h2"
              as="h2"
              className="leading-tight font-extrabold text-slate-900 dark:text-white"
            >
              "
              {selectedData.verdict[locale]}
              "
            </Typography>
            <Typography
              variant="body"
              className="leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {selectedData.description[locale]}
            </Typography>
          </div>

          {/* Score Meter */}
          <div className="mx-auto shrink-0 rounded-3xl border border-slate-100 bg-slate-50 p-6 backdrop-blur-sm md:mx-0 dark:border-slate-700 dark:bg-slate-800/50">
            <div className="relative flex h-40 w-40 items-center justify-center">
              <svg className="h-full w-full -rotate-90 transform drop-shadow-lg">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  className="text-slate-200 dark:text-slate-700"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  className={`${getScoreColor(selectedData.bottleneckScore)} transition-all duration-1000 ease-out`}
                  strokeDasharray={440}
                  strokeDashoffset={440 - (440 * selectedData.bottleneckScore) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl leading-tight font-extrabold text-slate-900 dark:text-white">
                  {selectedData.bottleneckScore}
                </div>
                <div className="mt-1 text-[10px] font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                  Bottleneck
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
}
