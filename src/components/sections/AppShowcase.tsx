"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Zap, Globe, MessageSquare, CheckCircle2 } from "lucide-react";

const tabs = [
  { id: "updates", label: "Real-Time Updates", icon: Zap },
  { id: "security", label: "Strong Security", icon: ShieldCheck },
  { id: "global", label: "Global Matching", icon: Globe },
  { id: "support", label: "24/7 Support", icon: MessageSquare },
];

const content = {
  updates: {
    title: "Instant Application tracking",
    description: "Get notified the millisecond a recruiter views your profile or moves you to the next stage of the hiring process.",
    features: ["Push notifications", "Live dashboard", "Recruiter feedback"],
    image: "/showcase_user.png",
  },
  security: {
    title: "Bank-Grade Encryption",
    description: "Your personal data and career history are protected by the same security protocols used by leading financial institutions.",
    features: ["End-to-end encryption", "SOC2 Compliant", "Private data vaults"],
    image: "/showcase_user.png",
  },
  global: {
    title: "Worldwide Career Reach",
    description: "Our AI matches you with the best opportunities globally, from Silicon Valley startups to local industry leaders.",
    features: ["Remote-first filters", "Skill-based matching", "Global talent pool"],
    image: "/showcase_user.png",
  },
  support: {
    title: "Dedicated Human Assistance",
    description: "Our team of career experts and technical support are available around the clock to ensure your journey is smooth.",
    features: ["Resume audits", "Technical support", "Career coaching"],
    image: "/showcase_user.png",
  },
};

export function AppShowcase() {
  const [activeTab, setActiveTab] = useState("updates");

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden" id="showcase">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-8"
          >
            Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-3xl font-black text-slate-900 mb-6 tracking-tight leading-tight px-4"
          >
            Best Career Solution, <br className="hidden md:block" /> Built for You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 font-medium px-4"
          >
            Navigate your career path faster, stay organized, and make confident <br className="hidden md:block" />
            moves with tools designed for modern professionals.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto no-scrollbar md:justify-center gap-6 md:gap-8 mb-16 md:mb-20 border-b border-slate-200 px-4 md:px-0 scroll-smooth">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-base md:text-lg font-bold transition-all relative whitespace-nowrap flex-none ${
                activeTab === tab.id ? "text-emerald-600" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-600"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Card */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-emerald-500 flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg shadow-emerald-500/20">
                  <Zap className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
                  {content[activeTab as keyof typeof content].title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm italic">
                  {content[activeTab as keyof typeof content].description}
                </p>
              </motion.div>
            </div>

            {/* Center Image Area */}
            <div className="lg:col-span-6 relative flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white group">
                <Image
                  src={content[activeTab as keyof typeof content].image}
                  alt="Feature Showcase"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Notification Pill */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 rounded-full shadow-2xl flex items-center gap-3 md:gap-4 border border-white/20 whitespace-nowrap"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white-none">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-black text-slate-900">Application Update</p>
                    <p className="text-[10px] md:text-xs text-slate-500 font-bold">New interview request at Google!</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Card / List */}
            <div className="lg:col-span-3 order-3">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col justify-center">
                 <div className="space-y-6">
                    {content[activeTab as keyof typeof content].features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-slate-700 font-bold text-sm tracking-tight">{feature}</span>
                      </motion.div>
                    ))}
                 </div>
                 
                 <div className="mt-12 pt-8 border-t border-slate-50">
                    <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center">
                       <p className="text-xs font-black text-emerald-800 uppercase tracking-widest mb-1">Status</p>
                       <p className="text-lg font-black text-slate-900">100% Secure</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
