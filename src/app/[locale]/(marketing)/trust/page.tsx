import { Section } from '@/components/layout';
import Container from '@/components/layout/Container';
import {
  ComplianceBadges,
  SecurityArchitecture,
  SubprocessorsTable,
  TrustCTA,
  TrustHero,
  TrustLiveStatus,
} from '@/components/sections/trust';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

export const metadata = genMeta({
  title: 'Trust Center | Security, Compliance & Privacy',
  description:
    'Pusat transparansi keamanan BizOps. ISO 27001, Enkripsi AES-256, dan Kepatuhan GDPR/UU PDP.',
  url: '/trust',
});

function TrustContent() {
  return (
    <div className="bg-slate-50 font-sans transition-colors dark:bg-slate-950">
      {/* HERO SECTION */}
      <Section className="dark:bg-dark-bg relative overflow-hidden bg-slate-100 pt-32 pb-24 lg:pt-32 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] animate-pulse rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-900/20"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-900/20"></div>

        <Container size="5xl" className="relative z-10 text-center">
          <TrustHero />
        </Container>
      </Section>

      {/* LIVE SYSTEM STATUS BAR */}
      <TrustLiveStatus />

      <Container size="7xl" className="space-y-32 py-24">
        {/* COMPLIANCE BADGES */}
        <ComplianceBadges />

        {/* SECURITY ARCHITECTURE */}
        <SecurityArchitecture />

        {/* TRANSPARENCY & DATA */}
        <SubprocessorsTable />

        {/* CTA: ACCESS REPORTS */}
        <TrustCTA />
      </Container>
    </div>
  );
}

export default function TrustPage() {
  return <TrustContent />;
}
