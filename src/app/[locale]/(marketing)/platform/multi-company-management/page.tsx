import type { Metadata } from 'next';
import MultiCompanyManagementContent from './MultiCompanyManagementContent';

export const metadata: Metadata = {
  title: 'Multi-Company Management & Financial Consolidation | BizOps',
  description:
    'Manage multiple subsidiaries (PT/CV) in one centralized system. Automatic financial report consolidation and seamless inter-company transactions.',
};

export default function MultiCompanyManagementPage() {
  return <MultiCompanyManagementContent />;
}
