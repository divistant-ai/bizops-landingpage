'use client';

import PlatformPage from '@/components/templates/PlatformPage';

export default function AnalyticsContent() {
  return (
    <PlatformPage
      featureId="analytics"
      relatedModuleIds={[
        { id: 'automation-ai', type: 'feature' },
        { id: 'hr', type: 'module' },
      ]}
    />
  );
}
