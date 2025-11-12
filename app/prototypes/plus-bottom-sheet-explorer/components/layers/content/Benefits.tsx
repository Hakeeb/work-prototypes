"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TierTheme } from "../../../types";

export interface BenefitItem {
  id: string;
  icon: string;
  title: string;
  description?: string;
  service?: string;
}

interface BenefitsProps {
  type: "single" | "multiple";
  items: BenefitItem[];
  tier: TierTheme;
}

export function Benefits({ type, items, tier }: BenefitsProps) {
  const containerDelay = 0.3;

  if (type === "single") {
    return (
      <div className="px-6 py-2 space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: containerDelay + index * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <div className="flex-shrink-0 w-12 h-12 relative">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1" style={{ fontFamily: "'Careem Sans', sans-serif" }}>
              <h3 className="text-white text-base">{item.title}</h3>
              {item.description && (
                <p className="text-white/80 text-sm mt-1">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // Multiple benefits - Grid layout (inspired by Swiggy)
  return (
    <div className="px-6 py-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: containerDelay }}
        className="grid grid-cols-2 gap-3"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: containerDelay + index * 0.05 }}
            className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center text-center min-h-[120px]"
          >
            <div className="w-10 h-10 relative mb-2">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <div style={{ fontFamily: "'Careem Sans', sans-serif" }}>
              <h3 className="text-white text-sm leading-tight">
                {item.title}
              </h3>
              {item.service && (
                <p className="text-white/60 text-xs mt-1 uppercase tracking-wide">
                  {item.service}
                </p>
              )}
              {item.description && (
                <p className="text-white/70 text-xs mt-1">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
