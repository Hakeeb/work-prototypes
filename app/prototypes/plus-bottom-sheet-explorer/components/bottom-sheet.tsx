"use client";

import { motion, AnimatePresence } from "framer-motion";

interface BottomSheetProps {
  config: {
    variant: string;
    showHeader: boolean;
    showAnimation: boolean;
  };
}

export function BottomSheet({ config }: BottomSheetProps) {
  const getHeight = () => {
    switch (config.variant) {
      case "compact":
        return "280px";
      case "expanded":
        return "520px";
      default:
        return "400px";
    }
  };

  const animationProps = config.showAnimation
    ? {
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
        transition: { type: "spring", damping: 35, stiffness: 400 },
      }
    : {};

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${config.variant}-${config.showHeader}-${config.showAnimation}`}
        {...animationProps}
        animate={{
          ...animationProps.animate,
          height: getHeight(),
        }}
        transition={{
          height: { type: "spring", damping: 35, stiffness: 400 },
          ...animationProps.transition,
        }}
        className="bg-white dark:bg-zinc-950 rounded-t-[28px] shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.4)] border-t border-x border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden"
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-9 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
        </div>

        {/* Header */}
        <AnimatePresence>
          {config.showHeader && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-4 border-b border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden"
            >
              <h3 className="font-semibold text-[15px] text-zinc-900 dark:text-zinc-100 tracking-tight">
                Careem Plus
              </h3>
              <p className="text-[12px] text-zinc-500 dark:text-zinc-500 mt-0.5">
                Get more from your Careem experience
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Area - Placeholder */}
        <div className="px-6 py-5 space-y-3">
          <div className="space-y-2">
            <div className="h-[52px] bg-zinc-900 dark:bg-zinc-100 rounded-[14px] flex items-center px-4">
              <span className="text-white dark:text-zinc-900 text-[13px] font-medium">
                Featured benefit
              </span>
            </div>
            <div className="h-[52px] bg-zinc-100 dark:bg-zinc-900 rounded-[14px]" />
            <div className="h-[52px] bg-zinc-100 dark:bg-zinc-900 rounded-[14px]" />
          </div>

          {config.variant === "expanded" && (
            <div className="space-y-2 pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
              <div className="h-11 bg-zinc-50 dark:bg-zinc-900 rounded-[12px]" />
              <div className="h-11 bg-zinc-50 dark:bg-zinc-900 rounded-[12px]" />
              <div className="h-11 bg-zinc-50 dark:bg-zinc-900 rounded-[12px]" />
            </div>
          )}

          {/* CTA Button Placeholder */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-[52px] bg-zinc-900 dark:bg-zinc-100 rounded-[14px] flex items-center justify-center cursor-pointer mt-5 shadow-sm"
          >
            <span className="text-white dark:text-zinc-900 font-semibold text-[14px] tracking-tight">
              Subscribe Now
            </span>
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
