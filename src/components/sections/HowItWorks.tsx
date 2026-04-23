"use client";

import { motion } from "framer-motion";
import { Download, LineChart, Target, Smartphone, BarChart3, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    title: "Download And Register",
    description: "Create your account quickly with secure verification and a smooth, hassle-free onboarding experience.",
    icon: Download,
  },
  {
    title: "Monitor Application Activity",
    description: "Track your status in real-time. See views from recruiters, interview requests, and personalized analytics.",
    icon: LineChart,
  },
  {
    title: "Achieve Career Goals",
    description: "Organize your job search, refine your strategy, and stay in complete control of your professional journey.",
    icon: Target,
  },
];

const bottomFeatures = [
  {
    title: "Smart App Tracking",
    description: "Automatically track applications and responses with clear categories, helping you understand your progress better.",
    icon: Smartphone,
  },
  {
    title: "AI Response Analysis",
    description: "AI analyzes recruiter behavior and highlights patterns to help you optimize your outreach strategy.",
    icon: BarChart3,
  },
  {
    title: "Secure Data Protection",
    description: "Advanced encryption and security layers keep your personal data and career history fully protected.",
    icon: ShieldCheck,
  },
  {
    title: "Real-Time Updates",
    description: "Get instant notifications on application status, profile views, and new job matches that fit your profile.",
    icon: Clock,
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="how-it-works">
      {/* Decorative Floating Squares */}
      <div className="absolute top-20 left-[10%] w-16 h-16 bg-emerald-400/20 rounded-2xl blur-xl animate-pulse" />
      <div className="absolute top-40 left-[15%] w-12 h-12 bg-emerald-500/10 rounded-xl blur-lg" />
      <div className="absolute top-20 right-[10%] w-20 h-20 bg-emerald-400/15 rounded-3xl blur-2xl" />
      <div className="absolute bottom-40 right-[15%] w-14 h-14 bg-emerald-500/10 rounded-2xl blur-lg" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-8"
          >
            Work Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight px-4"
          >
            JobVanta App Works Process <br />
            <span className="text-emerald-600">Step by Step</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 font-medium px-4"
          >
            Download, sign up, build your profile, and manage your career <br className="hidden md:block" />
            smarter than ever before.
          </motion.p>
        </div>

        {/* Middle Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Left Side: Images & Mockups */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main User Image */}
            <div className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              <Image
                src="/how_it_works_hero_user.png"
                alt="User Experience"
                width={500}
                height={600}
                className="w-full object-cover aspect-[4/5] md:aspect-auto"
              />
              {/* Floating Appraisal Bubble */}
              <div className="absolute top-1/2 right-4 md:right-12 translate-y-[-50%] bg-emerald-400 text-slate-900 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-base font-bold shadow-xl flex items-center gap-2">
                Track Your Career
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-900 rounded-full animate-bounce" />
              </div>
            </div>

            {/* Inset Phone App Mockup */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 md:-bottom-16 -right-4 md:-right-8 z-20 w-48 md:w-64 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 p-1 md:p-1.5 shadow-3xl border-2 md:border-4 border-white"
            >
              <Image
                src="/images/hero-mockup.png"
                alt="App Interface"
                width={250}
                height={500}
                className="rounded-[1.8rem] md:rounded-[2.2rem]"
              />
            </motion.div>
          </motion.div>

          {/* Right Side: Step List */}
          <div className="relative">
            {/* Vertical Connector Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-100" />

            <div className="space-y-12 md:space-y-16">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 md:gap-10 group"
                >
                  <div className="relative z-10 flex-none">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3 group-hover:text-emerald-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-sm italic">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white mb-6 shadow-md shadow-emerald-500/10 group-hover:rotate-12 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
