
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { Typography } from '@/components/ui';
import Button from '@/components/ui/Button';
import Stack from '@/components/ui/Stack';

export default function StartupCTA() {
  return (
    <section className="relative overflow-hidden bg-dark-bg py-40 text-center text-white">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[150px]"></div>

      <Container size="4xl" className="relative z-10">
        <Typography
          variant="h2"
          as="h2"
          className="leading-tight font-extrabold tracking-tight"
        >
          Siap Membangun
          <br />
          Unicorn Berikutnya?
        </Typography>
        <Typography variant="body" className="text-slate-300">
          Fokus pada inovasi produk Anda, biarkan kami yang menangani infrastruktur
          operasional yang membosankan (tapi krusial).
        </Typography>
        <Stack direction="vertical" gap={6} className="mt-8 justify-center">
          <Link href="/partners/apply">
            <Button
              size="lg"
              className="w-full transform rounded-2xl border-none bg-white px-12 text-lg font-bold text-slate-900 shadow-2xl transition-all hover:-translate-y-1 hover:bg-slate-100 hover:shadow-white/20 sm:w-auto"
            >
              Apply Now - It's Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="w-full rounded-2xl border-slate-700 px-10 text-lg text-white hover:bg-white/10 sm:w-auto"
          >
            Talk to Founder Success
          </Button>
        </Stack>
      </Container>
    </section>
  );
}
