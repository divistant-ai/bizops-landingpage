'use client';

import {
  DataStructureTemplate,
  MigrationCTA,
  MigrationFAQ,
  MigrationHero,
  MigrationSources,
  MigrationTimeline,
} from '@/components/sections/migration';

export default function MigrationContent() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <MigrationHero />
      <MigrationSources />
      <DataStructureTemplate />
      <MigrationTimeline />
      <MigrationFAQ />
      <MigrationCTA />
    </div>
  );
}
