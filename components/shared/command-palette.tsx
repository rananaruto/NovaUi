"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Search, ArrowRight } from "lucide-react";
import { components as componentData } from "@/data/components";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (open) setQuery("");
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) {
      return [
        { type: "page" as const, icon: "🏠", label: "Home", href: "/" },
        { type: "page" as const, icon: "📦", label: "Components", href: "/components" },
        { type: "page" as const, icon: "📖", label: "Documentation", href: "/docs" },
      ];
    }

    const q = query.toLowerCase();
    const componentResults = componentData
      .filter((c) => c.name.toLowerCase().includes(q) || c.tags.some((t) => t.includes(q)))
      .slice(0, 5)
      .map((c) => ({
        type: "component" as const,
        icon: "📦",
        label: c.name,
        href: `/components/${c.slug}`,
        subtitle: c.category,
      }));

    return componentResults;
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-xl z-[101] px-4"
          >
            <div className="bg-gray-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search components, templates, docs..."
                  className="flex-1 bg-transparent text-white text-base placeholder-gray-500 outline-none"
                />
                <kbd className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-500 border border-white/10">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto p-2">
                {!query.trim() && (
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wider px-3 py-2">
                    Quick Navigation
                  </p>
                )}
                {query.trim() && results.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-sm">No results found for &ldquo;{query}&rdquo;</p>
                    <p className="text-gray-600 text-xs mt-1">Try a different search term</p>
                  </div>
                )}
                {results.map((result, i) => (
                  <motion.button
                    key={`${result.type}-${result.label}-${i}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    onClick={() => {
                      router.push(result.href);
                      onClose();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-lg">{result.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{result.label}</p>
                      {"subtitle" in result && result.subtitle && (
                        <p className="text-gray-500 text-xs capitalize">{result.subtitle}</p>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-white/5 px-5 py-3 flex items-center gap-4 text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <kbd className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10">↑↓</kbd> Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10">↵</kbd> Open
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10">esc</kbd> Close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
