"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Zap, MousePointerClick, Layers, Wind, Sparkles } from "lucide-react";
import CodeBlock from "@/components/shared/code-block";

const animations = [
  {
    name: "Hover Scale",
    category: "Hover Effects",
    description: "Smooth scale animation on hover with spring physics.",
    demo: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className="w-32 h-32 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-semibold cursor-pointer shadow-lg shadow-violet-500/25"
      >
        Hover Me
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ scale: 1.1, rotate: 2 }}
  whileTap={{ scale: 0.95 }}
  className="w-32 h-32 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl"
>
  Hover Me
</motion.div>`,
  },
  {
    name: "Glass Morph",
    category: "Glass Effects",
    description: "Glassmorphism card with backdrop blur and border glow.",
    demo: (
      <motion.div
        whileHover={{ y: -5, borderColor: "rgba(124,58,237,0.5)" }}
        className="w-48 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col justify-center cursor-pointer"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 mb-2" />
        <div className="w-24 h-2 bg-white/20 rounded mb-1" />
        <div className="w-16 h-2 bg-white/10 rounded" />
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ y: -5, borderColor: "rgba(124,58,237,0.5)" }}
  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4"
>
  Glass Content
</motion.div>`,
  },
  {
    name: "Stagger Children",
    category: "Page Transitions",
    description: "Staggered entrance animation for list items.",
    demo: (
      <div className="space-y-2">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, type: "spring" }}
            className="w-48 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center px-4"
          >
            <div className="w-4 h-4 rounded bg-violet-500/30 mr-3" />
            <div className="w-20 h-2 bg-white/20 rounded" />
          </motion.div>
        ))}
      </div>
    ),
    code: `{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: i * 0.15, type: "spring" }}
  >
    {item}
  </motion.div>
))}`,
  },
  {
    name: "Pulse Glow",
    category: "Hover Effects",
    description: "A pulsating glow effect for attention-grabbing elements.",
    demo: (
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(124,58,237,0.3)",
            "0 0 40px rgba(124,58,237,0.6)",
            "0 0 20px rgba(124,58,237,0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-32 h-32 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-semibold"
      >
        Glow
      </motion.div>
    ),
    code: `<motion.div
  animate={{
    boxShadow: [
      "0 0 20px rgba(124,58,237,0.3)",
      "0 0 40px rgba(124,58,237,0.6)",
      "0 0 20px rgba(124,58,237,0.3)",
    ],
  }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Glow
</motion.div>`,
  },
  {
    name: "Rotate 3D",
    category: "Hover Effects",
    description: "3D rotation effect on hover using perspective.",
    demo: (
      <motion.div
        whileHover={{ rotateY: 15, rotateX: -10 }}
        style={{ perspective: 500 }}
        className="w-40 h-28 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-center cursor-pointer"
      >
        <div className="w-8 h-1 bg-violet-500 rounded mb-2" />
        <div className="w-24 h-1 bg-white/20 rounded mb-1" />
        <div className="w-16 h-1 bg-white/10 rounded" />
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ rotateY: 15, rotateX: -10 }}
  style={{ perspective: 500 }}
  className="bg-white/5 border border-white/10 rounded-2xl"
>
  3D Card
</motion.div>`,
  },
  {
    name: "Floating Animation",
    category: "Parallax",
    description: "Gentle floating animation for decorative elements.",
    demo: (
      <div className="relative w-48 h-32">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2 left-4 w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-6 right-4 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30"
        />
      </div>
    ),
    code: `<motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Floating Element
</motion.div>`,
  },
  {
    name: "Gradient Border",
    category: "Glass Effects",
    description: "Animated rotating gradient border effect.",
    demo: (
      <div className="relative p-[2px] rounded-2xl overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-indigo-600"
        />
        <div className="relative bg-gray-900 rounded-[14px] px-8 py-4 text-white font-semibold">
          Animated Border
        </div>
      </div>
    ),
    code: `<div className="relative p-[2px] rounded-2xl overflow-hidden">
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-indigo-600"
  />
  <div className="relative bg-gray-900 rounded-[14px] px-8 py-4">
    Animated Border
  </div>
</div>`,
  },
  {
    name: "Slide In Up",
    category: "Page Transitions",
    description: "Element slides up and fades in on scroll.",
    demo: (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="w-48 bg-white/5 border border-white/10 rounded-2xl p-4"
      >
        <div className="w-full h-16 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-xl mb-3" />
        <div className="w-3/4 h-2 bg-white/20 rounded mb-1" />
        <div className="w-1/2 h-2 bg-white/10 rounded" />
      </motion.div>
    ),
    code: `<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", damping: 20 }}
>
  Slide Up Content
</motion.div>`,
  },
];

export default function AnimationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCodeFor, setShowCodeFor] = useState<string | null>(null);

  const animationCategories = ["all", ...new Set(animations.map((a) => a.category))];
  const filtered = selectedCategory === "all"
    ? animations
    : animations.filter((a) => a.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-white flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-amber-400" />
          Animations
        </h1>
        <p className="text-gray-500 mt-2">
          Interactive animation showcases with live demos and ready-to-copy code.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {animationCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all capitalize ${
              selectedCategory === cat
                ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((anim, i) => (
          <motion.div
            key={anim.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/20 transition-all">
              {/* Demo */}
              <div className="p-8 flex items-center justify-center min-h-[200px] bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.05),transparent_70%)]">
                {anim.demo}
              </div>

              {/* Info */}
              <div className="border-t border-white/10 p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">{anim.name}</h3>
                  <span className="px-2 py-0.5 text-[10px] font-medium bg-white/5 text-gray-400 border border-white/10 rounded-md">
                    {anim.category}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-3">{anim.description}</p>
                <button
                  onClick={() => setShowCodeFor(showCodeFor === anim.name ? null : anim.name)}
                  className="flex items-center gap-2 text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  {showCodeFor === anim.name ? "Hide Code" : "View Code"}
                </button>
              </div>

              {/* Code */}
              {showCodeFor === anim.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="border-t border-white/10"
                >
                  <div className="p-4">
                    <CodeBlock code={anim.code} language="tsx" />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
