"use client";

import { motion } from "framer-motion";
import { BottomSheetConfig } from "../types";
import { PRESETS, PresetKey } from "../presets";
import { Sparkles, Play } from "lucide-react";
import { useState } from "react";

interface ControlPanelProps {
  config: BottomSheetConfig;
  onConfigChange: (config: BottomSheetConfig) => void;
  selectedPreset: PresetKey;
  onPresetChange: (preset: PresetKey) => void;
}

export function ControlPanel({ config, onConfigChange, selectedPreset, onPresetChange }: ControlPanelProps) {
  const [confettiTrigger, setConfettiTrigger] = useState(0);

  const toggleLayer = (layer: string, subkey?: string) => {
    const newConfig = { ...config };

    if (layer === "confetti") {
      // Toggle confetti
      if (newConfig.excitementLayer.confetti) {
        newConfig.excitementLayer.confetti.enabled = !newConfig.excitementLayer.confetti.enabled;
      }
    } else if (layer === "headerVisual") {
      newConfig.contentLayer.headerVisual = newConfig.contentLayer.headerVisual ? undefined : {
        type: "static",
        src: "/assets/images/food-hero-en@2x.png",
      };
    } else if (layer === "heroTitle") {
      newConfig.contentLayer.heroTitle = newConfig.contentLayer.heroTitle ? undefined : "Sample Title";
    } else if (layer === "benefits") {
      newConfig.contentLayer.benefits = newConfig.contentLayer.benefits ? undefined : {
        type: "single",
        items: PRESETS[selectedPreset].contentLayer.benefits?.items || [],
      };
    } else if (layer === "callout") {
      newConfig.contentLayer.callout = newConfig.contentLayer.callout ? undefined : {
        text: "Sample callout",
        variant: "info",
      };
    } else if (layer === "freeTrialDuration") {
      newConfig.planLayer.freeTrialDuration = newConfig.planLayer.freeTrialDuration ? undefined : {
        days: 30,
        highlight: true,
      };
    } else if (layer === "planType") {
      newConfig.planLayer.planType = newConfig.planLayer.planType ? undefined : PRESETS[selectedPreset].planLayer.planType;
    } else if (layer === "countdownTimer") {
      newConfig.urgencyLayer.countdownTimer = newConfig.urgencyLayer.countdownTimer ? undefined : {
        endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        message: "Offer expires in",
      };
    } else if (layer === "embeddedPaySDK") {
      newConfig.paymentLayer.embeddedPaySDK = !newConfig.paymentLayer.embeddedPaySDK;
    } else if (layer === "securityInfo") {
      newConfig.paymentLayer.securityInfo = newConfig.paymentLayer.securityInfo ? undefined : {
        text: "Secure payment",
        icons: ["shield", "lock"],
      };
    }

    onConfigChange(newConfig);
  };

  const triggerConfetti = () => {
    const newConfig = { ...config };
    if (newConfig.excitementLayer.confetti) {
      setConfettiTrigger(prev => prev + 1);
    }
    onConfigChange(newConfig);
  };

  return (
    <div className="w-[300px] border-r border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-7 pb-6 border-b border-zinc-200/50 dark:border-zinc-800/50">
        <h1 className="text-[13px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Bottom Sheet Explorer
        </h1>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-500 mt-1">
          Configure layers and components
        </p>
      </div>

      {/* Controls */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {/* Preset Selection */}
        <div className="space-y-2">
          <h3 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-3">
            Presets
          </h3>
          {(Object.keys(PRESETS) as PresetKey[]).map((presetKey) => {
            const preset = PRESETS[presetKey];
            return (
              <motion.button
                key={presetKey}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPresetChange(presetKey)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-[11px] font-medium transition-all duration-200 ${
                  selectedPreset === presetKey
                    ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                    : "bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <div>{getPresetLabel(presetKey)}</div>
                <div className="text-[9px] opacity-60 mt-0.5">
                  {preset.themingLayer.tier} • {preset.themingLayer.touchIntensity}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-200/50 dark:bg-zinc-800/50" />

        {/* Layer Toggles */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            Layers
          </h3>

          {/* Content Layer */}
          <LayerSection title="Content">
            <ToggleSwitch
              label="Header Visual"
              checked={!!config.contentLayer.headerVisual}
              onChange={() => toggleLayer("headerVisual")}
            />
            <ToggleSwitch
              label="Hero Title"
              checked={!!config.contentLayer.heroTitle}
              onChange={() => toggleLayer("heroTitle")}
            />
            <ToggleSwitch
              label="Benefits"
              checked={!!config.contentLayer.benefits}
              onChange={() => toggleLayer("benefits")}
            />
            <ToggleSwitch
              label="Callout"
              checked={!!config.contentLayer.callout}
              onChange={() => toggleLayer("callout")}
            />
          </LayerSection>

          {/* Excitement Layer */}
          <LayerSection title="Excitement">
            <div className="flex items-center justify-between">
              <ToggleSwitch
                label="Confetti"
                checked={!!config.excitementLayer.confetti?.enabled}
                onChange={() => toggleLayer("confetti")}
              />
              {config.excitementLayer.confetti?.enabled && (
                <button
                  onClick={triggerConfetti}
                  className="ml-2 p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  title="Trigger confetti"
                >
                  <Play className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
                </button>
              )}
            </div>
          </LayerSection>

          {/* Plan Layer */}
          <LayerSection title="Plan">
            <ToggleSwitch
              label="Free Trial"
              checked={!!config.planLayer.freeTrialDuration}
              onChange={() => toggleLayer("freeTrialDuration")}
            />
            <ToggleSwitch
              label="Plan Type"
              checked={!!config.planLayer.planType}
              onChange={() => toggleLayer("planType")}
            />
          </LayerSection>

          {/* Urgency Layer */}
          <LayerSection title="Urgency">
            <ToggleSwitch
              label="Countdown Timer"
              checked={!!config.urgencyLayer.countdownTimer}
              onChange={() => toggleLayer("countdownTimer")}
            />
          </LayerSection>

          {/* Payment Layer */}
          <LayerSection title="Payment">
            <ToggleSwitch
              label="Pay SDK"
              checked={!!config.paymentLayer.embeddedPaySDK}
              onChange={() => toggleLayer("embeddedPaySDK")}
            />
            <ToggleSwitch
              label="Security Info"
              checked={!!config.paymentLayer.securityInfo}
              onChange={() => toggleLayer("securityInfo")}
            />
          </LayerSection>
        </div>
      </div>
    </div>
  );
}

function LayerSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h4 className="text-[9px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
        {title}
      </h4>
      <div className="space-y-2.5 pl-2">
        {children}
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
      <div className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-9 h-5 rounded-full transition-all duration-300 ${
          checked
            ? "bg-zinc-900 dark:bg-zinc-100"
            : "bg-zinc-200 dark:bg-zinc-800"
        }`}
      >
        <motion.div
          initial={false}
          animate={{ x: checked ? 16 : 2 }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 35,
          }}
          className={`absolute top-0.5 w-4 h-4 rounded-full shadow-sm transition-colors ${
            checked
              ? "bg-white dark:bg-zinc-900"
              : "bg-white dark:bg-zinc-700"
          }`}
        />
      </button>
    </div>
  );
}

function getPresetLabel(key: PresetKey): string {
  const labels: Record<PresetKey, string> = {
    "figma-baseline": "Figma Baseline",
    "first-time-signup": "First-Time Signup",
    "cashback-redemption": "Cashback Redemption",
    "monthly-to-annual": "Monthly → Annual",
    "standard-to-premium": "Standard → Premium",
  };
  return labels[key];
}
