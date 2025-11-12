"use client";

import { motion } from "framer-motion";
import { CreditCard, ChevronRight } from "lucide-react";
import Image from "next/image";

interface PaymentMethod {
  type: "card" | "wallet";
  last4?: string;
  brand?: string;
  icon?: string;
}

interface EmbeddedPaySDKProps {
  selectedMethod?: PaymentMethod;
  onAddCard?: () => void;
}

export function EmbeddedPaySDK({ selectedMethod, onAddCard }: EmbeddedPaySDKProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      className="px-6 py-4 border-t border-white/10"
      style={{ fontFamily: "'Careem Sans', sans-serif" }}
    >
      <h3 className="text-white/80 text-xs uppercase tracking-wide mb-3">
        Pay with
      </h3>

      {/* Selected Payment Method */}
      {selectedMethod ? (
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-between group hover:bg-white/15 transition-colors"
        >
          <div className="flex items-center gap-3">
            {selectedMethod.type === "card" ? (
              <>
                <div className="w-10 h-7 bg-white rounded-md flex items-center justify-center">
                  {selectedMethod.icon ? (
                    <Image
                      src={selectedMethod.icon}
                      alt={selectedMethod.brand || "Card"}
                      width={32}
                      height={20}
                      className="object-contain"
                    />
                  ) : (
                    <CreditCard className="w-5 h-5 text-gray-700" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-white text-sm">
                    {selectedMethod.brand || "Card"} •••• {selectedMethod.last4}
                  </p>
                  <p className="text-white/60 text-xs">Default payment method</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-300 text-xl">৳</span>
                </div>
                <div className="text-left">
                  <p className="text-white text-sm">Careem Wallet</p>
                  <p className="text-white/60 text-xs">د.إ 250 available</p>
                </div>
              </>
            )}
          </div>
          <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
        </motion.button>
      ) : (
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onAddCard}
          className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-dashed border-white/30 flex items-center justify-center gap-2 hover:bg-white/15 transition-colors"
        >
          <CreditCard className="w-5 h-5 text-white/60" />
          <span className="text-white/80 text-sm">Add payment method</span>
        </motion.button>
      )}
    </motion.div>
  );
}
