
import { Layout, ShieldCheck, TrendingUp } from 'lucide-react';
import { Grid, Typography } from '@/components/ui';
import Stack from '@/components/ui/Stack';

export default function WhyItMatters() {
  return (
    <section className="border-y border-slate-100 bg-white py-32 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Grid cols={2} gap={12} className="items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-bold tracking-wider text-red-700 uppercase dark:bg-red-900/30 dark:text-red-300">
              The Scaling Trap
            </div>
            <Typography
              variant="h2"
              as="h2"
              className="leading-tight font-bold text-slate-900 dark:text-white"
            >
              Jangan Biarkan "Admin Chaos"
              <br />
              Membunuh Momentum.
            </Typography>
            <Typography variant="body" className="text-slate-600 dark:text-slate-400">
              Startup sering gagal bukan karena produknya, tapi karena operasional yang
              berantakan saat scaling. Spreadsheet yang tidak sinkron dan HR manual adalah
              "utang teknis" operasional yang berbahaya.
            </Typography>

            <Stack direction="vertical" gap={8} className="mt-8">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <Layout className="h-6 w-6" />
                </div>
                <div>
                  <Typography variant="h4" as="h4">
                    Investor-Ready Reports
                  </Typography>
                  <Typography
                    variant="body"
                    className="leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    Laporan keuangan, Burn Rate, dan MRR real-time untuk due diligence
                    investor. Tidak perlu begadang menyusun laporan manual setiap akhir
                    bulan.
                  </Typography>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <Typography variant="h4" as="h4">
                    Enterprise-Grade Compliance
                  </Typography>
                  <Typography
                    variant="body"
                    className="leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    Siap untuk audit ISO 27001 dan GDPR tanpa perlu menyewa konsultan
                    mahal. Amankan data pelanggan Anda dengan standar perbankan.
                  </Typography>
                </div>
              </div>
            </Stack>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[80px]"></div>
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[80px]"></div>

            <div className="relative rotate-2 transform overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 p-10 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:rotate-0 dark:border-slate-700 dark:bg-slate-800/80">
              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="rounded-full bg-slate-200 px-3 py-1 text-[10px] text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                  dashboard.bizops.id
                </div>
              </div>
              <Stack direction="vertical" gap={6}>
                <Grid cols={2} gap={4}>
                  <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                      Runway
                    </div>
                    <div className="mb-1 text-3xl font-bold text-slate-900 dark:text-white">
                      18 Mo
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-green-500 dark:text-green-400">
                      <TrendingUp className="h-3 w-3" />
                      {' '}
                      Healthy
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                      Monthly Burn
                    </div>
                    <div className="mb-1 text-3xl font-bold text-slate-900 dark:text-white">
                      $12k
                    </div>
                    <div className="w-fit rounded-full bg-green-50 px-2 py-0.5 text-xs font-bold text-green-500 dark:bg-green-900/30 dark:text-green-400">
                      -5% vs Last Mo
                    </div>
                  </div>
                </Grid>

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex items-end justify-between">
                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      Revenue Growth (MRR)
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-300">
                      Last 6 Months
                    </div>
                  </div>
                  <div className="flex h-32 items-end justify-between gap-3">
                    {[30, 45, 40, 60, 55, 85, 70, 95].map((h, i) => (
                      <div
                        key={i}
                        className="group relative w-full overflow-hidden rounded-t-lg bg-slate-100 dark:bg-slate-800"
                      >
                        <div
                          className="absolute bottom-0 w-full rounded-t-lg bg-indigo-500 transition-all duration-700 ease-out group-hover:bg-indigo-400"
                          style={{ height: `${h}%` }}
                        >
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Stack>
            </div>
          </div>
        </Grid>
      </div>
    </section>
  );
}
