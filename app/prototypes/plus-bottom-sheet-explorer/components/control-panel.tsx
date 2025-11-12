"use client";

import { motion } from "framer-motion";

interface ControlPanelProps {
  config: {
    variant: string;
    showHeader: boolean;
    showAnimation: boolean;
  };
  onConfigChange: (config: any) => void;
}

export function ControlPanel({ config, onConfigChange }: ControlPanelProps) {
  const updateConfig = (key: string, value: any) => {
    onConfigChange({ ...config, [key]: value });
  };

  return (
    <div className="w-[280px] border-r border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-7 pb-6">
        <h1 className="text-[13px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Bottom Sheet Explorer
        </h1>
      </div>

      {/* Controls */}
      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
        {/* Variant Selection */}
        <div className="space-y-2">
          {[
            { id: "default", label: "Default", height: "400px" },
            { id: "compact", label: "Compact", height: "280px" },
            { id: "expanded", label: "Expanded", height: "520px" },
          ].map((variant) => (
            <motion.button
              key={variant.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => updateConfig("variant", variant.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-[12px] font-medium transition-all duration-200 ${
                config.variant === variant.id
                  ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-sm"
                  : "bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{variant.label}</span>
                <span className="text-[10px] opacity-50">{variant.height}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-200/50 dark:bg-zinc-800/50" />

        {/* Toggle Options */}
        <div className="space-y-4">
          <ToggleSwitch
            label="Header"
            checked={config.showHeader}
            onChange={(checked) => updateConfig("showHeader", checked)}
          />
          <ToggleSwitch
            label="Animation"
            checked={config.showAnimation}
            onChange={(checked) => updateConfig("showAnimation", checked)}
          />
        </div>
      </div>
    </div>
  );
}

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function ToggleSwitch({ label, checked, onChange }: ToggleSwitchProps) {
  return (
    <div className="flex items-center justify-between group">
      <div className="text-[12px] font-medium text-zinc-900 dark:text-zinc-100">
        {label}
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-10 h-6 rounded-full transition-all duration-300 ${
          checked
            ? "bg-zinc-900 dark:bg-zinc-100"
            : "bg-zinc-200 dark:bg-zinc-800"
        }`}
      >
        <motion.div
          initial={false}
          animate={{ x: checked ? 18 : 2 }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 35,
          }}
          className={`absolute top-1 w-4 h-4 rounded-full shadow-sm transition-colors ${
            checked
              ? "bg-white dark:bg-zinc-900"
              : "bg-white dark:bg-zinc-700"
          }`}
        />
      </button>
    </div>
  );
}
