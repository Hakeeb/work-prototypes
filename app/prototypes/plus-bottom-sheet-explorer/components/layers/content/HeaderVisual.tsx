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

  // Static or animated image
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
