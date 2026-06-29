"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { Search, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import ComponentCard from "@/components/shared/component-card";
import { components, searchComponents } from "@/data/components";
import { categories } from "@/data/categories";
import type { SortOption } from "@/types";

function ComponentsPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>("popular");

  const filtered = useMemo(() => {
    let result = query ? searchComponents(query) : [...components];

    if (selectedCategory !== "all") {
      result = result.filter((c) => c.category === selectedCategory);
    }

    if (sortBy === "alphabetical") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else {
      result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    }

    return result;
  }, [query, selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-white">Components</h1>
        <p className="text-gray-500 mt-2">
          Browse {components.length} beautifully crafted components across {categories.length} categories.
        </p>
      </motion.div>

      {/* Filters Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col lg:flex-row gap-4 mb-8"
      >
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search components..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-gray-500" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-violet-500/50 cursor-pointer appearance-none"
          >
            <option value="popular" className="bg-gray-900">Popular</option>
            <option value="newest" className="bg-gray-900">Newest</option>
            <option value="alphabetical" className="bg-gray-900">A-Z</option>
          </select>
        </div>
      </motion.div>

      {/* Category Pills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            selectedCategory === "all"
              ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
              : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
          }`}
        >
          All ({components.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setSelectedCategory(cat.slug)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedCategory === cat.slug
                ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat.name} ({cat.count})
          </button>
        ))}
      </motion.div>

      {/* Results */}
      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-gray-500 text-lg">No components found</p>
          <p className="text-gray-600 text-sm mt-2">Try adjusting your search or filters.</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((comp, i) => (
            <motion.div
              key={comp.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <ComponentCard component={comp} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Result count */}
      <div className="mt-8 text-center text-gray-600 text-sm">
        Showing {filtered.length} of {components.length} components
      </div>
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-500">
        Loading components...
      </div>
    }>
      <ComponentsPageContent />
    </Suspense>
  );
}
