"use client";

import { useState } from "react";
import { BottomSheet } from "./bottom-sheet";

interface MobileCanvasProps {
  config: {
    variant: string;
    showHeader: boolean;
    showAnimation: boolean;
  };
}

export function MobileCanvas({ config }: MobileCanvasProps) {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.1, 1.5));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.1, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Textured Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-zinc-100/50 to-zinc-200/30 dark:from-zinc-900 dark:via-zinc-800/50 dark:to-zinc-900">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Radial Gradient Spotlight */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-100/20 dark:to-zinc-950/40" />
      </div>

      {/* Zoom Controls */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-xl px-3 py-2 border border-zinc-200/50 dark:border-zinc-800/50">
        <button
          onClick={handleZoomOut}
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          title="Zoom out"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-zinc-600 dark:text-zinc-400">
            <path d="M3 7H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <button
          onClick={handleResetZoom}
          className="text-[10px] font-medium text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors px-1 min-w-[32px] text-center"
          title="Reset zoom"
        >
          {Math.round(zoom * 100)}%
        </button>
        <button
          onClick={handleZoomIn}
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          title="Zoom in"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-zinc-600 dark:text-zinc-400">
            <path d="M7 3V11M3 7H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Viewport */}
      <div
        className="relative transition-transform duration-200"
        style={{ transform: `scale(${zoom})` }}
      >
        {/* Phone Frame */}
        <div
          className="relative bg-white dark:bg-zinc-950 rounded-[24px] shadow-[0_8px_24px_-6px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80"
          style={{ width: "375px", height: "812px" }}
        >
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-11 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl z-20 flex items-center justify-between px-8">
            <span className="text-[13px] font-semibold text-zinc-900 dark:text-white">9:41</span>
            <div className="flex items-center gap-1.5">
              <svg width="17" height="12" viewBox="0 0 17 12" className="text-zinc-900 dark:text-white">
                <path fill="currentColor" d="M0 4.5C0 3.12 1.12 2 2.5 2h12C15.88 2 17 3.12 17 4.5v3c0 1.38-1.12 2.5-2.5 2.5h-12C1.12 10 0 8.88 0 7.5v-3z" opacity="0.35"/>
                <path fill="currentColor" d="M2 4.5C2 4.22 2.22 4 2.5 4h1C3.78 4 4 4.22 4 4.5v3c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-3z"/>
                <path fill="currentColor" d="M5 4.5C5 4.22 5.22 4 5.5 4h1c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-3z"/>
                <path fill="currentColor" d="M8 4.5C8 4.22 8.22 4 8.5 4h1c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-3z"/>
              </svg>
              <svg width="25" height="12" viewBox="0 0 25 12" className="text-zinc-900 dark:text-white">
                <rect x="0" y="0" width="22" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35"/>
                <rect x="23" y="4" width="2" height="4" rx="0.5" fill="currentColor" opacity="0.4"/>
                <rect x="2" y="2" width="16" height="8" rx="1" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Scrollable Content Container */}
          <div className="w-full h-full overflow-y-auto scrollbar-hide pt-11 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
            {/* Placeholder Content */}
            <div className="p-6 space-y-3 pb-[500px]">
              <div className="h-7 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-48" />
              <div className="h-3 bg-zinc-100 dark:bg-zinc-900 rounded w-full" />
              <div className="h-3 bg-zinc-100 dark:bg-zinc-900 rounded w-3/4" />
              <div className="h-3 bg-zinc-100 dark:bg-zinc-900 rounded w-5/6" />
            </div>

            {/* Bottom Sheet Container */}
            <div className="sticky bottom-0 left-0 right-0">
              <BottomSheet config={config} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
