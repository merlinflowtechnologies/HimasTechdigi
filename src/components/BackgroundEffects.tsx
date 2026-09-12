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
      {/* Soft Volumetric Studio Ambient Light - Top Center (Lightweight on mobile, animated on desktop) */}
      <div className="md:hidden absolute -top-20 left-1/2 -translate-x-1/2 w-[320px] h-[300px] rounded-full bg-sky-400/15 blur-[60px]" />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="hidden md:block absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full bg-gradient-to-b from-sky-400/20 via-indigo-400/15 to-transparent blur-[140px] will-change-transform"
      />

      {/* Subtle Right Side Fill Light */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 2 }}
        className="hidden md:block absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-400/15 via-pink-400/10 to-transparent blur-[150px] will-change-transform"
      />

      {/* Subtle Left Side Deep Glow */}
      <motion.div
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{ repeat: Infinity, duration: 24, ease: "easeInOut", delay: 4 }}
        className="hidden md:block absolute bottom-1/4 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-cyan-400/15 via-blue-400/10 to-transparent blur-[150px] will-change-transform"
      />

      {/* Ultra-Clean Architectural Dot Matrix Grid */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_35%,#000_50%,transparent_100%)] opacity-60" 
      />
    </div>
  );
}
