"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import {
  Eye, Code as CodeIcon, Settings, BookOpen, Copy, Download,
  FileCode, Paintbrush, ArrowLeft, Heart, ExternalLink
} from "lucide-react";
import Link from "next/link";
import { getComponentBySlug } from "@/data/components";
import CodeBlock from "@/components/shared/code-block";
import CopyButton from "@/components/shared/copy-button";
import CustomizerPanel from "@/components/shared/customizer-panel";
import ResponsivePreview from "@/components/shared/responsive-preview";
import { useFavoritesStore } from "@/hooks/use-favorites";
import type { CustomizerConfig, DevicePreview } from "@/types";
import { PreviewRegistry } from "@/components/preview-registry";

export default function ComponentDetailClient({ slug }: { slug: string }) {
  const component = getComponentBySlug(slug);

  const [activeTab, setActiveTab] = useState<"preview" | "code" | "customizer" | "props">("preview");
  const [device, setDevice] = useState<DevicePreview>("desktop");
  const { toggleFavorite, favorites, addRecentlyViewed } = useFavoritesStore();
  const isFav = favorites.includes(slug);

  const [customizerConfig, setCustomizerConfig] = useState<CustomizerConfig>({
    borderRadius: 16,
    padding: 24,
    primaryColor: "#7C3AED",
    secondaryColor: "#4F46E5",
    blur: 20,
    glow: 0,
    shadow: 10,
    animationSpeed: 1,
    opacity: 1,
    gradientFrom: "#7C3AED",
    gradientTo: "#4F46E5",
    theme: "dark",
    size: "md",
  });

  useEffect(() => {
    if (component) addRecentlyViewed(slug);
  }, [slug, component, addRecentlyViewed]);

  if (!component) notFound();

  const tabs = [
    { id: "preview" as const, label: "Preview", icon: <Eye className="w-4 h-4" /> },
    { id: "code" as const, label: "Code", icon: <CodeIcon className="w-4 h-4" /> },
    { id: "customizer" as const, label: "Customizer", icon: <Settings className="w-4 h-4" /> },
    { id: "props" as const, label: "Props", icon: <BookOpen className="w-4 h-4" /> },
  ];

  const customizedStyle = {
    borderRadius: `${customizerConfig.borderRadius}px`,
    padding: `${customizerConfig.padding}px`,
    backdropFilter: `blur(${customizerConfig.blur}px)`,
    boxShadow: customizerConfig.glow > 0
      ? `0 0 ${customizerConfig.glow}px ${customizerConfig.primaryColor}40, 0 ${customizerConfig.shadow}px ${customizerConfig.shadow * 2}px rgba(0,0,0,0.3)`
      : `0 ${customizerConfig.shadow}px ${customizerConfig.shadow * 2}px rgba(0,0,0,0.3)`,
    opacity: customizerConfig.opacity,
    background: `linear-gradient(135deg, ${customizerConfig.gradientFrom}20, ${customizerConfig.gradientTo}20)`,
    border: "1px solid rgba(255,255,255,0.1)",
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb & Actions */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Link
            href="/components"
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <span className="text-gray-700">/</span>
          <span className="text-gray-500 text-sm capitalize">{component.category}</span>
          <span className="text-gray-700">/</span>
          <span className="text-white text-sm font-medium">{component.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleFavorite(slug)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              isFav
                ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
            }`}
          >
            <Heart className="w-4 h-4" fill={isFav ? "currentColor" : "none"} />
            {isFav ? "Saved" : "Save"}
          </motion.button>
        </div>
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-white">{component.name}</h1>
          {component.new && (
            <span className="px-2 py-0.5 text-xs font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
              New
            </span>
          )}
        </div>
        <p className="text-gray-400">{component.description}</p>
        <div className="flex items-center gap-2 mt-3">
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-white/5 text-gray-500 border border-white/10 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white/[0.03] border border-white/10 rounded-xl mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 justify-center ${
                  activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="detailTab"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon} {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "preview" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ResponsivePreview device={device} onDeviceChange={setDevice}>
                <div className="flex items-center justify-center min-h-[250px] w-full" style={customizedStyle}>
                  {(() => {
                    const PreviewComponent = PreviewRegistry[component.slug];
                    if (PreviewComponent) {
                      return <PreviewComponent />;
                    }
                    return (
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-violet-500/25">
                          {component.name}
                        </div>
                        <p className="text-gray-500 text-sm mt-4">
                          Live preview of {component.name}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              </ResponsivePreview>
            </motion.div>
          )}

          {activeTab === "code" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {/* Copy Options */}
              <div className="flex flex-wrap gap-2">
                <CopyButton text={component.code} label="Copy TSX" />
                <CopyButton text={component.code} label="Copy Full Component" />
                <CopyButton
                  text={`npm install motion lucide-react\n\n${component.code}`}
                  label="Copy with Dependencies"
                />
              </div>
              <CodeBlock
                code={component.code}
                language="tsx"
                filename={`${component.slug}.tsx`}
                showLineNumbers
              />
            </motion.div>
          )}

          {activeTab === "customizer" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-gray-900 rounded-xl border border-white/10 p-8 flex items-center justify-center min-h-[250px] w-full" style={customizedStyle}>
                {(() => {
                  const PreviewComponent = PreviewRegistry[component.slug];
                  if (PreviewComponent) {
                    return <PreviewComponent />;
                  }
                  return (
                    <div className="text-center">
                      <div
                        className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold shadow-lg"
                        style={{
                          borderRadius: `${customizerConfig.borderRadius}px`,
                          background: `linear-gradient(135deg, ${customizerConfig.gradientFrom}, ${customizerConfig.gradientTo})`,
                        }}
                      >
                        {component.name}
                      </div>
                      <p className="text-gray-500 text-sm mt-4">Adjust the controls →</p>
                    </div>
                  );
                })()}
              </div>

              {/* Generated Code */}
              <CodeBlock
                code={`// Customized styles
const customStyle = {
  borderRadius: "${customizerConfig.borderRadius}px",
  padding: "${customizerConfig.padding}px",
  backdropFilter: "blur(${customizerConfig.blur}px)",
  background: "linear-gradient(135deg, ${customizerConfig.gradientFrom}, ${customizerConfig.gradientTo})",
  boxShadow: "0 ${customizerConfig.shadow}px ${customizerConfig.shadow * 2}px rgba(0,0,0,0.3)",
  opacity: ${customizerConfig.opacity},
};`}
                language="tsx"
                filename="custom-styles.tsx"
              />
            </motion.div>
          )}

          {activeTab === "props" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Prop</th>
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Type</th>
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Default</th>
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {component.props.map((prop, i) => (
                      <tr key={prop.name} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="px-5 py-3">
                          <code className="text-violet-400 text-sm font-mono">{prop.name}</code>
                          {prop.required && <span className="text-red-400 text-xs ml-1">*</span>}
                        </td>
                        <td className="px-5 py-3">
                          <code className="text-amber-400 text-xs font-mono bg-amber-500/10 px-2 py-0.5 rounded">{prop.type}</code>
                        </td>
                        <td className="px-5 py-3 text-gray-500 text-sm font-mono">{prop.default}</td>
                        <td className="px-5 py-3 text-gray-400 text-sm">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Examples */}
              {component.examples.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Usage Examples</h3>
                  <div className="space-y-4">
                    {component.examples.map((example, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-sm font-medium text-white">{example.title}</h4>
                        <p className="text-gray-500 text-xs">{example.description}</p>
                        <CodeBlock code={example.code} language="tsx" filename={`example-${i + 1}.tsx`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {activeTab === "customizer" ? (
            <CustomizerPanel config={customizerConfig} onChange={setCustomizerConfig} />
          ) : (
            <>
              {/* Quick Copy */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-3">
                <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                  <Copy className="w-4 h-4 text-violet-400" />
                  Quick Copy
                </h3>
                <div className="space-y-2">
                  <CopyButton text={component.code} label="Copy TSX" className="w-full justify-center" />
                  <CopyButton
                    text={`// ${component.name}\n${component.code}`}
                    label="Copy Full Component"
                    className="w-full justify-center"
                  />
                </div>
              </div>

              {/* Component Info */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-4">
                <h3 className="text-white font-semibold text-sm">Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Category</span>
                    <span className="text-white capitalize">{component.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Added</span>
                    <span className="text-white">{component.createdAt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Props</span>
                    <span className="text-white">{component.props.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">TypeScript</span>
                    <span className="text-emerald-400">✓ Full support</span>
                  </div>
                </div>
              </div>

              {/* Dependencies */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-3">
                <h3 className="text-white font-semibold text-sm">Dependencies</h3>
                <div className="space-y-2">
                  {["motion", "react"].map((dep) => (
                    <div key={dep} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                      <span className="text-gray-400 font-mono">{dep}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
