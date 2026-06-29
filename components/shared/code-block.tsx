"use client";

import CopyButton from "./copy-button";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "tsx",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const lines = code.split("\n");

  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0f]">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-xs text-gray-500 ml-2 font-mono">{filename}</span>
          </div>
          <CopyButton text={code} />
        </div>
      )}
      {!filename && (
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <CopyButton text={code} />
        </div>
      )}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm font-mono leading-relaxed">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                {showLineNumbers && (
                  <span className="inline-block w-8 text-right mr-4 text-gray-600 select-none text-xs leading-relaxed">
                    {i + 1}
                  </span>
                )}
                <span className="text-gray-300 flex-1">
                  {highlightSyntax(line, language)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

function highlightSyntax(line: string, language: string): React.ReactNode {
  if (language === "bash" || language === "sh") {
    if (line.startsWith("#")) {
      return <span className="text-gray-500">{line}</span>;
    }
    if (line.startsWith("npm") || line.startsWith("npx") || line.startsWith("cd")) {
      return <span className="text-emerald-400">{line}</span>;
    }
    return <span className="text-gray-300">{line}</span>;
  }

  // Simple TSX/JS highlighting
  const parts: React.ReactNode[] = [];
  const remaining = line;
  let key = 0;

  // Apply simple token coloring
  if (remaining.trim().startsWith("//")) {
    return <span className="text-gray-500">{remaining}</span>;
  }
  if (remaining.trim().startsWith("import ") || remaining.trim().startsWith("export ")) {
    const match = remaining.match(/^(\s*)(import|export)\s/);
    if (match) {
      parts.push(<span key={key++} className="text-violet-400">{remaining}</span>);
      return parts;
    }
  }

  // Simple approach: just color the whole line based on its nature
  if (remaining.includes("interface ") || remaining.includes("type ")) {
    return <span className="text-cyan-300">{remaining}</span>;
  }

  // Return as plain colored text for safety
  return <span>{remaining}</span>;
}
