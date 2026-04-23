"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_logo.svg" },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
  { name: "Airbrake", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Airbrake_logo.svg" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
];

export function TrustBar() {
  return (
    <section className="py-5 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[14px] font-semibold text-slate-500 mb-14 tracking-tight"
        >
          Our Trusted Partner
        </motion.p>

        <div className="relative overflow-hidden w-full">
          {/* Infinite Scroll Container */}
          <motion.div 
            className="flex items-center gap-x-12 md:gap-x-20 w-fit"
            animate={{ 
              x: ["0%", "-50%"] 
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Double the array for seamless looping */}
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="group cursor-pointer flex-none"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-7 md:h-10 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Masks (Fade edges) */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
