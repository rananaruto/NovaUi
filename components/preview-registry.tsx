"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Copy, Search, HelpCircle } from "lucide-react";

// ==================== BUTTONS ====================

export function GradientButton({
  children = "Click Me",
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
}: any) {
  const variants: any = {
    primary: "from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500",
    secondary: "from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500",
    danger: "from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500",
  };

  const sizes: any = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124, 58, 237, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      className={`bg-gradient-to-r ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} rounded-xl font-semibold text-white shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}

export function GlassButton({
  children = "Glass Button",
  variant = "light",
  size = "md",
  onClick,
}: any) {
  const variants: any = {
    light: "bg-white/10 border-white/20 text-white hover:bg-white/20",
    dark: "bg-black/20 border-white/10 text-white hover:bg-black/30",
    colored: "bg-violet-500/20 border-violet-400/30 text-violet-100 hover:bg-violet-500/30",
  };

  const sizes: any = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${variants[variant] || variants.light} ${sizes[size] || sizes.md} rounded-xl border backdrop-blur-xl font-medium shadow-lg transition-all duration-300`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function AnimatedBorderButton({ children = "Hover Me", onClick }: any) {
  const [style, setStyle] = useState<"rotating" | "chase" | "pulse" | "draw">("rotating");
  const [labelText, setLabelText] = useState(children);
  const [isCopied, setIsCopied] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [ripples, setRipples] = useState<{ id: number; size: number; x: number; y: number }[]>([]);

  useEffect(() => {
    setLabelText(children);
  }, [children]);

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    setRipples((prev) => [...prev, { id: Date.now(), size, x, y }]);
    
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 300);
    onClick?.(e);
  };

  const copyCss = () => {
    const snippets: Record<string, string> = {
      rotating: `/* Rotating Gradient Border */
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.btn-wrapper {
  position: relative;
  padding: 3px;
  border-radius: 14px;
}

.btn-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: conic-gradient(from var(--angle), #06b6d4, #8b5cf6, #ec4899, #3b82f6, #06b6d4);
  animation: rotate-border 3.5s linear infinite;
  z-index: 0;
}

@keyframes rotate-border {
  to { --angle: 360deg; }
}

.btn-wrapper::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 11px;
  background: #fff;
  z-index: 1;
}

.your-button {
  position: relative;
  z-index: 2;
}`,
      chase: `/* Dashed Chase Border (SVG) */
.chase-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
}

.chase-svg rect {
  fill: none;
  stroke: url(#chase-grad);
  stroke-width: 2.5;
  stroke-dasharray: 14 10;
  animation: dash-chase 2.2s linear infinite;
}

@keyframes dash-chase {
  0%   { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -9999; }
}`,
      pulse: `/* Glowing Pulse Border */
.btn-wrapper {
  position: relative;
  padding: 3px;
  border-radius: 14px;
}

.btn-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2.5px solid #06b6d4;
  background: transparent;
  animation: pulse-glow 1.8s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow:
      0 0 10px 2px rgba(6,182,212,.6),
      0 0 22px 4px rgba(99,102,241,.3);
    border-color: #06b6d4;
  }
  50% {
    box-shadow:
      0 0 0 6px rgba(6,182,212,.08),
      0 0 20px 6px rgba(99,102,241,.7),
      0 0 40px 10px rgba(99,102,241,.25);
    border-color: #3b82f6;
  }
}`,
      draw: `/* Border Draw / Reveal (SVG) */
.draw-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
}

.draw-svg rect {
  fill: none;
  stroke: url(#draw-grad);
  stroke-width: 2.5;
  animation: draw-border 2.5s cubic-bezier(.4,0,.2,1) infinite;
}

@keyframes draw-border {
  0%   { stroke-dasharray: 0 9999; stroke-dashoffset: 0; opacity: 1; }
  70%  { stroke-dasharray: 9999 0; stroke-dashoffset: 0; opacity: 1; }
  85%  { stroke-dasharray: 9999 0; stroke-dashoffset: 0; opacity: 1; }
  100% { stroke-dasharray: 9999 0; stroke-dashoffset: -9999; opacity: 0; }
}`,
    };
    navigator.clipboard.writeText(snippets[style] || "");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 w-full max-w-sm ${isDark ? "bg-[#10101f] border-white/10 text-white" : "bg-white border-black/10 text-black"}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-sm font-bold">Animated Border Button</h4>
        <button 
          onClick={() => setIsDark(!isDark)}
          className="text-xs px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg"
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Stage */}
      <div className="flex items-center justify-center min-h-[100px] mb-6">
        <div className="relative inline-flex p-[3px] rounded-[14px] overflow-hidden">
          {/* Animated Borders */}
          {style === "rotating" && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
              className="absolute inset-0 bg-[conic-gradient(from_0deg,#06b6d4,#8b5cf6,#ec4899,#3b82f6,#06b6d4)]"
            />
          )}
          
          {style === "pulse" && (
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 10px 2px rgba(6,182,212,0.6), 0 0 22px 4px rgba(99,102,241,0.3)",
                  "0 0 0 6px rgba(6,182,212,0.08), 0 0 20px 6px rgba(99,102,241,0.7), 0 0 40px 10px rgba(99,102,241,0.25)",
                  "0 0 10px 2px rgba(6,182,212,0.6), 0 0 22px 4px rgba(99,102,241,0.3)",
                ],
                borderColor: ["#06b6d4", "#3b82f6", "#06b6d4"]
              }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="absolute inset-0 border-[2.5px] rounded-[14px]"
            />
          )}

          {style === "draw" && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <linearGradient id="draw-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4"/>
                  <stop offset="33%" stopColor="#8b5cf6"/>
                  <stop offset="66%" stopColor="#ec4899"/>
                  <stop offset="100%" stopColor="#3b82f6"/>
                </linearGradient>
              </defs>
              <rect
                width="100%"
                height="100%"
                rx="14"
                fill="none"
                stroke="url(#draw-grad)"
                strokeWidth="2.5"
                className="animate-[draw-border_2.5s_cubic-bezier(.4,0,.2,1)_infinite]"
              />
            </svg>
          )}

          {style === "chase" && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <linearGradient id="chase-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4"/>
                  <stop offset="50%" stopColor="#8b5cf6"/>
                  <stop offset="100%" stopColor="#ec4899"/>
                </linearGradient>
              </defs>
              <rect
                width="100%"
                height="100%"
                rx="14"
                fill="none"
                stroke="url(#chase-grad)"
                strokeWidth="2.5"
                strokeDasharray="14 10"
                className="animate-[dash-chase_2.2s_linear_infinite]"
              />
            </svg>
          )}

          {/* Mask */}
          <div className={`absolute inset-[3px] rounded-[11px] z-10 ${isDark ? "bg-[#10101f]" : "bg-white"}`} />

          {/* Button */}
          <button
            onClick={handleBtnClick}
            className={`relative z-20 min-w-[160px] px-6 py-3 font-semibold text-xs tracking-wider uppercase rounded-[11px] backdrop-blur-xl shadow-lg transition-all duration-300 ${
              isClicking ? "scale-95" : "hover:scale-105"
            } ${isDark ? "bg-white/5 hover:bg-white/10 text-white" : "bg-black/5 hover:bg-black/10 text-black"}`}
          >
            {labelText}
            {ripples.map((r) => (
              <span
                key={r.id}
                className="absolute bg-white/40 rounded-full animate-ping pointer-events-none"
                style={{
                  left: r.x,
                  top: r.y,
                  width: r.size,
                  height: r.size,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Style selector */}
      <div className="flex gap-2 flex-wrap justify-center mb-4">
        {(["rotating", "chase", "pulse", "draw"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setStyle(s)}
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
              style === s
                ? "bg-violet-500/20 text-violet-400 border-violet-500/30"
                : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Label and Presets */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs text-gray-500 font-bold uppercase">Label:</span>
        <input
          type="text"
          value={labelText}
          onChange={(e) => setLabelText(e.target.value)}
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs outline-none focus:border-violet-500/50"
        />
      </div>

      {/* Copy CSS */}
      <div className="flex justify-end">
        <button
          onClick={copyCss}
          className="flex items-center gap-1.5 px-3 py-1 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs font-semibold"
        >
          {isCopied ? "Copied!" : "</> Copy CSS"}
        </button>
      </div>

      <style jsx global>{`
        @keyframes draw-border {
          0%   { stroke-dasharray: 0 9999; stroke-dashoffset: 0; opacity: 1; }
          70%  { stroke-dasharray: 9999 0; stroke-dashoffset: 0; opacity: 1; }
          85%  { stroke-dasharray: 9999 0; stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dasharray: 9999 0; stroke-dashoffset: -9999; opacity: 0; }
        }
        @keyframes dash-chase {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -9999; }
        }
      `}</style>
    </div>
  );
}

// ==================== CARDS ====================

export function GlassCard({ children, className = "", hover = true }: any) {
  const content = children || (
    <div>
      <h3 className="text-lg font-bold text-white">Glass Card</h3>
      <p className="text-gray-400 mt-2 text-sm">A beautiful card with backdrop blur and translucent styling.</p>
    </div>
  );
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl ${className}`}
    >
      {content}
    </motion.div>
  );
}

export function ProfileCard({
  name = "Alex Chen",
  role = "Senior Developer",
  avatar = "AC",
  bio = "Full-stack developer passionate about UI design.",
  stats = [
    { label: "Projects", value: "42" },
    { label: "Stars", value: "1.2K" },
    { label: "Followers", value: "890" },
  ],
}: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center max-w-sm"
    >
      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white mb-4 ring-4 ring-violet-500/20">
        {avatar}
      </div>
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-violet-400 text-sm mt-1">{role}</p>
      <p className="text-gray-400 text-sm mt-3">{bio}</p>
      {stats.length > 0 && (
        <div className="flex justify-around mt-4 pt-4 border-t border-white/10">
          {stats.map((stat: any) => (
            <div key={stat.label}>
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function PricingCard({
  plan = "Pro",
  price = "$29",
  period = "/month",
  features = ["Unlimited components", "Priority support", "Custom themes"],
  highlighted = true,
  onSelect,
}: any) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative rounded-2xl p-6 border transition-all duration-300 w-64 ${
        highlighted
          ? "bg-gradient-to-b from-violet-600/20 to-indigo-600/20 border-violet-500/50 shadow-lg shadow-violet-500/20"
          : "bg-white/5 border-white/10 hover:border-white/20"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">
          Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-white">{plan}</h3>
      <div className="mt-4">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-gray-400 text-sm">{period}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-violet-400">✓</span> {f}
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSelect}
        className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all ${
          highlighted
            ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}

// ==================== INPUTS ====================

export function FloatingLabelInput({
  label = "Email Address",
  type = "text",
  value: controlledValue,
  onChange,
}: any) {
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState("");
  const value = controlledValue ?? internalValue;
  const isActive = focused || value.length > 0;

  return (
    <div className="relative w-full max-w-sm">
      <motion.label
        animate={{
          y: isActive ? -24 : 0,
          scale: isActive ? 0.85 : 1,
          color: isActive ? "#8B5CF6" : "#9CA3AF",
        }}
        className="absolute left-4 top-3.5 text-sm origin-left pointer-events-none"
      >
        {label}
      </motion.label>
      <input
        type={type}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => {
          setInternalValue(e.target.value);
          onChange?.(e.target.value);
        }}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
      />
    </div>
  );
}

export function OtpInput({ length = 6, onComplete }: any) {
  const [values, setValues] = useState(Array(length).fill(""));
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const newValues = [...values];
    newValues[index] = val.slice(-1);
    setValues(newValues);
    if (val && index < length - 1) refs.current[index + 1]?.focus();
    const code = newValues.join("");
    if (code.length === length) onComplete?.(code);
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      {values.map((v, i) => (
        <motion.input
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={v}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          whileFocus={{ scale: 1.1, borderColor: "#8B5CF6" }}
          className="w-12 h-14 text-center text-xl font-bold bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />
      ))}
    </div>
  );
}

// ==================== NAVIGATION ====================

export function DockNavigation({
  items = [
    { icon: "🏠", label: "Home" },
    { icon: "📦", label: "Components" },
    { icon: "📄", label: "Docs" },
    { icon: "⚙️", label: "Settings" },
  ],
}: any) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex items-end gap-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl px-4 py-3">
      {items.map((item: any, i: number) => {
        const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - i) : 999;
        const scale = hoveredIndex !== null ? Math.max(1, 1.5 - distance * 0.2) : 1;
        return (
          <motion.button
            key={i}
            animate={{ scale, y: scale > 1 ? -(scale - 1) * 20 : 0 }}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={item.onClick}
            className="relative flex flex-col items-center group"
          >
            <span className="text-2xl w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              {item.icon}
            </span>
            {hoveredIndex === i && (
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: -5 }}
                className="absolute -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap"
              >
                {item.label}
              </motion.span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

export function Tabs({
  tabs = [
    { id: "1", label: "Preview", content: <div className="text-white text-sm">Preview content rendered here.</div> },
    { id: "2", label: "Code", content: <div className="text-white text-sm">Raw source code block.</div> },
  ],
  defaultTab,
}: any) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className="w-full max-w-md">
      <div className="flex gap-1 bg-white/5 rounded-xl p-1">
        {tabs.map((tab: any) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors flex-1 text-center ${
              activeTab === tab.id ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabPreview"
                className="absolute inset-0 bg-white/10 rounded-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 border border-white/10 rounded-xl bg-white/[0.02]">
        {tabs.find((t: any) => t.id === activeTab)?.content}
      </div>
    </div>
  );
}

export function Breadcrumb({
  items = [{ label: "Home", href: "#" }, { label: "Components", href: "#" }, { label: "Button" }],
}: any) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item: any, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-2"
        >
          {i > 0 && <span className="text-gray-600">/</span>}
          {item.href ? (
            <a href={item.href} className="text-gray-400 hover:text-violet-400 transition-colors">
              {item.label}
            </a>
          ) : (
            <span className="text-white font-medium">{item.label}</span>
          )}
        </motion.div>
      ))}
    </nav>
  );
}

// ==================== FEEDBACK ====================

export function Toast({
  message = "Successfully saved!",
  type = "success",
  visible: initialVisible = true,
  onClose,
}: any) {
  const [visible, setVisible] = useState(initialVisible);
  const icons: any = { success: "✓", error: "✕", warning: "⚠", info: "ℹ" };
  const colors: any = {
    success: "border-emerald-500/50 bg-emerald-500/10",
    error: "border-red-500/50 bg-red-500/10",
    warning: "border-amber-500/50 bg-amber-500/10",
    info: "border-blue-500/50 bg-blue-500/10",
  };

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  return (
    <div className="relative h-24 flex items-center justify-center">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl ${colors[type] || colors.success}`}
          >
            <span className="text-lg">{icons[type] || "✓"}</span>
            <p className="text-white text-sm">{message}</p>
            <button onClick={handleClose} className="text-gray-400 hover:text-white ml-2">
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {!visible && (
        <button
          onClick={() => setVisible(true)}
          className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-400 hover:text-white"
        >
          Reset Toast
        </button>
      )}
    </div>
  );
}

export function ProgressBar({ value = 65, max = 100, showLabel = true, variant = "gradient" }: any) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full max-w-sm">
      {showLabel && (
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="text-white font-medium">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${
            variant === "gradient"
              ? "bg-gradient-to-r from-violet-600 to-indigo-500"
              : variant === "striped"
              ? "bg-violet-600 bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]"
              : "bg-violet-600"
          }`}
        />
      </div>
    </div>
  );
}

export function Skeleton({ variant = "card", width, height, lines = 3 }: any) {
  const baseClass = "bg-white/5 animate-pulse rounded";

  if (variant === "card") {
    return (
      <div className="bg-white/5 rounded-2xl p-6 border border-white/5 space-y-4 w-64">
        <div className={`${baseClass} rounded-xl h-24 w-full`} />
        <div className={`${baseClass} h-5 w-3/4`} />
        <div className={`${baseClass} h-4 w-full`} />
        <div className={`${baseClass} h-4 w-2/3`} />
      </div>
    );
  }

  if (variant === "circular") {
    return <div className={`${baseClass} rounded-full`} style={{ width: width || "48px", height: height || "48px" }} />;
  }

  if (variant === "rectangular") {
    return <div className={`${baseClass} rounded-xl`} style={{ width: width || "200px", height: height || "120px" }} />;
  }

  return (
    <div className="space-y-3" style={{ width: width || "200px" }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`${baseClass} h-4`} style={{ width: i === lines - 1 ? "60%" : "100%" }} />
      ))}
    </div>
  );
}

// ==================== DATA DISPLAY ====================

export function StatsCard({ title = "Total Revenue", value = "$45,231", change = "+12.5%", trend = "up", icon = "💰" }: any) {
  const trendColor = trend === "up" ? "text-emerald-400" : trend === "down" ? "text-red-400" : "text-gray-400";
  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "→";

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-64"
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl">{icon}</span>
        <span className={`text-sm font-medium ${trendColor}`}>
          {trendIcon} {change}
        </span>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-white mt-3"
      >
        {value}
      </motion.p>
      <p className="text-sm text-gray-400 mt-1">{title}</p>
    </motion.div>
  );
}

export function DataTable({
  columns = [{ key: "name", label: "Name" }, { key: "role", label: "Role" }, { key: "status", label: "Status" }],
  data = [
    { name: "Alex Chen", role: "Developer", status: "Active" },
    { name: "Sam Jordan", role: "Designer", status: "Away" },
    { name: "Chris Evans", role: "Manager", status: "Active" },
  ],
}: any) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl w-full max-w-md">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.02]">
            {columns.map((col: any) => (
              <th key={col.key} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, i: number) => (
            <motion.tr
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              {columns.map((col: any) => (
                <td key={col.key} className="px-4 py-3 text-sm text-gray-300">
                  {row[col.key]}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Timeline({
  items = [
    { title: "Project Started", description: "Initial commit and structure.", date: "Jan 2025", icon: "🚀" },
    { title: "Beta Testing", description: "Feedback from early users.", date: "Feb 2025", icon: "🛠️" },
    { title: "v1.0 Launch", description: "Stable release ready.", date: "Mar 2025", icon: "✨" },
  ],
}: any) {
  return (
    <div className="relative w-full max-w-sm py-4">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600 via-indigo-600 to-transparent" />
      <div className="space-y-6">
        {items.map((item: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="relative pl-12"
          >
            <div className="absolute left-3.5 top-1.5 w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 border-2 border-gray-950 flex items-center justify-center text-xs">
              {item.icon || "•"}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <span className="text-[10px] text-violet-400 font-mono">{item.date}</span>
              <h4 className="text-white font-semibold text-sm mt-1">{item.title}</h4>
              <p className="text-gray-400 text-xs mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ==================== OVERLAY ====================

export function Modal({ open: initialOpen = false, title = "Settings Profile", children }: any) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-xl text-white font-medium text-sm transition-all"
      >
        Trigger Modal
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 rounded-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="absolute z-50 p-4 w-full max-w-xs"
            >
              <div className="bg-gray-900 border border-white/10 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">✕</button>
                </div>
                <div className="text-xs text-gray-400">
                  {children || "This is a live React modal dialog container."}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Drawer({ open: initialOpen = false, title = "Notifications Menu" }: any) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white font-medium text-sm transition-all"
      >
        Trigger Drawer
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 rounded-xl"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-48 bg-gray-900 border-l border-white/10 z-50 p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-semibold text-white">{title}</h3>
                <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">✕</button>
              </div>
              <p className="text-[10px] text-gray-500">Settings panel drawers slide in smoothly.</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Tooltip({ content = "Help info text", children = <HelpCircle className="w-5 h-5 text-gray-400 cursor-pointer" /> }: any) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-[10px] px-3 py-1.5 rounded-lg whitespace-nowrap z-50 border border-white/10"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ==================== LAYOUT ====================

// ==================== MEDIA ====================

export function MusicPlayer({ title = "Midnight Dreams", artist = "Nova Sound" }: any) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-64 shadow-xl">
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ rotate: playing ? 360 : 0 }}
          transition={{ duration: 4, repeat: playing ? Infinity : 0, ease: "linear" }}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-xl shadow"
        >
          🎵
        </motion.div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-sm truncate">{title}</h4>
          <p className="text-gray-500 text-xs truncate">{artist}</p>
        </div>
      </div>
      <div className="mt-3">
        <div
          className="h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setProgress(((e.clientX - rect.left) / rect.width) * 100);
          }}
        >
          <div className="h-full bg-violet-500" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-3">
        <button className="text-gray-400 text-xs hover:text-white">⏮</button>
        <button
          onClick={() => setPlaying(!playing)}
          className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs"
        >
          {playing ? "⏸" : "▶"}
        </button>
        <button className="text-gray-400 text-xs hover:text-white">⏭</button>
      </div>
    </div>
  );
}

export function AvatarGroup({
  avatars = [{ name: "Alex" }, { name: "Sam", color: "#4F46E5" }, { name: "Jordan", color: "#EC4899" }, { name: "Chris" }],
  max = 3,
}: any) {
  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className="flex items-center justify-center -space-x-3">
      {visible.map((a: any, i: number) => (
        <div
          key={i}
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-gray-950 shadow-md"
          style={{ backgroundColor: a.color || "#7C3AED", zIndex: visible.length - i }}
        >
          {a.name.slice(0, 2).toUpperCase()}
        </div>
      ))}
      {remaining > 0 && (
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gray-800 border-2 border-gray-950 z-0">
          +{remaining}
        </div>
      )}
    </div>
  );
}

// ==================== GLASS & CUSTOM FX ====================

export function GlassInput({ placeholder = "Type glass text...", icon = "🔍" }: any) {
  return (
    <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden focus-within:border-violet-500/50 w-full max-w-xs">
      <span className="pl-4 text-gray-500 text-sm">{icon}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent px-3 py-3 text-white placeholder-gray-600 outline-none text-sm"
      />
    </div>
  );
}

export function GlassCardHover({ children }: any) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden w-64 cursor-pointer"
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.2), transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10 text-center">
        <h3 className="text-white font-semibold">Hover Glow card</h3>
        <p className="text-gray-500 text-xs mt-2">Move mouse around to see radial illumination.</p>
      </div>
    </motion.div>
  );
}

// ==================== ANIMATIONS ====================

export function NotificationBadge({ count = 5, children }: any) {
  return (
    <div className="relative inline-block">
      {children || <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">🔔</div>}
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}

export function CommandPaletteComponent({ open: initialOpen = false }: any) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl text-sm font-medium"
      >
        Open Command Search
      </button>
      .
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 rounded-xl"
            />
            <div className="absolute z-50 p-4 w-full max-w-xs top-10">
              <div className="bg-gray-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <input
                  autoFocus
                  placeholder="Type to search..."
                  className="w-full bg-transparent px-4 py-2 text-white border-b border-white/10 outline-none text-xs"
                />
                <div className="p-2 space-y-1">
                  <div className="px-3 py-1.5 hover:bg-white/5 rounded text-[10px] text-gray-300 cursor-pointer">🏠 Home navigation</div>
                  <div className="px-3 py-1.5 hover:bg-white/5 rounded text-[10px] text-gray-300 cursor-pointer">📦 Components list</div>
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Map slug to actual React Component instance
export const PreviewRegistry: Record<string, React.ComponentType<any>> = {
  "gradient-button": GradientButton,
  "glass-button": GlassButton,
  "animated-border-button": AnimatedBorderButton,
  "glass-card": GlassCard,
  "profile-card": ProfileCard,
  "pricing-card": PricingCard,
  "floating-label-input": FloatingLabelInput,
  "otp-input": OtpInput,
  "dock-navigation": DockNavigation,
  "tabs": Tabs,
  "breadcrumb": Breadcrumb,
  "toast-notification": Toast,
  "progress-bar": ProgressBar,
  "skeleton-loader": Skeleton,
  "stats-card": StatsCard,
  "data-table": DataTable,
  "timeline": Timeline,
  "modal-dialog": Modal,
  "drawer": Drawer,
  "tooltip": Tooltip,
  "music-player": MusicPlayer,
  "avatar-group": AvatarGroup,
  "glass-input": GlassInput,
  "glass-card-hover": GlassCardHover,
  "notification-badge": NotificationBadge,
  "command-palette-component": CommandPaletteComponent,
};
