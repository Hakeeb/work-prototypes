"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiProps {
  trigger: "onMount" | "manual";
  active?: boolean;
  onComplete?: () => void;
}

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
}

export function Confetti({ trigger, active = true, onComplete }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [isActive, setIsActive] = useState(false);

  const colors = ["#C4F54D", "#00A699", "#3D2B6B", "#E5C9A1", "#FFFFFF"];

  useEffect(() => {
    if ((trigger === "onMount" && active) || (trigger === "manual" && active)) {
      triggerConfetti();
    }
  }, [trigger, active]);

  const triggerConfetti = () => {
    const newPieces: ConfettiPiece[] = [];
    const pieceCount = 50;

    for (let i = 0; i < pieceCount; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.2,
        duration: 1.5 + Math.random() * 1,
        rotation: Math.random() * 720 - 360,
      });
    }

    setPieces(newPieces);
    setIsActive(true);

    // Clean up after animation
    setTimeout(() => {
      setIsActive(false);
      setPieces([]);
      onComplete?.();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {isActive &&
          pieces.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{
                x: `${piece.x}vw`,
                y: "-10%",
                opacity: 1,
                rotate: 0,
              }}
              animate={{
                y: "110vh",
                rotate: piece.rotation,
                opacity: [1, 1, 0.5, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                ease: "easeIn",
              }}
              className="absolute"
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: piece.color,
                borderRadius: Math.random() > 0.5 ? "50%" : "2px",
              }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}
