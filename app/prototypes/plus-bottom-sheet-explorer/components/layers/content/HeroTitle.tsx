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

  // Split title by newline for proper rendering
  const titleLines = title.split('\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="text-center px-4 py-0"
      style={{ fontFamily: "'Careem Sans', sans-serif" }}
    >
      {/* Header Content */}
      <div className="flex flex-col gap-1 items-center mb-2">
        {/* Hero Title */}
        <h2
          className={`text-[24px] font-semibold ${textColor} leading-[32px] whitespace-pre-wrap`}
          style={{ fontFamily: "'Careem Sans', sans-serif" }}
        >
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Subtitle / Callout */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={`text-[14px] ${textColor} font-light leading-[20px]`}
            style={{ fontFamily: "'Careem Sans', sans-serif" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
