"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function FinalCTA() {
  return (
    <section className="py-24 px-6 md:px-12" id="cta">
      <div className="max-w-7xl mx-auto relative group">

        {/* The Main Pill Container */}
        <div className="bg-[#041d14] rounded-[4rem] overflow-hidden relative border border-white/5 min-h-[500px] flex items-center shadow-2xl">

          {/* Background Emerald Glows & Out-of-focus shapes */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full" />

          {/* Subtle Ribbed texture overlay to match the app theme */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '40px 100%'
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full px-12 md:px-24 py-16 lg:py-0 relative z-10">

            {/* Visual Column (Empty space for overlapping image) */}
            <div className="hidden lg:block lg:col-span-5" />

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                  Ready to Land Your <br />
                  <span className="text-emerald-400">Dream Role Now?</span>
                </h2>
                <p className="text-lg md:text-xl text-white/50 font-medium mb-12 max-w-xl leading-relaxed">
                  Join thousands of professionals already using JobVanta to transform their career path with AI precision.
                </p>

                {/* High-Impact CTA Button */}
                <div className="flex justify-center lg:justify-start">
                  <button className="group relative flex items-center gap-6 px-10 py-5 bg-emerald-500 rounded-full text-white font-black text-xl hover:bg-emerald-400 transition-all duration-300 shadow-xl shadow-emerald-500/20 active:scale-95">
                    Get It Now
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
                      <ArrowRight className="w-7 h-7 text-white" />
                    </div>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* The Overlapping Visual (Premium App Mockup) */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-12 -bottom-1 lg:-left-20 lg:-bottom-1 w-[400px] lg:w-[600px] pointer-events-none z-20"
        >
          <div className="relative group/mockup">
            {/* Dynamic Shadow behind mockup */}
            <div className="absolute inset-20 bg-emerald-500/20 blur-[100px] rounded-full group-hover/mockup:bg-emerald-500/30 transition-colors duration-700" />

            <Image
              src="/fn1.png"
              alt="JobVanta App Visual"
              width={650}
              height={850}
              className="w-full h-auto drop-shadow-[0_50px_80px_rgba(0,0,0,0.6)] relative z-10"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
