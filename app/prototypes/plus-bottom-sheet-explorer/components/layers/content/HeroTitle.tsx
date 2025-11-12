"use client";

import { motion } from "framer-motion";
import { TierTheme } from "../../../types";

interface HeroTitleProps {
  title: string;
  subtitle?: string;
  tier: TierTheme;
}

export function HeroTitle({ title, subtitle, tier }: HeroTitleProps) {
  const textColor = tier === "standard" ? "text-white" : "text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="text-center px-6 py-2"
      style={{ fontFamily: "'Careem Sans', sans-serif" }}
    >
      <h2 className={`text-2xl ${textColor} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`text-sm ${textColor} opacity-90 mt-2`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
