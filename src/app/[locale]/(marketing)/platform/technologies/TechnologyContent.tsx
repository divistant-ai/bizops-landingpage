'use client';

import {
  Activity,
  ArrowRight,
  Database,
  Globe,
  Layout,
  Lock,
  Server,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Container, Section } from '@/components/layout';
import { CTABannerSection } from '@/components/sections/CTABannerSection';

const technologies = [
  {
    id: 'security',
    icon: ShieldCheck,
    gradient: 'from-red-500 to-rose-600',
    title: 'Keamanan & Kepatuhan',
    subtitle: 'Perlindungan Data Tanpa Kompromi',
    description: 'Enkripsi AES-256, SSO, RBAC, MFA, dan audit log untuk keamanan enterprise.',
    metrics: ['AES-256', 'ISO 27001', 'Zero Breach'],
    href: '/platform/technologies/security',
  },
  {
    id: 'integration',
    icon: Layout,
    gradient: 'from-blue-500 to-indigo-600',
    title: 'Integration Architecture',
    subtitle: 'API-First Architecture',
    description: '50+ pre-built connectors, RESTful API, webhooks, dan sandbox environment.',
    metrics: ['50+ Connectors', '< 1 Jam Setup', '99.9% Delivery'],
    href: '/platform/technologies/integration',
  },
  {
    id: 'self-hosted',
    icon: Server,
    gradient: 'from-emerald-500 to-teal-600',
    title: 'Self-Hosted Deployment',
    subtitle: 'Infrastruktur Anda, Kendali Penuh',
    description: 'Docker, Kubernetes, bare metal, dengan high availability dan disaster recovery.',
    metrics: ['10K+ TPS', '99.99% Uptime', '60% Hemat'],
    href: '/platform/technologies/self-hosted',
  },
  {
    id: 'architecture',
    icon: Database,
    gradient: 'from-violet-500 to-purple-600',
    title: 'Enterprise Architecture',
    subtitle: 'Arsitektur Tanpa Kompromi',
    description: 'Metadata-driven, Python + JS stack, real-time streaming, auto-scaling.',
    metrics: ['50K+ Users', '10M+ Transaksi', '< 50ms Query'],
    href: '/platform/technologies/architecture',
  },
];

const techStack = [
  { category: 'Backend', items: ['Python', 'Node.js', 'Redis', 'BullMQ'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Database', items: ['PostgreSQL', 'MariaDB', 'Redis'] },
  { category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Nginx', 'Prometheus'] },
];

export default function TechnologyContent() {
  const locale = useLocale();

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

        <Container size="6xl" className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400 ring-1 ring-indigo-500/30">
              <Activity className="h-4 w-4" />
              Technology Foundation
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Fondasi Teknologi untuk
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}
                Pertumbuhan Enterprise
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 md:text-xl">
              BizOps dibangun di atas arsitektur modern yang telah teruji mengelola jutaan
              transaksi. Dari enkripsi standar perbankan hingga auto-scaling infrastructure.
            </p>
          </div>
        </Container>
      </Section>

      {/* TECH STACK OVERVIEW */}
      <Section className="bg-white py-20 dark:bg-slate-900">
        <Container size="6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Modern Tech Stack</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Teknologi terkini untuk performa, skalabilitas, dan developer experience terbaik
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map(stack => (
              <div
                key={stack.category}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/50"
              >
                <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map(item => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm dark:bg-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* TECHNOLOGY PILLARS */}
      <Section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
        <Container size="6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Empat Pilar Teknologi
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Setiap aspek teknologi dirancang untuk keamanan, skalabilitas, dan kemudahan integrasi
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <Link
                  key={tech.id}
                  href={tech.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-800/50"
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${tech.gradient} shadow-lg`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {tech.subtitle}
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                        {tech.title}
                      </h3>
                      <p className="mt-2 text-slate-600 dark:text-slate-400">{tech.description}</p>

                      {/* Metrics */}
                      <div className="mt-4 flex flex-wrap gap-3">
                        {tech.metrics.map(metric => (
                          <span
                            key={metric}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {locale === 'id' ? 'Pelajari Lebih Lanjut' : 'Learn More'}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* KEY HIGHLIGHTS */}
      <Section className="bg-slate-900 py-20">
        <Container size="6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Mengapa Arsitektur Kami Berbeda?</h2>
              <p className="mt-4 text-slate-400">
                BizOps menggabungkan kekuatan open-source framework dengan fitur enterprise yang
                Anda butuhkan.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: Lock,
                    title: 'Security by Design',
                    desc: 'Bukan tambahan, tapi fondasi. Enkripsi di setiap layer, dari database hingga API.',
                  },
                  {
                    icon: Zap,
                    title: 'Performance First',
                    desc: 'Redis caching, async jobs, dan optimized queries untuk response time < 100ms.',
                  },
                  {
                    icon: Globe,
                    title: 'API-First Architecture',
                    desc: 'Setiap fitur tersedia via API. Integrasi dengan sistem apapun menjadi mudah.',
                  },
                  {
                    icon: Server,
                    title: 'Deployment Fleksibel',
                    desc: 'Cloud, on-premise, atau hybrid. Anda punya kontrol penuh atas infrastruktur.',
                  },
                ].map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20">
                        <ItemIcon className="h-5 w-5 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-8">
              <h3 className="mb-6 text-xl font-bold text-white">Spesifikasi Teknis</h3>
              <div className="space-y-4">
                {[
                  { label: 'Database', value: 'PostgreSQL / MariaDB' },
                  { label: 'Backend', value: 'Python (Frappe Framework)' },
                  { label: 'Frontend', value: 'Next.js + React + TypeScript' },
                  { label: 'Cache & Queue', value: 'Redis + BullMQ' },
                  { label: 'Container', value: 'Docker + Kubernetes Ready' },
                  { label: 'Monitoring', value: 'Prometheus + Grafana' },
                  { label: 'API Security', value: 'OAuth 2.0 + JWT + TLS 1.3' },
                  { label: 'Encryption', value: 'AES-256 (at rest & in transit)' },
                ].map(spec => (
                  <div
                    key={spec.label}
                    className="flex justify-between border-b border-slate-700 pb-3 last:border-0"
                  >
                    <span className="text-slate-400">{spec.label}</span>
                    <span className="font-medium text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA SECTION */}
      <CTABannerSection
        badgeText="Enterprise Ready"
        title="Siap Menjelajahi Lebih Dalam?"
        subtitle="Pelajari detail setiap aspek teknologi BizOps atau diskusikan kebutuhan spesifik Anda dengan tim teknis kami."
        demoBtnText="Jadwalkan Demo Teknis"
        demoBtnLink="/demo"
        pricingBtnText="Lihat Dokumentasi API"
        pricingBtnLink="/developers"
        trustText1="24/7 Technical Support"
        trustText2="Enterprise SLA"
      />
    </div>
  );
}
