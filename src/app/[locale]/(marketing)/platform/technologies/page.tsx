import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import TechnologyContent from './TechnologyContent';

export const metadata = genMeta({
  title: 'Technology Stack & Infrastructure - BizOps Platform',
  description:
    'Jelajahi fondasi teknologi BizOps: Security & Compliance, Integration Architecture, Self-Hosted Deployment, dan Enterprise Architecture. Dirancang untuk skalabilitas, keamanan, dan performa enterprise.',
  url: '/platform/technology',
  keywords: [
    'Technology Stack',
    'ERP Architecture',
    'Security',
    'Integration',
    'Self-Hosted',
    'Enterprise Infrastructure',
  ],
});

export default function TechnologyPage() {
  return <TechnologyContent />;
}
