'use client';

import PlatformPage from '@/components/templates/PlatformPage';

export default function ReportsAnalyticsContent() {
  return (
    <PlatformPage
      featureId="reports-analytics"
      relatedModuleIds={[
        { id: 'ai-assistant', type: 'feature' },
        { id: 'hr', type: 'module' },
      ]}
    />
  );
}
