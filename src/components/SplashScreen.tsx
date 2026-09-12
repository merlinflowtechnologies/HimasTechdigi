"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Cpu, ShieldCheck } from "lucide-react";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Growth Engine...");

  useEffect(() => {
    // Check session storage to avoid spamming the user on repeated internal navigation
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
          }, 350);
          return 100;
        }

        const next = prev + 5;
        if (next < 30) {
          setStatusText("Initializing Growth Engine...");
        } else if (next < 65) {
          setStatusText("Configuring Real-Time Telemetry...");
        } else if (next < 90) {
          setStatusText("Loading 9-Channel Marketing Arsenal...");
        } else {
          setStatusText("Welcome to Himastech.");
        }
        return next;
      });
    }, 45); // ~1.5 - 1.8 seconds total duration

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.03,
            filter: "blur(8px)",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-between p-6 sm:p-10 bg-[#070913] text-white overflow-hidden select-none"
        >
          {/* Ambient Lighting FX */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-cyan-500/20 via-indigo-500/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          {/* Architectural Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

          {/* Top subtle bar */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex items-center justify-between max-w-5xl z-10"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Next-Gen Performance Architecture</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">v2.4 Live</span>
          </motion.div>

          {/* Center Brand Identity & Logo Pulse */}
          <div className="flex flex-col items-center justify-center text-center z-10 my-auto">
            {/* Animated Monogram Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mb-6 group"
            >
              {/* Pulsing Aura Rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 rounded-3xl blur-xl opacity-50 animate-pulse" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-pink-500 p-0.5 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full bg-[#0a0d18] rounded-[22px] flex items-center justify-center border border-white/15">
                  <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-400 tracking-tighter">
                    H
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 text-white"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                Himastech
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-xs sm:text-sm text-slate-400 font-semibold uppercase tracking-widest max-w-sm"
            >
              Performance Marketing & Training Academy
            </motion.p>

            {/* Progress Bar & Status Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="w-64 sm:w-80 mt-8 flex flex-col items-center"
            >
              {/* Progress Track */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Status and Percentage */}
              <div className="w-full flex items-center justify-between text-[11px] font-mono mt-2 text-slate-400">
                <span className="text-cyan-400 font-medium truncate max-w-[200px] text-left">
                  {statusText}
                </span>
                <span className="font-bold text-white">{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer: Powered by Merlinflow Technologies Pvt Ltd */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full flex flex-col items-center justify-center gap-1.5 z-10 pb-2"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:border-cyan-500/40 transition-colors">
              <div className="w-5 h-5 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-[10px] font-black text-white shadow-xs">
                M
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold leading-none">
                  Powered by
                </div>
                <div className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-300 tracking-wide mt-0.5">
                  Merlinflow Technologies Pvt Ltd
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-500 font-medium">
              Enterprise Growth Infrastructure & AI Systems
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
