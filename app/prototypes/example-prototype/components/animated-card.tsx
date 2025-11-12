"use client";

import { motion } from "framer-motion";
import { DataPoint } from "../mock-data";

interface AnimatedCardProps {
  data: DataPoint;
  index: number;
}

export function AnimatedCard({ data, index }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{data.label}</h3>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: data.color }}
        />
      </div>
      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${data.value}%` }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
          className="h-full rounded-full"
          style={{ backgroundColor: data.color }}
        />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{data.value}% complete</p>
    </motion.div>
  );
}
