'use client';

import { Calculator } from 'lucide-react';
import { useState } from 'react';
import ToolsNavigation from './ToolsNavigation';
import { LeadFormModal, ROIInputSection, ROIResultSection } from './roi';

// Pricing Tiers for Comparison
const PRICING_TIERS = [
  { id: 'starter', name: 'Starter Plan', cost: 2500000, label: 'Rp 2.5 Juta/bln' },
  { id: 'growth', name: 'Growth Plan', cost: 7500000, label: 'Rp 7.5 Juta/bln' },
  { id: 'scale', name: 'Scale Plan', cost: 15000000, label: 'Rp 15 Juta/bln' },
];

export default function ROICalculator() {
  // --- STATE ---
  const [adminCount, setAdminCount] = useState(3);
  const [salary, setSalary] = useState(6000000);
  const [overtime, setOvertime] = useState(20);
  const [losses, setLosses] = useState(50000000);
  const [existingTechCost, setExistingTechCost] = useState(2000000);
  const [efficiencyRate, setEfficiencyRate] = useState(30);

  const [selectedPlanId, setSelectedPlanId] = useState('growth');

  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', company: '', email: '', phone: '' });

  // --- CALCULATIONS ---
  const selectedPlan = PRICING_TIERS.find(p => p.id === selectedPlanId) || PRICING_TIERS[1]!;
  const subscriptionCost = selectedPlan.cost;

  // 1. Efficiency / Productivity Gain
  const efficiencySavings = adminCount * salary * (efficiencyRate / 100);

  // 2. Overtime Savings
  const hourlyRate = salary / 173;
  const overtimeCostPerMonth = adminCount * overtime * hourlyRate * 1.5;
  const overtimeSavings = overtimeCostPerMonth * 0.9;

  // 3. Fraud/Loss Prevention
  const monthlyLossSavings = (losses / 12) * 0.8;

  // 4. IT Cost Reduction (Hard Savings)
  const techSavings = existingTechCost;

  const totalMonthlySavings
    = efficiencySavings + overtimeSavings + monthlyLossSavings + techSavings;
  const netMonthlyBenefit = totalMonthlySavings - subscriptionCost;
  const roiPercentage = subscriptionCost > 0 ? (netMonthlyBenefit / subscriptionCost) * 100 : 0;
  const paybackMonths = totalMonthlySavings > 0 ? subscriptionCost / totalMonthlySavings : 0;
  const annualSavings = totalMonthlySavings * 12;

  // --- FORMATTERS ---
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(val);
  };

  const formatCompactCurrency = (val: number) => {
    if (val >= 1000000000) {
      return `Rp ${(val / 1000000000).toFixed(1)} M`;
    }
    if (val >= 1000000) {
      return `Rp ${(val / 1000000).toFixed(1)} Jt`;
    }
    return formatCurrency(val);
  };

  // --- HANDLERS ---
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLeadForm(false);
    window.print();
  };

  const handleReset = () => {
    setAdminCount(3);
    setSalary(6000000);
    setOvertime(20);
    setLosses(50000000);
    setExistingTechCost(2000000);
    setEfficiencyRate(30);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 pt-24 pb-24 text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 size-full overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] size-[50%] rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-900/10" />
        <div className="absolute -bottom-[10%] -left-[10%] size-[50%] rounded-full bg-emerald-500/5 blur-[120px] dark:bg-emerald-900/10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Calculator className="size-4" />
            {' '}
            <span className="text-slate-800 dark:text-white">ROI Calculator</span>
          </div>
          <h1 className="mb-6 text-4xl leading-tight font-bold text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
            Hitung Nilai Investasi
            {' '}
            <br />
            <span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Transformasi Digital
            </span>
          </h1>
          <p className="text-lg text-slate-400">
            Jangan hanya menebak. Gunakan data operasional Anda untuk mengestimasi penghematan biaya
            nyata dan waktu balik modal (BEP).
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* LEFT: INPUTS */}
          <ROIInputSection
            adminCount={adminCount}
            setAdminCount={setAdminCount}
            salary={salary}
            setSalary={setSalary}
            efficiencyRate={efficiencyRate}
            setEfficiencyRate={setEfficiencyRate}
            overtime={overtime}
            setOvertime={setOvertime}
            losses={losses}
            setLosses={setLosses}
            existingTechCost={existingTechCost}
            setExistingTechCost={setExistingTechCost}
            selectedPlanId={selectedPlanId}
            setSelectedPlanId={setSelectedPlanId}
            handleReset={handleReset}
            pricingTiers={PRICING_TIERS}
            subscriptionCost={subscriptionCost}
            formatCurrency={formatCurrency}
          />

          {/* RIGHT: RESULTS */}
          <ROIResultSection
            efficiencySavings={efficiencySavings}
            efficiencyRate={efficiencyRate}
            adminCount={adminCount}
            overtimeSavings={overtimeSavings}
            monthlyLossSavings={monthlyLossSavings}
            techSavings={techSavings}
            annualSavings={annualSavings}
            roiPercentage={roiPercentage}
            paybackMonths={paybackMonths}
            setShowLeadForm={setShowLeadForm}
            formatCompactCurrency={formatCompactCurrency}
          />
        </div>

        {/* --- LEAD FORM MODAL --- */}
        <LeadFormModal
          isOpen={showLeadForm}
          onClose={() => setShowLeadForm(false)}
          onSubmit={handleLeadSubmit}
          leadData={leadData}
          setLeadData={setLeadData}
        />

        {/* Cross-Tool Navigation */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ToolsNavigation
            currentTool="roi-calculator"
            title="Lanjutkan Perencanaan"
            description="Setelah mengetahui ROI, lengkapi perencanaan Anda:"
            recommendedNext={['timeline-generator', 'pricing-calculator', 'assessment']}
          />
        </div>
      </div>
    </div>
  );
}
