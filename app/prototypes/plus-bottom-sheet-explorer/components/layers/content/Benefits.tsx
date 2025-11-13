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
      <div className="px-4 py-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: containerDelay }}
          className="rounded-[8px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] overflow-hidden"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: containerDelay + index * 0.1 }}
              className="flex items-center gap-2 pl-4 pr-0 py-2"
            >
              <div className="flex-1 flex flex-col gap-1 py-1" style={{ fontFamily: "'Careem Sans', sans-serif" }}>
                <h3 className="text-white text-[16px] font-semibold leading-[24px]">{item.title}</h3>
                {item.description && (
                  <p className="text-[#E8EBEA] text-[12px] leading-[16px]" style={{ fontFamily: "'Careem Sans', sans-serif", fontWeight: 400 }}>
                    {item.description}
                  </p>
                )}
              </div>
              <div className="flex-shrink-0 w-[104px] h-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Multiple benefits - Vertical list layout (Figma style)
  return (
    <div className="px-6 py-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: containerDelay }}
        className="rounded-[20px] bg-white/[0.12] backdrop-blur-md border border-white/[0.15] divide-y divide-white/10 shadow-lg overflow-hidden"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: containerDelay + index * 0.08 }}
            className="flex items-center gap-4 p-5"
          >
            <div className="flex-1" style={{ fontFamily: "'Careem Sans', sans-serif" }}>
              <h3 className="text-white text-base font-normal leading-snug">
                {item.title}
              </h3>
              {item.service && (
                <p className="text-white/60 text-xs mt-0.5 uppercase tracking-wider font-medium">
                  {item.service}
                </p>
              )}
              {item.description && (
                <p className="text-white/70 text-sm mt-1 leading-snug">{item.description}</p>
              )}
            </div>
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
              <div className="w-9 h-9 relative">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
