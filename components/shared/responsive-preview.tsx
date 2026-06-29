"use client";

import { motion } from "motion/react";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import type { DevicePreview } from "@/types";

interface ResponsivePreviewProps {
  device: DevicePreview;
  onDeviceChange: (device: DevicePreview) => void;
  children: React.ReactNode;
}

const deviceWidths: Record<DevicePreview, string> = {
  desktop: "w-full",
  tablet: "w-[768px]",
  mobile: "w-[375px]",
};

const devices: { id: DevicePreview; icon: React.ReactNode; label: string }[] = [
  { id: "desktop", icon: <Monitor className="w-4 h-4" />, label: "Desktop" },
  { id: "tablet", icon: <Tablet className="w-4 h-4" />, label: "Tablet" },
  { id: "mobile", icon: <Smartphone className="w-4 h-4" />, label: "Mobile" },
];

export default function ResponsivePreview({
  device,
  onDeviceChange,
  children,
}: ResponsivePreviewProps) {
  return (
    <div>
      <div className="flex items-center gap-1 mb-4">
        {devices.map((d) => (
          <button
            key={d.id}
            onClick={() => onDeviceChange(d.id)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === d.id
                ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                : "bg-white/5 text-gray-500 border border-white/10 hover:bg-white/10"
            }`}
          >
            {d.icon}
            {d.label}
          </button>
        ))}
      </div>
      <motion.div
        layout
        className={`${deviceWidths[device]} mx-auto transition-all duration-300 overflow-hidden bg-gray-900 rounded-xl border border-white/10 min-h-[300px] p-6`}
      >
        {children}
      </motion.div>
    </div>
  );
}
