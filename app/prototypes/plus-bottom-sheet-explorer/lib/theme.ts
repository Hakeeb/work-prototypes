// Plus Theme Configuration

export type TierTheme = "standard" | "premium";
export type TouchIntensity = "high" | "medium" | "low";

// Color palette from Plus brand guidelines
export const plusColors = {
  // Standard Tier
  standard: {
    primary: "#3D2B6B", // Deep purple
    primaryGradient: "linear-gradient(135deg, #3D2B6B 0%, #2B1F4F 100%)",
    primaryInverse: "#FFFFFF",
    secondary: "#D4C5F9", // Light lavender
    secondaryGradient: "linear-gradient(135deg, #E8DFFF 0%, #D4C5F9 100%)",
  },
  // Premium Tier
  premium: {
    primary: "#000000", // Black
    primaryGradient: "linear-gradient(135deg, #1A1A1A 0%, #000000 100%)",
    primaryInverse: "#E5C9A1", // Tan/beige
    secondary: "#F5E6D3", // Light tan
    secondaryGradient: "linear-gradient(135deg, #F5E6D3 0%, #E5C9A1 100%)",
  },
  // System Colors (shared across tiers)
  system: {
    promoGreen: "#C4F54D", // Bright lime
    careemTeal: "#00A699", // Teal
    careemTealInverse: "#003D37", // Dark teal
    white: "#FFFFFF",
    black: "#000000",
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
      hover: tier === "standard" ? "#2B1F4F" : "#1A1A1A",
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
