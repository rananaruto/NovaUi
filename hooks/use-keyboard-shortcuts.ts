"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useThemeStore } from "./use-theme";

interface ShortcutHandlers {
  onOpenSearch?: () => void;
}

export function useKeyboardShortcuts({ onOpenSearch }: ShortcutHandlers = {}) {
  const router = useRouter();
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenSearch?.();
      }

      if ((e.metaKey || e.ctrlKey) && e.key === "d") {
        e.preventDefault();
        toggleTheme();
      }

      if ((e.metaKey || e.ctrlKey) && e.key === "1") {
        e.preventDefault();
        router.push("/");
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "2") {
        e.preventDefault();
        router.push("/components");
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "3") {
        e.preventDefault();
        router.push("/templates");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenSearch, toggleTheme, router]);
}
