# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Work Prototypes is a Next.js-based playground for creating and sharing interactive UI prototypes with colleagues. The project emphasizes rapid iteration, client-side interactions, and visual polish. All prototypes are deployed automatically to Vercel on push to main.

**Tech Stack:**
- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4
- Framer Motion
- shadcn/ui components

## Development Commands

```bash
npm run dev    # Start dev server at http://localhost:3000
npm run build  # Build for production
npm run start  # Run production build locally
npm run lint   # Run Next.js linter
```

## Architecture

### Prototype Isolation Pattern

Each prototype is **completely self-contained** in its own folder under `app/prototypes/[prototype-name]/`:

```
app/prototypes/[prototype-name]/
├── page.tsx           # Main page component (must use "use client")
├── components/        # Components used ONLY by this prototype
├── lib/              # Utilities/helpers ONLY for this prototype
├── types.ts          # TypeScript types for this prototype
├── mock-data.ts      # Mock data (no real APIs)
└── presets.ts        # Configuration presets (if applicable)
```

**Key principle:** Prototypes have zero dependencies on each other. Components, types, styles, and data live within the prototype folder.

### Gallery System (CRITICAL)

The home page (`app/page.tsx`) contains a `prototypes` array that powers the gallery. **You MUST update this array** when creating a new prototype:

```typescript
const prototypes: Prototype[] = [
  {
    id: "prototype-folder-name",  // Must match folder name exactly
    title: "Display Title",
    description: "Clear one-sentence description of what this demonstrates",
    tags: ["tag1", "tag2"],
  },
];
```

**Without this step, the prototype won't be discoverable.**

### Layered Architecture Pattern

The Plus Bottom Sheet Explorer demonstrates a layered architecture pattern useful for complex configurable UIs:

- **Layer separation**: Different concerns (content, payment, urgency, theming) are isolated in separate components
- **Configuration-driven**: A single config object drives all layer rendering
- **Type safety**: Comprehensive TypeScript types for all layer configs
- **Preset system**: Pre-configured use cases stored as presets for easy switching

This pattern works well for prototypes that need to demonstrate multiple variations or configurations.

## Tailwind CSS v4 Critical Syntax

**IMPORTANT:** This project uses Tailwind v4, which has different syntax from v3:

### CSS Files (globals.css)

❌ **DON'T USE (v3 syntax):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

✅ **USE THIS (v4 syntax):**
```css
@import "tailwindcss";

@theme {
  --color-primary: #171717;
  --color-secondary: #f5f5f5;
  /* CSS variables for theme customization */
}
```

### Configuration (tailwind.config.ts)

Config is minimal - just content paths:

```typescript
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
```

### PostCSS

Uses `@tailwindcss/postcss` (not the old `tailwindcss` plugin).

## Common Patterns

### Client-Side Components

All prototypes use client-side rendering:

```typescript
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MyPrototype() {
  const [state, setState] = useState(initialValue);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Content */}
    </div>
  );
}
```

### Animation with Framer Motion

```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  whileHover={{ scale: 1.05 }}
>
  {/* content */}
</motion.div>
```

### TypeScript Types

Always define interfaces for props and data:

```typescript
interface ComponentProps {
  config: Config;
  onConfigChange: (config: Config) => void;
  className?: string;
}

export function Component({ config, onConfigChange, className }: ComponentProps) {
  // ...
}
```

### Mock Data Structure

```typescript
// app/prototypes/[name]/mock-data.ts
export interface DataItem {
  id: string;
  title: string;
  // ... fields
}

export const mockData: DataItem[] = [
  { id: "1", title: "Example", /* ... */ },
  // ...
];
```

## File Naming Conventions

- **Components:** `PascalCase.tsx` (e.g., `AnimatedCard.tsx`)
- **Utilities:** `kebab-case.ts` (e.g., `format-date.ts`)
- **Mock data:** `mock-data.ts` or descriptive like `user-data.ts`
- **Prototype folders:** `kebab-case` (e.g., `plus-bottom-sheet-explorer`)

## Adding shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# Components are added to components/ui/
```

## Shared Utilities

The `cn()` utility from `lib/utils.ts` merges Tailwind classes:

```typescript
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class")} />
```

## Figma MCP Setup & Troubleshooting

This project uses the **official Figma MCP server** to fetch designs and generate code from Figma files.

### Initial Setup

```bash
# Add the official remote Figma MCP server
claude mcp add --transport http figma https://mcp.figma.com/mcp

# Restart Claude Code, then authenticate
# Type /mcp → select "figma" → Authenticate
# This opens your browser for OAuth - click "Allow Access"
```

### Common Issues: SSL Certificate Errors

**Symptoms:**
- "Connection closed" errors when using Figma MCP tools
- `/mcp` shows "✗ Failed to connect" for figma
- Authentication fails with SSL errors

**Cause:** Corporate VPNs (like Zscaler) perform SSL inspection, replacing Figma's certificates with their own. Node.js rejects these as invalid.

**Quick Fix:**

```bash
# Exit Claude Code, then start with SSL verification disabled
NODE_TLS_REJECT_UNAUTHORIZED=0 claude

# Or add to ~/.zshrc for persistence (remove after authenticating):
export NODE_TLS_REJECT_UNAUTHORIZED=0
```

**Verification:**

```bash
# Check connection status
claude mcp list
# Should show: figma: https://mcp.figma.com/mcp (HTTP) - ✓ Connected
```

**Important:**
- Authentication is **one-time** (OAuth tokens persist globally)
- Each Claude Code session needs the env var if SSL issues persist
- Only use `NODE_TLS_REJECT_UNAUTHORIZED=0` when needed - it disables SSL security

### Using Figma MCP

Once connected, you can:
- Fetch design screenshots with node URLs
- Get detailed design specs (colors, typography, spacing, measurements)
- Extract component hierarchies and variable definitions
- Generate code from Figma frames

Simply paste Figma links (e.g., `https://figma.com/design/FILE_KEY/...?node-id=X-Y`) in your prompts.

## Documentation Policy

**Keep documentation minimal and close to the code.** Documentation should live with what it documents.

### For Complex Prototypes

Include a succinct `README.md` in the prototype folder:
- What problem/concept the prototype explores
- Key architectural decisions (e.g., "Uses layered architecture to separate concerns")
- Non-obvious setup or usage notes
- Links to related Figma files or design specs

**Keep it minimal:** ≤100 lines, focus on "why" not "what" (code shows the "what"), no boilerplate sections.

### For Simple Prototypes

Skip the README - the code and gallery description are sufficient.

### All Prototypes

Document in these places:
1. **Gallery entry** in `app/page.tsx` - one clear sentence
2. **Page header** in the prototype's `page.tsx` - self-explanatory title
3. **Code comments** - only for complex/non-obvious logic
4. **README.md** (optional) - only if architecture/decisions need explanation

Use self-documenting code: descriptive names, TypeScript interfaces, and clear component structure eliminate most documentation needs.

## Deployment

**Fully automated via Vercel:**
- GitHub Repo: https://github.com/Hakeeb/work-prototypes
- Auto-deploys on every push to main branch
- Live within ~30 seconds

**Workflow:**
1. Build the prototype
2. Update gallery in `app/page.tsx`
3. Commit and push
4. Done - Vercel handles deployment

No manual deploy commands needed.

## Creating a New Prototype

1. **Create folder structure:**
   ```bash
   mkdir -p app/prototypes/[name]/components
   mkdir -p app/prototypes/[name]/lib
   ```

2. **Create `page.tsx`:**
   ```typescript
   "use client";

   export default function PrototypeName() {
     return (
       <div className="container mx-auto px-4 py-12">
         <h1 className="text-4xl font-bold">Prototype Title</h1>
         {/* Content */}
       </div>
     );
   }
   ```

3. **Add to gallery** in `app/page.tsx` (CRITICAL - don't skip this)

4. **Create components** in `components/` folder

5. **Add mock data** if needed in `mock-data.ts`

## Project Philosophy

This is a **prototypes playground** optimized for:
- **Speed of iteration** over perfect architecture
- **Visual polish** over complex features
- **Client-side demos** over full-stack apps
- **Delightful UX** over comprehensive functionality

Keep prototypes focused, beautiful, and fun to interact with. Use mock data liberally - no need for real APIs.

## Critical Rules

1. ✅ Each prototype is completely self-contained
2. ✅ **Always update `app/page.tsx` when creating a prototype**
3. ✅ Use Tailwind v4 syntax (`@import "tailwindcss"`)
4. ✅ All prototypes use `"use client"` directive
5. ❌ Don't create shared utilities unless truly global
6. ❌ Don't make prototypes depend on each other
7. ❌ Don't use Tailwind v3 syntax
8. ❌ Don't create separate documentation files for prototypes
