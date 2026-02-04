'use client';

import { ArrowRight, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import { Container, Section } from '@/components/layout';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';

import { sectionPaddingHybrid } from '@/design-tokens';

type RelatedModule = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: any;
  href: string;
  image?: string; // New Optional Image
};

type RelatedModulesSectionProps = {
  title: string;
  subtitle: React.ReactNode;
  badge?: string;
  modules: RelatedModule[];
  learnMoreText?: string;
};

export const RelatedModulesSection: React.FC<RelatedModulesSectionProps> = ({
  title,
  subtitle,
  badge,
  modules,
  learnMoreText = 'Learn more',
}) => {
  if (!modules || modules.length === 0) {
    return null;
  }

  // Helper function to render icon
  const renderIcon = (icon: any, className: string) => {
    if (!icon) {
      return <HelpCircle className={className} />;
    }

    // If it's a valid React Element (e.g. <Icon />), render it
    if (React.isValidElement(icon)) {
      return <span className={className}>{icon}</span>;
    }

    // Check if icon is a LucideIcon (function/object component)
    if (typeof icon === 'function' || (typeof icon === 'object' && icon.render)) {
      const IconComponent = icon;
      return <IconComponent className={className} />;
    }

    // Fallback for other node types
    return <span className={className}>{icon}</span>;
  };

  return (
    <Section
      className="relative overflow-hidden bg-white dark:bg-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <Container size="7xl" className="relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {badge && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold tracking-wider text-indigo-700 uppercase dark:bg-indigo-900/30 dark:text-indigo-400">
              {badge}
            </div>
          )}
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            {subtitle}
            {' '}
            {title}
          </h2>
        </div>

        <FadeInStagger>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => {
              // Default image if not provided
              const cardImage = module.image || '/images/platform/module-preview-card.png';

              return (
                <FadeIn key={module.id} className="h-full">
                  <Link href={module.href} className="group block h-full">
                    <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900">

                      {/* Card Image / Preview */}
                      <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <Image
                          src={cardImage}
                          alt={module.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>

                      {/* Card Content */}
                      <div className="flex flex-1 flex-col p-8">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                          {renderIcon(module.icon, 'h-6 w-6')}
                        </div>

                        <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                          {module.title}
                        </h3>

                        {module.subtitle && (
                          <p className="flex-1 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                            {module.subtitle}
                          </p>
                        )}

                        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400">
                          {learnMoreText}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </FadeInStagger>
      </Container>
    </Section>
  );
};
