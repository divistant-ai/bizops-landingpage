import { Typography } from '@/components/ui';
import Accordion from '@/components/ui/Accordion';
import Stack from '@/components/ui/Stack';

export default function StartupFAQ() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Typography variant="h2" as="h2">
          Founder's FAQ
        </Typography>
        <Stack direction="vertical" gap={4} className="mt-8">
          {[
            {
              q: 'Apakah ada biaya tersembunyi?',
              a: 'Tidak ada. Diskon diberikan dimuka pada tagihan bulanan/tahunan. Setelah periode program berakhir (12 atau 24 bulan), tagihan akan kembali ke harga normal. Kami akan mengirimkan notifikasi 30 hari sebelumnya.',
            },
            {
              q: 'Bagaimana jika kami belum punya badan hukum?',
              a: 'Anda bisa mendaftar dengan nama tim sementara atau \'Stealth Mode\'. Namun, untuk aktivasi lisensi komersial dan faktur pajak, kami memerlukan dokumen legalitas (NIB/SK Kemenkumham) dalam waktu 3 bulan setelah onboarding.',
            },
            {
              q: 'Bisakah kami pindah ke Self-Hosted nanti?',
              a: 'Tentu saja. Salah satu keunggulan BizOps adalah Data Sovereignty. Jika startup Anda berkembang dan membutuhkan infrastruktur on-premise atau private cloud sendiri, kami menyediakan jalur migrasi data yang mulus.',
            },
            {
              q: 'Apakah ini termasuk support?',
              a: 'Ya. Paket startup mendapatkan akses Standard Support (Email & Chat) dengan SLA 24 jam. Untuk Scale-Up Track, Anda mendapatkan Prioritas Support dengan SLA 4 jam.',
            },
          ].map((item, idx) => (
            <Accordion key={idx} question={item.q} answer={item.a} />
          ))}
        </Stack>
      </div>
    </section>
  );
}
