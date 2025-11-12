// Bottom Sheet Configuration Types

import { TierTheme, TouchIntensity } from "./lib/theme";

export type { TierTheme, TouchIntensity };

export type UserState = "non-member" | "member" | "premium-member";
export type UseCase =
  | "first-time-signup"
  | "cashback-redemption"
  | "monthly-to-annual"
  | "standard-to-premium";

// Layer Component Types

export interface ContentLayerConfig {
  headerVisual?: {
    type: "static" | "animated";
    src: string;
  };
  heroTitle?: string;
  benefits?: {
    type: "single" | "multiple";
    items: BenefitItem[];
  };
  callout?: {
    text: string;
    variant: "info" | "success" | "warning";
  };
}

export interface BenefitItem {
  id: string;
  icon: string;
  title: string;
  description?: string;
  service?: string;
}

export interface ExcitementLayerConfig {
  confetti?: {
    enabled: boolean;
    trigger: "onMount" | "manual";
  };
}

export interface PlanLayerConfig {
  freeTrialDuration?: {
    days: number;
    highlight: boolean;
  };
  planType?: {
    name: string;
    price: number;
    currency: string;
    billingCycle: "monthly" | "annual";
    features: string[];
  };
}

export interface UrgencyLayerConfig {
  countdownTimer?: {
    endTime: Date;
    message: string;
  };
}

export interface PaymentLayerConfig {
  embeddedPaySDK?: boolean;
  addNewCard?: boolean;
  securityInfo?: {
    text: string;
    icons: string[];
  };
  selectedPaymentMethod?: {
    type: "card" | "wallet";
    last4?: string;
    brand?: string;
  };
}

export interface ThemingLayerConfig {
  tier: TierTheme;
  touchIntensity: TouchIntensity;
}

// Main Bottom Sheet Configuration

export interface BottomSheetConfig {
  useCase: UseCase;
  userState: UserState;

  // Layer configurations
  contentLayer: ContentLayerConfig;
  excitementLayer: ExcitementLayerConfig;
  planLayer: PlanLayerConfig;
  urgencyLayer: UrgencyLayerConfig;
  paymentLayer: PaymentLayerConfig;
  themingLayer: ThemingLayerConfig;

  // Global settings
  isDismissible?: boolean;
  showDragHandle?: boolean;
}

// Preset configurations for each use case

export type PresetConfig = BottomSheetConfig;
