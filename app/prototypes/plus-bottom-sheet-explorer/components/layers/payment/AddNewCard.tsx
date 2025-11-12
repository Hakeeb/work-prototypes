"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface AddNewCardProps {
  onClick?: () => void;
}

export function AddNewCard({ onClick }: AddNewCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.45 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="mx-6 mb-3 w-[calc(100%-3rem)] p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-dashed border-white/20 flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all"
      style={{ fontFamily: "'Careem Sans', sans-serif" }}
    >
      <Plus className="w-4 h-4 text-white/60" />
      <span className="text-white/80 font-medium text-sm">Add a new card</span>
    </motion.button>
  );
}
