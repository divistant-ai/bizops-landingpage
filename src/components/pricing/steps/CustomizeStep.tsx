'use client';

import { Briefcase, CreditCard, Headphones, Plug, Rocket, Server, Wallet } from 'lucide-react';
import React from 'react';
import { addOns } from '../../../data/pricingData';
import Button from '../../ui/Button';
import { AddonItem } from '../components';
import { usePricingContext } from '../PricingContext';

const CustomizeStep: React.FC = () => {
  const {
    selectedPlanId,
    billingCycle,
    setBillingCycle,
    selectedAddOns,
    handleToggleAddon,
    handleQuantityChange,
    formatIDR,
    changeStep,
    calculations,
  } = usePricingContext();

  // Separate addons into 4 distinct groups
  const infrastructureAddons = addOns.filter(a => a.category === 'infrastructure');
  const implementationAddons = addOns.filter(a => a.category === 'implementation');
  const supportAddons = addOns.filter(a => a.category === 'support');
  const integrationAddons = addOns.filter(a => a.category === 'integration');
  const managedServicesAddons = addOns.filter(a => a.category === 'managed-services');

  const sections = [
    {
      title: 'Infrastructure & Hardware',
      icon: Server,
      color: 'text-blue-400',
      items: infrastructureAddons,
    },
    {
      title: 'Implementation Services',
      icon: Rocket,
      color: 'text-emerald-400',
      items: implementationAddons,
    },
    {
      title: 'Support & Maintenance',
      icon: Headphones,
      color: 'text-amber-400',
      items: supportAddons,
    },
    {
      title: 'Integrations & Customization',
      icon: Plug,
      color: 'text-purple-400',
      items: integrationAddons,
    },
    {
      title: 'Enterprise Managed Services',
      icon: Briefcase,
      color: 'text-rose-400',
      items: managedServicesAddons,
    },
  ];

  return (
    <div className="dark:bg-dark-bg flex h-full flex-col overflow-hidden bg-slate-50">
      <div className="scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-white/10 grow overflow-y-auto p-6">
        <div className="mx-auto grid h-full max-w-6xl gap-8 lg:grid-cols-12">
          <div className="space-y-8 pb-12 lg:col-span-8">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-linear-to-r from-white to-slate-50 p-6 shadow-lg dark:border-white/10 dark:from-slate-900 dark:to-slate-800">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500 dark:text-blue-400">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Siklus Pembayaran
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Hemat 20% dengan pembayaran tahunan.
                  </p>
                </div>
              </div>
              <div className="flex rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-white/5 dark:bg-black/40">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`rounded-lg px-5 py-2 text-xs font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow dark:bg-slate-700 dark:text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white'}`}
                >
                  Bulanan
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`rounded-lg px-5 py-2 text-xs font-bold transition-all ${billingCycle === 'yearly' ? 'bg-primary-600 text-slate-800 shadow dark:text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white'}`}
                >
                  Tahunan (-20%)
                </button>
              </div>
            </div>

            {sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2 dark:border-white/5">
                  <section.icon className={`h-4 w-4 ${section.color}`} />
                  <h3 className="text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
                    {section.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {section.items.map((addon) => {
                    if (
                      addon.availableFor.includes(selectedPlanId)
                      || selectedPlanId === 'enterprise'
                    ) {
                      return (
                        <AddonItem
                          key={addon.id}
                          addon={addon}
                          quantity={selectedAddOns[addon.id] || 0}
                          onToggle={handleToggleAddon}
                          onQuantityChange={handleQuantityChange}
                          formatIDR={formatIDR}
                          isExclusive={addon.id.includes('impl')}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Summary */}
          <div className="flex flex-col lg:col-span-4">
            <div className="dark:bg-dark-bg-light sticky top-6 my-6 flex max-h-[calc(100vh-3rem)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800">
              <div className="shrink-0 border-b border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 p-6 dark:border-slate-800 dark:from-slate-800 dark:to-slate-900">
                <h3 className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-600 uppercase dark:text-slate-400">
                  <Wallet className="h-3 w-3" />
                  {' '}
                  Estimated Investment
                </h3>
                <div className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                  {calculations.totalFirstPayment > 0
                    ? formatIDR(calculations.totalFirstPayment)
                    : 'Custom'}
                </div>
                <p className="mt-1 text-[10px] text-slate-500">
                  Total pembayaran awal (termasuk pajak)
                </p>
              </div>
              <div className="scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-white/10 flex-1 space-y-4 overflow-y-auto p-6">
                <div className="flex justify-between border-b border-slate-200 pb-3 text-xs text-slate-600 dark:border-white/5 dark:text-slate-400">
                  <span>
                    Paket (
                    {billingCycle === 'yearly' ? 'Tahunan' : 'Bulanan'}
                    )
                  </span>
                  <span className="font-medium text-slate-900 dark:text-white">
                    {calculations.basePrice > 0
                      ? formatIDR(
                          billingCycle === 'yearly'
                            ? calculations.basePrice * 12
                            : calculations.basePrice,
                        )
                      : 'Custom'}
                  </span>
                </div>
                <div className="space-y-2">
                  {Object.entries(selectedAddOns).map(([id, qty]) => {
                    const item = addOns.find(a => a.id === id);
                    if (!item || qty === 0) {
                      return null;
                    }
                    const price
                      = item.unit.includes('one-time') || item.unit.includes('per')
                        ? item.price * qty
                        : item.price * qty * (billingCycle === 'yearly' ? 12 : 1);
                    return (
                      <div key={id} className="flex justify-between text-[10px] text-slate-500">
                        <span>
                          {item.name}
                          {' '}
                          {qty > 1 && `(${qty}x)`}
                        </span>
                        {' '}
                        <span className="text-slate-700 dark:text-slate-300">
                          {formatIDR(price)}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-3 text-sm font-bold text-slate-900 dark:border-white/10 dark:text-white">
                  <span>Subtotal</span>
                  {' '}
                  <span>
                    {calculations.subtotal > 0 ? formatIDR(calculations.subtotal) : 'Custom'}
                  </span>
                </div>
              </div>
              <div className="shrink-0 border-t border-slate-200 bg-slate-50 p-6 dark:border-white/5 dark:bg-black/20">
                <Button
                  fullWidth
                  variant="primary"
                  onClick={() => changeStep('jump', 'checkout')}
                  className="bg-primary-600 hover:bg-primary-700 h-12 rounded-xl text-sm font-bold text-slate-800 shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Checkout
                </Button>
                <button
                  onClick={() => changeStep('jump', 'recommendation')}
                  className="mt-3 w-full text-center text-[10px] text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
                >
                  Ubah Paket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeStep;
