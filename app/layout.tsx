import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work Prototypes",
  description: "A collection of interactive prototypes for sharing with colleagues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="text-lg font-semibold hover:text-primary transition-colors">
              Work Prototypes
            </Link>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
