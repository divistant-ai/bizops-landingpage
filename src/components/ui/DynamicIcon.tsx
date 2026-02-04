'use client';

import {
  ArrowLeftRight,
  Briefcase,
  Building,
  CalendarCheck,
  CheckCircle2,
  Clipboard,
  Clock,
  Cpu,
  Database,
  DollarSign,
  Factory,
  FileText,
  Globe,
  HardHat,
  HelpCircle,
  List,
  Map,
  Monitor,
  Package,
  PieChart,
  Plane,
  RefreshCw,
  Scan,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Ticket,
  TrendingUp,
  UserCheck,
  Users,
} from 'lucide-react';
import React from 'react';

// Map of all icons used in Solutions pages
// This creates a safe boundary: we pass strings from server, resolve to components on client
const iconMap: Record<string, React.ElementType> = {
  ArrowLeftRight,
  Briefcase,
  Building,
  Clipboard,
  Clock,
  Cpu,
  Database,
  DollarSign,
  Factory,
  FileText,
  Globe,
  HardHat,
  HelpCircle,
  List,
  Monitor,
  Package,
  PieChart,
  RefreshCw,
  Scan,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  UserCheck,
  Users,
  CheckCircle2,
  Plane,
  Map,
  Ticket,
  CalendarCheck,
};

type DynamicIconProps = {
  name: string;
  className?: string;
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent className={className} />;
};
