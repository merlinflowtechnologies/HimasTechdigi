"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Activity, CheckCircle2 } from "lucide-react";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // 10-second smooth total duration (100ms * 100 = 10,000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 600);
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

  const steps = [
    {
      num: "01",
      threshold: 15,
      title: "STRATEGY",
      desc: "Precision Market Architecture",
      color: "from-emerald-400 to-teal-300"
    },
    {
      num: "02",
      threshold: 40,
      title: "CREATIVITY",
      desc: "High-Converting UGC & GEO",
      color: "from-teal-300 to-cyan-400"
    },
    {
      num: "03",
      threshold: 65,
      title: "GROWTH",
      desc: "Compound Revenue Acceleration",
      color: "from-cyan-400 to-indigo-400"
    },
    {
      num: "04",
      threshold: 88,
      title: "SCALE",
      desc: "Predictable Market Dominance",
      color: "from-emerald-300 via-white to-cyan-300"
    }
  ];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="cinematic-splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02,
            filter: "blur(8px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[999999] flex flex-col justify-between p-6 sm:p-10 bg-[#020617] text-white overflow-hidden select-none"
        >
          {/* ================= AMBIENT CINEMATIC LIGHTING ================= */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-emerald-500/15 via-teal-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

          {/* Precision Perspective Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.07)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* ================= TOP HEADER ================= */}
          <div className="relative z-20 w-full flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] font-mono text-emerald-300 font-bold tracking-widest uppercase">
                HIMASTECH REVENUE ENGINE ONLINE
              </span>
            </div>

            {/* Skip Button */}
            <button
              onClick={handleSkip}
              className="text-[11px] font-mono text-slate-400 hover:text-emerald-300 px-4 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 transition-all cursor-pointer flex items-center gap-2 backdrop-blur-md group"
            >
              <span className="font-bold">SKIP ({Math.ceil((100 - progress) / 10)}s)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-emerald-400" />
            </button>
          </div>

          {/* ================= CENTER: MAIN LOGO & STEP REVEAL ================= */}
          <div className="relative z-20 w-full max-w-5xl mx-auto my-auto flex flex-col items-center text-center">
            
            {/* Center Logo with Luminous Glow Backdrop */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8 sm:mb-12"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/20 via-teal-400/20 to-cyan-500/20 rounded-3xl blur-2xl animate-pulse pointer-events-none" />
              
              <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-teal-500/20 to-cyan-500/40 border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.25)]">
                <div className="bg-white/95 px-6 sm:px-10 py-4 sm:py-5 rounded-[22px] flex items-center justify-center">
                  <Image
                    src="/logo1.png"
                    alt="Himastech Digital Reality Marketing"
                    width={320}
                    height={85}
                    priority
                    className="h-12 sm:h-16 w-auto object-contain drop-shadow-md"
                  />
                </div>
              </div>
            </motion.div>

            {/* ================= STEP-BY-STEP WORDS TIMELINE ================= */}
            <div className="w-full max-w-4xl mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                {steps.map((s, idx) => {
                  const isPassed = progress >= s.threshold;
                  const isCurrent = progress >= s.threshold && progress < (steps[idx + 1]?.threshold || 101);

                  return (
                    <motion.div
                      key={s.num}
                      initial={{ opacity: 0.2, y: 10 }}
                      animate={{
                        opacity: isPassed ? 1 : 0.25,
                        scale: isCurrent ? 1.04 : 1,
                        y: isPassed ? 0 : 6
                      }}
                      transition={{ duration: 0.4 }}
                      className={`p-4 rounded-2xl transition-all border text-left relative overflow-hidden ${
                        isPassed
                          ? "bg-slate-900/90 border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                          : "bg-slate-950/40 border-slate-800"
                      }`}
                    >
                      {/* Active Milestone Shimmer */}
                      {isCurrent && (
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent skew-x-12 pointer-events-none"
                        />
                      )}

                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          isPassed ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-500"
                        }`}>
                          STEP {s.num}
                        </span>
                        {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>

                      <div className={`text-base sm:text-lg font-black tracking-tight ${
                        isPassed
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${s.color}`
                          : "text-slate-600"
                      }`}>
                        {s.title}
                      </div>

                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {s.desc}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ================= HIGH-TECH PROGRESS BEAM ================= */}
              <div className="relative w-full bg-slate-900/90 rounded-full h-2.5 p-0.5 border border-emerald-500/30 overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,1)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Progress percentage & status */}
              <div className="flex items-center justify-between mt-3 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span className="text-slate-300">
                    {progress < 20 && "Analyzing Market Intent & Funnel Strategy..."}
                    {progress >= 20 && progress < 45 && "Deploying Direct-Response UGC Assets..."}
                    {progress >= 45 && progress < 70 && "Compounding Meta & Google ROAS..."}
                    {progress >= 70 && progress < 90 && "Scaling Digital Reality Omnichannel Systems..."}
                    {progress >= 90 && "Initialization Complete. Launching..."}
                  </span>
                </div>
                <span className="text-emerald-300 font-bold">{progress}%</span>
              </div>
            </div>

          </div>

          {/* ================= FOOTER ================= */}
          <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-4">
            <div className="flex items-center gap-2 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>DIGITAL REALITY MARKETING ENGINE</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-300">
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
