"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#05050a] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card max-w-md w-full p-8 rounded-3xl text-center relative overflow-hidden border border-red-500/20"
      >
        <div className="absolute inset-0 bg-red-500/5 blur-3xl" />
        
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
          <AlertTriangle className="h-10 w-10 text-red-400" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Something went wrong!</h2>
        <p className="text-gray-400 mb-8 relative z-10">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/10"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-shadow"
          >
            Go back home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
