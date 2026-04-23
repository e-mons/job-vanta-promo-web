"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Brain, MessageSquare } from "lucide-react";

const aiFeatures = [
  {
    title: "AI Resume Improvement",
    description: "Our algorithms analyze your text and provide real-time suggestions to strengthen your impact.",
    benefit: "Turn 'Responsible for' into 'Led a team of...' for maximum authority.",
    icon: Brain,
  },
  {
    title: "Smart Automation",
    description: "From auto-generating cover letter drafts to suggesting the best time to apply, we handle the heavy lifting.",
    benefit: "Focus on the interview while we manage the logistics.",
    icon: Zap,
  },
];

export function AIFeatures() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 order-2 lg:order-1">
             <div className="grid grid-cols-1 gap-8">
                {aiFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 relative overflow-hidden group"
                  >
                    <div className="relative z-10 flex gap-6">
                       <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 flex-none">
                          <feature.icon className="w-6 h-6 md:w-7 md:h-7" />
                       </div>
                       <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                          <p className="text-sm md:text-base text-slate-600 mb-4">{feature.description}</p>
                          <p className="text-xs md:text-sm font-bold text-emerald-600 italic">"{feature.benefit}"</p>
                       </div>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
             <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
             >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">Next-Gen AI Integration</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Work Smarter, <br />
                  <span className="text-emerald-600">Not Harder with AI.</span>
                </h2>
                <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                  JobVanta leverages advanced AI to bridge the gap between your skills and your dream career. We provide real-time suggestions to strengthen your impact and handle the tedious logistics of job hunting.
                </p>
                <div className="p-6 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
                   <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-slate-900" />
                      </div>
                      <div className="flex-1 bg-white/10 p-4 rounded-2xl rounded-tl-none">
                         <p className="text-sm">"I need to sound more professional for a Senior Role."</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 flex-row-reverse">
                      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="flex-1 bg-emerald-600/20 p-4 rounded-2xl rounded-tr-none border border-emerald-500/30">
                         <p className="text-sm text-emerald-400 font-bold mb-1">JobVanta AI</p>
                         <p className="text-sm">Optimized: "Led strategic initiatives and cross-functional teams to deliver high-impact product solutions."</p>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
