import { BottomSheetConfig } from "./types";

// Preset 1: First-Time Signup (Non-member)
// Story: "Welcome! Start saving on everything you love, right now"
export const firstTimeSignupPreset: BottomSheetConfig = {
  useCase: "first-time-signup",
  userState: "non-member",

  contentLayer: {
    headerVisual: {
      type: "animated",
      src: "/assets/animations/welcome-video-lottie.json",
    },
    heroTitle: "Join Plus and get\nد.إ 10 back right away",
    benefits: {
      type: "single",
      items: [
        {
          id: "save-everything",
          icon: "/plus-baseline/benefit-icon.png",
          title: "Save on everything",
          description: "Enjoy benefits and discounts on rides, food, groceries and services",
        },
      ],
    },
    callout: {
      text: "Try free for 30 days. Cancel anytime.",
      variant: "info",
    },
  },

  excitementLayer: {
    confetti: {
      enabled: true,
      trigger: "onMount",
    },
  },

  planLayer: {
    freeTrialDuration: {
      days: 30,
      highlight: true,
    },
    planType: {
      name: "Plus Standard",
      price: 19,
      currency: "د.إ",
      billingCycle: "monthly",
      features: [
        "Unlimited free delivery on rides",
        "Free express delivery on food",
        "Member-exclusive discounts",
        "Priority customer support",
      ],
    },
  },

  urgencyLayer: {},

  paymentLayer: {
    embeddedPaySDK: true,
    securityInfo: {
      text: "Secure payment. Cancel anytime.",
      icons: ["shield", "lock"],
    },
    selectedPaymentMethod: {
      type: "card",
      last4: "4242",
      brand: "Visa",
    },
  },

  themingLayer: {
    tier: "standard",
    touchIntensity: "high",
  },

  isDismissible: true,
  showDragHandle: true,
};

// Preset 2: Cashback Redemption (Non-member)
// Story: "You've earned money. Join Plus to unlock it NOW"
export const cashbackRedemptionPreset: BottomSheetConfig = {
  useCase: "cashback-redemption",
  userState: "non-member",

  contentLayer: {
    headerVisual: {
      type: "static",
      src: "/assets/images/card-image.png",
    },
    heroTitle: "Unlock د.إ 150\nwaiting in your wallet",
    benefits: {
      type: "single",
      items: [
        {
          id: "cashback",
          icon: "/plus-baseline/benefit-icon.png",
          title: "Instant cashback unlock",
          description: "Get your د.إ 150 credited immediately when you join Plus",
        },
      ],
    },
    callout: {
      text: "Limited time offer. Claim before it expires.",
      variant: "warning",
    },
  },

  excitementLayer: {
    confetti: {
      enabled: true,
      trigger: "onMount",
    },
  },

  planLayer: {
    freeTrialDuration: {
      days: 30,
      highlight: true,
    },
    planType: {
      name: "Plus Standard",
      price: 19,
      currency: "د.إ",
      billingCycle: "monthly",
      features: [
        "Get د.إ 150 cashback instantly",
        "Future savings on all services",
        "Exclusive member deals",
      ],
    },
  },

  urgencyLayer: {
    countdownTimer: {
      endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
      message: "Cashback expires in",
    },
  },

  paymentLayer: {
    embeddedPaySDK: true,
    securityInfo: {
      text: "100% secure. Money-back guarantee.",
      icons: ["shield", "lock"],
    },
    selectedPaymentMethod: {
      type: "card",
      last4: "4242",
      brand: "Visa",
    },
  },

  themingLayer: {
    tier: "standard",
    touchIntensity: "high",
  },

  isDismissible: true,
  showDragHandle: true,
};

// Preset 3: Monthly to Annual (Member)
// Story: "You're smart. Be even smarter - save د.إ 500 this year"
export const monthlyToAnnualPreset: BottomSheetConfig = {
  useCase: "monthly-to-annual",
  userState: "member",

  contentLayer: {
    headerVisual: {
      type: "static",
      src: "/assets/images/food-hero-en@2x.png",
    },
    heroTitle: "Save د.إ 500/year\nwith annual billing",
    benefits: {
      type: "single",
      items: [
        {
          id: "savings",
          icon: "/plus-baseline/benefit-icon.png",
          title: "Get 2 months free",
          description: "Pay for 10 months, enjoy 12 months of Plus benefits",
        },
      ],
    },
    callout: {
      text: "Lock in your savings. Upgrade offer ends in 7 days.",
      variant: "warning",
    },
  },

  excitementLayer: {},

  planLayer: {
    planType: {
      name: "Plus Standard (Annual)",
      price: 190,
      currency: "৳",
      billingCycle: "annual",
      features: [
        "All Plus benefits for 12 months",
        "Save د.إ 500 vs monthly billing",
        "Lock in current pricing",
        "Cancel anytime with pro-rated refund",
      ],
      showComparison: true,
      comparisonPrice: 228,
    },
  },

  urgencyLayer: {
    countdownTimer: {
      endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      message: "Limited upgrade offer ends in",
    },
  },

  paymentLayer: {
    embeddedPaySDK: true,
    securityInfo: {
      text: "Existing card will be charged د.إ 190 today",
      icons: ["shield"],
    },
    selectedPaymentMethod: {
      type: "card",
      last4: "4242",
      brand: "Visa",
    },
  },

  themingLayer: {
    tier: "standard",
    touchIntensity: "medium",
  },

  isDismissible: true,
  showDragHandle: true,
};

// Preset 4: Standard to Premium (Member)
// Story: "You deserve the best. Unlock exclusive luxury"
export const standardToPremiumPreset: BottomSheetConfig = {
  useCase: "standard-to-premium",
  userState: "member",

  contentLayer: {
    headerVisual: {
      type: "static",
      src: "/assets/images/quik-hero-en@3x.png",
    },
    heroTitle: "Upgrade to\nPlus Premium",
    benefits: {
      type: "single",
      items: [
        {
          id: "premium-perks",
          icon: "/plus-baseline/benefit-icon.png",
          title: "Unlock premium perks",
          description: "Priority matching, exclusive deals, 24/7 concierge, and VIP access",
        },
      ],
    },
    callout: {
      text: "Premium members save 3x more than Standard",
      variant: "success",
    },
  },

  excitementLayer: {},

  planLayer: {
    freeTrialDuration: {
      days: 14,
      highlight: false,
    },
    planType: {
      name: "Plus Premium",
      price: 49,
      currency: "৳",
      billingCycle: "monthly",
      features: [
        "Everything in Standard",
        "Priority ride matching",
        "Exclusive premium deals",
        "24/7 concierge support",
        "VIP event access",
      ],
    },
  },

  urgencyLayer: {},

  paymentLayer: {
    embeddedPaySDK: true,
    securityInfo: {
      text: "Upgrade charges د.إ 30 difference today",
      icons: ["shield"],
    },
    selectedPaymentMethod: {
      type: "card",
      last4: "4242",
      brand: "Visa",
    },
  },

  themingLayer: {
    tier: "premium",
    touchIntensity: "high",
  },

  isDismissible: true,
  showDragHandle: true,
};

// Preset 5: Figma Baseline (Exact Replication)
// Node: 239-29418 from QBR Stories
export const figmaBaselinePreset: BottomSheetConfig = {
  useCase: "figma-baseline",
  userState: "non-member",

  contentLayer: {
    headerVisual: {
      type: "static",
      src: "figma-assets",
    },
    heroTitle: "Join Plus and get\n⃎ 10 back right away",
    benefits: {
      type: "single",
      items: [
        {
          id: "save-everything",
          icon: "/plus-baseline/benefit-icon.png",
          title: "Save on everything",
          description: "Enjoy benefits and discounts on rides, food, groceries and services",
        },
      ],
    },
    callout: {
      text: "Limited-time offer ends upon arrival",
      variant: "warning",
    },
  },

  excitementLayer: {},

  planLayer: {},

  urgencyLayer: {},

  paymentLayer: {},

  themingLayer: {
    tier: "standard",
    touchIntensity: "high",
  },

  isDismissible: true,
  showDragHandle: true,
};

// Export all presets
export const PRESETS = {
  "figma-baseline": figmaBaselinePreset,
  "first-time-signup": firstTimeSignupPreset,
  "cashback-redemption": cashbackRedemptionPreset,
  "monthly-to-annual": monthlyToAnnualPreset,
  "standard-to-premium": standardToPremiumPreset,
};

export type PresetKey = keyof typeof PRESETS;
