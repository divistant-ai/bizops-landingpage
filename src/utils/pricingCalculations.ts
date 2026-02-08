import type { PricingPlan, ServiceAddon } from '../data/pricingData';

/**
 * Price Calculation Types
 */
export type PriceBreakdown = {
  basePrice: number;
  monthlyRecurring: number;
  oneTimeFees: number;
  subtotal: number;
  discountAmount: number;
  totalFirstPayment: number;
};

export type Discount = {
  code: string;
  percent: number;
};

/**
 * Calculates the price breakdown for a selected plan with add-ons
 * Pure function - easily testable
 */
export function calculatePriceBreakdown(
  selectedPlanData: PricingPlan | undefined,
  selectedAddOns: { [key: string]: number },
  allAddOns: ServiceAddon[],
  billingCycle: 'monthly' | 'yearly',
  appliedDiscount: Discount | null,
): PriceBreakdown {
  if (!selectedPlanData) {
    return {
      basePrice: 0,
      monthlyRecurring: 0,
      oneTimeFees: 0,
      subtotal: 0,
      discountAmount: 0,
      totalFirstPayment: 0,
    };
  }

  // Base price based on billing cycle
  const basePrice
    = billingCycle === 'yearly' ? selectedPlanData.priceYearly : selectedPlanData.priceMonthly;

  // Calculate recurring add-ons
  const recurringAddOnsTotal = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
    const addOn = allAddOns.find(a => a.id === addOnId);
    if (addOn && addOn.billingType === 'recurring') {
      return sum + addOn.price * quantity;
    }
    return sum;
  }, 0);

  // Calculate one-time fees
  const oneTimeFees = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
    const addOn = allAddOns.find(a => a.id === addOnId);
    if (addOn && addOn.billingType === 'one-time') {
      return sum + addOn.price * quantity;
    }
    return sum;
  }, 0);

  // Monthly recurring total
  const monthlyRecurring = basePrice + recurringAddOnsTotal;

  // Subtotal calculation
  const subtotal
    = billingCycle === 'yearly'
      ? monthlyRecurring * 12 + oneTimeFees
      : monthlyRecurring + oneTimeFees;

  // Discount calculation
  const discountAmount = appliedDiscount ? (subtotal * appliedDiscount.percent) / 100 : 0;

  // Total first payment
  const totalFirstPayment = subtotal - discountAmount;

  return {
    basePrice,
    monthlyRecurring,
    oneTimeFees,
    subtotal,
    discountAmount,
    totalFirstPayment,
  };
}

/**
 * Validates a discount code
 * Pure function - easily testable
 */
export function validateDiscountCode(discountCode: string): Discount | null {
  const code = discountCode.toUpperCase().trim();

  switch (code) {
    case 'BIZOPS10':
      return { code: 'BIZOPS10', percent: 10 };
    case 'PARTNER20':
      return { code: 'PARTNER20', percent: 20 };
    default:
      return null;
  }
}

/**
 * Calculates yearly savings compared to monthly billing
 * Pure function - easily testable
 */
export function calculateYearlySavings(monthlyRecurring: number, priceYearly: number): number {
  const yearlyFromMonthly = monthlyRecurring * 12;
  return yearlyFromMonthly - priceYearly;
}

/**
 * Calculates cost per user
 * Pure function - easily testable
 */
export function calculateCostPerUser(totalMonthlyCost: number, userCount: number): number {
  if (userCount <= 0) {
    return 0;
  }
  return totalMonthlyCost / userCount;
}

/**
 * Formats IDR currency
 * Pure function - easily testable
 */
export function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculates implementation timeline estimate
 * Based on complexity and user count
 */
export function estimateImplementationTimeline(
  complexityScore: number,
  userCount: number,
  hasMultiCompany: boolean,
): {
  minWeeks: number;
  maxWeeks: number;
  recommended: number;
} {
  let baseWeeks = 4;

  // Complexity factor
  if (complexityScore > 80) {
    baseWeeks += 8;
  } else if (complexityScore > 40) {
    baseWeeks += 4;
  }

  // User count factor
  if (userCount > 300) {
    baseWeeks += 4;
  } else if (userCount > 100) {
    baseWeeks += 2;
  }

  // Multi-company factor
  if (hasMultiCompany) {
    baseWeeks += 2;
  }

  const minWeeks = Math.max(2, baseWeeks - 2);
  const maxWeeks = baseWeeks + 4;

  return {
    minWeeks,
    maxWeeks,
    recommended: baseWeeks,
  };
}

/**
 * Calculates training hours estimate
 */
export function estimateTrainingHours(userCount: number, selectedModules: string[]): number {
  const baseHours = 4;
  const hoursPerUser = 0.5;
  const hoursPerModule = 2;

  const userHours = userCount * hoursPerUser;
  const moduleHours = selectedModules.length * hoursPerModule;

  return Math.min(40, baseHours + userHours + moduleHours);
}
