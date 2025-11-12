"use client";

import { useState } from "react";
import { ControlPanel } from "./components/control-panel";
import { MobileCanvas } from "./components/mobile-canvas";
import { PRESETS, PresetKey } from "./presets";
import { BottomSheetConfig } from "./types";
import "./fonts.css";

export default function PlusBottomSheetExplorer() {
  const [selectedPreset, setSelectedPreset] = useState<PresetKey>("first-time-signup");
  const [config, setConfig] = useState<BottomSheetConfig>(PRESETS["first-time-signup"]);

  const handlePresetChange = (preset: PresetKey) => {
    setSelectedPreset(preset);
    setConfig({ ...PRESETS[preset] });
  };

  const handleConfigChange = (newConfig: BottomSheetConfig) => {
    setConfig({ ...newConfig });
  };

  return (
    <div className="fixed inset-0 flex overflow-hidden bg-white dark:bg-zinc-950">
      {/* Left Control Panel */}
      <ControlPanel
        config={config}
        onConfigChange={handleConfigChange}
        selectedPreset={selectedPreset}
        onPresetChange={handlePresetChange}
      />

      {/* Center Canvas */}
      <div className="flex-1 h-full">
        <MobileCanvas config={config} />
      </div>
    </div>
  );
}
