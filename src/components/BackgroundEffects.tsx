"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate 24 floating ambient particles
  const particles = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    x: `${(i * 17) % 100}%`,
    y: `${(i * 23) % 100}%`,
    size: (i % 3) + 2,
    duration: 12 + (i % 8) * 2,
    delay: (i % 5) * 1.5,
    color: i % 3 === 0 ? "bg-cyan-400" : i % 3 === 1 ? "bg-purple-400" : "bg-pink-400",
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Ambient Aurora Lights */}
      <motion.div
        animate={{
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.35, 0.55, 0.4, 0.35],
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-600/25 to-pink-500/20 blur-[150px] mix-blend-screen"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, -60, 40, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-cyan-500/25 via-blue-600/20 to-violet-600/20 blur-[160px] mix-blend-screen"
      />

      <motion.div
        animate={{
          scale: [0.95, 1.1, 0.95],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 40, -40, 0],
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-40 left-10 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-pink-600/20 via-purple-700/20 to-blue-500/15 blur-[160px] mix-blend-screen"
      />

      {/* Cyberpunk Animated Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_50%,transparent_100%)] opacity-75" 
      />

      {/* Modern Diagonal Scanline Accent */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.015)_50%,transparent_75%)] bg-[size:160px_160px] opacity-60" 
      />

      {/* Drifting Floating Glowing Stars/Dust */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: ["0px", "-60px", "0px"],
            x: ["0px", "30px", "0px"],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full ${p.color} shadow-[0_0_10px_currentColor]`}
        />
      ))}
    </div>
  );
}
