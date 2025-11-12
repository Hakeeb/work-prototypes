"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BottomSheetConfig } from "../types";
import { getIntensityStyles, getPlusLogoPath } from "../lib/theme";

// Layer components
import { HeaderVisual } from "./layers/content/HeaderVisual";
import { HeroTitle } from "./layers/content/HeroTitle";
import { Benefits } from "./layers/content/Benefits";
import { Callout } from "./layers/content/Callout";
import { Confetti } from "./layers/excitement/Confetti";
import { FreeTrialDuration } from "./layers/plan/FreeTrialDuration";
import { PlanType } from "./layers/plan/PlanType";
import { CountdownTimer } from "./layers/urgency/CountdownTimer";
import { EmbeddedPaySDK } from "./layers/payment/EmbeddedPaySDK";
import { AddNewCard } from "./layers/payment/AddNewCard";
import { SecurityInformation } from "./layers/payment/SecurityInformation";

interface BottomSheetProps {
  config: BottomSheetConfig;
}

export function BottomSheet({ config }: BottomSheetProps) {
  const intensityStyles = getIntensityStyles(
    config.themingLayer.tier,
    config.themingLayer.touchIntensity
  );

  const logoPath = getPlusLogoPath(
    config.themingLayer.tier,
    config.themingLayer.touchIntensity === "high"
  );

  return (
    <>
      {/* Confetti Layer (renders above everything) */}
      {config.excitementLayer.confetti?.enabled && (
        <Confetti
          trigger={config.excitementLayer.confetti.trigger}
          active={config.excitementLayer.confetti.enabled}
        />
      )}

      {/* Bottom Sheet Container */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 400,
        }}
        className="rounded-t-[28px] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col"
        style={{
          background: intensityStyles.useGradient
            ? intensityStyles.background
            : undefined,
          backgroundColor: !intensityStyles.useGradient
            ? intensityStyles.background
            : undefined,
          fontFamily: "'Careem Sans', sans-serif",
          maxHeight: "75vh",
        }}
      >
        {/* Drag Handle */}
        {config.showDragHandle && (
          <div className="flex justify-center pt-3 pb-2 flex-shrink-0">
            <div className="w-9 h-1 bg-white/30 rounded-full" />
          </div>
        )}

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide pb-24">
          {/* Logo */}
          <div className="px-6 pt-3 pb-2">
            <Image
              src={logoPath}
              alt="Careem Plus"
              width={60}
              height={24}
              className="h-6 w-auto"
            />
          </div>

          {/* Content Layer: Header Visual */}
          {config.contentLayer.headerVisual && (
            <HeaderVisual
              type={config.contentLayer.headerVisual.type}
              src={config.contentLayer.headerVisual.src}
            />
          )}

          {/* Content Layer: Hero Title */}
          {config.contentLayer.heroTitle && (
            <HeroTitle
              title={config.contentLayer.heroTitle}
              subtitle={config.contentLayer.heroTitle ? undefined : undefined}
              tier={config.themingLayer.tier}
            />
          )}

          {/* Content Layer: Callout */}
          {config.contentLayer.callout && (
            <Callout
              text={config.contentLayer.callout.text}
              variant={config.contentLayer.callout.variant}
            />
          )}

          {/* Plan Layer: Free Trial Duration */}
          {config.planLayer.freeTrialDuration && (
            <FreeTrialDuration
              days={config.planLayer.freeTrialDuration.days}
              highlight={config.planLayer.freeTrialDuration.highlight}
            />
          )}

          {/* Content Layer: Benefits */}
          {config.contentLayer.benefits && (
            <Benefits
              type={config.contentLayer.benefits.type}
              items={config.contentLayer.benefits.items}
              tier={config.themingLayer.tier}
            />
          )}

          {/* Plan Layer: Plan Type */}
          {config.planLayer.planType && (
            <PlanType
              name={config.planLayer.planType.name}
              price={config.planLayer.planType.price}
              currency={config.planLayer.planType.currency}
              billingCycle={config.planLayer.planType.billingCycle}
              features={config.planLayer.planType.features}
              tier={config.themingLayer.tier}
              showComparison={config.planLayer.planType.showComparison}
              comparisonPrice={config.planLayer.planType.comparisonPrice}
            />
          )}

          {/* Urgency Layer: Countdown Timer */}
          {config.urgencyLayer.countdownTimer && (
            <CountdownTimer
              endTime={config.urgencyLayer.countdownTimer.endTime}
              message={config.urgencyLayer.countdownTimer.message}
            />
          )}

          {/* Payment Layer: Embedded PaySDK */}
          {config.paymentLayer.embeddedPaySDK && (
            <EmbeddedPaySDK
              selectedMethod={config.paymentLayer.selectedPaymentMethod}
            />
          )}

          {/* Payment Layer: Add New Card */}
          {config.paymentLayer.addNewCard && (
            <AddNewCard />
          )}

        </div>

        {/* Fixed CTA Button at Bottom */}
        <div className="flex-shrink-0 bg-gradient-to-t from-black/10 to-transparent pt-3 pb-6 px-6 absolute bottom-0 left-0 right-0 backdrop-blur-sm">
          {/* Payment Layer: Security Information */}
          {config.paymentLayer.securityInfo && (
            <div className="mb-3">
              <SecurityInformation
                text={config.paymentLayer.securityInfo.text}
                icons={config.paymentLayer.securityInfo.icons as ("shield" | "lock")[]}
              />
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-14 rounded-2xl flex items-center justify-center shadow-lg text-base transition-all"
            style={{
              backgroundColor: config.themingLayer.tier === "standard" ? "#00A699" : "#C4F54D",
              color: config.themingLayer.tier === "standard" ? "#FFFFFF" : "#000000",
            }}
          >
            {getCTAText(config.useCase)}
          </motion.button>
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
      </motion.div>
    </>
  );
}

function getCTAText(useCase: string): string {
  switch (useCase) {
    case "first-time-signup":
      return "Try Careem Plus free";
    case "cashback-redemption":
      return "Unlock my د.إ 150 now";
    case "monthly-to-annual":
      return "Switch to annual & save";
    case "standard-to-premium":
      return "Upgrade to Premium";
    default:
      return "Subscribe now";
  }
}
