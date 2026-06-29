import type { DocSection } from "@/types";

export const docs: DocSection[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    order: 1,
    content: `# Getting Started with Nova UI

Nova UI is a premium React component library built with TypeScript, Tailwind CSS, and Motion (Framer Motion).

## Installation

\`\`\`bash
npx create-next-app@latest my-app --yes
cd my-app
npm install motion lucide-react
\`\`\`

## Quick Setup

1. Copy any component from the library into your project
2. Import and use it in your pages
3. Customize with props or the live customizer

\`\`\`tsx
import GradientButton from "@/components/ui/gradient-button";

export default function Page() {
  return (
    <GradientButton variant="primary" size="lg">
      Click Me
    </GradientButton>
  );
}
\`\`\`

## Requirements

- React 19+
- Next.js 15+ (recommended)
- Tailwind CSS v4
- TypeScript 5+`,
  },
  {
    title: "Usage Guide",
    slug: "usage",
    order: 2,
    content: `# Usage Guide

## Importing Components

All components are standalone files that you can copy directly into your project. No package installation required.

\`\`\`tsx
// Copy the component file to your project
// Then import it like any other component
import GlassCard from "@/components/ui/glass-card";
import { motion } from "motion/react";
\`\`\`

## Component Props

Every component comes with full TypeScript support. Hover over props in your IDE to see type information.

\`\`\`tsx
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}
\`\`\`

## Dark Mode

All components are designed for dark mode by default. They use Tailwind's opacity-based colors (e.g., \`bg-white/5\`) that work beautifully on dark backgrounds.

## Responsive Design

Components are responsive by default. Use Tailwind's responsive prefixes for custom breakpoint behavior:

\`\`\`tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <GlassCard>Card 1</GlassCard>
  <GlassCard>Card 2</GlassCard>
  <GlassCard>Card 3</GlassCard>
</div>
\`\`\``,
  },
  {
    title: "Customization",
    slug: "customization",
    order: 3,
    content: `# Customization Guide

## Live Customizer

Every component on Nova UI comes with a live customizer panel. Adjust these properties in real-time:

- **Border Radius** - Round the corners
- **Padding** - Adjust spacing
- **Colors** - Change the color scheme
- **Blur** - Glassmorphism intensity
- **Glow** - Neon glow effect
- **Shadow** - Box shadow depth
- **Animation Speed** - Motion timing
- **Opacity** - Transparency level
- **Gradient** - Start and end colors
- **Theme** - Light or dark
- **Size** - Component scale

## Custom Themes

You can override any theme variable in your \`globals.css\`:

\`\`\`css
@theme {
  --color-primary: #7C3AED;
  --color-secondary: #4F46E5;
  --radius-default: 16px;
  --blur-glass: 20px;
}
\`\`\`

## Extending Components

All components accept a \`className\` prop for additional styling:

\`\`\`tsx
<GlassCard className="max-w-md mx-auto border-violet-500/30">
  Custom styled card
</GlassCard>
\`\`\`

## Animation Customization

Components use Motion for animations. Override defaults:

\`\`\`tsx
<motion.div
  whileHover={{ scale: 1.1 }}  // Change scale
  transition={{ duration: 0.5 }}  // Change speed
>
  Custom animation
</motion.div>
\`\`\``,
  },
  {
    title: "Theming",
    slug: "theming",
    order: 4,
    content: `# Theming

## Color System

Nova UI uses a carefully crafted color system based on violet and indigo:

| Token | Value | Usage |
|-------|-------|-------|
| Primary | \`#7C3AED\` | Buttons, links, accents |
| Secondary | \`#4F46E5\` | Gradients, backgrounds |
| Surface | \`white/5\` | Card backgrounds |
| Border | \`white/10\` | Subtle borders |
| Text | \`white\` | Primary text |
| Muted | \`gray-400\` | Secondary text |

## Dark / Light Mode

Toggle between modes with the theme store:

\`\`\`tsx
import { useThemeStore } from "@/hooks/use-theme";

function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
\`\`\`

## Typography

Nova UI uses two fonts:
- **Inter** - UI text, headings, body
- **JetBrains Mono** - Code blocks, monospace`,
  },
  {
    title: "Accessibility",
    slug: "accessibility",
    order: 5,
    content: `# Accessibility

## Keyboard Navigation

All interactive components support keyboard navigation:
- \`Tab\` / \`Shift+Tab\` - Navigate between elements
- \`Enter\` / \`Space\` - Activate buttons and links
- \`Escape\` - Close modals, drawers, and dropdowns
- \`Arrow Keys\` - Navigate within menus and tabs

## ARIA Attributes

Components include proper ARIA attributes:

\`\`\`tsx
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  role="button"
>
  ✕
</button>
\`\`\`

## Focus Management

- Visible focus indicators on all interactive elements
- Focus trapping in modals and drawers
- Auto-focus on dialog open

## Color Contrast

All text meets WCAG AA contrast requirements against their backgrounds.

## Screen Readers

Components use semantic HTML and ARIA labels for screen reader support.`,
  },
];

export function getDocBySlug(slug: string): DocSection | undefined {
  return docs.find((d) => d.slug === slug);
}
