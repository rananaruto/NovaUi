# Nova UI — Premium Component Library Website

Nova UI is a premium, feature-rich component library website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Motion (Framer Motion)**. 

It provides an elegant, interactive template for showcasing, previewing, and customizing React components with a glassmorphic aesthetic. This repository is configured as a **clean slate** component registry, ready for you to drop in your own custom components!

---

## ✨ Features

- **🚀 Next.js 15 (App Router)**: Fast, modern rendering and file-based routing.
- **🎨 Tailwind CSS v4**: Built using CSS-first configuration and next-gen Tailwind styling.
- **✨ Motion (Framer Motion v12)**: Smooth micro-interactions, page transitions, and interactive animations.
- **🔧 Live Customizer**: Real-time styling sliders (border radius, padding, blur, shadow, glow, opacity, gradients) that update component wrappers instantly.
- **📱 Responsive Preview**: Toggle component viewports between Desktop, Tablet, and Mobile sizes instantly.
- **📖 Documentation System**: Included sidebar navigation and markdown parser for getting started, custom guides, accessibility rules, and layout structures.
- **🎨 Templates Grid**: Pre-built showcase layouts (Analytics Dashboards, SaaS Landing Pages, Portfolios, and App Mockups).
- **🔍 Spotlight Search**: Global keyboard shortcut search (`Ctrl+K` or `⌘K`) matching routes, documents, and custom components.
- **🌙 Theme Management**: Built-in light/dark theme context synced with localStorage persistence using Zustand.
- **📂 clean slate registry**: Cleared of placeholder data and ready for your components (`data/components.ts` and `components/preview-registry.tsx`).

---

## 📂 Folder Structure

```bash
├── app/                      # Page routes and layout wrappers
│   ├── animations/           # Interactive animation showcase
│   ├── components/           # Component listing and details
│   ├── docs/                 # Documentation pages
│   ├── templates/            # Pre-built template showcase
│   ├── globals.css           # Tailwind v4 imports, themes, animations
│   ├── layout.tsx            # App root structure (fonts, metadata)
│   └── page.tsx              # Home landing page with hero and stats
├── components/               # Shareable layouts and preview engine
│   ├── layouts/              # Navbar & Footer
│   ├── shared/               # CodeBlock, Customizer, ResponsivePreview, etc.
│   └── preview-registry.tsx  # Dynamic component rendering engine (clean slate)
├── data/                     # Local data layer
│   ├── categories.ts         # Navigation categories
│   ├── components.ts         # Component catalog entries (clean slate)
│   ├── docs.ts               # Documentation markdown pages
│   └── templates.ts          # Page template data
├── hooks/                    # Custom React hooks
│   ├── use-favorites.ts      # Zustand favorite items storage
│   ├── use-theme.ts          # Zustand dark/light theme manager
│   └── use-keyboard-shortcuts.ts # Spotlight search trigger
├── lib/                      # Helper utilities
│   └── utils.ts              # cn() style mergers
└── types/                    # TypeScript interfaces
    └── index.ts              # Type declarations
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/rananaruto/NovaUi.git
cd NovaUi
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for production
```bash
npm run build
```

---

## 🔧 Adding Your Own Components

To show your custom components on Nova UI, you only need to update two files:

### Step 1: Add Details to data/components.ts
Add a component item entry:
```typescript
// data/components.ts
export const components: ComponentItem[] = [
  {
    name: "My Custom Button",
    slug: "my-custom-button",
    description: "An elegant interactive custom button.",
    category: "buttons",
    tags: ["button", "custom"],
    code: `export default function MyButton() { ... }`,
    props: [
      { name: "onClick", type: "() => void", default: "-", description: "Click event" }
    ],
    examples: [
      { title: "Basic", description: "Default usage", code: "<MyButton />" }
    ],
    createdAt: "2026-06-29"
  }
];
```

### Step 2: Register in components/preview-registry.tsx
Export your component code and map it to your slug:
```tsx
// components/preview-registry.tsx
export function MyCustomButton() {
  return <button className="bg-violet-600 px-4 py-2 rounded-xl text-white">My Button</button>;
}

export const PreviewRegistry = {
  "my-custom-button": MyCustomButton,
};
```
The website will **automatically** generate the detail page, responsive preview sandbox, props table, live customizer settings, and copy buttons for your new component!
