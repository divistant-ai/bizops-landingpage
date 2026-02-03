// Types for Product Tour
export type ScenarioType = 'sales' | 'manager' | 'warehouse' | 'employee' | 'finance' | 'ceo';

export type ScenarioDef = {
  id: ScenarioType;
  label: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  device: 'mobile' | 'desktop';
  title: string;
  desc: string;
  color: string;
};
