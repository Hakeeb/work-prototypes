"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  endTime: Date;
  message: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ endTime, message }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = endTime.getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="mx-6 my-3 p-4 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 backdrop-blur-sm"
    >
      <div className="flex items-center justify-center gap-2 mb-3">
        <Clock className="w-5 h-5 text-red-300" />
        <p
          className="text-white text-sm"
          style={{ fontFamily: "'Careem Sans', sans-serif" }}
        >
          {message}
        </p>
      </div>

      {/* Timer Display */}
      <div className="flex items-center justify-center gap-3">
        {timeLeft.days > 0 && (
          <TimeUnit value={timeLeft.days} label="days" />
        )}
        <TimeUnit value={timeLeft.hours} label="hrs" />
        <span className="text-white/60">:</span>
        <TimeUnit value={timeLeft.minutes} label="min" />
        <span className="text-white/60">:</span>
        <TimeUnit value={timeLeft.seconds} label="sec" />
      </div>
    </motion.div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white/10 rounded-lg px-2 py-1 min-w-[40px] text-center"
      >
        <span
          className="text-white text-lg tabular-nums"
          style={{ fontFamily: "'Careem Sans', sans-serif" }}
        >
          {value.toString().padStart(2, "0")}
        </span>
      </motion.div>
      <span className="text-white/60 text-xs mt-1">{label}</span>
    </div>
  );
}
