import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nova UI — Premium React Component Library",
    template: "%s | Nova UI",
  },
  description:
    "A modern, premium collection of beautifully crafted React components with live preview, customization, and copy-to-clipboard features. Built with Next.js, TypeScript, Tailwind CSS, and Motion.",
  keywords: [
    "React components",
    "UI library",
    "Tailwind CSS",
    "Next.js",
    "TypeScript",
    "glassmorphism",
    "motion",
    "framer motion",
  ],
  authors: [{ name: "Nova UI" }],
  openGraph: {
    title: "Nova UI — Premium React Component Library",
    description:
      "Browse, preview, customize, and copy 40+ beautifully crafted React components.",
    type: "website",
    locale: "en_US",
    siteName: "Nova UI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
