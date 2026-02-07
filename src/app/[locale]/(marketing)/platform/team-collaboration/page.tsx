import type { Metadata } from 'next';
import TeamCollaborationContent from './TeamCollaborationContent';

export const metadata: Metadata = {
  title: 'Team Collaboration - Document Based Chat | BizOps',
  description:
    'Collaborate with your team directly on documents. Contextual chat, mentions, and file sharing built into your workflow.',
};

export default function TeamCollaborationPage() {
  return <TeamCollaborationContent />;
}
