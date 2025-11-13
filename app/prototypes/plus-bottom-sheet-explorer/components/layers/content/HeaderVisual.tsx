"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface HeaderVisualProps {
  type: "static" | "animated";
  src: string;
  alt?: string;
}

export function HeaderVisual({ type, src, alt = "Header visual" }: HeaderVisualProps) {
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For Lottie animations (if type is animated and src is .json)
    if (type === "animated" && src.endsWith(".json") && lottieRef.current) {
      // Dynamically import lottie-web only if needed
      import("lottie-web").then((lottie) => {
        const animation = lottie.default.loadAnimation({
          container: lottieRef.current!,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: src,
        });

        return () => animation.destroy();
      });
    }
  }, [type, src]);

  // Lottie animation
  if (type === "animated" && src.endsWith(".json")) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-40 flex items-center justify-center -mx-6"
      >
        <div ref={lottieRef} className="w-full h-full max-w-[280px]" />
      </motion.div>
    );
  }

  // Figma baseline: Recreate exact hero illustration layout
  if (src === "figma-assets") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-[211px] relative overflow-hidden"
      >
        {/* Hero Illustration Container - positioned to show bottom portion */}
        <div className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 w-[296px] h-[172px]">
          {/* Background Spheres - centered, with opacity */}
          <div className="absolute left-1/2 top-[15px] -translate-x-1/2 w-[156px] h-[82px] opacity-70 overflow-hidden">
            <div className="absolute left-1/2 top-[0.5px] -translate-x-1/2 w-[156px] h-[156px]">
              <Image
                src="/plus-baseline/spheres.svg"
                alt="Decorative spheres"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Assets Layer */}
          <div className="absolute left-1/2 top-[4px] -translate-x-1/2 w-[296px] h-[172px]">
            {/* Groceries - top right */}
            <div className="absolute right-0 top-[8px] w-[129px] h-[129px]">
              <Image
                src="/plus-baseline/groceries.png"
                alt="Groceries"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Food - bottom left */}
            <div className="absolute left-0 bottom-[39px] w-[129px] h-[129px]">
              <Image
                src="/plus-baseline/food.png"
                alt="Food"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Taxi Car - center left */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[172px] h-[172px]" style={{ marginLeft: "-32px" }}>
              <Image
                src="/plus-baseline/taxi-car.png"
                alt="Taxi"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Executive Car - center right */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[172px] h-[172px]" style={{ marginLeft: "28px" }}>
              <Image
                src="/plus-baseline/executive-car.png"
                alt="Executive car"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Static or animated image (legacy)
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: type === "animated" ? 0.5 : 0.3 }}
      className="w-full h-40 relative flex items-center justify-center overflow-hidden -mx-6"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
}
