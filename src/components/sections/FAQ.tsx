"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "How does the AI job matching work?",
    a: "We analyze your resume's skills, experience, and keywords against the job's requirements to provide a percentage-based match score.",
  },
  {
    q: "Are the resumes really ATS-friendly?",
    a: "Absolutely. We've tested our export engine against major systems like Workday, Greenhouse, and Lever to ensure 99.9% readability.",
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes. No contracts, no hidden fees. You can pause or cancel your plan directly from the Profile tab.",
  },
  {
    q: "Is my data secure?",
    a: "We use enterprise-grade encryption and Supabase's secure infrastructure to ensure your personal information is for your eyes only.",
  },
  {
    q: "Does this work for remote jobs globally?",
    a: "Yes, we have filters specifically for 'Remote Only,' which pulls listings from international companies hiring globally.",
  },
  {
    q: "Can I import my existing PDF resume?",
    a: "Our AI parsing tool can extract data from most PDFs to help you build your JobVanta profile in seconds.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-500/30 bg-white text-emerald-600 text-xs font-bold uppercase tracking-wider mb-8"
          >
            FAQs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight"
          >
            Frequently Asked Question
          </motion.h2>
        </div>

        {/* Content List */}
        <div className="border-t border-slate-100">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-slate-100 transition-all duration-500"
            >
              <button
                className="w-full flex items-center justify-between py-8 md:py-10 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex-1 pr-8">
                  <h3 className={`text-xl md:text-2xl font-black transition-colors duration-300 ${
                    openIndex === i ? "text-slate-900" : "text-slate-900 hover:text-emerald-600"
                  }`}>
                    {faq.q}
                  </h3>
                  
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-500 font-medium leading-relaxed max-w-2xl text-base">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Circular Status Button */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                  openIndex === i 
                    ? "bg-emerald-500 text-white scale-110 shadow-lg shadow-emerald-500/20" 
                    : "border-2 border-emerald-500/30 text-emerald-500 group-hover:border-emerald-500"
                }`}>
                  {openIndex === i ? (
                    <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
                  ) : (
                    <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
