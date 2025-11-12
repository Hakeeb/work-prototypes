"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { TierTheme } from "../../../types";

interface PlanTypeProps {
  name: string;
  price: number;
  currency: string;
  billingCycle: "monthly" | "annual";
  features: string[];
  tier: TierTheme;
  showComparison?: boolean;
  comparisonPrice?: number;
}

export function PlanType({
  name,
  price,
  currency,
  billingCycle,
  features,
  tier,
  showComparison = false,
  comparisonPrice,
}: PlanTypeProps) {
  const savings = comparisonPrice ? comparisonPrice - price : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="mx-6 my-3 p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
      style={{ fontFamily: "'Careem Sans', sans-serif" }}
    >
      {/* Plan Header */}
      <div className="text-center mb-4">
        <h3 className="text-white text-lg">{name}</h3>
        <div className="flex items-baseline justify-center gap-1 mt-2">
          <span className="text-white/60 text-sm">{currency}</span>
          <span className="text-white text-3xl">{price}</span>
          <span className="text-white/60 text-sm">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
        </div>

        {/* Comparison */}
        {showComparison && comparisonPrice && savings > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            className="mt-2"
          >
            <span className="text-white/60 line-through text-sm">
              {currency} {comparisonPrice}
            </span>
            <span className="ml-2 text-green-300 text-sm">
              Save {currency} {savings}
            </span>
          </motion.div>
        )}
      </div>

      {/* Features */}
      <div className="space-y-2">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.4 + index * 0.05 }}
            className="flex items-start gap-2"
          >
            <Check className="w-4 h-4 text-green-300 flex-shrink-0 mt-0.5" />
            <span className="text-white/90 text-sm">{feature}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
