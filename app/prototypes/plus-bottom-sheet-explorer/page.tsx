"use client";

import { useState } from "react";
import { ControlPanel } from "./components/control-panel";
import { MobileCanvas } from "./components/mobile-canvas";

export default function PlusBottomSheetExplorer() {
  const [config, setConfig] = useState({
    // Placeholder config - will expand as we build out bottom sheet variations
    variant: "default",
    showHeader: true,
    showAnimation: true,
  });

  return (
    <div className="fixed inset-0 flex overflow-hidden bg-white dark:bg-zinc-950">
      {/* Left Control Panel */}
      <ControlPanel config={config} onConfigChange={setConfig} />

      {/* Center Canvas */}
      <div className="flex-1 h-full">
        <MobileCanvas config={config} />
      </div>
    </div>
  );
}
