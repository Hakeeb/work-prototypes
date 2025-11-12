"use client";

import { AnimatedCard } from "./components/animated-card";
import { mockData } from "./mock-data";

export default function ExamplePrototype() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Example Prototype
          </h1>
          <p className="text-muted-foreground text-lg">
            This is a template showing how to structure your prototypes.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {mockData.map((item, index) => (
            <AnimatedCard key={item.id} data={item} index={index} />
          ))}
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Prototype Structure</h2>
          <div className="bg-secondary/50 p-6 rounded-lg space-y-2 text-sm font-mono">
            <p>app/prototypes/example-prototype/</p>
            <p className="pl-4">├── page.tsx (main page)</p>
            <p className="pl-4">├── components/ (local components)</p>
            <p className="pl-8">└── animated-card.tsx</p>
            <p className="pl-4">├── lib/ (utils, helpers)</p>
            <p className="pl-4">└── mock-data.ts (mock data)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
