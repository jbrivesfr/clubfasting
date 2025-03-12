"use client";

import { useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <body className="antialiased flex flex-col min-h-screen" suppressHydrationWarning>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </body>
  );
}
