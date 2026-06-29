"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import CommandPalette from "@/components/shared/command-palette";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  useKeyboardShortcuts({
    onOpenSearch: () => setSearchOpen(true),
  });

  return (
    <ThemeProvider>
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <CommandPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
