"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Globe, Target, Zap } from "lucide-react";
import Image from "next/image";

const searchFeatures = [
  {
    category: "Market Reach",
    title: "Hyper-Local & Global Remote",
    description: "Whether you want a desk in the city or a hammock on the beach, we find the role for you.",
    icon: Globe,
  },
  {
    category: "Precision",
    title: "Deep AI Filtering",
    description: "Filter by salary, seniority, job type, and even specific AI-match scores for every single listing.",
    icon: Target,
  },
  {
    category: "Accessibility",
    title: "Infinite Results",
    description: "Unlock unlimited scrolling to give you the full picture of the current market and hidden opportunities.",
    icon: Zap,
  },
];

export function JobSearch() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#041d14] text-white relative overflow-hidden rounded-[4rem] mx-6 mb-24 border border-white/5" id="job-search">
      {/* Background Ribbed Texture - Refined for 3D depth */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(90deg, 
            rgba(6, 78, 59, 0.4) 0%, 
            rgba(6, 78, 59, 0) 45%, 
            rgba(0, 0, 0, 0.4) 50%, 
            rgba(0, 0, 0, 0) 55%, 
            rgba(6, 78, 59, 0.4) 100%)`,
          backgroundSize: '40px 100%'
        }} 
      />
      
      {/* Central Vibrant Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_60%)] pointer-events-none" />
      
      {/* Additional High-Contrast Glow for the "Floor" */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[conic-gradient(from_0deg_at_50%_100%,transparent_0%,rgba(16,185,129,0.05)_50%,transparent_100%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Decorations */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              Search Intelligence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-white"
            >
              Find Your Next <br /> Milestone, Faster
            </motion.h2>
          </div>
          <div className="hidden lg:block relative">
            <div className="w-24 h-24 bg-emerald-500/20 rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/10">
               <Zap className="w-12 h-12 text-emerald-400" />
            </div>
            <div className="absolute -top-4 -right-4 grid grid-cols-5 gap-2 opacity-20">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mb-16">
          <button 
            onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : searchFeatures.length - 1))}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setActiveIndex((prev) => (prev < searchFeatures.length - 1 ? prev + 1 : 0))}
            className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center hover:bg-emerald-400 transition-all font-bold"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Main Visual Photo Side */}
          <motion.div
            key={`image-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="bg-white rounded-[3rem] p-4 shadow-3xl">
              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] relative bg-slate-900">
                <Image
                  src="/images/hero-mockup.png"
                  alt="Job Search Dashboard"
                  fill
                  className="object-cover object-top p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </div>
              <div className="mt-6 text-center pb-4">
                <p className="font-black text-slate-900 text-xl tracking-tight">AI Matching Engine</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                   Real-Time Analytics Enabled
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action/Detail Card Side */}
          <motion.div
            key={`content-${activeIndex}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 lg:mb-12"
          >
            <div className="relative p-12 md:p-16 rounded-[3rem] bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-widest mb-6">
                 {searchFeatures[activeIndex].category}
              </div>
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
                 {searchFeatures[activeIndex].title}
              </h3>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/80 italic">
                "{searchFeatures[activeIndex].description}"
              </p>
              
              {/* Decorative Corner Element */}
              <div className="absolute -bottom-px -right-px w-24 h-24 bg-emerald-500 rounded-tl-[3.5rem] opacity-20" />
              <div className="absolute bottom-10 right-10">
                 {(() => {
                   const Icon = searchFeatures[activeIndex].icon;
                   return <Icon className="w-12 h-12 text-emerald-400 opacity-40" />;
                 })()}
              </div>
            </div>
          </motion.div>

          {/* Thumbnail Filters Row */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end justify-center gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-[10px] font-black tracking-widest text-emerald-400 uppercase">
               {activeIndex + 1} / {searchFeatures.length}
            </div>
            <div className="flex flex-row lg:flex-col gap-4">
              {searchFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <button 
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all ${
                      i === activeIndex 
                        ? "border-emerald-500 bg-emerald-500/10 scale-110 shadow-lg shadow-emerald-500/20" 
                        : "border-white/10 opacity-40 hover:opacity-100 bg-white/5"
                    }`}
                  >
                     <Icon className={`w-6 h-6 ${i === activeIndex ? "text-emerald-400" : "text-white"}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
