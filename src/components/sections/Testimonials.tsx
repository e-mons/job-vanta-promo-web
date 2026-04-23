"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Senior Product Designer",
    company: "DesignCo",
    content: "The AI matching is scarily accurate. It found roles I didn't even know I was qualified for, but that perfectly matched my skill set.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "David Chen",
    role: "Full Stack Developer",
    company: "TechFlow",
    content: "I've tried every job board out there. This is the first one that actually respects my time by filtering out the noise and showing me high-quality leads.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "GrowthLabs",
    content: "The interface is beautiful and the process is seamless. It feels like having a personal career agent working for you 24/7.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-white relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            Trusted by the world's <br className="hidden md:block" /> best talent
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" />
                <p className="text-lg font-medium leading-relaxed text-slate-700 italic relative z-10 mb-8">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
