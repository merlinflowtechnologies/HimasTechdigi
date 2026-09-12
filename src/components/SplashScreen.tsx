"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Footprints, ShieldCheck, Zap } from "lucide-react";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // 10-second total duration (10,000ms = 100ms * 100 steps)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    setLoading(false);
  };

  // Milestone words that appear step-by-step as the man walks past them
  const milestones = [
    {
      step: 18,
      word: "STRATEGY",
      subtitle: "Data-Driven Architectural Blueprint",
      color: "from-emerald-400 to-teal-300",
      glow: "rgba(52, 211, 153, 0.6)",
      icon: "01"
    },
    {
      step: 42,
      word: "CREATIVITY",
      subtitle: "High-Converting Direct Response UGC",
      color: "from-cyan-400 to-blue-400",
      glow: "rgba(34, 211, 238, 0.6)",
      icon: "02"
    },
    {
      step: 66,
      word: "GROWTH",
      subtitle: "Compounded Predictable Revenue Scale",
      color: "from-indigo-400 to-purple-400",
      glow: "rgba(129, 140, 248, 0.6)",
      icon: "03"
    },
    {
      step: 88,
      word: "HIMASTECH",
      subtitle: "Digital Reality Marketing Ecosystem",
      color: "from-emerald-300 via-white to-cyan-300",
      glow: "rgba(16, 185, 129, 0.8)",
      icon: "04"
    }
  ];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="walking-splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.03,
            filter: "blur(10px)",
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[999999] flex flex-col justify-between p-6 sm:p-10 bg-[#030712] text-white overflow-hidden select-none"
        >
          {/* ================= BACKGROUND HIGH-TECH AMBIENT LIGHTS ================= */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-emerald-500/15 via-teal-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />
          <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />

          {/* Cyber Perspective Grid Floor */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

          {/* ================= TOP BAR ================= */}
          <div className="relative z-20 w-full flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="relative h-9 sm:h-10 w-auto">
                <Image
                  src="/logo.png"
                  alt="Himastech"
                  width={180}
                  height={48}
                  priority
                  className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                />
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>STEP-BY-STEP TRANSFORMATION JOURNEY</span>
              </div>
            </div>

            {/* Skip Button with Remaining Seconds */}
            <button
              onClick={handleSkip}
              className="text-[11px] font-mono text-slate-400 hover:text-emerald-300 px-4 py-1.5 rounded-full bg-black/60 hover:bg-black/90 border border-emerald-500/30 hover:border-emerald-400 transition-all cursor-pointer flex items-center gap-2 backdrop-blur-md shadow-sm group"
            >
              <span className="font-bold">SKIP ({Math.ceil((100 - progress) / 10)}s)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-emerald-400" />
            </button>
          </div>

          {/* ================= CENTER: MAN WALKING JOURNEY & REVEALING WORDS ================= */}
          <div className="relative z-20 w-full max-w-6xl mx-auto my-auto flex flex-col items-center">
            
            {/* Live Step Tracker Banner */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 sm:mb-10 text-center"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-cyan-300 tracking-tight">
                Architecting Your Digital Reality
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                Every forward step unlocks our proven growth pillars
              </p>
            </motion.div>

            {/* ================= THE WALKING TRACK CONTAINER ================= */}
            <div className="relative w-full py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-b from-slate-900/60 to-black/80 rounded-3xl border border-emerald-500/20 backdrop-blur-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden">
              
              {/* Glowing Laser Runway Line */}
              <div className="absolute bottom-16 sm:bottom-20 left-6 right-6 h-[2px] bg-gradient-to-r from-emerald-500/20 via-emerald-400 to-cyan-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />

              {/* Light Pulse Traveling along the Runway */}
              <motion.div
                animate={{ x: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-16 sm:bottom-20 left-0 w-32 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_#fff]"
              />

              {/* ================= THE WALKING MAN (SVG SKELETON WITH KINEMATIC GAIT) ================= */}
              <motion.div
                className="absolute bottom-16 sm:bottom-20 -mb-[2px] z-30 flex flex-col items-center pointer-events-none"
                style={{
                  left: `calc(4% + ${progress * 0.86}%)`,
                  transform: "translateX(-50%)"
                }}
              >
                {/* Floating Progress Pill Above Walker's Head */}
                <div className="mb-2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] font-mono shadow-[0_0_15px_rgba(16,185,129,0.9)] flex items-center gap-1">
                  <Footprints className="w-3 h-3 text-slate-950" />
                  <span>{progress}%</span>
                </div>

                {/* Animated Silhouette Walking Man SVG */}
                <div className="relative w-12 h-20 sm:w-14 sm:h-24 filter drop-shadow-[0_0_12px_rgba(52,211,153,0.9)]">
                  <svg
                    viewBox="0 0 60 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Glowing Aura */}
                    <circle cx="30" cy="14" r="8" fill="#34d399" opacity="0.9" />
                    
                    {/* Head / Helmet */}
                    <circle cx="30" cy="14" r="6.5" fill="#ffffff" />

                    {/* Torso */}
                    <motion.path
                      animate={{
                        d: [
                          "M 30 22 L 32 50",
                          "M 30 20 L 31 48",
                          "M 30 22 L 32 50"
                        ]
                      }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                      stroke="#ffffff"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />

                    {/* Left Arm (Swinging backward and forward) */}
                    <motion.path
                      animate={{
                        d: [
                          "M 30 26 L 18 38 L 12 50",
                          "M 30 26 L 42 38 L 48 50",
                          "M 30 26 L 18 38 L 12 50"
                        ]
                      }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                      stroke="#34d399"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Right Arm (Opposite swing) */}
                    <motion.path
                      animate={{
                        d: [
                          "M 30 26 L 42 38 L 48 50",
                          "M 30 26 L 18 38 L 12 50",
                          "M 30 26 L 42 38 L 48 50"
                        ]
                      }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                      stroke="#10b981"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Left Leg (Walking Stride) */}
                    <motion.path
                      animate={{
                        d: [
                          "M 32 50 L 16 72 L 8 96",
                          "M 31 48 L 32 70 L 32 94",
                          "M 32 50 L 48 72 L 56 96",
                          "M 32 50 L 16 72 L 8 96"
                        ]
                      }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                      stroke="#ffffff"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Right Leg (Opposite Stride) */}
                    <motion.path
                      animate={{
                        d: [
                          "M 32 50 L 48 72 L 56 96",
                          "M 31 48 L 32 70 L 32 94",
                          "M 32 50 L 16 72 L 8 96",
                          "M 32 50 L 48 72 L 56 96"
                        ]
                      }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                      stroke="#6ee7b7"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Footstep Pulse Waves */}
                <motion.div
                  animate={{ scale: [0.6, 1.8], opacity: [0.9, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeOut" }}
                  className="w-8 h-2 rounded-full bg-emerald-400 blur-[2px] -mt-1"
                />
              </motion.div>

              {/* ================= SEQUENTIAL WORDS REVEALED STEP-BY-STEP ================= */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10 mb-14">
                {milestones.map((m, idx) => {
                  const isPassed = progress >= m.step;
                  const isCurrent = progress >= m.step && progress < (milestones[idx + 1]?.step || 101);

                  return (
                    <motion.div
                      key={m.word}
                      initial={{ opacity: 0.2, scale: 0.9 }}
                      animate={{
                        opacity: isPassed ? 1 : 0.25,
                        scale: isCurrent ? 1.06 : isPassed ? 1 : 0.92,
                        y: isPassed ? 0 : 8
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={`relative p-4 sm:p-5 rounded-2xl transition-all ${
                        isPassed 
                          ? "bg-slate-900/90 border-2 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.25)]" 
                          : "bg-slate-950/40 border border-slate-800"
                      }`}
                    >
                      {/* Step Indicator Header */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono font-black px-2 py-0.5 rounded-full ${
                          isPassed ? "bg-emerald-500 text-black" : "bg-slate-800 text-slate-500"
                        }`}>
                          STEP {m.icon}
                        </span>
                        {isPassed && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"
                          />
                        )}
                      </div>

                      {/* Revealed Big Word */}
                      <h3 className={`text-lg sm:text-xl md:text-2xl font-black tracking-tight mb-1 ${
                        isPassed 
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${m.color} drop-shadow-[0_0_15px_${m.glow}]` 
                          : "text-slate-600"
                      }`}>
                        {m.word}
                      </h3>

                      <p className="text-[11px] text-slate-400 leading-snug font-medium">
                        {m.subtitle}
                      </p>

                      {/* Active Footstep Indicator */}
                      {isCurrent && (
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[9px] font-mono font-extrabold uppercase animate-bounce shadow-md">
                          Passing Now
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Percent Bar */}
              <div className="w-full bg-slate-950/90 rounded-full h-3 p-0.5 border border-emerald-500/30 overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,1)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Status Message */}
              <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>
                    {progress < 25 && "Step 1: Formulating High-Impact Growth Strategy..."}
                    {progress >= 25 && progress < 50 && "Step 2: Activating Direct-Response Creative Engine..."}
                    {progress >= 50 && progress < 75 && "Step 3: Compounding Omnichannel Ad Revenue..."}
                    {progress >= 75 && progress < 100 && "Step 4: Launching Himastech Digital Reality..."}
                    {progress >= 100 && "Transformation Complete. Entering Workspace."}
                  </span>
                </span>
                <span className="text-emerald-300 font-bold">{progress}% / 100%</span>
              </div>
            </div>

          </div>

          {/* ================= FOOTER POWERED BY MERLINFLOW ================= */}
          <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>HIMASTECH ENTERPRISE MARKETING OS</span>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-slate-500 uppercase text-[10px]">POWERED BY</span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-cyan-300">
                MERLINFLOW TECHNOLOGIES PVT LTD
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
