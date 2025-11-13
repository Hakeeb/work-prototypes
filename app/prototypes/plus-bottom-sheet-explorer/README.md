# Plus Bottom Sheet Explorer

Interactive configuration tool for exploring Careem Plus bottom sheet design variations in real-time.

## Purpose

Enables designers and PMs to experiment with different bottom sheet configurations without code changes. Built to explore which combinations of content, urgency, and theming drive user conversion for Careem Plus subscriptions.

## Architecture

### Layered Design Pattern

The prototype uses a **layered architecture** where each UI concern is isolated into its own layer:

**Layer Categories:**
- **Content Layer** - Hero visuals, titles, benefits, callouts
- **Excitement Layer** - Confetti and delight animations
- **Plan Layer** - Free trial info, pricing, plan features
- **Urgency Layer** - Countdown timers, expiration messaging
- **Payment Layer** - Payment SDK, card info, security messaging
- **Theming Layer** - Tier colors (Standard/Premium), visual intensity

**Key Benefits:**
- Each layer is independently configurable via TypeScript types
- Layers can be enabled/disabled without affecting others
- Easy to A/B test specific layer combinations
- Single config object (`BottomSheetConfig`) drives all rendering

### Preset System

Pre-configured use cases stored in `presets.ts`:
- **Figma Baseline** - Exact replication of Figma design (Node 239-29754)
- **First-Time Signup** - Welcome flow for new users
- **Cashback Redemption** - Unlock earned rewards flow
- **Monthly to Annual** - Upgrade existing members to annual billing
- **Standard to Premium** - Tier upgrade flow

Each preset demonstrates different layer combinations and tells a specific user story.

### Component Structure

```
components/
├── control-panel.tsx      # Left sidebar - configuration controls
├── mobile-canvas.tsx      # Center preview - renders configured bottom sheet
├── bottom-sheet.tsx       # Main bottom sheet component
└── layers/
    ├── content/          # Content layer components
    ├── excitement/       # Confetti and animations
    ├── plan/            # Plan and pricing info
    ├── urgency/         # Countdown timers
    └── payment/         # Payment method components
```

## Theming System

**Tier Themes** (`lib/theme.ts`):
- **Standard** - Purple gradient (#3D2863), bright lime accents
- **Premium** - Black gradient, tan/beige accents

**Touch Intensity** - Controls visual prominence:
- **High** - Full gradient backgrounds, bold animations (0.5s)
- **Medium** - Subtle backgrounds, moderate animations (0.3s)
- **Low** - White backgrounds, minimal animations (0.2s)

Theme combinations affect button styles, backgrounds, and animation timing.

## Type Safety

All configurations are fully typed in `types.ts`:
- `BottomSheetConfig` - Main config interface
- Layer-specific interfaces (e.g., `ContentLayerConfig`, `PlanLayerConfig`)
- Ensures valid combinations at compile-time

## Design Reference

- Figma file: [Plus QBR Stories](https://www.figma.com/design/b6TtqkH2DG0nD1tjMOeWwA/Plus-QBR-Stories)
- Baseline node: `239-29754` (use `mcp__figma__view_node` with `239:29754` format)

## Usage

1. Select a preset from the left control panel
2. Customize individual layers using the controls
3. Preview updates in real-time on the mobile canvas
4. Configuration state is logged for developers to extract

This allows rapid iteration on bottom sheet variations without deploying code changes.
