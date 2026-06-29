export interface ComponentItem {
  name: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  code: string;
  cssCode?: string;
  tailwindCode?: string;
  previewBg?: string;
  props: PropDefinition[];
  examples: ComponentExample[];
  featured?: boolean;
  trending?: boolean;
  new?: boolean;
  createdAt: string;
}

export interface PropDefinition {
  name: string;
  type: string;
  default: string;
  description: string;
  required?: boolean;
}

export interface ComponentExample {
  title: string;
  description: string;
  code: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

export interface Template {
  name: string;
  slug: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  code: string;
  featured?: boolean;
}

export interface AnimationShowcase {
  name: string;
  slug: string;
  description: string;
  category: string;
  code: string;
  previewType: "hover" | "scroll" | "click" | "auto";
}

export interface DocSection {
  title: string;
  slug: string;
  content: string;
  order: number;
}

export interface CustomizerConfig {
  borderRadius: number;
  padding: number;
  primaryColor: string;
  secondaryColor: string;
  blur: number;
  glow: number;
  shadow: number;
  animationSpeed: number;
  opacity: number;
  gradientFrom: string;
  gradientTo: string;
  theme: "light" | "dark";
  size: "sm" | "md" | "lg";
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  componentSlugs: string[];
  createdAt: string;
}

export type SortOption = "popular" | "newest" | "alphabetical";
export type ViewMode = "grid" | "list";
export type DevicePreview = "desktop" | "tablet" | "mobile";
