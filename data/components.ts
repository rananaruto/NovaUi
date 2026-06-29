import type { ComponentItem } from "@/types";

export const components: ComponentItem[] = [
  {
    "name": "Gradient Button",
    "slug": "gradient-button",
    "description": "A beautiful gradient button with hover animation and glow effect.",
    "category": "buttons",
    "tags": [
      "button",
      "gradient",
      "glow",
      "interactive"
    ],
    "featured": true,
    "trending": true,
    "new": false,
    "createdAt": "2025-01-15",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface GradientButtonProps {\n  children: React.ReactNode;\n  variant?: \"primary\" | \"secondary\" | \"danger\";\n  size?: \"sm\" | \"md\" | \"lg\";\n  onClick?: () => void;\n  disabled?;\n}\n\nconst variants = {\n  primary: \"from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500\",\n  secondary: \"from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500\",\n  danger: \"from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500\",\n};\n\nconst sizes = {\n  sm: \"px-4 py-2 text-sm\",\n  md: \"px-6 py-3 text-base\",\n  lg: \"px-8 py-4 text-lg\",\n};\n\nexport default function GradientButton({\n  children,\n  variant = \"primary\",\n  size = \"md\",\n  onClick,\n  disabled = false,\n}: GradientButtonProps) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.05, boxShadow: \"0 0 30px rgba(124, 58, 237, 0.5)\" }}\n      whileTap={{ scale: 0.95 }}\n      className={`bg-gradient-to-r ${variants[variant]} ${sizes[size]} rounded-xl font-semibold text-white shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}\n      onClick={onClick}\n      disabled={disabled}\n    >\n      {children}\n    </motion.button>\n  );\n}",
    "props": [
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "-",
        "description": "Button content",
        "required": true
      },
      {
        "name": "variant",
        "type": "\"primary\" | \"secondary\" | \"danger\"",
        "default": "\"primary\"",
        "description": "Color variant"
      },
      {
        "name": "size",
        "type": "\"sm\" | \"md\" | \"lg\"",
        "default": "\"md\"",
        "description": "Button size"
      },
      {
        "name": "onClick",
        "type": "() => void",
        "default": "-",
        "description": "Click handler"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "default": "false",
        "description": "Disabled state"
      }
    ],
    "examples": [
      {
        "title": "Basic Usage",
        "description": "Simple gradient button with default props.",
        "code": "<GradientButton>Click Me</GradientButton>"
      },
      {
        "title": "Variants",
        "description": "Different color variants.",
        "code": "<div className=\"flex gap-4\">\n  <GradientButton variant=\"primary\">Primary</GradientButton>\n  <GradientButton variant=\"secondary\">Secondary</GradientButton>\n  <GradientButton variant=\"danger\">Danger</GradientButton>\n</div>"
      }
    ]
  },
  {
    "name": "Glass Button",
    "slug": "glass-button",
    "description": "A glassmorphism-styled button with backdrop blur and translucent background.",
    "category": "buttons",
    "tags": [
      "button",
      "glass",
      "glassmorphism",
      "blur"
    ],
    "featured": false,
    "trending": true,
    "new": true,
    "createdAt": "2025-03-01",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface GlassButtonProps {\n  children: React.ReactNode;\n  variant?: \"light\" | \"dark\" | \"colored\";\n  size?: \"sm\" | \"md\" | \"lg\";\n  onClick?: () => void;\n}\n\nconst variants = {\n  light: \"bg-white/10 border-white/20 text-white hover:bg-white/20\",\n  dark: \"bg-black/20 border-white/10 text-white hover:bg-black/30\",\n  colored: \"bg-violet-500/20 border-violet-400/30 text-violet-100 hover:bg-violet-500/30\",\n};\n\nconst sizes = {\n  sm: \"px-4 py-2 text-sm\",\n  md: \"px-6 py-3 text-base\",\n  lg: \"px-8 py-4 text-lg\",\n};\n\nexport default function GlassButton({\n  children,\n  variant = \"light\",\n  size = \"md\",\n  onClick,\n}: GlassButtonProps) {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.05 }}\n      whileTap={{ scale: 0.95 }}\n      className={`${variants[variant]} ${sizes[size]} rounded-xl border backdrop-blur-xl font-medium shadow-lg transition-all duration-300`}\n      onClick={onClick}\n    >\n      {children}\n    </motion.button>\n  );\n}",
    "props": [
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "-",
        "description": "Button content",
        "required": true
      },
      {
        "name": "variant",
        "type": "\"light\" | \"dark\" | \"colored\"",
        "default": "\"light\"",
        "description": "Glass variant"
      },
      {
        "name": "size",
        "type": "\"sm\" | \"md\" | \"lg\"",
        "default": "\"md\"",
        "description": "Button size"
      },
      {
        "name": "onClick",
        "type": "() => void",
        "default": "-",
        "description": "Click handler"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Default glass button.",
        "code": "<GlassButton>Glass Button</GlassButton>"
      }
    ]
  },
  {
    "name": "Animated Border Button",
    "slug": "animated-border-button",
    "description": "A premium animated border button with multiple presets: Rotating conic-gradient, SVG Dashed Chase, Glowing Pulse, and SVG Border Draw animations.",
    "category": "buttons",
    "tags": [
      "button",
      "animated",
      "border",
      "gradient",
      "svg"
    ],
    "featured": true,
    "trending": true,
    "new": true,
    "createdAt": "2026-06-29",
    "code": `"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface AnimatedBorderButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AnimatedBorderButton({ children = "Hover Me", onClick }: AnimatedBorderButtonProps) {
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

  return (
    <div className={\`p-6 rounded-2xl border transition-all duration-300 w-full max-w-sm \${isDark ? "bg-[#10101f] border-white/10 text-white" : "bg-white border-black/10 text-black"}\`}>
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-sm font-bold">Animated Border Button</h4>
        <button 
          onClick={() => setIsDark(!isDark)}
          className="text-xs px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg"
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <div className="flex items-center justify-center min-h-[100px] mb-6">
        <div className="relative inline-flex p-[3px] rounded-[14px] overflow-hidden">
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

          <div className={\`absolute inset-[3px] rounded-[11px] z-10 \${isDark ? "bg-[#10101f]" : "bg-white"}\`} />

          <button
            onClick={handleBtnClick}
            className={\`relative z-20 min-w-[160px] px-6 py-3 font-semibold text-xs tracking-wider uppercase rounded-[11px] backdrop-blur-xl shadow-lg transition-all duration-300 \${
              isClicking ? "scale-95" : "hover:scale-105"
            } \${isDark ? "bg-white/5 hover:bg-white/10 text-white" : "bg-black/5 hover:bg-black/10 text-black"}\`}
          >
            {labelText}
          </button>
        </div>
      </div>
    </div>
  );
}`,
    "props": [
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "\"Hover Me\"",
        "description": "Button label text",
        "required": false
      },
      {
        "name": "onClick",
        "type": "() => void",
        "default": "-",
        "description": "Click event handler"
      }
    ],
    "examples": [
      {
        "title": "Basic Demo",
        "description": "Component renders inside its customizer box with styles switching options.",
        "code": "<AnimatedBorderButton>Hover Me</AnimatedBorderButton>"
      }
    ]
  },
  {
    "name": "Glass Card",
    "slug": "glass-card",
    "description": "A beautiful glassmorphism card with backdrop blur and translucent effects.",
    "category": "cards",
    "tags": [
      "card",
      "glass",
      "glassmorphism",
      "blur"
    ],
    "featured": true,
    "trending": true,
    "new": false,
    "createdAt": "2025-01-10",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface GlassCardProps {\n  children: React.ReactNode;\n  className?;\n  hover?;\n}\n\nexport default function GlassCard({ children, className = \"\", hover = true }: GlassCardProps) {\n  return (\n    <motion.div\n      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}\n      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl ${className}`}\n    >\n      {children}\n    </motion.div>\n  );\n}",
    "props": [
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "-",
        "description": "Card content",
        "required": true
      },
      {
        "name": "className",
        "type": "string",
        "default": "\"\"",
        "description": "Additional CSS classes"
      },
      {
        "name": "hover",
        "type": "boolean",
        "default": "true",
        "description": "Enable hover animation"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Simple glass card.",
        "code": "<GlassCard>\n  <h3 className=\"text-lg font-bold text-white\">Glass Card</h3>\n  <p className=\"text-gray-400 mt-2\">Beautiful glassmorphism effect.</p>\n</GlassCard>"
      }
    ]
  },
  {
    "name": "Profile Card",
    "slug": "profile-card",
    "description": "An elegant profile card with avatar, info, and social links.",
    "category": "cards",
    "tags": [
      "card",
      "profile",
      "avatar",
      "social"
    ],
    "featured": true,
    "trending": false,
    "new": false,
    "createdAt": "2025-02-05",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface ProfileCardProps {\n  name;\n  role;\n  avatar;\n  bio;\n  stats?: { label; value }[];\n}\n\nexport default function ProfileCard({ name, role, avatar, bio, stats = [] }: ProfileCardProps) {\n  return (\n    <motion.div\n      whileHover={{ y: -5 }}\n      className=\"bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center max-w-sm\"\n    >\n      <div className=\"w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white mb-4 ring-4 ring-violet-500/20\">\n        {avatar}\n      </div>\n      <h3 className=\"text-xl font-bold text-white\">{name}</h3>\n      <p className=\"text-violet-400 text-sm mt-1\">{role}</p>\n      <p className=\"text-gray-400 text-sm mt-3\">{bio}</p>\n      {stats.length > 0 && (\n        <div className=\"flex justify-around mt-4 pt-4 border-t border-white/10\">\n          {stats.map((stat) => (\n            <div key={stat.label}>\n              <p className=\"text-lg font-bold text-white\">{stat.value}</p>\n              <p className=\"text-xs text-gray-500\">{stat.label}</p>\n            </div>\n          ))}\n        </div>\n      )}\n    </motion.div>\n  );\n}",
    "props": [
      {
        "name": "name",
        "type": "string",
        "default": "-",
        "description": "Person's name",
        "required": true
      },
      {
        "name": "role",
        "type": "string",
        "default": "-",
        "description": "Role/title",
        "required": true
      },
      {
        "name": "avatar",
        "type": "string",
        "default": "-",
        "description": "Avatar text/emoji",
        "required": true
      },
      {
        "name": "bio",
        "type": "string",
        "default": "-",
        "description": "Short bio",
        "required": true
      },
      {
        "name": "stats",
        "type": "{ label; value }[]",
        "default": "[]",
        "description": "Stats to display"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Profile card with stats.",
        "code": "<ProfileCard\n  name=\"Alex Chen\"\n  role=\"Senior Developer\"\n  avatar=\"AC\"\n  bio=\"Full-stack developer passionate about UI design.\"\n  stats={[\n    { label: \"Projects\", value: \"42\" },\n    { label: \"Stars\", value: \"1.2K\" },\n    { label: \"Followers\", value: \"890\" },\n  ]}\n/>"
      }
    ]
  },
  {
    "name": "Pricing Card",
    "slug": "pricing-card",
    "description": "A sleek pricing card with gradient highlights and feature list.",
    "category": "cards",
    "tags": [
      "card",
      "pricing",
      "commerce",
      "plan"
    ],
    "featured": false,
    "trending": true,
    "new": false,
    "createdAt": "2025-02-20",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface PricingCardProps {\n  plan;\n  price;\n  period?;\n  features[];\n  highlighted?;\n  onSelect?: () => void;\n}\n\nexport default function PricingCard({\n  plan,\n  price,\n  period = \"/month\",\n  features,\n  highlighted = false,\n  onSelect,\n}: PricingCardProps) {\n  return (\n    <motion.div\n      whileHover={{ y: -5, scale: 1.02 }}\n      className={`relative rounded-2xl p-6 border transition-all duration-300 ${\n        highlighted\n          ? \"bg-gradient-to-b from-violet-600/20 to-indigo-600/20 border-violet-500/50 shadow-lg shadow-violet-500/20\"\n          : \"bg-white/5 border-white/10 hover:border-white/20\"\n      }`}\n    >\n      {highlighted && (\n        <span className=\"absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full\">\n          Popular\n        </span>\n      )}\n      <h3 className=\"text-lg font-semibold text-white\">{plan}</h3>\n      <div className=\"mt-4\">\n        <span className=\"text-4xl font-bold text-white\">{price}</span>\n        <span className=\"text-gray-400 text-sm\">{period}</span>\n      </div>\n      <ul className=\"mt-6 space-y-3\">\n        {features.map((f, i) => (\n          <li key={i} className=\"flex items-center gap-2 text-sm text-gray-300\">\n            <span className=\"text-violet-400\">✓</span> {f}\n          </li>\n        ))}\n      </ul>\n      <motion.button\n        whileHover={{ scale: 1.05 }}\n        whileTap={{ scale: 0.95 }}\n        onClick={onSelect}\n        className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all ${\n          highlighted\n            ? \"bg-gradient-to-r from-violet-600 to-indigo-600 text-white\"\n            : \"bg-white/10 text-white hover:bg-white/20\"\n        }`}\n      >\n        Get Started\n      </motion.button>\n    </motion.div>\n  );\n}",
    "props": [
      {
        "name": "plan",
        "type": "string",
        "default": "-",
        "description": "Plan name",
        "required": true
      },
      {
        "name": "price",
        "type": "string",
        "default": "-",
        "description": "Price display",
        "required": true
      },
      {
        "name": "period",
        "type": "string",
        "default": "\"/month\"",
        "description": "Billing period"
      },
      {
        "name": "features",
        "type": "string[]",
        "default": "-",
        "description": "Feature list",
        "required": true
      },
      {
        "name": "highlighted",
        "type": "boolean",
        "default": "false",
        "description": "Highlight this card"
      },
      {
        "name": "onSelect",
        "type": "() => void",
        "default": "-",
        "description": "Selection handler"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Pricing card.",
        "code": "<PricingCard plan=\"Pro\" price=\"$29\" features={[\"Unlimited components\", \"Priority support\", \"Custom themes\"]} highlighted />"
      }
    ]
  },
  {
    "name": "Floating Label Input",
    "slug": "floating-label-input",
    "description": "An elegant input with a floating animated label.",
    "category": "inputs",
    "tags": [
      "input",
      "form",
      "floating",
      "label"
    ],
    "featured": false,
    "trending": true,
    "new": false,
    "createdAt": "2025-01-20",
    "code": "\"use client\";\nimport { useState } from \"react\";\nimport { motion } from \"motion/react\";\n\ninterface FloatingLabelInputProps {\n  label;\n  type?;\n  value?;\n  onChange?: (value) => void;\n}\n\nexport default function FloatingLabelInput({\n  label,\n  type = \"text\",\n  value: controlledValue,\n  onChange,\n}: FloatingLabelInputProps) {\n  const [focused, setFocused] = useState(false);\n  const [internalValue, setInternalValue] = useState(\"\");\n  const value = controlledValue ?? internalValue;\n  const isActive = focused || value.length > 0;\n\n  return (\n    <div className=\"relative w-full\">\n      <motion.label\n        animate={{\n          y: isActive ? -24 : 0,\n          scale: isActive ? 0.85 : 1,\n          color: isActive ? \"#8B5CF6\" : \"#9CA3AF\",\n        }}\n        className=\"absolute left-4 top-3.5 text-sm origin-left pointer-events-none\"\n      >\n        {label}\n      </motion.label>\n      <input\n        type={type}\n        value={value}\n        onFocus={() => setFocused(true)}\n        onBlur={() => setFocused(false)}\n        onChange={(e) => {\n          setInternalValue(e.target.value);\n          onChange?.(e.target.value);\n        }}\n        className=\"w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20\"\n      />\n    </div>\n  );\n}",
    "props": [
      {
        "name": "label",
        "type": "string",
        "default": "-",
        "description": "Input label",
        "required": true
      },
      {
        "name": "type",
        "type": "string",
        "default": "\"text\"",
        "description": "Input type"
      },
      {
        "name": "value",
        "type": "string",
        "default": "-",
        "description": "Controlled value"
      },
      {
        "name": "onChange",
        "type": "(value) => void",
        "default": "-",
        "description": "Change handler"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Floating label input.",
        "code": "<FloatingLabelInput label=\"Email Address\" type=\"email\" />"
      }
    ]
  },
  {
    "name": "OTP Input",
    "slug": "otp-input",
    "description": "A one-time password input with individual digit boxes.",
    "category": "inputs",
    "tags": [
      "input",
      "otp",
      "verification",
      "code"
    ],
    "featured": false,
    "trending": false,
    "new": true,
    "createdAt": "2025-04-15",
    "code": "\"use client\";\nimport { useState, useRef } from \"react\";\nimport { motion } from \"motion/react\";\n\ninterface OtpInputProps {\n  length?;\n  onComplete?: (code) => void;\n}\n\nexport default function OtpInput({ length = 6, onComplete }: OtpInputProps) {\n  const [values, setValues] = useState(Array(length).fill(\"\"));\n  const refs = useRef<(HTMLInputElement | null)[]>([]);\n\n  const handleChange = (index, val) => {\n    if (!/^\\d*$/.test(val)) return;\n    const newValues = [...values];\n    newValues[index] = val.slice(-1);\n    setValues(newValues);\n    if (val && index < length - 1) refs.current[index + 1]?.focus();\n    const code = newValues.join(\"\");\n    if (code.length === length) onComplete?.(code);\n  };\n\n  const handleKeyDown = (index, e: React.KeyboardEvent) => {\n    if (e.key === \"Backspace\" && !values[index] && index > 0) {\n      refs.current[index - 1]?.focus();\n    }\n  };\n\n  return (\n    <div className=\"flex gap-3\">\n      {values.map((v, i) => (\n        <motion.input\n          key={i}\n          ref={(el) => { refs.current[i] = el; }}\n          type=\"text\"\n          inputMode=\"numeric\"\n          maxLength={1}\n          value={v}\n          onChange={(e) => handleChange(i, e.target.value)}\n          onKeyDown={(e) => handleKeyDown(i, e)}\n          whileFocus={{ scale: 1.1, borderColor: \"#8B5CF6\" }}\n          className=\"w-12 h-14 text-center text-xl font-bold bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20\"\n        />\n      ))}\n    </div>\n  );\n}",
    "props": [
      {
        "name": "length",
        "type": "number",
        "default": "6",
        "description": "Number of digits"
      },
      {
        "name": "onComplete",
        "type": "(code) => void",
        "default": "-",
        "description": "Called when all digits entered"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "6-digit OTP input.",
        "code": "<OtpInput length={6} onComplete={(code) => console.log(code)} />"
      }
    ]
  },
  {
    "name": "Dock Navigation",
    "slug": "dock-navigation",
    "description": "A macOS-style dock navigation with magnification effect.",
    "category": "navigation",
    "tags": [
      "navigation",
      "dock",
      "macos",
      "animated"
    ],
    "featured": true,
    "trending": true,
    "new": false,
    "createdAt": "2025-01-25",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\nimport { useState } from \"react\";\n\ninterface DockItem {\n  icon;\n  label;\n  onClick?: () => void;\n}\n\ninterface DockNavigationProps {\n  items: DockItem[];\n}\n\nexport default function DockNavigation({ items }: DockNavigationProps) {\n  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);\n\n  return (\n    <div className=\"flex items-end gap-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl px-4 py-3\">\n      {items.map((item, i) => {\n        const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - i) : 999;\n        const scale = hoveredIndex !== null ? Math.max(1, 1.5 - distance * 0.2) : 1;\n        return (\n          <motion.button\n            key={i}\n            animate={{ scale, y: scale > 1 ? -(scale - 1) * 20 : 0 }}\n            onHoverStart={() => setHoveredIndex(i)}\n            onHoverEnd={() => setHoveredIndex(null)}\n            onClick={item.onClick}\n            className=\"relative flex flex-col items-center group\"\n          >\n            <span className=\"text-2xl w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors\">\n              {item.icon}\n            </span>\n            {hoveredIndex === i && (\n              <motion.span\n                initial={{ opacity: 0, y: 5 }}\n                animate={{ opacity: 1, y: -5 }}\n                className=\"absolute -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap\"\n              >\n                {item.label}\n              </motion.span>\n            )}\n          </motion.button>\n        );\n      })}\n    </div>\n  );\n}",
    "props": [
      {
        "name": "items",
        "type": "DockItem[]",
        "default": "-",
        "description": "Dock items with icon and label",
        "required": true
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "macOS-style dock.",
        "code": "<DockNavigation items={[\n  { icon: \"🏠\", label: \"Home\" },\n  { icon: \"📦\", label: \"Components\" },\n  { icon: \"📄\", label: \"Docs\" },\n  { icon: \"⚙️\", label: \"Settings\" },\n]} />"
      }
    ]
  },
  {
    "name": "Tabs",
    "slug": "tabs",
    "description": "Animated tab navigation with smooth indicator transition.",
    "category": "navigation",
    "tags": [
      "tabs",
      "navigation",
      "animated"
    ],
    "featured": false,
    "trending": false,
    "new": false,
    "createdAt": "2025-02-01",
    "code": "\"use client\";\nimport { useState } from \"react\";\nimport { motion } from \"motion/react\";\n\ninterface Tab {\n  id;\n  label;\n  content: React.ReactNode;\n}\n\ninterface TabsProps {\n  tabs: Tab[];\n  defaultTab?;\n}\n\nexport default function Tabs({ tabs, defaultTab }: TabsProps) {\n  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);\n\n  return (\n    <div>\n      <div className=\"flex gap-1 bg-white/5 rounded-xl p-1\">\n        {tabs.map((tab) => (\n          <button\n            key={tab.id}\n            onClick={() => setActiveTab(tab.id)}\n            className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${\n              activeTab === tab.id ? \"text-white\" : \"text-gray-400 hover:text-white\"\n            }`}\n          >\n            {activeTab === tab.id && (\n              <motion.div\n                layoutId=\"activeTab\"\n                className=\"absolute inset-0 bg-white/10 rounded-lg\"\n                transition={{ type: \"spring\", bounce: 0.2, duration: 0.6 }}\n              />\n            )}\n            <span className=\"relative z-10\">{tab.label}</span>\n          </button>\n        ))}\n      </div>\n      <div className=\"mt-4\">\n        {tabs.find((t) => t.id === activeTab)?.content}\n      </div>\n    </div>\n  );\n}",
    "props": [
      {
        "name": "tabs",
        "type": "Tab[]",
        "default": "-",
        "description": "Tab definitions",
        "required": true
      },
      {
        "name": "defaultTab",
        "type": "string",
        "default": "first tab",
        "description": "Default active tab ID"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Tab navigation.",
        "code": "<Tabs tabs={[{ id: \"1\", label: \"Preview\", content: <div>Preview</div> }, { id: \"2\", label: \"Code\", content: <div>Code</div> }]} />"
      }
    ]
  },
  {
    "name": "Breadcrumb",
    "slug": "breadcrumb",
    "description": "A breadcrumb navigation with animated separators.",
    "category": "navigation",
    "tags": [
      "breadcrumb",
      "navigation",
      "path"
    ],
    "featured": false,
    "trending": false,
    "new": false,
    "createdAt": "2025-02-15",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface BreadcrumbItem {\n  label;\n  href?;\n}\n\ninterface BreadcrumbProps {\n  items: BreadcrumbItem[];\n}\n\nexport default function Breadcrumb({ items }: BreadcrumbProps) {\n  return (\n    <nav className=\"flex items-center gap-2 text-sm\">\n      {items.map((item, i) => (\n        <motion.div\n          key={i}\n          initial={{ opacity: 0, x: -10 }}\n          animate={{ opacity: 1, x: 0 }}\n          transition={{ delay: i * 0.1 }}\n          className=\"flex items-center gap-2\"\n        >\n          {i > 0 && <span className=\"text-gray-600\">/</span>}\n          {item.href ? (\n            <a href={item.href} className=\"text-gray-400 hover:text-violet-400 transition-colors\">{item.label}</a>\n          ) : (\n            <span className=\"text-white font-medium\">{item.label}</span>\n          )}\n        </motion.div>\n      ))}\n    </nav>\n  );\n}",
    "props": [
      {
        "name": "items",
        "type": "BreadcrumbItem[]",
        "default": "-",
        "description": "Breadcrumb items",
        "required": true
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Simple breadcrumb.",
        "code": "<Breadcrumb items={[{ label: \"Home\", href: \"/\" }, { label: \"Components\", href: \"/components\" }, { label: \"Button\" }]} />"
      }
    ]
  },
  {
    "name": "Toast Notification",
    "slug": "toast-notification",
    "description": "Animated toast notification with multiple variants.",
    "category": "feedback",
    "tags": [
      "toast",
      "notification",
      "alert",
      "feedback"
    ],
    "featured": false,
    "trending": true,
    "new": false,
    "createdAt": "2025-01-28",
    "code": "\"use client\";\nimport { motion, AnimatePresence } from \"motion/react\";\n\ninterface ToastProps {\n  message;\n  type?: \"success\" | \"error\" | \"warning\" | \"info\";\n  visible;\n  onClose: () => void;\n}\n\nconst icons = { success: \"✓\", error: \"✕\", warning: \"⚠\", info: \"ℹ\" };\nconst colors = {\n  success: \"border-emerald-500/50 bg-emerald-500/10\",\n  error: \"border-red-500/50 bg-red-500/10\",\n  warning: \"border-amber-500/50 bg-amber-500/10\",\n  info: \"border-blue-500/50 bg-blue-500/10\",\n};\n\nexport default function Toast({ message, type = \"info\", visible, onClose }: ToastProps) {\n  return (\n    <AnimatePresence>\n      {visible && (\n        <motion.div\n          initial={{ opacity: 0, y: -20, scale: 0.95 }}\n          animate={{ opacity: 1, y: 0, scale: 1 }}\n          exit={{ opacity: 0, y: -20, scale: 0.95 }}\n          className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl ${colors[type]}`}\n        >\n          <span className=\"text-lg\">{icons[type]}</span>\n          <p className=\"text-white text-sm\">{message}</p>\n          <button onClick={onClose} className=\"text-gray-400 hover:text-white ml-2\">✕</button>\n        </motion.div>\n      )}\n    </AnimatePresence>\n  );\n}",
    "props": [
      {
        "name": "message",
        "type": "string",
        "default": "-",
        "description": "Toast message",
        "required": true
      },
      {
        "name": "type",
        "type": "\"success\" | \"error\" | \"warning\" | \"info\"",
        "default": "\"info\"",
        "description": "Toast type"
      },
      {
        "name": "visible",
        "type": "boolean",
        "default": "-",
        "description": "Visibility state",
        "required": true
      },
      {
        "name": "onClose",
        "type": "() => void",
        "default": "-",
        "description": "Close handler",
        "required": true
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Success toast.",
        "code": "<Toast message=\"Successfully saved!\" type=\"success\" visible={true} onClose={() => {}} />"
      }
    ]
  },
  {
    "name": "Progress Bar",
    "slug": "progress-bar",
    "description": "Animated progress bar with gradient fill and percentage display.",
    "category": "feedback",
    "tags": [
      "progress",
      "bar",
      "loading",
      "percentage"
    ],
    "featured": false,
    "trending": false,
    "new": false,
    "createdAt": "2025-02-10",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface ProgressBarProps {\n  value;\n  max?;\n  showLabel?;\n  variant?: \"default\" | \"gradient\" | \"striped\";\n}\n\nexport default function ProgressBar({ value, max = 100, showLabel = true, variant = \"gradient\" }: ProgressBarProps) {\n  const percentage = Math.min((value / max) * 100, 100);\n  return (\n    <div className=\"w-full\">\n      {showLabel && (\n        <div className=\"flex justify-between mb-2 text-sm\">\n          <span className=\"text-gray-400\">Progress</span>\n          <span className=\"text-white font-medium\">{Math.round(percentage)}%</span>\n        </div>\n      )}\n      <div className=\"h-3 bg-white/5 rounded-full overflow-hidden\">\n        <motion.div\n          initial={{ width: 0 }}\n          animate={{ width: `${percentage}%` }}\n          transition={{ duration: 1, ease: \"easeOut\" }}\n          className={`h-full rounded-full ${\n            variant === \"gradient\"\n              ? \"bg-gradient-to-r from-violet-600 to-indigo-500\"\n              : variant === \"striped\"\n              ? \"bg-violet-600 bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]\"\n              : \"bg-violet-600\"\n          }`}\n        />\n      </div>\n    </div>\n  );\n}",
    "props": [
      {
        "name": "value",
        "type": "number",
        "default": "-",
        "description": "Current value",
        "required": true
      },
      {
        "name": "max",
        "type": "number",
        "default": "100",
        "description": "Maximum value"
      },
      {
        "name": "showLabel",
        "type": "boolean",
        "default": "true",
        "description": "Show percentage label"
      },
      {
        "name": "variant",
        "type": "\"default\" | \"gradient\" | \"striped\"",
        "default": "\"gradient\"",
        "description": "Visual variant"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Gradient progress.",
        "code": "<ProgressBar value={65} />"
      }
    ]
  },
  {
    "name": "Skeleton Loader",
    "slug": "skeleton-loader",
    "description": "Animated skeleton loading placeholder with shimmer effect.",
    "category": "feedback",
    "tags": [
      "skeleton",
      "loading",
      "placeholder",
      "shimmer"
    ],
    "featured": false,
    "trending": false,
    "new": false,
    "createdAt": "2025-03-05",
    "code": "\"use client\";\n\ninterface SkeletonProps {\n  variant?: \"text\" | \"circular\" | \"rectangular\" | \"card\";\n  width?;\n  height?;\n  lines?;\n}\n\nexport default function Skeleton({ variant = \"text\", width, height, lines = 3 }: SkeletonProps) {\n  const baseClass = \"bg-white/5 animate-pulse rounded\";\n\n  if (variant === \"card\") {\n    return (\n      <div className=\"bg-white/5 rounded-2xl p-6 border border-white/5 space-y-4\">\n        <div className={`${baseClass} rounded-xl h-40 w-full`} />\n        <div className={`${baseClass} h-5 w-3/4`} />\n        <div className={`${baseClass} h-4 w-full`} />\n        <div className={`${baseClass} h-4 w-2/3`} />\n      </div>\n    );\n  }\n\n  if (variant === \"circular\") {\n    return <div className={`${baseClass} rounded-full`} style={{ width: width || \"48px\", height: height || \"48px\" }} />;\n  }\n\n  if (variant === \"rectangular\") {\n    return <div className={`${baseClass} rounded-xl`} style={{ width: width || \"100%\", height: height || \"200px\" }} />;\n  }\n\n  return (\n    <div className=\"space-y-3\" style={{ width: width || \"100%\" }}>\n      {Array.from({ length: lines }).map((_, i) => (\n        <div key={i} className={`${baseClass} h-4`} style={{ width: i === lines - 1 ? \"60%\" : \"100%\" }} />\n      ))}\n    </div>\n  );\n}",
    "props": [
      {
        "name": "variant",
        "type": "\"text\" | \"circular\" | \"rectangular\" | \"card\"",
        "default": "\"text\"",
        "description": "Skeleton type"
      },
      {
        "name": "width",
        "type": "string",
        "default": "\"100%\"",
        "description": "Width"
      },
      {
        "name": "height",
        "type": "string",
        "default": "auto",
        "description": "Height"
      },
      {
        "name": "lines",
        "type": "number",
        "default": "3",
        "description": "Number of text lines"
      }
    ],
    "examples": [
      {
        "title": "Card",
        "description": "Card skeleton.",
        "code": "<Skeleton variant=\"card\" />"
      }
    ]
  },
  {
    "name": "Stats Card",
    "slug": "stats-card",
    "description": "A dashboard stats card with icon, value, and trend indicator.",
    "category": "data-display",
    "tags": [
      "stats",
      "dashboard",
      "card",
      "metric"
    ],
    "featured": false,
    "trending": true,
    "new": false,
    "createdAt": "2025-01-30",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface StatsCardProps {\n  title;\n  value;\n  change;\n  trend: \"up\" | \"down\" | \"neutral\";\n  icon;\n}\n\nexport default function StatsCard({ title, value, change, trend, icon }: StatsCardProps) {\n  const trendColor = trend === \"up\" ? \"text-emerald-400\" : trend === \"down\" ? \"text-red-400\" : \"text-gray-400\";\n  const trendIcon = trend === \"up\" ? \"↑\" : trend === \"down\" ? \"↓\" : \"→\";\n\n  return (\n    <motion.div\n      whileHover={{ y: -3, scale: 1.02 }}\n      className=\"bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6\"\n    >\n      <div className=\"flex items-center justify-between\">\n        <span className=\"text-2xl\">{icon}</span>\n        <span className={`text-sm font-medium ${trendColor}`}>\n          {trendIcon} {change}\n        </span>\n      </div>\n      <motion.p\n        initial={{ opacity: 0, y: 10 }}\n        animate={{ opacity: 1, y: 0 }}\n        className=\"text-3xl font-bold text-white mt-3\"\n      >\n        {value}\n      </motion.p>\n      <p className=\"text-sm text-gray-400 mt-1\">{title}</p>\n    </motion.div>\n  );\n}",
    "props": [
      {
        "name": "title",
        "type": "string",
        "default": "-",
        "description": "Metric name",
        "required": true
      },
      {
        "name": "value",
        "type": "string",
        "default": "-",
        "description": "Metric value",
        "required": true
      },
      {
        "name": "change",
        "type": "string",
        "default": "-",
        "description": "Change percentage",
        "required": true
      },
      {
        "name": "trend",
        "type": "\"up\" | \"down\" | \"neutral\"",
        "default": "-",
        "description": "Trend direction",
        "required": true
      },
      {
        "name": "icon",
        "type": "string",
        "default": "-",
        "description": "Icon emoji",
        "required": true
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Stats card.",
        "code": "<StatsCard title=\"Total Revenue\" value=\"$45,231\" change=\"+12.5%\" trend=\"up\" icon=\"💰\" />"
      }
    ]
  },
  {
    "name": "Data Table",
    "slug": "data-table",
    "description": "A sleek data table with hover effects and sorted columns.",
    "category": "data-display",
    "tags": [
      "table",
      "data",
      "grid",
      "list"
    ],
    "featured": false,
    "trending": false,
    "new": false,
    "createdAt": "2025-02-25",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface Column {\n  key;\n  label;\n  align?: \"left\" | \"center\" | \"right\";\n}\n\ninterface DataTableProps {\n  columns: Column[];\n  data: Record<string, string | number>[];\n}\n\nexport default function DataTable({ columns, data }: DataTableProps) {\n  return (\n    <div className=\"overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl\">\n      <table className=\"w-full\">\n        <thead>\n          <tr className=\"border-b border-white/10\">\n            {columns.map((col) => (\n              <th key={col.key} className={`px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400 text-${col.align || \"left\"}`}>\n                {col.label}\n              </th>\n            ))}\n          </tr>\n        </thead>\n        <tbody>\n          {data.map((row, i) => (\n            <motion.tr\n              key={i}\n              initial={{ opacity: 0, x: -20 }}\n              animate={{ opacity: 1, x: 0 }}\n              transition={{ delay: i * 0.05 }}\n              className=\"border-b border-white/5 hover:bg-white/5 transition-colors\"\n            >\n              {columns.map((col) => (\n                <td key={col.key} className={`px-6 py-4 text-sm text-gray-300 text-${col.align || \"left\"}`}>\n                  {row[col.key]}\n                </td>\n              ))}\n            </motion.tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n}",
    "props": [
      {
        "name": "columns",
        "type": "Column[]",
        "default": "-",
        "description": "Column definitions",
        "required": true
      },
      {
        "name": "data",
        "type": "Record<string, string | number>[]",
        "default": "-",
        "description": "Row data",
        "required": true
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Simple data table.",
        "code": "<DataTable\n  columns={[{ key: \"name\", label: \"Name\" }, { key: \"role\", label: \"Role\" }, { key: \"status\", label: \"Status\" }]}\n  data={[{ name: \"Alex\", role: \"Developer\", status: \"Active\" }, { name: \"Sam\", role: \"Designer\", status: \"Away\" }]}\n/>"
      }
    ]
  },
  {
    "name": "Timeline",
    "slug": "timeline",
    "description": "A vertical timeline component with animated entries.",
    "category": "data-display",
    "tags": [
      "timeline",
      "history",
      "events",
      "vertical"
    ],
    "featured": false,
    "trending": false,
    "new": false,
    "createdAt": "2025-03-10",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface TimelineItem {\n  title;\n  description;\n  date;\n  icon?;\n}\n\ninterface TimelineProps {\n  items: TimelineItem[];\n}\n\nexport default function Timeline({ items }: TimelineProps) {\n  return (\n    <div className=\"relative\">\n      <div className=\"absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600 via-indigo-600 to-transparent\" />\n      <div className=\"space-y-8\">\n        {items.map((item, i) => (\n          <motion.div\n            key={i}\n            initial={{ opacity: 0, x: -20 }}\n            animate={{ opacity: 1, x: 0 }}\n            transition={{ delay: i * 0.15 }}\n            className=\"relative pl-12\"\n          >\n            <div className=\"absolute left-2 top-1 w-5 h-5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 border-4 border-gray-950 flex items-center justify-center text-[10px]\">\n              {item.icon || \"\"}\n            </div>\n            <div className=\"bg-white/5 border border-white/10 rounded-xl p-4\">\n              <span className=\"text-xs text-violet-400\">{item.date}</span>\n              <h4 className=\"text-white font-semibold mt-1\">{item.title}</h4>\n              <p className=\"text-gray-400 text-sm mt-1\">{item.description}</p>\n            </div>\n          </motion.div>\n        ))}\n      </div>\n    </div>\n  );\n}",
    "props": [
      {
        "name": "items",
        "type": "TimelineItem[]",
        "default": "-",
        "description": "Timeline entries",
        "required": true
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Simple timeline.",
        "code": "<Timeline items={[\n  { title: \"Project Started\", description: \"Initial commit and setup.\", date: \"Jan 2025\" },\n  { title: \"v1.0 Release\", description: \"First stable release.\", date: \"Mar 2025\" },\n]} />"
      }
    ]
  },
  {
    "name": "Modal Dialog",
    "slug": "modal-dialog",
    "description": "An animated modal dialog with backdrop blur.",
    "category": "overlay",
    "tags": [
      "modal",
      "dialog",
      "overlay",
      "popup"
    ],
    "featured": false,
    "trending": false,
    "new": false,
    "createdAt": "2025-02-08",
    "code": "\"use client\";\nimport { motion, AnimatePresence } from \"motion/react\";\n\ninterface ModalProps {\n  open;\n  onClose: () => void;\n  title;\n  children: React.ReactNode;\n}\n\nexport default function Modal({ open, onClose, title, children }: ModalProps) {\n  return (\n    <AnimatePresence>\n      {open && (\n        <>\n          <motion.div\n            initial={{ opacity: 0 }}\n            animate={{ opacity: 1 }}\n            exit={{ opacity: 0 }}\n            onClick={onClose}\n            className=\"fixed inset-0 bg-black/60 backdrop-blur-sm z-40\"\n          />\n          <motion.div\n            initial={{ opacity: 0, scale: 0.95, y: 20 }}\n            animate={{ opacity: 1, scale: 1, y: 0 }}\n            exit={{ opacity: 0, scale: 0.95, y: 20 }}\n            className=\"fixed inset-0 flex items-center justify-center z-50 p-4\"\n          >\n            <div className=\"bg-gray-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl\">\n              <div className=\"flex items-center justify-between mb-4\">\n                <h3 className=\"text-lg font-semibold text-white\">{title}</h3>\n                <button onClick={onClose} className=\"text-gray-400 hover:text-white text-xl\">✕</button>\n              </div>\n              {children}\n            </div>\n          </motion.div>\n        </>\n      )}\n    </AnimatePresence>\n  );\n}",
    "props": [
      {
        "name": "open",
        "type": "boolean",
        "default": "-",
        "description": "Open state",
        "required": true
      },
      {
        "name": "onClose",
        "type": "() => void",
        "default": "-",
        "description": "Close handler",
        "required": true
      },
      {
        "name": "title",
        "type": "string",
        "default": "-",
        "description": "Modal title",
        "required": true
      },
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "-",
        "description": "Modal content",
        "required": true
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Simple modal.",
        "code": "<Modal open={true} onClose={() => {}} title=\"Confirm Action\"><p className=\"text-gray-400\">Are you sure?</p></Modal>"
      }
    ]
  },
  {
    "name": "Drawer",
    "slug": "drawer",
    "description": "A slide-in drawer panel from any edge of the screen.",
    "category": "overlay",
    "tags": [
      "drawer",
      "panel",
      "slide",
      "overlay"
    ],
    "featured": false,
    "trending": false,
    "new": false,
    "createdAt": "2025-02-18",
    "code": "\"use client\";\nimport { motion, AnimatePresence } from \"motion/react\";\n\ninterface DrawerProps {\n  open;\n  onClose: () => void;\n  side?: \"left\" | \"right\";\n  title;\n  children: React.ReactNode;\n}\n\nexport default function Drawer({ open, onClose, side = \"right\", title, children }: DrawerProps) {\n  const slideFrom = side === \"right\" ? { x: \"100%\" } : { x: \"-100%\" };\n  return (\n    <AnimatePresence>\n      {open && (\n        <>\n          <motion.div\n            initial={{ opacity: 0 }}\n            animate={{ opacity: 1 }}\n            exit={{ opacity: 0 }}\n            onClick={onClose}\n            className=\"fixed inset-0 bg-black/60 backdrop-blur-sm z-40\"\n          />\n          <motion.div\n            initial={slideFrom}\n            animate={{ x: 0 }}\n            exit={slideFrom}\n            transition={{ type: \"spring\", damping: 30, stiffness: 300 }}\n            className={`fixed top-0 ${side}-0 h-full w-80 bg-gray-900/95 backdrop-blur-2xl border-${side === \"right\" ? \"l\" : \"r\"} border-white/10 z-50 p-6`}\n          >\n            <div className=\"flex items-center justify-between mb-6\">\n              <h3 className=\"text-lg font-semibold text-white\">{title}</h3>\n              <button onClick={onClose} className=\"text-gray-400 hover:text-white\">✕</button>\n            </div>\n            {children}\n          </motion.div>\n        </>\n      )}\n    </AnimatePresence>\n  );\n}",
    "props": [
      {
        "name": "open",
        "type": "boolean",
        "default": "-",
        "description": "Open state",
        "required": true
      },
      {
        "name": "onClose",
        "type": "() => void",
        "default": "-",
        "description": "Close handler",
        "required": true
      },
      {
        "name": "side",
        "type": "\"left\" | \"right\"",
        "default": "\"right\"",
        "description": "Slide direction"
      },
      {
        "name": "title",
        "type": "string",
        "default": "-",
        "description": "Drawer title",
        "required": true
      },
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "-",
        "description": "Drawer content",
        "required": true
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Right drawer.",
        "code": "<Drawer open={true} onClose={() => {}} title=\"Settings\"><p className=\"text-gray-400\">Drawer content</p></Drawer>"
      }
    ]
  },
  {
    "name": "Tooltip",
    "slug": "tooltip",
    "description": "A lightweight animated tooltip that appears on hover.",
    "category": "overlay",
    "tags": [
      "tooltip",
      "hover",
      "popup",
      "info"
    ],
    "featured": false,
    "trending": false,
    "new": false,
    "createdAt": "2025-03-01",
    "code": "\"use client\";\nimport { useState } from \"react\";\nimport { motion, AnimatePresence } from \"motion/react\";\n\ninterface TooltipProps {\n  content;\n  children: React.ReactNode;\n  position?: \"top\" | \"bottom\" | \"left\" | \"right\";\n}\n\nconst positions = {\n  top: \"-top-10 left-1/2 -translate-x-1/2\",\n  bottom: \"-bottom-10 left-1/2 -translate-x-1/2\",\n  left: \"top-1/2 -translate-y-1/2 -left-2 -translate-x-full\",\n  right: \"top-1/2 -translate-y-1/2 -right-2 translate-x-full\",\n};\n\nexport default function Tooltip({ content, children, position = \"top\" }: TooltipProps) {\n  const [show, setShow] = useState(false);\n\n  return (\n    <div\n      className=\"relative inline-block\"\n      onMouseEnter={() => setShow(true)}\n      onMouseLeave={() => setShow(false)}\n    >\n      {children}\n      <AnimatePresence>\n        {show && (\n          <motion.div\n            initial={{ opacity: 0, scale: 0.9 }}\n            animate={{ opacity: 1, scale: 1 }}\n            exit={{ opacity: 0, scale: 0.9 }}\n            className={`absolute ${positions[position]} bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-50 border border-white/10`}\n          >\n            {content}\n          </motion.div>\n        )}\n      </AnimatePresence>\n    </div>\n  );\n}",
    "props": [
      {
        "name": "content",
        "type": "string",
        "default": "-",
        "description": "Tooltip text",
        "required": true
      },
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "-",
        "description": "Trigger element",
        "required": true
      },
      {
        "name": "position",
        "type": "\"top\" | \"bottom\" | \"left\" | \"right\"",
        "default": "\"top\"",
        "description": "Tooltip position"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Hover tooltip.",
        "code": "<Tooltip content=\"Hello!\"><button className=\"text-white\">Hover me</button></Tooltip>"
      }
    ]
  },
  {
    "name": "Music Player",
    "slug": "music-player",
    "description": "A compact music player with progress bar and controls.",
    "category": "media",
    "tags": [
      "music",
      "player",
      "audio",
      "media"
    ],
    "featured": true,
    "trending": true,
    "new": false,
    "createdAt": "2025-02-22",
    "code": "\"use client\";\nimport { useState } from \"react\";\nimport { motion } from \"motion/react\";\n\ninterface MusicPlayerProps {\n  title;\n  artist;\n  albumArt?;\n}\n\nexport default function MusicPlayer({ title, artist }: MusicPlayerProps) {\n  const [playing, setPlaying] = useState(false);\n  const [progress, setProgress] = useState(35);\n\n  return (\n    <div className=\"bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 max-w-sm\">\n      <div className=\"flex items-center gap-4\">\n        <motion.div\n          animate={{ rotate: playing ? 360 : 0 }}\n          transition={{ duration: 3, repeat: playing ? Infinity : 0, ease: \"linear\" }}\n          className=\"w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-2xl shadow-lg\"\n        >\n          🎵\n        </motion.div>\n        <div className=\"flex-1 min-w-0\">\n          <h4 className=\"text-white font-semibold truncate\">{title}</h4>\n          <p className=\"text-gray-400 text-sm truncate\">{artist}</p>\n        </div>\n      </div>\n      <div className=\"mt-4\">\n        <div className=\"h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer\" onClick={(e) => {\n          const rect = e.currentTarget.getBoundingClientRect();\n          setProgress(((e.clientX - rect.left) / rect.width) * 100);\n        }}>\n          <motion.div animate={{ width: `${progress}%` }} className=\"h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full\" />\n        </div>\n        <div className=\"flex justify-between text-xs text-gray-500 mt-1\">\n          <span>1:24</span>\n          <span>3:45</span>\n        </div>\n      </div>\n      <div className=\"flex items-center justify-center gap-6 mt-3\">\n        <button className=\"text-gray-400 hover:text-white transition-colors\">⏮</button>\n        <motion.button\n          whileHover={{ scale: 1.1 }}\n          whileTap={{ scale: 0.9 }}\n          onClick={() => setPlaying(!playing)}\n          className=\"w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold\"\n        >\n          {playing ? \"⏸\" : \"▶\"}\n        </motion.button>\n        <button className=\"text-gray-400 hover:text-white transition-colors\">⏭</button>\n      </div>\n    </div>\n  );\n}",
    "props": [
      {
        "name": "title",
        "type": "string",
        "default": "-",
        "description": "Song title",
        "required": true
      },
      {
        "name": "artist",
        "type": "string",
        "default": "-",
        "description": "Artist name",
        "required": true
      },
      {
        "name": "albumArt",
        "type": "string",
        "default": "-",
        "description": "Album art URL"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Music player.",
        "code": "<MusicPlayer title=\"Midnight Dreams\" artist=\"Nova Sound\" />"
      }
    ]
  },
  {
    "name": "Avatar Group",
    "slug": "avatar-group",
    "description": "A stack of overlapping avatars with a count indicator.",
    "category": "media",
    "tags": [
      "avatar",
      "group",
      "users",
      "stack"
    ],
    "featured": false,
    "trending": false,
    "new": false,
    "createdAt": "2025-03-08",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface AvatarGroupProps {\n  avatars: { name; color? }[];\n  max?;\n  size?: \"sm\" | \"md\" | \"lg\";\n}\n\nconst sizes = { sm: \"w-8 h-8 text-xs\", md: \"w-10 h-10 text-sm\", lg: \"w-12 h-12 text-base\" };\nconst offsets = { sm: \"-ml-2\", md: \"-ml-3\", lg: \"-ml-4\" };\n\nexport default function AvatarGroup({ avatars, max = 5, size = \"md\" }: AvatarGroupProps) {\n  const visible = avatars.slice(0, max);\n  const remaining = avatars.length - max;\n\n  return (\n    <div className=\"flex items-center\">\n      {visible.map((a, i) => (\n        <motion.div\n          key={i}\n          initial={{ opacity: 0, scale: 0 }}\n          animate={{ opacity: 1, scale: 1 }}\n          transition={{ delay: i * 0.1 }}\n          className={`${sizes[size]} ${i > 0 ? offsets[size] : \"\"} rounded-full flex items-center justify-center font-bold text-white ring-2 ring-gray-950`}\n          style={{ backgroundColor: a.color || \"#7C3AED\", zIndex: visible.length - i }}\n        >\n          {a.name.slice(0, 2).toUpperCase()}\n        </motion.div>\n      ))}\n      {remaining > 0 && (\n        <div className={`${sizes[size]} ${offsets[size]} rounded-full flex items-center justify-center font-bold text-white bg-gray-700 ring-2 ring-gray-950`}>\n          +{remaining}\n        </div>\n      )}\n    </div>\n  );\n}",
    "props": [
      {
        "name": "avatars",
        "type": "{ name; color? }[]",
        "default": "-",
        "description": "Avatar data",
        "required": true
      },
      {
        "name": "max",
        "type": "number",
        "default": "5",
        "description": "Max visible avatars"
      },
      {
        "name": "size",
        "type": "\"sm\" | \"md\" | \"lg\"",
        "default": "\"md\"",
        "description": "Avatar size"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Avatar group.",
        "code": "<AvatarGroup avatars={[{ name: \"Alex\" }, { name: \"Sam\", color: \"#4F46E5\" }, { name: \"Jordan\", color: \"#EC4899\" }, { name: \"Chris\" }]} />"
      }
    ]
  },
  {
    "name": "Glass Navbar",
    "slug": "glass-navbar",
    "description": "A floating glassmorphism navigation bar.",
    "category": "glass",
    "tags": [
      "navbar",
      "glass",
      "glassmorphism",
      "navigation"
    ],
    "featured": true,
    "trending": false,
    "new": false,
    "createdAt": "2025-01-18",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface NavItem {\n  label;\n  href;\n  active?;\n}\n\ninterface GlassNavbarProps {\n  brand;\n  items: NavItem[];\n}\n\nexport default function GlassNavbar({ brand, items }: GlassNavbarProps) {\n  return (\n    <motion.nav\n      initial={{ y: -20, opacity: 0 }}\n      animate={{ y: 0, opacity: 1 }}\n      className=\"bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between max-w-4xl mx-auto\"\n    >\n      <span className=\"text-lg font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent\">{brand}</span>\n      <div className=\"flex items-center gap-1\">\n        {items.map((item) => (\n          <a\n            key={item.label}\n            href={item.href}\n            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${\n              item.active ? \"bg-white/10 text-white\" : \"text-gray-400 hover:text-white hover:bg-white/5\"\n            }`}\n          >\n            {item.label}\n          </a>\n        ))}\n      </div>\n    </motion.nav>\n  );\n}",
    "props": [
      {
        "name": "brand",
        "type": "string",
        "default": "-",
        "description": "Brand name",
        "required": true
      },
      {
        "name": "items",
        "type": "NavItem[]",
        "default": "-",
        "description": "Navigation items",
        "required": true
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Glass navbar.",
        "code": "<GlassNavbar brand=\"Nova\" items={[{ label: \"Home\", href: \"#\", active: true }, { label: \"About\", href: \"#\" }, { label: \"Contact\", href: \"#\" }]} />"
      }
    ]
  },
  {
    "name": "Glass Input",
    "slug": "glass-input",
    "description": "A glassmorphism styled input field with focus glow.",
    "category": "glass",
    "tags": [
      "input",
      "glass",
      "glassmorphism",
      "form"
    ],
    "featured": false,
    "trending": false,
    "new": true,
    "createdAt": "2025-04-01",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\nimport { useState } from \"react\";\n\ninterface GlassInputProps {\n  placeholder?;\n  type?;\n  icon?;\n  value?;\n  onChange?: (value) => void;\n}\n\nexport default function GlassInput({ placeholder, type = \"text\", icon, value, onChange }: GlassInputProps) {\n  const [focused, setFocused] = useState(false);\n\n  return (\n    <motion.div\n      animate={{ boxShadow: focused ? \"0 0 20px rgba(124, 58, 237, 0.3)\" : \"none\" }}\n      className=\"relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden transition-all focus-within:border-violet-500/50\"\n    >\n      {icon && <span className=\"pl-4 text-gray-400\">{icon}</span>}\n      <input\n        type={type}\n        placeholder={placeholder}\n        value={value}\n        onChange={(e) => onChange?.(e.target.value)}\n        onFocus={() => setFocused(true)}\n        onBlur={() => setFocused(false)}\n        className=\"w-full bg-transparent px-4 py-3 text-white placeholder-gray-500 outline-none\"\n      />\n    </motion.div>\n  );\n}",
    "props": [
      {
        "name": "placeholder",
        "type": "string",
        "default": "-",
        "description": "Placeholder text"
      },
      {
        "name": "type",
        "type": "string",
        "default": "\"text\"",
        "description": "Input type"
      },
      {
        "name": "icon",
        "type": "string",
        "default": "-",
        "description": "Leading icon"
      },
      {
        "name": "value",
        "type": "string",
        "default": "-",
        "description": "Controlled value"
      },
      {
        "name": "onChange",
        "type": "(value) => void",
        "default": "-",
        "description": "Change handler"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Glass input.",
        "code": "<GlassInput placeholder=\"Search...\" icon=\"🔍\" />"
      }
    ]
  },
  {
    "name": "Glass Card Hover",
    "slug": "glass-card-hover",
    "description": "A glass card with animated glow border on hover.",
    "category": "glass",
    "tags": [
      "card",
      "glass",
      "hover",
      "glow"
    ],
    "featured": false,
    "trending": true,
    "new": true,
    "createdAt": "2025-04-20",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\nimport { useState } from \"react\";\n\ninterface GlassCardHoverProps {\n  children: React.ReactNode;\n  className?;\n}\n\nexport default function GlassCardHover({ children, className = \"\" }: GlassCardHoverProps) {\n  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });\n  const [isHovered, setIsHovered] = useState(false);\n\n  return (\n    <motion.div\n      onMouseMove={(e) => {\n        const rect = e.currentTarget.getBoundingClientRect();\n        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });\n      }}\n      onMouseEnter={() => setIsHovered(true)}\n      onMouseLeave={() => setIsHovered(false)}\n      whileHover={{ y: -5 }}\n      className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden ${className}`}\n    >\n      {isHovered && (\n        <div\n          className=\"pointer-events-none absolute inset-0 opacity-50\"\n          style={{\n            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.15), transparent 70%)`,\n          }}\n        />\n      )}\n      <div className=\"relative z-10\">{children}</div>\n    </motion.div>\n  );\n}",
    "props": [
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "-",
        "description": "Card content",
        "required": true
      },
      {
        "name": "className",
        "type": "string",
        "default": "\"\"",
        "description": "Additional CSS"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Glass card with hover glow.",
        "code": "<GlassCardHover>\n  <h3 className=\"text-lg font-bold text-white\">Hover Glow</h3>\n  <p className=\"text-gray-400 mt-2\">Move your mouse over this card.</p>\n</GlassCardHover>"
      }
    ]
  },
  {
    "name": "Notification Badge",
    "slug": "notification-badge",
    "description": "An animated notification badge with pulse effect.",
    "category": "commerce",
    "tags": [
      "badge",
      "notification",
      "indicator",
      "alert"
    ],
    "featured": false,
    "trending": false,
    "new": false,
    "createdAt": "2025-03-12",
    "code": "\"use client\";\nimport { motion } from \"motion/react\";\n\ninterface NotificationBadgeProps {\n  count;\n  children: React.ReactNode;\n  color?;\n  pulse?;\n}\n\nexport default function NotificationBadge({\n  count,\n  children,\n  color = \"bg-red-500\",\n  pulse = true,\n}: NotificationBadgeProps) {\n  return (\n    <div className=\"relative inline-block\">\n      {children}\n      {count > 0 && (\n        <motion.span\n          initial={{ scale: 0 }}\n          animate={{ scale: 1 }}\n          className={`absolute -top-2 -right-2 ${color} text-white text-xs font-bold min-w-[20px] h-5 flex items-center justify-center rounded-full px-1`}\n        >\n          {pulse && (\n            <span className={`absolute inset-0 ${color} rounded-full animate-ping opacity-40`} />\n          )}\n          <span className=\"relative\">{count > 99 ? \"99+\" : count}</span>\n        </motion.span>\n      )}\n    </div>\n  );\n}",
    "props": [
      {
        "name": "count",
        "type": "number",
        "default": "-",
        "description": "Notification count",
        "required": true
      },
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "-",
        "description": "Content to badge",
        "required": true
      },
      {
        "name": "color",
        "type": "string",
        "default": "\"bg-red-500\"",
        "description": "Badge color class"
      },
      {
        "name": "pulse",
        "type": "boolean",
        "default": "true",
        "description": "Enable pulse animation"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Notification badge.",
        "code": "<NotificationBadge count={5}>\n  <button className=\"p-3 bg-white/10 rounded-xl text-white\">🔔</button>\n</NotificationBadge>"
      }
    ]
  },
  {
    "name": "Command Palette",
    "slug": "command-palette-component",
    "description": "A spotlight-style command palette for quick navigation.",
    "category": "commerce",
    "tags": [
      "command",
      "palette",
      "search",
      "spotlight"
    ],
    "featured": true,
    "trending": true,
    "new": true,
    "createdAt": "2025-04-25",
    "code": "\"use client\";\nimport { useState } from \"react\";\nimport { motion, AnimatePresence } from \"motion/react\";\n\ninterface CommandItem {\n  icon;\n  label;\n  shortcut?;\n  action: () => void;\n}\n\ninterface CommandPaletteComponentProps {\n  open;\n  onClose: () => void;\n  items: CommandItem[];\n  placeholder?;\n}\n\nexport default function CommandPaletteComponent({\n  open,\n  onClose,\n  items,\n  placeholder = \"Type a command...\",\n}: CommandPaletteComponentProps) {\n  const [query, setQuery] = useState(\"\");\n  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));\n\n  return (\n    <AnimatePresence>\n      {open && (\n        <>\n          <motion.div\n            initial={{ opacity: 0 }}\n            animate={{ opacity: 1 }}\n            exit={{ opacity: 0 }}\n            onClick={onClose}\n            className=\"fixed inset-0 bg-black/60 backdrop-blur-sm z-50\"\n          />\n          <motion.div\n            initial={{ opacity: 0, scale: 0.95, y: -20 }}\n            animate={{ opacity: 1, scale: 1, y: 0 }}\n            exit={{ opacity: 0, scale: 0.95, y: -20 }}\n            className=\"fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-50\"\n          >\n            <div className=\"bg-gray-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden\">\n              <input\n                autoFocus\n                value={query}\n                onChange={(e) => setQuery(e.target.value)}\n                placeholder={placeholder}\n                className=\"w-full bg-transparent px-5 py-4 text-white placeholder-gray-500 outline-none border-b border-white/10 text-lg\"\n              />\n              <div className=\"max-h-72 overflow-y-auto p-2\">\n                {filtered.map((item, i) => (\n                  <button\n                    key={i}\n                    onClick={() => { item.action(); onClose(); setQuery(\"\"); }}\n                    className=\"w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-white/5 transition-colors\"\n                  >\n                    <span className=\"text-lg\">{item.icon}</span>\n                    <span className=\"flex-1 text-white text-sm\">{item.label}</span>\n                    {item.shortcut && (\n                      <span className=\"text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-md\">{item.shortcut}</span>\n                    )}\n                  </button>\n                ))}\n                {filtered.length === 0 && (\n                  <p className=\"text-center text-gray-500 py-8\">No results found.</p>\n                )}\n              </div>\n            </div>\n          </motion.div>\n        </>\n      )}\n    </AnimatePresence>\n  );\n}",
    "props": [
      {
        "name": "open",
        "type": "boolean",
        "default": "-",
        "description": "Open state",
        "required": true
      },
      {
        "name": "onClose",
        "type": "() => void",
        "default": "-",
        "description": "Close handler",
        "required": true
      },
      {
        "name": "items",
        "type": "CommandItem[]",
        "default": "-",
        "description": "Command items",
        "required": true
      },
      {
        "name": "placeholder",
        "type": "string",
        "default": "\"Type a command...\"",
        "description": "Input placeholder"
      }
    ],
    "examples": [
      {
        "title": "Basic",
        "description": "Command palette.",
        "code": "<CommandPaletteComponent\n  open={true}\n  onClose={() => {}}\n  items={[\n    { icon: \"🏠\", label: \"Go Home\", action: () => {} },\n    { icon: \"📦\", label: \"Components\", shortcut: \"⌘2\", action: () => {} },\n  ]}\n/>"
      }
    ]
  }
];

export function getComponentBySlug(slug: string): ComponentItem | undefined {
  return components.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: string): ComponentItem[] {
  return components.filter((c) => c.category === category);
}

export function getFeaturedComponents(): ComponentItem[] {
  return components.filter((c) => c.featured);
}

export function getTrendingComponents(): ComponentItem[] {
  return components.filter((c) => c.trending);
}

export function getNewComponents(): ComponentItem[] {
  return components.filter((c) => c.new);
}

export function searchComponents(query: string): ComponentItem[] {
  const q = query.toLowerCase();
  return components.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.tags.some((t) => t.includes(q))
  );
}
