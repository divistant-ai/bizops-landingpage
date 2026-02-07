import type { ServiceData } from '../types';
import {
  Building,
  Code,
  Compass,
  Database,
  GraduationCap,
  Headphones,
  Network,
  Shield,
  Wrench,
} from 'lucide-react';

// --- SERVICES DATA ---
export const servicesData: Record<
  string,
  Omit<
    ServiceData,
    'title' | 'subtitle' | 'description' | 'cta' | 'methodology' | 'benefits' | 'deliverables'
  > & { icon: any }
> = {
  'consulting': {
    icon: Compass,
  },
  'implementation': {
    icon: Wrench,
  },
  'custom-development': {
    icon: Code,
  },
  'data-migration': {
    icon: Database,
  },
  'integration': {
    icon: Network,
  },
  'security-audit': {
    icon: Shield,
  },
  'managed-services': {
    icon: Building,
  },
  'training': {
    icon: GraduationCap,
  },
  'support': {
    icon: Headphones,
  },
};
