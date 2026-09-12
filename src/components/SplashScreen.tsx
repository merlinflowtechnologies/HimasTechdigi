"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt auto-playback
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play was prevented (can happen on strict mobile policies)
      });
    }

    // Safety fallback: if video fails to fire onEnded or takes too long, dismiss after 12 seconds
    const maxTimer = setTimeout(() => {
      setLoading(false);
    }, 12000);

    return () => clearTimeout(maxTimer);
  }, []);

  const handleVideoEnded = () => {
    setLoading(false);
  };

  const handleSkip = () => {
    setLoading(false);
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="video-splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.01,
            filter: "blur(6px)",
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[99999999] flex flex-col items-center justify-center bg-black overflow-hidden select-none"
        >
          {/* Ambient Video Glow Flare */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none z-10" />

          {/* Full Screen Cinematic Reveal Video */}
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              src="/HIMASTECH_logo_reveal_animation_20260913001953.mp4"
              autoPlay
              muted={isMuted}
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              className="w-full h-full object-contain max-h-screen relative z-0 pointer-events-auto"
            />
          </div>

          {/* Controls Bar (Skip & Unmute) */}
          <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-20 flex items-center gap-3">
            <button
              onClick={toggleSound}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 hover:border-emerald-400 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            <button
              onClick={handleSkip}
              className="text-xs font-mono font-bold text-white px-4 py-2 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 hover:border-emerald-400 backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5 shadow-lg group"
            >
              <span>SKIP</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-emerald-400" />
            </button>
          </div>

          {/* Top Brand Header Indicator */}
          <div className="absolute top-6 left-6 sm:left-10 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase tracking-widest">
              HIMASTECH DIGITAL REALITY
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
