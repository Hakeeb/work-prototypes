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

  const logoPath = config.useCase === "figma-baseline"
    ? "/plus-baseline/plus-logo.svg"
    : getPlusLogoPath(
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
        className="rounded-t-[20px] shadow-[0_0_16px_0_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
        style={{
          background: intensityStyles.useGradient
            ? intensityStyles.background
            : undefined,
          backgroundColor: !intensityStyles.useGradient
            ? intensityStyles.background
            : undefined,
          fontFamily: "'Careem Sans', sans-serif",
          maxHeight: "752px",
          height: "auto",
        }}
      >
        {/* Navigation Container - contains grabber, hero, and logo */}
        <div className="relative flex-shrink-0">
          {/* Drag Handle */}
          {config.showDragHandle && (
            <div className="flex justify-center py-2 flex-shrink-0">
              <div className="w-[48px] h-[4px] bg-white rounded-[2px]" />
            </div>
          )}

          {/* Content Layer: Header Visual */}
          {config.contentLayer.headerVisual && (
            <HeaderVisual
              type={config.contentLayer.headerVisual.type}
              src={config.contentLayer.headerVisual.src}
            />
          )}

          {/* Logo positioned on top of hero */}
          <div className="absolute top-0 left-4 right-4 pt-[16px] pb-[8px] flex justify-between items-center pointer-events-none">
            <div className="w-[57px] h-[32px] relative">
              <Image
                src={logoPath}
                alt="Careem Plus"
                width={57}
                height={32}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide pb-32 min-h-0"
          >

          {/* Urgency Layer: Countdown Timer (Badge variant renders before title) */}
          {config.urgencyLayer.countdownTimer?.variant === "badge" && (
            <CountdownTimer
              endTime={config.urgencyLayer.countdownTimer.endTime}
              message={config.urgencyLayer.countdownTimer.message}
              variant="badge"
            />
          )}

          {/* Content Layer: Hero Title */}
          {config.contentLayer.heroTitle && (
            <HeroTitle
              title={config.contentLayer.heroTitle}
              subtitle={config.contentLayer.callout?.text}
              tier={config.themingLayer.tier}
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

          {/* Urgency Layer: Countdown Timer (Full variant renders after benefits) */}
          {config.urgencyLayer.countdownTimer && config.urgencyLayer.countdownTimer.variant !== "badge" && (
            <CountdownTimer
              endTime={config.urgencyLayer.countdownTimer.endTime}
              message={config.urgencyLayer.countdownTimer.message}
              variant={config.urgencyLayer.countdownTimer.variant}
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

        {/* Footer */}
        <div className="flex-shrink-0 bg-white shadow-[0_0_24px_0_rgba(0,0,0,0.16)] absolute bottom-0 left-0 right-0 overflow-hidden">
          {/* Actions Container */}
          <div className="px-4 py-3 flex gap-4 items-start">
            <div className="flex-1 flex flex-col gap-2 items-start justify-center">
              {/* Payment Layer: Security Information */}
              {config.paymentLayer.securityInfo && (
                <div className="mb-1">
                  <SecurityInformation
                    text={config.paymentLayer.securityInfo.text}
                    icons={config.paymentLayer.securityInfo.icons as ("shield" | "lock")[]}
                  />
                </div>
              )}

              {/* Main CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-[8px] flex items-center justify-center border border-solid"
                style={{
                  backgroundColor: config.themingLayer.tier === "standard" ? "#321B60" : "#000000",
                  borderColor: config.themingLayer.tier === "standard" ? "#321B60" : "#000000",
                  color: "#FFFFFF",
                  fontFamily: "'Careem Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "24px",
                  padding: "16px 20px",
                }}
              >
                {getCTAText(config.useCase)}
              </motion.button>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="flex flex-col gap-2 h-[24px] items-center justify-end">
            <div className="h-[21px] relative w-full flex items-end justify-center">
              <div className="bg-black h-[5px] rounded-[2.5px] w-[135px] mb-2" />
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
      </motion.div>
    </>
  );
}

function getCTAText(useCase: string): string {
  switch (useCase) {
    case "figma-baseline":
      return "Try Careem Plus now";
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
