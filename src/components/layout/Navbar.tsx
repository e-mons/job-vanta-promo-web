"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar({ forceSolid = false }: { forceSolid?: boolean } = {}) {
  const [isScrolled, setIsScrolled] = useState(forceSolid);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (forceSolid) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-6",
        forceSolid
          ? "py-4 bg-slate-950 backdrop-blur-xl border-b border-white/10"
          : isScrolled 
            ? "py-4 bg-slate-950/60 backdrop-blur-xl border-b border-white/5" 
            : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-none">
          <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <span className="text-white font-black text-xl tracking-tighter">V</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            JobVanta
          </span>
        </Link>

        {/* Centered Desktop Nav */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right CTA Area */}
        <div className="hidden md:flex items-center gap-8 flex-none">
           <Link href="#" className="flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors group">
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
           <Button variant="primary" size="sm" className="h-12 px-8 bg-[#86efac] hover:bg-[#4ade80] text-slate-900 font-bold rounded-full border-none shadow-xl shadow-emerald-500/10 transition-all">
             Get Started
           </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden ml-auto p-2 text-white/70"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 p-8 flex flex-col gap-6 md:hidden overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-slate-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" className="w-full h-14 text-lg font-bold bg-[#86efac] text-slate-900 rounded-full">
              Get Started
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
