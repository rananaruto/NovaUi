"use client";

import Link from "next/link";
import { motion } from "motion/react";

const footerLinks = [
  {
    title: "Product",
    items: [
      { label: "Components", href: "/components" },
      { label: "Templates", href: "/templates" },
      { label: "Animations", href: "/animations" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Getting Started", href: "/docs" },
      { label: "Customization", href: "/docs" },
      { label: "Theming", href: "/docs" },
      { label: "Accessibility", href: "/docs" },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "GitHub", href: "https://github.com" },
      { label: "Discord", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/20">
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold text-white">
                Nova <span className="text-violet-400">UI</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              A premium collection of beautifully crafted React components for modern web applications.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {["𝕏", "◆", "◉"].map((icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all text-sm"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.items.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-violet-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold">Stay up to date</h4>
              <p className="text-gray-500 text-sm mt-1">Get notified about new components and updates.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 bg-white/5 border border-white/10 rounded-l-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50"
              />
              <button className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold rounded-r-xl hover:from-violet-500 hover:to-indigo-500 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Nova UI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-400 transition-colors">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
