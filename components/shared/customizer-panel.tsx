"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { CustomizerConfig } from "@/types";

interface CustomizerPanelProps {
  config: CustomizerConfig;
  onChange: (config: CustomizerConfig) => void;
}

export default function CustomizerPanel({ config, onChange }: CustomizerPanelProps) {
  const update = (key: keyof CustomizerConfig, value: number | string) => {
    onChange({ ...config, [key]: value });
  };

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-5">
      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-violet-500" />
        Customizer
      </h3>

      <SliderControl
        label="Border Radius"
        value={config.borderRadius}
        min={0}
        max={32}
        unit="px"
        onChange={(v) => update("borderRadius", v)}
      />

      <SliderControl
        label="Padding"
        value={config.padding}
        min={4}
        max={48}
        unit="px"
        onChange={(v) => update("padding", v)}
      />

      <SliderControl
        label="Blur"
        value={config.blur}
        min={0}
        max={40}
        unit="px"
        onChange={(v) => update("blur", v)}
      />

      <SliderControl
        label="Glow"
        value={config.glow}
        min={0}
        max={30}
        unit="px"
        onChange={(v) => update("glow", v)}
      />

      <SliderControl
        label="Shadow"
        value={config.shadow}
        min={0}
        max={50}
        unit="px"
        onChange={(v) => update("shadow", v)}
      />

      <SliderControl
        label="Opacity"
        value={config.opacity * 100}
        min={10}
        max={100}
        unit="%"
        onChange={(v) => update("opacity", v / 100)}
      />

      <SliderControl
        label="Animation Speed"
        value={config.animationSpeed * 100}
        min={10}
        max={300}
        unit="%"
        onChange={(v) => update("animationSpeed", v / 100)}
      />

      <div className="space-y-2">
        <label className="text-xs text-gray-400 font-medium">Primary Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={config.primaryColor}
            onChange={(e) => update("primaryColor", e.target.value)}
            className="w-8 h-8 rounded-lg border border-white/10 cursor-pointer bg-transparent"
          />
          <span className="text-xs text-gray-500 font-mono">{config.primaryColor}</span>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-gray-400 font-medium">Gradient</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={config.gradientFrom}
            onChange={(e) => update("gradientFrom", e.target.value)}
            className="w-8 h-8 rounded-lg border border-white/10 cursor-pointer bg-transparent"
          />
          <span className="text-gray-600">→</span>
          <input
            type="color"
            value={config.gradientTo}
            onChange={(e) => update("gradientTo", e.target.value)}
            className="w-8 h-8 rounded-lg border border-white/10 cursor-pointer bg-transparent"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-gray-400 font-medium">Size</label>
        <div className="flex gap-1">
          {(["sm", "md", "lg"] as const).map((size) => (
            <button
              key={size}
              onClick={() => update("size", size)}
              className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
                config.size === size
                  ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                  : "bg-white/5 text-gray-500 border border-white/10 hover:bg-white/10"
              }`}
            >
              {size.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SliderControl({
  label,
  value,
  min,
  max,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-xs text-gray-400 font-medium">{label}</label>
        <span className="text-xs text-gray-500 font-mono">
          {Math.round(value)}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-violet-500/50"
      />
    </div>
  );
}
