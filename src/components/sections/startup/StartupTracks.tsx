import { CheckCircle, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import { Grid, Typography } from '@/components/ui';
import Button from '@/components/ui/Button';
import Stack from '@/components/ui/Stack';

export default function StartupTracks() {
  return (
    <section className="bg-slate-50 py-32 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold tracking-wider text-blue-700 uppercase dark:bg-blue-900/30 dark:text-blue-300">
            Eligibility Criteria
          </div>
          <Typography variant="h2" as="h2">
            Choose Your Growth Track
          </Typography>
          <Typography variant="body" className="text-slate-600 dark:text-slate-400">
            Program kami disesuaikan dengan fase pertumbuhan startup Anda. Dari ide di
            garasi hingga ekspansi regional.
          </Typography>
        </div>

        <Grid cols={2} gap={10} className="mx-auto max-w-5xl">
          {/* Bootstrap Track */}
          <div className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-lg transition-all hover:border-blue-500/50 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-500/5 blur-[80px] transition-colors group-hover:bg-blue-500/10"></div>

            <div className="mb-10 flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner dark:bg-blue-900/30 dark:text-blue-400">
                <Zap className="h-8 w-8" />
              </div>
              <div>
                <Typography variant="h3" as="h3">
                  Bootstrap
                </Typography>
                <Typography variant="body" className="text-slate-500 dark:text-slate-400">
                  Pre-Seed / Angel Round
                </Typography>
              </div>
            </div>

            <div className="mb-10 rounded-3xl border border-slate-100 bg-slate-50 p-8 dark:border-slate-700/50 dark:bg-slate-800/50">
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-5xl leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white">
                  90%
                </span>
                <span className="text-xl font-bold text-slate-500 uppercase dark:text-slate-400">
                  OFF
                </span>
              </div>
              <Typography variant="body" className="text-slate-600 dark:text-slate-300">
                Selama 12 bulan pertama.
              </Typography>
            </div>

            <Stack direction="vertical" gap={5} className="mb-12 grow">
              <div className="flex items-center gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Total Funding
                  <span className="font-bold text-slate-900 dark:text-white">
                    &lt; $1M
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Usia &lt; 2 tahun
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Produk/Website Aktif
                </span>
              </div>
            </Stack>

            <Link href="/partners/apply?track=bootstrap" className="mt-auto">
              <Button
                size="md"
                fullWidth
                variant="outline"
                className="h-14 rounded-2xl border-slate-200 text-lg font-bold text-slate-900 transition-all group-hover:border-blue-500/50 group-hover:text-blue-600 hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
              >
                Apply Bootstrap Track
              </Button>
            </Link>
          </div>

          {/* Scale-Up Track */}
          <div className="group relative flex h-full transform flex-col overflow-hidden rounded-[2.5rem] border border-slate-700 bg-slate-900 p-10 text-white shadow-2xl transition-all hover:border-purple-500 md:-translate-y-4">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px] transition-colors group-hover:bg-purple-500/30"></div>
            <div className="absolute top-0 left-8 rounded-b-xl bg-purple-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
              MOST POPULAR
            </div>

            <div className="mt-4 mb-10 flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/20 text-purple-300 shadow-inner">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div>
                <Typography variant="h3" as="h3">
                  Scale-Up
                </Typography>
                <Typography variant="body">Seed / Series A+</Typography>
              </div>
            </div>

            <div className="mb-10 rounded-3xl border border-slate-700 bg-slate-800/50 p-8">
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-5xl leading-tight font-extrabold tracking-tight text-white">
                  50%
                </span>
                <span className="text-xl font-bold text-slate-400 uppercase">OFF</span>
              </div>
              <Typography variant="body" className="text-slate-300">
                Selama 24 bulan berturut-turut.
              </Typography>
            </div>

            <Stack direction="vertical" gap={5} className="mb-12 grow">
              <div className="flex items-center gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/20">
                  <CheckCircle className="h-4 w-4 text-purple-400" />
                </div>
                <span className="font-medium text-slate-200">
                  Total Funding
                  <span className="font-bold text-white">&gt; $1M</span>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/20">
                  <CheckCircle className="h-4 w-4 text-purple-400" />
                </div>
                <span className="font-medium text-slate-200">
                  Priority Support (SLA 4 Jam)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/20">
                  <CheckCircle className="h-4 w-4 text-purple-400" />
                </div>
                <span className="font-medium text-slate-200">
                  Dedicated Success Manager
                </span>
              </div>
            </Stack>

            <Link href="/partners/apply?track=scaleup" className="mt-auto">
              <Button
                size="md"
                fullWidth
                className="h-14 rounded-2xl border-none bg-purple-600 text-lg font-bold shadow-lg shadow-purple-900/50 transition-all hover:scale-[1.02] hover:bg-purple-500"
              >
                Apply Scale-Up Track
              </Button>
            </Link>
          </div>
        </Grid>
      </div>
    </section>
  );
}
