"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 10-second exact duration (100ms * 100 steps = 10,000ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 300);
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

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="exact-splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-black overflow-hidden select-none"
        >
          {/* Exact Splash Screen High-Resolution Visual */}
          <div className="relative w-full h-full max-w-[1920px] max-h-[1080px] flex items-center justify-center">
            <Image
              src="/splash.png"
              alt="Himastech Digital Reality Marketing - Strategy x Creativity x Growth"
              fill
              priority
              sizes="100vw"
              className="object-contain md:object-cover object-center"
            />

            {/* Skip Control Button (Top Right) */}
            <button
              onClick={handleSkip}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20 text-[11px] font-mono text-slate-400 hover:text-emerald-400 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all cursor-pointer flex items-center gap-1.5 backdrop-blur-md group shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <span className="tracking-wider uppercase font-bold text-[10px]">Skip ({Math.ceil((100 - progress) / 10)}s)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-emerald-400" />
            </button>

            {/* Dynamic Real-Time Animated Progress Bar Overlay */}
            <div className="absolute bottom-[18%] sm:bottom-[19%] md:bottom-[20%] left-1/2 -translate-x-1/2 w-[82%] sm:w-[55%] md:w-[42%] lg:w-[34%] max-w-lg z-20 flex flex-col items-center">
              <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono mb-2 text-emerald-400 font-bold px-1 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-semibold tracking-wider">
                  INITIALIZING MARKETING ENGINE...
                </span>
                <span className="text-emerald-300 font-bold">{progress}%</span>
              </div>

              {/* Glowing High-Precision Animated Progress Track */}
              <div className="w-full h-2 sm:h-2.5 bg-black/80 rounded-full overflow-hidden p-0.5 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.4)] backdrop-blur-md">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,1)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Bottom Subtle Signature */}
              <div className="text-[10px] sm:text-[11px] text-slate-400/90 font-mono tracking-widest uppercase mt-3 drop-shadow-md text-center">
                POWERED BY <span className="text-emerald-400 font-bold">MERLINFLOW TECHNOLOGIES PVT LTD</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
