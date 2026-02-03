import Container from '@/components/layout/Container';
import {
  ApplicationProcess,
  LogoWall,
  StartupCTA,
  StartupFAQ,
  StartupHero,
  StartupPerks,
  StartupTracks,
  WhyItMatters,
} from '@/components/sections/startup';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

export const metadata = genMeta({
  title: 'Program BizOps for Startups | Diskon & Kredit Gratis',
  description:
    'Program akselerasi eksklusif untuk startup. Dapatkan akses teknologi ERP kelas dunia dengan harga khusus agar Anda bisa fokus pada pertumbuhan.',
  url: '/startup-program',
});

function StartupProgramContent() {
  return (
    <div className="flex flex-col bg-slate-50 font-sans transition-colors dark:bg-slate-950">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-32 text-center text-white lg:pt-48 lg:pb-40">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]"></div>

        <Container size="7xl" className="relative z-10">
          <StartupHero />
        </Container>
      </section>

      {/* LOGO WALL */}
      <LogoWall />

      {/* THE PERKS */}
      <StartupPerks />

      {/* WHY IT MATTERS */}
      <WhyItMatters />

      {/* TRACKS */}
      <StartupTracks />

      {/* APPLICATION PROCESS */}
      <ApplicationProcess />

      {/* FAQ */}
      <StartupFAQ />

      {/* FINAL CTA */}
      <StartupCTA />
    </div>
  );
}

export default function StartupProgramPage() {
  return <StartupProgramContent />;
}
