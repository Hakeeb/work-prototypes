import Link from "next/link";

interface Prototype {
  id: string;
  title: string;
  description: string;
  tags?: string[];
}

// Add your prototypes here
const prototypes: Prototype[] = [
  {
    id: "example-prototype",
    title: "Example Prototype",
    description: "A template showing how to structure prototypes with components, animations, and mock data.",
    tags: ["example", "template"],
  },
  // Add more prototypes as you build them
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Prototype Gallery
          </h1>
          <p className="text-muted-foreground text-lg">
            Interactive prototypes showcasing client-side behavior, animations, and UI experiments.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {prototypes.map((prototype) => (
            <Link
              key={prototype.id}
              href={`/prototypes/${prototype.id}`}
              className="group block p-6 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-200 bg-card"
            >
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {prototype.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {prototype.description}
              </p>
              {prototype.tags && prototype.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {prototype.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>

        {prototypes.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg mb-2">No prototypes yet!</p>
            <p className="text-sm">
              Add your first prototype in{" "}
              <code className="px-2 py-1 bg-secondary rounded">
                app/prototypes/
              </code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
