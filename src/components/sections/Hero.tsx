"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import Image from "next/image";
import { Globe, ArrowRight, TrendingUp, CheckCircle2, Star } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-48 pb-32 overflow-hidden bg-[#0a1a0d]">
      {/* Centered Textured Background */}
      <div className="absolute inset-0 z-0">
        {/* The "Ribbed" Texture Curtain */}
        <div className="absolute inset-0 bg-ribbed opacity-30 pointer-events-none" />
        
        {/* Central Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,#10b98120_0%,transparent_50%)]" />
        
        {/* Soft Highlights */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col items-center"
        >
          {/* Centered Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-12 backdrop-blur-md shadow-2xl"
          >
            <Globe className="w-4 h-4 text-white/70" />
            <span className="text-sm font-bold text-white/80 tracking-wide uppercase">
              Available across 54 Countries
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.9] mb-8 max-w-4xl">
            Secure Solution for <br />
            <span className="text-white">Smarter Job Searching.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl leading-relaxed font-medium">
             Manage resumes, track opportunities, and grow your career with a secure, 
             user-friendly AI platform built for the modern workforce.
          </p>

          <Button size="lg" className="h-16 pl-10 pr-2 bg-[#86efac] text-slate-900 font-black text-xl rounded-full border-none shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 transition-all group overflow-hidden">
             Get Started Free
             <div className="ml-6 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-6 h-6 text-white" />
             </div>
          </Button>
        </motion.div>

        {/* Central Display Area with Phone and Floating Cards */}
        <div className="mt-24 relative w-full max-w-5xl mx-auto">
          
          {/* Central Phone Mockup */}
          <motion.div
            style={{ y: y1 }}
            className="relative z-10 w-[320px] mx-auto rounded-[3rem] p-1.5 bg-slate-800 border-4 border-slate-700 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden"
          >
             <Image 
                src="/images/hero-mockup.png" 
                alt="App Interface" 
                width={320} 
                height={640} 
                className="rounded-[2.5rem]"
             />
          </motion.div>

          {/* Left Floating Card: Trusted By */}
          <motion.div
             style={{ y: y2 }}
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.6, duration: 1 }}
             className="absolute left-0 top-1/4 z-20 w-72 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl border border-white/20 p-8 rounded-[2.5rem] text-left shadow-2xl group overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-20">
                <Star className="w-12 h-12 text-emerald-400 fill-emerald-400" />
             </div>
             <p className="text-sm font-bold text-white/60 mb-4 uppercase tracking-widest">Trusted by</p>
             <div className="flex items-center gap-2 mb-6">
                <h3 className="text-5xl font-black text-white">50K+</h3>
                <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-black text-emerald-400 flex items-center gap-1 uppercase">
                   <TrendingUp className="w-3 h-3" /> Active
                </div>
             </div>
             <p className="text-xs font-bold text-white/50 mb-8 leading-tight">Trusted users making<br />smarter decisions daily.</p>
             <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                <ArrowRight className="w-5 h-5" />
             </div>
          </motion.div>

          {/* Right Floating Card: Markets/Stats */}
          <motion.div
             style={{ y: y2 }}
             initial={{ x: 100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.8, duration: 1 }}
             className="absolute right-0 top-1/3 z-20 w-72 bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] text-left shadow-2xl group"
          >
             <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase mb-8">
                Multiple Live Markets
             </div>
             <p className="text-[10px] font-bold text-white/30 uppercase mb-2">Last Update</p>
             <h3 className="text-4xl font-black text-white mb-2">500+ Markets</h3>
             <p className="text-xs font-bold text-white/40 mb-8">Predictions across global markets</p>
             <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
             </div>
             
             {/* Decorative Grid Line in card */}
             <div className="absolute bottom-6 right-6 opacity-20 transform rotate-45">
                <div className="w-16 h-16 border-2 border-emerald-500 rounded-full flex items-center justify-center">
                   <div className="w-10 h-10 border border-emerald-400 rounded-full" />
                </div>
             </div>
          </motion.div>

          {/* Bottom Small Floating: Received Payment */}
          <motion.div
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 1, duration: 0.8 }}
             className="absolute -right-10 bottom-10 z-30 flex items-center gap-3 bg-white/80 backdrop-blur-xl px-6 py-4 rounded-full shadow-2xl"
          >
             <span className="text-sm font-black text-slate-900">Received Payment 🥳</span>
             <div className="px-3 py-1 rounded-full bg-emerald-500 text-[10px] font-black text-white uppercase tracking-wider">Profit</div>
          </motion.div>

          {/* Bottom Small Floating: Net Profit */}
          <motion.div
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 1.2, duration: 0.8 }}
             className="absolute -left-10 -bottom-10 z-30 w-64 bg-slate-950/80 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-3xl text-left"
          >
             <div className="flex justify-between items-start mb-4">
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Net Profit</p>
                <div className="text-emerald-400 font-black text-sm">8.0%</div>
             </div>
             <h4 className="text-3xl font-black text-white mb-4">$1,478.40</h4>
             <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Withdraw Amount</p>
             <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center ml-auto">
                <ArrowRight className="w-4 h-4 text-white/50 transform -rotate-45" />
             </div>
          </motion.div>

          {/* Curved Indicators (Simplified as SVG) */}
          <svg className="absolute top-1/2 left-[15%] w-32 h-32 text-white/20 -z-10 hidden lg:block" viewBox="0 0 100 100" fill="none">
             <path d="M90 10 Q 50 10 10 90" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
          <svg className="absolute top-1/2 right-[15%] w-32 h-32 text-white/20 -z-10 hidden lg:block transform scale-x-[-1]" viewBox="0 0 100 100" fill="none">
             <path d="M90 10 Q 50 10 10 90" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
