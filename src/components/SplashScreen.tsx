"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Layers, 
  Terminal,
  Radio,
  ArrowRight
} from "lucide-react";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const systemLogs = [
    { tag: "SYS_INIT", msg: "Himastech Growth Engine v2.4 initializing...", color: "text-cyan-400" },
    { tag: "TELEMETRY", msg: "Establishing Meta CAPI & Google P-Max pipelines...", color: "text-indigo-400" },
    { tag: "GEO_INDEX", msg: "Indexing Generative Search (ChatGPT, Perplexity, Gemini)...", color: "text-purple-400" },
    { tag: "MERLINFLOW", msg: "Syncing with Merlinflow Technologies Pvt Ltd Core...", color: "text-emerald-400" },
    { tag: "ARMED", msg: "All 9 Omnichannel Marketing Engines Ready.", color: "text-pink-400" },
  ];

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("himastech_splash_seen");
    if (hasSeenSplash) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("himastech_splash_seen", "true");
          }, 450);
          return 100;
        }

        const next = prev + 4;
        if (next < 25) setActiveLogIndex(0);
        else if (next < 50) setActiveLogIndex(1);
        else if (next < 75) setActiveLogIndex(2);
        else if (next < 95) setActiveLogIndex(3);
        else setActiveLogIndex(4);

        return next;
      });
    }, 45); // ~1.8s duration

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    setLoading(false);
    sessionStorage.setItem("himastech_splash_seen", "true");
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            filter: "blur(12px)",
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-between p-5 sm:p-8 bg-[#04060f] text-white overflow-hidden select-none"
        >
          {/* ================= BACKGROUND HIGH-TECH AMBIENT LIGHTS ================= */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-cyan-500/25 via-indigo-600/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/20 via-pink-600/15 to-transparent rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-transparent rounded-full blur-[150px] pointer-events-none" />

          {/* Futuristic Cyber Perspective Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

          {/* Glowing Horizon Cyber Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none" />

          {/* ================= TOP TELEMETRY STATUS BAR ================= */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex items-center justify-between max-w-6xl z-10 text-[11px]"
          >
            {/* System Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-mono text-slate-300 font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">
                SYSTEMS ONLINE • REAL-TIME AD ENGINE
              </span>
            </div>

            {/* Skip Button */}
            <button
              onClick={handleSkip}
              className="text-[11px] font-mono text-slate-400 hover:text-white px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer flex items-center gap-1 group"
            >
              <span>Skip</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* ================= CENTER BRAND CORE & DUAL ORBITAL RINGS ================= */}
          <div className="flex flex-col items-center justify-center text-center z-10 my-auto w-full max-w-md px-4">
            {/* 3D Kinetic Emblem Container */}
            <div className="relative mb-6 flex items-center justify-center">
              
              {/* Outer Counter-Rotating Particle Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-dashed border-cyan-400/30 pointer-events-none"
              />

              {/* Inner Fast-Rotating Gradient Gyroscope Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-transparent border-t-pink-500 border-r-indigo-500 border-b-cyan-400 pointer-events-none opacity-80"
              />

              {/* Luminous Core Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 rounded-3xl blur-2xl opacity-60 animate-pulse" />

              {/* Main 3D Monogram Tile */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-pink-500 p-0.5 shadow-[0_0_40px_rgba(99,102,241,0.5)] flex items-center justify-center"
              >
                <div className="w-full h-full bg-[#080c1b] rounded-[22px] flex items-center justify-center border border-white/20 relative overflow-hidden">
                  {/* Subtle Shimmer Sweep */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                  />
                  <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-400 tracking-tighter">
                    H
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Brand Title with High-Contrast Typography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white flex items-center justify-center gap-2">
                <span>Himastech</span>
              </h1>
              <div className="inline-flex items-center gap-1.5 mt-1 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] sm:text-[11px] font-bold text-cyan-300 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Performance Marketing & Academy</span>
              </div>
            </motion.div>

            {/* ================= TELEMETRY PROGRESS & CONSOLE STREAM ================= */}
            <div className="w-full mt-7 flex flex-col items-center">
              {/* Sleek Precision Progress Bar */}
              <div className="w-full h-2 bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-white/10 relative shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,1)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Live Status and Counter */}
              <div className="w-full flex items-center justify-between text-[11px] font-mono mt-2.5 text-slate-400">
                <div className="flex items-center gap-1.5 truncate max-w-[240px]">
                  <Activity className="w-3 h-3 text-cyan-400 animate-pulse shrink-0" />
                  <span className="text-slate-300 font-medium truncate text-left">
                    {systemLogs[activeLogIndex]?.msg}
                  </span>
                </div>
                <span className="font-bold text-cyan-300 shrink-0 font-mono ml-2">
                  {progress}%
                </span>
              </div>

              {/* Mini Audio Equalizer Visualizer */}
              <div className="flex items-center gap-1 mt-3">
                {[40, 75, 100, 60, 90, 45, 80, 50, 95, 65].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.3}%`] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 0.8 + (i * 0.1), 
                      ease: "easeInOut" 
                    }}
                    className="w-1 h-3 rounded-full bg-gradient-to-t from-cyan-500 to-indigo-400 opacity-70"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ================= BOTTOM SIGNATURE: POWERED BY MERLINFLOW ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full flex flex-col items-center justify-center gap-2 z-10 pb-2"
          >
            {/* High-Tech Enterprise Badge */}
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#080d1e]/85 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-400/60 transition-colors">
              {/* Merlinflow 3D Hexagon Icon */}
              <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-pink-500 p-0.5 shadow-md flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#050914] rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-3.5 h-3.5 text-cyan-300" />
                </div>
              </div>

              <div className="text-left">
                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5">
                  <span>Engineered & Powered by</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-xs sm:text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-300 tracking-wide mt-0.5">
                  Merlinflow Technologies Pvt Ltd
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Enterprise Cloud • AI Automation • ISO Certified Security</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
