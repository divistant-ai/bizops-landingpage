import type { Metadata } from 'next';
import AIAssistantContent from './AIAssistantContent';

export const metadata: Metadata = {
  title: 'AI Assistant - Smart Automation & Workflow | BizOps',
  description:
    'AI-powered assistant to automate your business operations. Natural language commands for data analysis, workflow execution, and operational tasks.',
};

export default function AIAssistantPage() {
  return <AIAssistantContent />;
}
