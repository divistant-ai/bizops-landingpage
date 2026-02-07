import type { Metadata } from 'next';
import CustomAppsContent from './CustomAppsContent';

export const metadata: Metadata = {
  title: 'Custom Apps - Build Without Coding | BizOps',
  description:
    'Build custom business applications without coding. Drag-and-drop app builder for forms, workflows, and dashboards.',
};

export default function CustomAppsPage() {
  return <CustomAppsContent />;
}
