
import { Code, DollarSign, Users } from 'lucide-react';
import { Grid, Typography } from '@/components/ui';

export default function StartupPerks() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <Typography variant="h2" as="h2">
            More Than Just Free Credits
          </Typography>
          <Typography variant="body" className="text-slate-600 dark:text-slate-400">
            Kami berinvestasi pada kesuksesan jangka panjang Anda dengan ekosistem
            pendukung yang lengkap.
          </Typography>
        </div>

        <Grid cols={3} gap={8}>
          <div className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900/30 dark:text-slate-300">
              <DollarSign className="h-7 w-7" />
            </div>
            <Typography variant="h3" as="h3">
              Up to $5,000 Credits
            </Typography>
            <Typography
              variant="body"
              className="leading-relaxed text-slate-600 dark:text-slate-400"
            >
              Kredit penggunaan BizOps Cloud selama 12 bulan pertama. Cukup untuk
              meng-cover biaya operasional tim hingga 50 orang tanpa membebani cashflow
              awal Anda.
            </Typography>
          </div>

          <div className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:bg-purple-900/30 dark:text-slate-300">
              <Code className="h-7 w-7" />
            </div>
            <Typography variant="h3" as="h3">
              Technical Mentorship
            </Typography>
            <Typography
              variant="body"
              className="leading-relaxed text-slate-600 dark:text-slate-400"
            >
              Akses langsung ("Red Phone") ke Solution Architect kami. Konsultasi desain
              sistem, integrasi API, dan security best practices agar produk Anda scalable
              sejak hari pertama.
            </Typography>
          </div>

          <div className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/30 dark:text-slate-300">
              <Users className="h-7 w-7" />
            </div>
            <Typography variant="h3" as="h3">
              Founder Community
            </Typography>
            <Typography
              variant="body"
              className="leading-relaxed text-slate-600 dark:text-slate-400"
            >
              Bergabung dengan jaringan eksklusif founder. Dapatkan kesempatan
              co-marketing, akses ke event networking privat, dan pengenalan ke partner
              investor kami.
            </Typography>
          </div>
        </Grid>
      </div>
    </section>
  );
}
