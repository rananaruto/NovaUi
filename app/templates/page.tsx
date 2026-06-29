"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Eye, Code as CodeIcon, Layout, ArrowRight } from "lucide-react";
import { templates } from "@/data/templates";
import CodeBlock from "@/components/shared/code-block";

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [showCode, setShowCode] = useState<string | null>(null);

  const templateCategories = [...new Set(templates.map((t) => t.category))];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-white flex items-center gap-3">
          <Layout className="w-8 h-8 text-violet-400" />
          Templates
        </h1>
        <p className="text-gray-500 mt-2">
          Ready-to-use page templates to kickstart your project.
        </p>
      </motion.div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, i) => (
          <motion.div
            key={template.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 transition-all group"
            >
              {/* Preview */}
              <div className="relative h-56 overflow-hidden bg-gray-900 p-3">
                <div className="w-full h-full overflow-hidden rounded-lg border border-white/5 bg-gray-950 text-[6px] leading-tight transform scale-[0.5] origin-top-left" style={{ width: "200%", height: "200%" }}>
                  <div
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{ __html: template.code.replace(/className=/g, 'class=') }}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowCode(showCode === template.slug ? null : template.slug)}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl text-white rounded-lg text-xs font-medium border border-white/20"
                    >
                      <CodeIcon className="w-3.5 h-3.5" /> View Code
                    </motion.button>
                  </div>
                </div>

                {/* Badge */}
                {template.featured && (
                  <span className="absolute top-4 left-4 px-2 py-0.5 text-[10px] font-bold uppercase bg-violet-500/20 text-violet-400 border border-violet-500/30 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">{template.name}</h3>
                  <span className="px-2 py-0.5 text-[10px] font-medium bg-white/5 text-gray-400 border border-white/10 rounded-md">
                    {template.category}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{template.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] bg-white/5 text-gray-500 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Code Viewer */}
            {showCode === template.slug && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4"
              >
                <CodeBlock
                  code={template.code}
                  language="tsx"
                  filename={`${template.slug}.tsx`}
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
