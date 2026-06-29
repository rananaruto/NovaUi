import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

export function getRandomGradient(): string {
  const gradients = [
    "from-violet-600 to-indigo-600",
    "from-purple-600 to-pink-600",
    "from-blue-600 to-cyan-600",
    "from-emerald-600 to-teal-600",
    "from-orange-600 to-rose-600",
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
}
