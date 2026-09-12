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
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "ROI Calculator", href: "#roi-calculator" },
    { name: "Our Process", href: "#process" },
    { name: "Channels", href: "#channels" },
    { name: "Training", href: "#training" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-pink-500 flex items-center justify-center p-0.5 shadow-[0_0_25px_rgba(99,102,241,0.6)] group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#070913] rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400 text-lg">H</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300 group-hover:from-cyan-300 group-hover:to-pink-400 transition-all duration-500">
                  Himastech
                </span>
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest -mt-1">
                  Digital Marketing
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex space-x-7 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-xs font-semibold text-slate-300 hover:text-white transition-colors group tracking-wide uppercase"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#roi-calculator"
              className="text-xs font-bold text-slate-300 hover:text-cyan-400 transition-colors hidden lg:block"
            >
              Simulate ROI
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white text-xs font-bold uppercase tracking-wider transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:scale-105 flex items-center gap-1.5 border border-white/20"
            >
              <Sparkles className="w-3.5 h-3.5" /> Get Free Audit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-xl bg-white/5 text-gray-300 hover:text-white focus:outline-none border border-white/10"
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
            className="xl:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-5 pt-4 pb-8 space-y-2 max-w-lg mx-auto">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="#contact"
                  className="block text-center px-4 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-white/20"
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
