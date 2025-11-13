// Plus Theme Configuration

export type TierTheme = "standard" | "premium";
export type TouchIntensity = "high" | "medium" | "low";

// Color palette from Plus brand guidelines (Figma accurate)
// Source: Plus Rebrand test library (node 1793-179226)
export const plusColors = {
  // Standard Tier (Purple)
  standard: {
    primary: "#321B60", // Deep purple (Careem+ v2/Standard/Primary)
    primaryGradient: "linear-gradient(135deg, #442576 0%, #321B60 100%)",
    primaryInverse: "#FFFFFF", // White (Careem+ v2/Standard/Primary Inverse)
    textSecondaryInverse: "#E8EBEA", // Light gray for secondary text (from baseline)
    secondary: "#EDE8FD", // Light lavender (Careem+ v2/Standard/Secondary)
    secondaryGradient: "linear-gradient(135deg, #F5F2FF 0%, #EDE8FD 100%)",
    cardBackground: "rgba(255, 255, 255, 0.1)", // Semi-transparent white for benefit cards
    cardBorder: "rgba(255, 255, 255, 0.1)",
  },
  // Premium/Gold Tier
  premium: {
    primary: "#000000", // Black (Careem+ v2/Gold/Primary)
    primaryGradient: "linear-gradient(135deg, #1F1F1F 0%, #000000 100%)",
    primaryInverse: "#F8D6A0", // Peach/gold (Careem+ v2/Gold/Primary Inverse)
    textSecondaryInverse: "#E8EBEA", // Light gray for secondary text
    secondary: "#F8D6A0", // Peach/gold (Careem+ v2/Gold/Secondary)
    secondaryGradient: "linear-gradient(135deg, #FFE5B8 0%, #F8D6A0 100%)",
    cardBackground: "rgba(248, 214, 160, 0.15)", // Semi-transparent gold for benefit cards
    cardBorder: "rgba(248, 214, 160, 0.2)",
  },
  // System Colors (shared across tiers)
  system: {
    promoGreen: "#00E784", // Careem green (text/brand/careem)
    careemTeal: "#00493E", // Careem Plus brand teal (background/brand/cPlus)
    careemTealInverse: "#00E784", // Inverse is the bright green
    white: "#FFFFFF",
    black: "#000000",
    textPrimary: "#232424", // Near black for text (text/primary)
  },
};

// Touch Intensity Styling
export interface IntensityStyles {
  background: string;
  textColor: string;
  accentColor: string;
  useGradient: boolean;
  animationDuration: number;
}

export function getIntensityStyles(
  tier: TierTheme,
  intensity: TouchIntensity
): IntensityStyles {
  const colors = plusColors[tier];

  switch (intensity) {
    case "high":
      return {
        background: colors.primaryGradient,
        textColor: colors.primaryInverse,
        accentColor: plusColors.system.promoGreen,
        useGradient: true,
        animationDuration: 0.5,
      };
    case "medium":
      return {
        background: colors.secondary,
        textColor: colors.primary,
        accentColor: colors.primary,
        useGradient: false,
        animationDuration: 0.3,
      };
    case "low":
      return {
        background: plusColors.system.white,
        textColor: colors.primary,
        accentColor: colors.primary,
        useGradient: false,
        animationDuration: 0.2,
      };
  }
}

// Helper to get theme-specific button styles
export function getButtonStyles(tier: TierTheme, variant: "primary" | "secondary") {
  const colors = plusColors[tier];

  if (variant === "primary") {
    return {
      background: tier === "standard" ? colors.primary : colors.primary,
      text: tier === "standard" ? plusColors.system.white : plusColors.system.white,
      hover: tier === "standard" ? "#2B1F4F" : "#1F1F1F",
    };
  } else {
    return {
      background: colors.secondary,
      text: colors.primary,
      hover: colors.secondaryGradient,
    };
  }
}

// Helper to get logo path based on tier and background
export function getPlusLogoPath(tier: TierTheme, inverted: boolean): string {
  if (tier === "standard") {
    return inverted
      ? "/assets/logos/plus-logo-standard-inverted.svg"
      : "/assets/logos/plus-logo-standard.svg";
  } else {
    return inverted
      ? "/assets/logos/plus-logo-premium-inverted.svg"
      : "/assets/logos/plus-logo-premium.svg";
  }
}
