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
    heroTitle: "Join Plus and get د.إ 10 back right away",
    benefits: {
      type: "multiple",
      items: [
        {
          id: "rides",
          icon: "/assets/images/service-rides.png",
          title: "Unlimited free delivery",
          service: "ON RIDES",
          description: "No surge fees",
        },
        {
          id: "food",
          icon: "/assets/images/service-food.png",
          title: "Free Express Delivery",
          service: "ON FOOD",
          description: "Get it faster",
        },
        {
          id: "groceries",
          icon: "/assets/images/service-groceries.png",
          title: "Free delivery",
          service: "ON GROCERIES",
          description: "Save on every order",
        },
        {
          id: "support",
          icon: "/assets/images/service-support.png",
          title: "Priority Support",
          service: "ACROSS CAREEM",
          description: "VIP treatment",
        },
      ],
    },
    callout: {
      text: "Limited-time offer ends upon arrival",
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
    heroTitle: "Unlock د.إ 150 waiting in your wallet",
    benefits: {
      type: "single",
      items: [
        {
          id: "cashback",
          icon: "/assets/images/service-pay.png",
          title: "Instant cashback unlock",
          description: "Get your د.إ 150 credited immediately when you join Plus",
        },
      ],
    },
    callout: {
      text: "You're saving د.إ 150 on this signup!",
      variant: "success",
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
// Story: "You're smart. Be even smarter - save ৳500 this year"
export const monthlyToAnnualPreset: BottomSheetConfig = {
  useCase: "monthly-to-annual",
  userState: "member",

  contentLayer: {
    headerVisual: {
      type: "static",
      src: "/assets/images/food-hero-en@2x.png",
    },
    heroTitle: "Save د.إ 500/year with annual billing",
    benefits: {
      type: "single",
      items: [
        {
          id: "savings",
          icon: "/assets/images/service-pay.png",
          title: "2 months free",
          description: "Pay for 10 months, get 12 months of Plus benefits",
        },
      ],
    },
    callout: {
      text: "Equivalent to getting 2 months completely free",
      variant: "info",
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
    heroTitle: "Upgrade to Premium",
    benefits: {
      type: "multiple",
      items: [
        {
          id: "priority",
          icon: "/assets/images/service-rides.png",
          title: "Priority matching",
          service: "ON RIDES",
          description: "Top-rated captains",
        },
        {
          id: "exclusive",
          icon: "/assets/images/service-shops.png",
          title: "Exclusive deals",
          service: "ON SHOPS",
          description: "Premium discounts",
        },
        {
          id: "concierge",
          icon: "/assets/images/service-support.png",
          title: "24/7 Concierge",
          service: "PREMIUM SUPPORT",
          description: "Dedicated team",
        },
        {
          id: "luxury",
          icon: "/assets/images/service-dineout.png",
          title: "Luxury access",
          service: "ON DINE-OUT",
          description: "VIP reservations",
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

// Export all presets
export const PRESETS = {
  "first-time-signup": firstTimeSignupPreset,
  "cashback-redemption": cashbackRedemptionPreset,
  "monthly-to-annual": monthlyToAnnualPreset,
  "standard-to-premium": standardToPremiumPreset,
};

export type PresetKey = keyof typeof PRESETS;
