"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, Target, Bell } from "lucide-react";
import Image from "next/image";

const featureCards = [
  {
    side: "left",
    title: "One-Tap Application",
    description: "Instantly send your optimized resume to top-tier roles with just one tap.",
    icon: Zap,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    side: "left",
    title: "Career Growth Analytics",
    description: "Deep visual charts to understand your application performance and profile views.",
    icon: BarChart3,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    side: "right",
    title: "AI Resume Optimization",
    description: "Our AI ensures your resume is perfectly tailored for every role you apply to.",
    icon: Target,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    side: "right",
    title: "Smart Job Alerts",
    description: "Stay ahead with real-time notifications for roles that match your unique skills.",
    icon: Bell,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
  },
];

export function Features() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-8"
          >
            Core Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight px-4"
          >
            The Intelligent Career Partner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 font-medium leading-relaxed px-4"
          >
            Expand your professional reach effortlessly with JobVanta's <br className="hidden md:block" />
            integrated career suite – Elevate your game today.
          </motion.p>
        </div>

        {/* Symmetrical Layout Container */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* Left Feature Column */}
          <div className="flex flex-col gap-10 md:gap-16 lg:w-[30%] order-2 lg:order-1">
            {featureCards.filter(f => f.side === "left").map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 text-center lg:text-right relative group"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-4 md:mb-6 mx-auto lg:ml-auto lg:mr-0 shadow-sm group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed italic text-sm">
                  {feature.description}
                </p>

                {/* Dashed Line to Phone - Visible on Desktop */}
                <div className="hidden lg:block absolute top-1/2 left-full w-24 h-px border-t-2 border-dashed border-slate-200 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Central Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 15 }}
            className="relative lg:w-[35%] order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-[280px] md:w-[320px] rounded-[3.5rem] bg-slate-900 p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-4 border-slate-800">
              <Image
                src="/images/hero-mockup.png"
                alt="App Dashboard"
                width={320}
                height={640}
                className="rounded-[3rem]"
              />
            </div>
          </motion.div>

          {/* Right Feature Column */}
          <div className="flex flex-col gap-10 md:gap-16 lg:w-[30%] order-3">
            {featureCards.filter(f => f.side === "right").map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 text-center lg:text-left relative group"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-4 md:mb-6 mx-auto lg:mr-auto lg:ml-0 shadow-sm group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed italic text-sm">
                  {feature.description}
                </p>

                {/* Dashed Line to Phone - Visible on Desktop */}
                <div className="hidden lg:block absolute top-1/2 right-full w-24 h-px border-t-2 border-dashed border-slate-200 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Symmetrical SVG Dashed Connections (Absolute Overlay) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block -z-10">
            {/* SVG implementation for more curved lines like reference if needed */}
          </div>

        </div>
      </div>
    </section>
  );
}
