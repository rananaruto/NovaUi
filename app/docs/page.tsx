"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, ChevronRight } from "lucide-react";
import { docs } from "@/data/docs";
import CodeBlock from "@/components/shared/code-block";

export default function DocsPage() {
  const [activeDoc, setActiveDoc] = useState(docs[0].slug);
  const currentDoc = docs.find((d) => d.slug === activeDoc) || docs[0];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-white flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-violet-400" />
          Documentation
        </h1>
        <p className="text-gray-500 mt-2">
          Everything you need to get started with Nova UI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="sticky top-24 space-y-1">
            {docs.map((doc) => (
              <button
                key={doc.slug}
                onClick={() => setActiveDoc(doc.slug)}
                className={`w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                  activeDoc === doc.slug
                    ? "bg-violet-500/10 text-violet-400 border border-violet-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <ChevronRight className={`w-4 h-4 transition-transform ${activeDoc === doc.slug ? "rotate-90 text-violet-400" : ""}`} />
                {doc.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <motion.div
            key={activeDoc}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose-custom"
          >
            <MarkdownRenderer content={currentDoc.content} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.trim().startsWith("```")) {
      const lang = line.trim().slice(3);
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <div key={key++} className="my-4">
          <CodeBlock code={codeLines.join("\n")} language={lang || "tsx"} showLineNumbers={false} />
        </div>
      );
      continue;
    }

    // Headers
    if (line.startsWith("# ")) {
      elements.push(<h1 key={key++} className="text-3xl font-bold text-white mt-8 mb-4">{line.slice(2)}</h1>);
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-bold text-white mt-8 mb-3">{line.slice(3)}</h2>);
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-xl font-semibold text-white mt-6 mb-2">{line.slice(4)}</h3>);
      i++;
      continue;
    }

    // Tables
    if (line.includes("|") && lines[i + 1]?.includes("---")) {
      const headerCells = line.split("|").filter(Boolean).map(c => c.trim());
      i += 2; // Skip header and separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(lines[i].split("|").filter(Boolean).map(c => c.trim()));
        i++;
      }
      elements.push(
        <div key={key++} className="my-4 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                {headerCells.map((cell, ci) => (
                  <th key={ci} className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-400">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-white/5">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-sm text-gray-300">
                      {cell.startsWith("`") && cell.endsWith("`") ? (
                        <code className="text-violet-400 text-xs bg-violet-500/10 px-1.5 py-0.5 rounded">{cell.slice(1, -1)}</code>
                      ) : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // List items
    if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="my-3 space-y-2">
          {listItems.map((item, li) => (
            <li key={li} className="flex items-start gap-2 text-gray-400 text-sm">
              <span className="text-violet-500 mt-1">•</span>
              <span>{renderInlineMarkdown(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="my-3 space-y-2 list-decimal list-inside">
          {listItems.map((item, li) => (
            <li key={li} className="text-gray-400 text-sm">{renderInlineMarkdown(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p key={key++} className="text-gray-400 text-sm leading-relaxed my-2">
        {renderInlineMarkdown(line)}
      </p>
    );
    i++;
  }

  return <div>{elements}</div>;
}

function renderInlineMarkdown(text: string): React.ReactNode {
  // Simple inline code
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="text-violet-400 text-xs bg-violet-500/10 px-1.5 py-0.5 rounded font-mono">
          {part.slice(1, -1)}
        </code>
      );
    }
    // Bold
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bp, j) => {
      if (bp.startsWith("**") && bp.endsWith("**")) {
        return <strong key={`${i}-${j}`} className="text-white font-semibold">{bp.slice(2, -2)}</strong>;
      }
      return <span key={`${i}-${j}`}>{bp}</span>;
    });
  });
}
