'use client';

import { Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Container, Section } from '@/components/layout';
import { CardSlider, OptimizedImage } from '@/components/ui';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  quote: string;
  linkedin: string;
};

type TeamMemberCardProps = {
  member: TeamMember;
  width?: number;
  height?: number;
};

export function TeamMemberCard({ member, width = 360, height = 256 }: TeamMemberCardProps) {
  const t = useTranslations('About');

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-64 w-full overflow-hidden">
        <OptimizedImage
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={width}
          height={height}
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
        <p className="text-primary-600 dark:text-primary-400 mb-4 text-sm font-medium">
          {member.role}
        </p>
        <p className="mb-4 text-sm text-slate-600 italic dark:text-slate-400">
          "
          {member.quote}
          "
        </p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors dark:text-slate-300"
        >
          <Linkedin className="h-4 w-4" />
          {t('team_connect')}
        </a>
      </div>
    </div>
  );
}

type TeamSectionProps = {
  members: TeamMember[];
  title: string;
  subtitle: string;
};

export function TeamSection({ members, title, subtitle }: TeamSectionProps) {
  return (
    <Section className="!bg-slate-50 dark:!bg-slate-950">
      <Container size="7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        </div>

        {/* Mobile: CardSlider */}
        <div className="md:hidden">
          <CardSlider>
            {members.map((member, idx) => (
              <div key={idx} className="w-[280px]">
                <TeamMemberCard member={member} width={280} height={256} />
              </div>
            ))}
          </CardSlider>
        </div>

        {/* Desktop: Grid */}
        <FadeInStagger>
          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {members.map((member, idx) => (
              <FadeIn key={idx}>
                <TeamMemberCard member={member} />
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </Section>
  );
}
