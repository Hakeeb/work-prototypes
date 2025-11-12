"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface FreeTrialDurationProps {
  days: number;
  highlight?: boolean;
}

export function FreeTrialDuration({ days, highlight = true }: FreeTrialDurationProps) {
  if (!highlight) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center text-white/80 text-sm px-6 py-2"
        style={{ fontFamily: "'Careem Sans', sans-serif" }}
      >
        Enjoy Plus for {days} days free
      </motion.p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="mx-6 my-3 p-4 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-green-400/20 border border-yellow-300/30 backdrop-blur-sm"
    >
      <div className="flex items-center justify-center gap-2">
        <Sparkles className="w-5 h-5 text-yellow-300" />
        <p
          className="text-white text-base"
          style={{ fontFamily: "'Careem Sans', sans-serif" }}
        >
          {days} days free trial
        </p>
        <Sparkles className="w-5 h-5 text-yellow-300" />
      </div>
      <p className="text-white/80 text-xs text-center mt-1">
        Then د.إ 19/month. Cancel anytime.
      </p>
    </motion.div>
  );
}
