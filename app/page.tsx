"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Search, Sparkles, Zap, Box, Palette, Code, Star } from "lucide-react";
import ComponentCard from "@/components/shared/component-card";
import { getFeaturedComponents, getTrendingComponents, components } from "@/data/components";
import { categories } from "@/data/categories";

export default function HomePage() {
  const featured = getFeaturedComponents();
  const trending = getTrendingComponents();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[128px] animate-mesh" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[128px] animate-mesh" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[128px] animate-pulse-glow" />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>

        {/* Floating Code Snippets */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-32 left-[10%] hidden lg:block glass rounded-xl px-4 py-3 text-xs font-mono text-gray-400 shadow-xl"
        >
          <span className="text-violet-400">import</span> {"{"} Button {"}"} <span className="text-violet-400">from</span> <span className="text-emerald-400">&quot;nova-ui&quot;</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-40 right-[10%] hidden lg:block glass rounded-xl px-4 py-3 text-xs font-mono text-gray-400 shadow-xl"
        >
          <span className="text-cyan-400">&lt;GlassCard&gt;</span><span className="text-gray-500">...</span><span className="text-cyan-400">&lt;/GlassCard&gt;</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute top-60 right-[15%] hidden lg:block glass rounded-xl px-4 py-3 text-xs font-mono text-gray-400 shadow-xl"
        >
          <span className="text-amber-400">whileHover</span>={"{"}{"{ "}scale: 1.05 {"}"}{"}"} 
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>40+ Premium React Components</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Build stunning UIs
            <br />
            <span className="gradient-text">with Nova UI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            A premium collection of beautifully crafted React components.
            Preview, customize, and copy — ready for your next project.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link href="/components">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124, 58, 237, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/25 flex items-center gap-2 text-lg"
              >
                Browse Components
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/docs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg"
              >
                Documentation
              </motion.button>
            </Link>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 max-w-lg mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl opacity-20 blur group-hover:opacity-40 transition-opacity" />
              <div className="relative flex items-center bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
                <Search className="w-5 h-5 text-gray-500 ml-4" />
                <input
                  readOnly
                  placeholder="Search components... ⌘K"
                  className="w-full bg-transparent px-4 py-3.5 text-white placeholder-gray-500 outline-none cursor-pointer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { value: "40+", label: "Components", icon: <Box className="w-5 h-5" /> },
              { value: "12", label: "Categories", icon: <Palette className="w-5 h-5" /> },
              { value: "100%", label: "TypeScript", icon: <Zap className="w-5 h-5" /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 text-violet-400 mb-2">
                  {stat.icon}
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white flex items-center gap-3"
              >
                <Star className="w-6 h-6 text-violet-400" />
                Featured Components
              </motion.h2>
              <p className="text-gray-500 mt-2">Hand-picked components for your next project.</p>
            </div>
            <Link href="/components" className="text-violet-400 text-sm font-medium hover:text-violet-300 flex items-center gap-1 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featured.slice(0, 8).map((comp, i) => (
              <motion.div
                key={comp.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <ComponentCard component={comp} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/[0.03] to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Browse by Category</h2>
            <p className="text-gray-500 mt-2">Find the perfect component for your needs.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={`/components?category=${cat.slug}`}>
                  <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all cursor-pointer group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3"
                      style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                    >
                      ✦
                    </div>
                    <h3 className="text-white font-semibold text-sm group-hover:text-violet-400 transition-colors">{cat.name}</h3>
                    <p className="text-gray-600 text-xs mt-1">{cat.count} components</p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Zap className="w-6 h-6 text-amber-400" />
                Trending
              </h2>
              <p className="text-gray-500 mt-2">Most popular components this week.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {trending.slice(0, 8).map((comp, i) => (
              <motion.div
                key={comp.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <ComponentCard component={comp} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="relative z-10 text-center py-16 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to build something amazing?
              </h2>
              <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                Start using Nova UI components in your project today. Copy, customize, and ship.
              </p>
              <div className="flex items-center justify-center gap-4 mt-8">
                <Link href="/components">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl"
                  >
                    Get Started
                  </motion.button>
                </Link>
                <Link href="/docs">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20"
                  >
                    Read Docs
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
