
import { CheckCircle } from 'lucide-react';
import { Grid, Typography } from '@/components/ui';

export default function ApplicationProcess() {
  return (
    <section className="border-t border-slate-100 bg-white py-24 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Typography variant="h2" as="h2">
          Proses Aplikasi Seamless
        </Typography>

        <Grid cols={4} gap={12} className="relative mt-16">
          <div className="absolute top-10 right-[12%] left-[12%] -z-10 hidden h-0.5 bg-slate-200 md:block dark:bg-slate-800"></div>

          <div className="group flex flex-col items-center">
            <div className="z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-100 bg-white text-xl font-bold text-slate-400 transition-colors duration-500 group-hover:border-purple-500 group-hover:text-purple-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              1
            </div>
            <Typography variant="h3" as="h3">
              Submit Form
            </Typography>
            <Typography variant="small" className="text-slate-500 dark:text-slate-400">
              Isi formulir aplikasi online. Hanya butuh 5 menit.
            </Typography>
          </div>
          <div className="group flex flex-col items-center">
            <div className="z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-100 bg-white text-xl font-bold text-slate-400 transition-colors delay-100 duration-500 group-hover:border-purple-500 group-hover:text-purple-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              2
            </div>
            <Typography variant="h3" as="h3">
              Verification
            </Typography>
            <Typography variant="small" className="text-slate-500 dark:text-slate-400">
              Tim kami memverifikasi profil startup Anda (LinkedIn/Pitch Deck).
            </Typography>
          </div>
          <div className="group flex flex-col items-center">
            <div className="z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-100 bg-white text-xl font-bold text-slate-400 transition-colors delay-200 duration-500 group-hover:border-purple-500 group-hover:text-purple-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              3
            </div>
            <Typography variant="h3" as="h3">
              Approval
            </Typography>
            <Typography variant="small" className="text-slate-500 dark:text-slate-400">
              Terima email konfirmasi & kode promo dalam 48 jam.
            </Typography>
          </div>
          <div className="group flex flex-col items-center">
            <div className="z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-emerald-100 bg-emerald-50 text-xl font-bold text-emerald-600 shadow-lg shadow-emerald-500/20 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-400">
              <CheckCircle className="h-8 w-8" />
            </div>
            <Typography variant="h3" as="h3">
              Onboarding
            </Typography>
            <Typography variant="small" className="text-slate-500 dark:text-slate-400">
              Setup akun Enterprise Anda dan mulai scaling.
            </Typography>
          </div>
        </Grid>
      </div>
    </section>
  );
}
