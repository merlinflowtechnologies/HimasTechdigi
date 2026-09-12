import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-brand-purple/20 blur-3xl rounded-full" />
        <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center relative z-10 glass-card">
          <SearchX className="h-12 w-12 text-brand-purple" />
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">404</h1>
      <h2 className="text-2xl font-bold text-gray-300 mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-10 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <Link
        href="/"
        className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}
