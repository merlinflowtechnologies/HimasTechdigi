"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Volumetric Studio Ambient Light - Top Center */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full bg-gradient-to-b from-sky-500/15 via-indigo-600/10 to-transparent blur-[140px]"
      />

      {/* Subtle Right Side Fill Light */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500/12 via-blue-600/08 to-transparent blur-[150px]"
      />

      {/* Subtle Left Side Deep Glow */}
      <motion.div
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ repeat: Infinity, duration: 24, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-1/4 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-cyan-600/10 via-slate-800/10 to-transparent blur-[150px]"
      />

      {/* Ultra-Clean Architectural Dot Matrix Grid */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_35%,#000_40%,transparent_100%)] opacity-40" 
      />
    </div>
  );
}
