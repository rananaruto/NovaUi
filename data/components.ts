import type { ComponentItem } from "@/types";

export const components: ComponentItem[] = [];

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
