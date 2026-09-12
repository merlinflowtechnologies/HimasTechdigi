"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if autoplay policy kicks in
        });
      }
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
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
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
            transition: { duration: 0.5, ease: "easeOut" }
          }}
          className="fixed inset-0 z-[99999999] w-screen h-screen bg-black overflow-hidden select-none"
        >
          {/* Full Screen High-Performance Edge-to-Edge Video */}
          <video
            ref={videoRef}
            src="/HIMASTECH_logo_reveal_animation_20260913001953.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
            onCanPlay={() => {
              if (videoRef.current && videoRef.current.paused) {
                videoRef.current.play().catch(() => {});
              }
            }}
            className="w-full h-full min-w-full min-h-full object-cover object-center absolute inset-0"
            style={{
              transform: "translate3d(0, 0, 0)",
              willChange: "transform",
              backfaceVisibility: "hidden"
            }}
          />

          {/* Controls Bar (Skip & Unmute) */}
          <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-20 flex items-center gap-3">
            <button
              onClick={toggleSound}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 hover:border-emerald-400 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer shadow-lg"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            <button
              onClick={handleSkip}
              className="text-xs font-mono font-bold text-white px-4 py-2 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 hover:border-emerald-400 backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5 shadow-lg group"
            >
              <span>SKIP</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-emerald-400" />
            </button>
          </div>

          {/* Top Brand Header Indicator */}
          <div className="absolute top-6 left-6 sm:left-10 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
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
