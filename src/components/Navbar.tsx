"use client";

import Link from "next/link";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Services", href: "/#services" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "ROI Calculator", href: "/#roi-calculator" },
    { name: "Our Process", href: "/#process" },
    { name: "Channels", href: "/#channels" },
    { name: "Training", href: "/#training" },
    { name: "About", href: "/#about" },
    { name: "Merlinflow Tech", href: "/merlinflow", isSpecial: true },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled 
          ? "glass-nav shadow-[0_8px_32px_rgba(0,0,0,0.6)]" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-pink-500 flex items-center justify-center p-0.5 shadow-[0_0_20px_rgba(99,102,241,0.35)] group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center shadow-inner">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 text-lg">H</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors duration-300">
                  Himastech
                </span>
                <span className="text-[10px] text-cyan-600 font-bold uppercase tracking-widest -mt-1">
                  Digital Marketing
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[11px] xl:text-xs font-bold transition-all group tracking-wider uppercase whitespace-nowrap ${
                  link.isSpecial 
                    ? "text-cyan-700 hover:text-cyan-900 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500/50 shadow-sm flex items-center gap-1.5"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {link.isSpecial && <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />}
                <span>{link.name}</span>
                {!link.isSpecial && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/#contact"
              className="px-4 xl:px-5 py-2 xl:py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white text-xs font-bold uppercase tracking-wider transition-all hover:shadow-[0_0_25px_rgba(99,102,241,0.45)] hover:scale-105 flex items-center gap-1.5 border border-white/30 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" /> 
              <span>Get Free Audit</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-950 focus:outline-none border border-slate-200 cursor-pointer shadow-sm"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 overflow-hidden shadow-2xl"
          >
            <div className="px-5 pt-4 pb-8 space-y-2 max-w-lg mx-auto">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    link.isSpecial
                      ? "text-cyan-800 bg-cyan-50 border border-cyan-200"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/#contact"
                  className="block text-center px-4 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] border border-white/30"
                  onClick={() => setIsOpen(false)}
                >
                  Get Free Marketing Audit <ArrowRight className="inline-block w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
