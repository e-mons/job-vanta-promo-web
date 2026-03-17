"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Plan",
    price: "$0",
    description: "Best for professionals just starting their journey.",
    features: [
      "Create up to 2 professional resumes",
      "Basic job search (Top 3 results)",
      "Modern Minimal template",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Basic Plan",
    price: "$9.90",
    description: "Perfect for active job seekers.",
    features: [
      "Up to 5 professional resumes",
      "Unlimited job search results",
      "Full access to 10+ premium templates",
      "Standard AI suggestions",
    ],
    cta: "Start Basic",
    popular: false,
  },
  {
    name: "Pro Plan",
    price: "$25.00",
    description: "Our most popular choice for high-growth professionals.",
    features: [
      "Unlimited resume creation",
      "Priority AI job matching",
      "One-tap applications enabled",
      "Advanced AI resume analysis",
      "Custom branding options",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Premium Plan",
    price: "$49.00",
    description: "For those who want the absolute competitive advantage.",
    features: [
      "Everything in Pro",
      "White-glove concierge support",
      "Early access to new features",
      "Personalized career strategy coaching",
    ],
    cta: "Get Premium",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Invest in Your Career</h2>
          <p className="text-slate-500">
            Most users find that JobVanta pays for itself with their first paycheck from a new role. Choose the plan that fits your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white p-8 rounded-[2.5rem] border ${
                plan.popular ? "border-emerald-500 shadow-xl shadow-emerald-500/10 ring-4 ring-emerald-50" : "border-slate-100 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Recommended
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 mb-1">/ month</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "primary" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
