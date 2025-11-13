"use client";

import { motion } from "framer-motion";
import { Info, CheckCircle2, AlertTriangle } from "lucide-react";

interface CalloutProps {
  text: string;
  variant: "info" | "success" | "warning";
}

export function Callout({ text, variant }: CalloutProps) {
  const styles = {
    info: {
      bg: "bg-blue-500/20",
      border: "border-blue-400/30",
      text: "text-blue-100",
      icon: Info,
    },
    success: {
      bg: "bg-emerald-500/20",
      border: "border-emerald-400/30",
      text: "text-emerald-100",
      icon: CheckCircle2,
    },
    warning: {
      bg: "bg-amber-500/20",
      border: "border-amber-400/30",
      text: "text-amber-100",
      icon: AlertTriangle,
    },
  };

  const style = styles[variant];
  const Icon = style.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className={`mx-6 my-3 px-4 py-3 rounded-xl ${style.bg} ${style.border} border backdrop-blur-md flex items-center gap-3 shadow-sm`}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 ${style.text}`} />
      <p
        className={`text-sm ${style.text}`}
        style={{ fontFamily: "'Careem Sans', sans-serif" }}
      >
        {text}
      </p>
    </motion.div>
  );
}
