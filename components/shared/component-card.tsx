"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useFavoritesStore } from "@/hooks/use-favorites";
import type { ComponentItem } from "@/types";

interface ComponentCardProps {
  component: ComponentItem;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  const { toggleFavorite, favorites } = useFavoritesStore();
  const isFav = favorites.includes(component.slug);

  return (
    <Link href={`/components/${component.slug}`}>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
      >
        {/* Preview Area */}
        <div className="relative h-44 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center p-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.08),transparent_70%)]" />
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-white text-sm font-medium">
              {component.name}
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            {component.new && (
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                New
              </span>
            )}
            {component.trending && (
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full">
                Trending
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(component.slug);
            }}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
              isFav
                ? "bg-pink-500/20 text-pink-400"
                : "bg-white/5 text-gray-500 opacity-0 group-hover:opacity-100"
            }`}
          >
            <Heart className="w-4 h-4" fill={isFav ? "currentColor" : "none"} />
          </motion.button>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-sm">{component.name}</h3>
          <p className="text-gray-500 text-xs mt-1 line-clamp-2">{component.description}</p>
          <div className="flex items-center gap-2 mt-3">
            <span className="px-2 py-0.5 text-[10px] font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-md capitalize">
              {component.category}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
