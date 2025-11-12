# Work Prototypes - Claude Code Rules

## Project Context
This is a **work prototypes playground** for creating and sharing interactive demos with colleagues. The project is deployed to Vercel and focuses on client-side behavior, animations, and UI experiments using mock data.

## Tech Stack
- **Next.js 16** (App Router, Turbopack)
- **TypeScript** (strict mode enabled)
- **Tailwind CSS v4** (important: uses new syntax)
- **Framer Motion** (for animations)
- **shadcn/ui** (component library)
- **React 19**
- **Vercel** (deployment platform)

## Architecture

### Prototype Structure
Each prototype lives in its own isolated folder:
```
app/prototypes/[prototype-name]/
├── page.tsx           # Main page (must use "use client")
├── components/        # Local components only for this prototype
├── lib/              # Local utilities only for this prototype
└── mock-data.ts      # Mock data (no real APIs)
```

### Gallery System
The home page (`app/page.tsx`) displays all prototypes. **You MUST update this file** when creating a new prototype:

```typescript
const prototypes: Prototype[] = [
  {
    id: "prototype-folder-name",
    title: "Display Title",
    description: "What this prototype demonstrates",
    tags: ["tag1", "tag2"],
  },
  // ... add new prototypes here
];
```

## Critical Rules

### 1. Prototype Isolation
- ✅ Each prototype is completely self-contained
- ✅ Components, styles, and data live within the prototype folder
- ✅ No shared state or dependencies between prototypes
- ❌ Don't create shared utilities unless truly global

### 2. Always Update the Gallery
**IMPORTANT**: When creating a new prototype, you MUST:
1. Create the prototype folder and files
2. Update `app/page.tsx` to add it to the gallery array
3. This is NOT optional - prototypes won't be discoverable otherwise

### 3. Client-Side Focus
- All prototypes use `"use client"` directive
- No server-side data fetching needed
- Use mock data liberally
- Focus on interactivity and animations

### 4. Tailwind CSS v4 Syntax
**CRITICAL**: We're using Tailwind v4, which has different syntax:

❌ **OLD (v3) - DON'T USE:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

✅ **NEW (v4) - USE THIS:**
```css
@import "tailwindcss";

@theme {
  --color-primary: #171717;
  /* ... */
}
```

- CSS variables use `--color-*` format
- PostCSS plugin is `@tailwindcss/postcss` (not `tailwindcss`)
- Config file is minimal (just content paths)

## Workflow for Creating Prototypes

### Step 1: Create Structure
```bash
mkdir -p app/prototypes/[name]/components
mkdir -p app/prototypes/[name]/lib
```

### Step 2: Create page.tsx
```typescript
"use client";

export default function PrototypeName() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Prototype Title</h1>
      {/* Content */}
    </div>
  );
}
```

### Step 3: Add Mock Data (if needed)
```typescript
// app/prototypes/[name]/mock-data.ts
export interface DataItem {
  id: string;
  // ... fields
}

export const mockData: DataItem[] = [
  // ... data
];
```

### Step 4: Create Local Components
```typescript
// app/prototypes/[name]/components/feature.tsx
"use client";

import { motion } from "framer-motion";

export function Feature() {
  return <motion.div>{/* ... */}</motion.div>;
}
```

### Step 5: Update Gallery
```typescript
// app/page.tsx
const prototypes: Prototype[] = [
  // ... existing prototypes
  {
    id: "new-prototype",  // Must match folder name
    title: "New Prototype",
    description: "Clear description of what this demonstrates",
    tags: ["animation", "interaction"],
  },
];
```

## Code Patterns

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

### Using CSS Variables (Tailwind v4)
```typescript
// In JSX
<div className="bg-primary text-primary-foreground" />

// Custom colors
<div style={{ backgroundColor: "var(--color-primary)" }} />
```

### TypeScript Types
```typescript
// Always define prop interfaces
interface ComponentProps {
  data: DataItem[];
  onSelect?: (id: string) => void;
}

export function Component({ data, onSelect }: ComponentProps) {
  // ...
}
```

## Common Tasks

### Adding shadcn/ui Components
When you need a shadcn component:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```
Components go to `components/ui/`

### Using Shared Utilities
The `cn()` utility is available for className merging:
```typescript
import { cn } from "@/lib/utils";

<div className={cn("base-class", conditional && "conditional-class")} />
```

### Responsive Design
Always consider mobile:
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* responsive grid */}
</div>
```

## Documentation Policy - CRITICAL

### Keep Documentation Minimal and Consolidated
The project should remain clean and self-documenting. **Avoid documentation sprawl.**

### NEVER Create
- ❌ Separate .md files for individual prototypes
- ❌ docs/ folders or documentation directories
- ❌ Extensive inline documentation for obvious code
- ❌ README updates listing prototypes or features
- ❌ CHANGELOG or similar tracking files
- ❌ API documentation (there are no APIs)

### How to Document Prototypes
Each prototype is documented in **exactly 3 places**:

1. **Gallery Entry** (`app/page.tsx`) - One clear sentence
   ```typescript
   {
     id: "particle-field",
     title: "Particle Field",
     description: "Interactive particle system with mouse tracking and physics",
     tags: ["animation", "canvas"]
   }
   ```

2. **Page Header** (in the prototype's `page.tsx`) - Self-explanatory title
   ```typescript
   <h1>Particle Field</h1>
   <p>Move your mouse to interact with particles</p>
   ```

3. **Code Comments** - Only for non-obvious logic
   ```typescript
   // Calculate velocity using Verlet integration for smooth physics
   const velocity = position - previousPosition;
   ```

### Self-Documenting Code Principles
- Use descriptive variable/function names instead of comments
- TypeScript interfaces document data structures
- Clear component names eliminate need for documentation
- One-line comments for complex algorithms only

### README.md
- **Only for setup/deployment instructions**
- Never list prototypes (the gallery page does this)
- Never document features (code should be clear)
- Only update if core project structure changes

### Example: Good vs Bad

✅ **GOOD:**
```typescript
// In gallery
description: "Interactive particle system with mouse tracking"

// In code - self-documenting
interface Particle {
  position: Vector2D;
  velocity: Vector2D;
  mass: number;
}
```

❌ **BAD:**
```
Creating file: docs/particle-field.md
# Particle Field Prototype

## Overview
This prototype demonstrates...

## Features
- Feature 1
- Feature 2

## Usage Instructions...
```

## What NOT to Do

❌ Don't create API routes (use mock data)
❌ Don't add databases or auth
❌ Don't use Tailwind v3 syntax
❌ Don't create global state management
❌ Don't forget to update the gallery page
❌ Don't make prototypes depend on each other
❌ Don't use real API calls
❌ Don't add heavy dependencies without discussion
❌ Don't create separate documentation files
❌ Don't write extensive README updates
❌ Don't document obvious code with comments

## File Naming Conventions
- **Components**: `PascalCase.tsx` (e.g., `AnimatedCard.tsx`)
- **Utilities**: `kebab-case.ts` (e.g., `format-date.ts`)
- **Mock data**: `mock-data.ts` or descriptive like `user-data.ts`
- **Prototype folders**: `kebab-case` (e.g., `particle-field`)

## Git Workflow
The project is git-initialized with proper .gitignore:
- Node modules excluded
- .next and build folders excluded
- .env files excluded
- OS files (.DS_Store) excluded

## Deployment - Fully Automated

### Current Setup
- **GitHub Repo**: https://github.com/Hakeeb/work-prototypes
- **Vercel**: Auto-deploys on every push to main branch
- **Live Site**: Updates automatically within ~30 seconds of push
- **Platform**: Vercel (zero-config for Next.js)

### Deployment Workflow (Super Simple)
When you complete a prototype:

1. **Build locally** - Create the prototype
2. **Update gallery** - Add to `app/page.tsx` array
3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add [prototype-name]"
   git push
   ```
4. **Done!** - Vercel deploys automatically

### Sharing with Colleagues
- Production URL: `https://work-prototypes-[hash].vercel.app`
- Prototype URL: `https://work-prototypes-[hash].vercel.app/prototypes/[name]`
- Just copy and share - no additional steps needed

### Key Points
- Every push to main = automatic production deployment
- No manual deploy commands needed
- Preview deployments available for other branches
- All client-side, no environment variables needed by default

## When Starting a New Session

1. **Check existing prototypes**: Look at `app/page.tsx` to see what exists
2. **Understand the structure**: Review `app/prototypes/` folder
3. **Read requirements**: Ask clarifying questions about the prototype goals
4. **Plan the approach**: Think through components, animations, interactions
5. **Build iteratively**: Start with structure, then add interactivity
6. **Test responsiveness**: Consider mobile and desktop views
7. **Update the gallery**: Don't forget this critical step

## Tips for Great Prototypes

- **Focus on delight**: Use smooth animations and transitions
- **Keep it simple**: Prototypes should be easy to understand
- **Use mock data creatively**: Make it realistic and interesting
- **Think about interactions**: Hover states, click feedback, etc.
- **Consider performance**: Optimize animations, avoid unnecessary re-renders
- **Make it shareable**: Prototypes should work standalone via URL

## Development Commands
```bash
npm run dev    # Start dev server (http://localhost:3000)
npm run build  # Build for production
npm run start  # Run production build locally
npm run lint   # Run Next.js linter
```

## Questions to Ask When Building

1. What is the core interaction or behavior to demonstrate?
2. What mock data makes sense for this prototype?
3. What animations would enhance the experience?
4. Is this responsive? Does it work on mobile?
5. Have I updated the gallery page?
6. Is the code clean and well-typed?

## Remember

This is a **prototypes playground** - the goal is to quickly iterate on ideas and share them with colleagues. Prioritize:
- **Speed of iteration** over perfect architecture
- **Visual polish** over complex features
- **Client-side demos** over full-stack apps
- **Delightful UX** over comprehensive functionality

Keep prototypes focused, beautiful, and fun to interact with.
