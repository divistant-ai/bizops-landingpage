import type { Metadata } from 'next';
import ReportsAnalyticsContent from './ReportsAnalyticsContent';

export const metadata: Metadata = {
  title: 'Reports & Analytics - Custom Dashboards | BizOps',
  description:
    'Create custom business reports without coding. Analyze sales, inventory, and financial data with powerful Drag-and-Drop Report Builder.',
};

export default function ReportsAnalyticsPage() {
  return <ReportsAnalyticsContent />;
}
