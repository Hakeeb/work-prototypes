"use client";

import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

interface SecurityInformationProps {
  text: string;
  icons?: ("shield" | "lock")[];
}

export function SecurityInformation({ text, icons = ["shield", "lock"] }: SecurityInformationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="px-6 py-3 flex items-center justify-center gap-2"
    >
      <div className="flex items-center gap-1.5">
        {icons.map((icon, index) => {
          const Icon = icon === "shield" ? Shield : Lock;
          return (
            <Icon
              key={index}
              className="w-3.5 h-3.5 text-white/40"
            />
          );
        })}
      </div>
      <p
        className="text-white/50 text-xs text-center"
        style={{ fontFamily: "'Careem Sans', sans-serif" }}
      >
        {text}
      </p>
    </motion.div>
  );
}
