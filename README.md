# Work Prototypes

A collection of interactive prototypes for sharing with colleagues. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
work-prototypes/
├── app/
│   ├── layout.tsx              # Root layout with navigation
│   ├── page.tsx                # Home page (prototype gallery)
│   ├── globals.css             # Global styles and Tailwind
│   └── prototypes/
│       └── example-prototype/
│           ├── page.tsx        # Prototype main page
│           ├── components/     # Prototype-specific components
│           ├── lib/            # Prototype-specific utilities
│           └── mock-data.ts    # Mock data for the prototype
├── components/                 # Shared components (optional)
├── lib/                        # Shared utilities
│   └── utils.ts               # cn() utility for class merging
└── public/                     # Static assets
```

## Creating a New Prototype

1. Create a new folder in `app/prototypes/`:
```bash
mkdir -p app/prototypes/my-prototype/components
mkdir -p app/prototypes/my-prototype/lib
```

2. Create `page.tsx` in your prototype folder:
```tsx
"use client";

export default function MyPrototype() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold">My Prototype</h1>
      {/* Your prototype code */}
    </div>
  );
}
```

3. Add mock data if needed (`mock-data.ts`)

4. Create local components in the `components/` folder

5. Update `app/page.tsx` to add your prototype to the gallery:
```tsx
const prototypes: Prototype[] = [
  // ... existing prototypes
  {
    id: "my-prototype",
    title: "My Prototype",
    description: "Description of what this prototype demonstrates",
    tags: ["tag1", "tag2"],
  },
];
```

## Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and interactions
- **shadcn/ui** - Customizable component library

## Adding shadcn/ui Components

To add a shadcn/ui component:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

Components will be added to the `components/ui/` directory.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Environment Variables

If you need environment variables:
1. Create `.env.local` for local development
2. Add variables in Vercel dashboard under Project Settings → Environment Variables

## Styling Guidelines

- **Global styles**: Use for shared design tokens, themes, base styles
- **Local styles**: Keep prototype-specific styling with the prototype
- **Tailwind utilities**: Primary styling method
- **CSS variables**: For theming (already configured in `globals.css`)
- **Framer Motion**: For animations and interactions

## Tips

- Keep prototypes isolated - avoid dependencies between them
- Use mock data liberally - no need for real APIs
- Focus on client-side interactions and behavior
- Leverage Framer Motion for delightful animations
- Use TypeScript for better DX and fewer bugs
- Each prototype can have its own styling approach

## URLs

- Development: `http://localhost:3000`
- Production: `https://your-project.vercel.app`
- Prototype URLs: `/prototypes/your-prototype-name`
