"use client";

import Link from "next/link";
import { Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[#f8fafc] pt-24 pb-12 overflow-hidden border-t border-slate-200/60 relative" id="footer">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-0 relative">
          
          {/* Column 1: Navigation */}
          <div className="lg:pr-16 lg:border-r border-slate-200/60">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Navigation</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
              <Link href="#" className="text-slate-500 font-medium hover:text-emerald-600 transition-colors">Work</Link>
              <Link href="#" className="text-slate-500 font-medium hover:text-emerald-600 transition-colors">About</Link>
              <Link href="#" className="text-slate-500 font-medium hover:text-emerald-600 transition-colors">Services</Link>
              <Link href="#" className="text-slate-500 font-medium hover:text-emerald-600 transition-colors">Client</Link>
            </div>
            <button className="px-10 py-5 bg-[#38b000] hover:bg-[#2d8e00] text-white font-black text-xl rounded-full transition-all active:scale-95 shadow-xl shadow-green-500/20">
              Say Hello..
            </button>
          </div>

          {/* Column 2: Brand/Description */}
          <div className="lg:px-16 lg:border-r border-slate-200/60 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                 <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                 </div>
              </div>
              <span className="text-3xl font-black text-slate-900 tracking-tighter">JobVanta</span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-12">
              We're a team of passionate designers and strategists dedicated to building meaningful digital experiences.
            </p>
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-bold text-slate-400">© Copyright 2026 JobVanta</p>
              <div className="flex gap-6 text-sm font-medium">
                <Link href="/privacy" className="text-slate-400 hover:text-emerald-600 transition-colors">Privacy Policy</Link>
                <Link href="/refund" className="text-slate-400 hover:text-emerald-600 transition-colors">Refund Policy</Link>
                <Link href="/terms" className="text-slate-400 hover:text-emerald-600 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>

          {/* Column 3: Contact/Socials */}
          <div className="lg:pl-16">
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight text-center lg:text-right">Contact</h3>
            <div className="flex flex-col items-center lg:items-end gap-4 mb-12">
              <Link href="mailto:support@jobvanta.com" className="text-slate-500 font-medium hover:text-emerald-600 transition-colors text-xl">Support Email</Link>
              <Link href="#" className="text-slate-500 font-medium hover:text-emerald-600 transition-colors text-xl">Book a Call</Link>
            </div>
            
            <div className="flex justify-center lg:justify-end gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 bg-[#38b000] rounded-full flex items-center justify-center text-white hover:bg-[#2d8e00] transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5 fill-current" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Massive Premium Watermark */}
        <div className="mt-20 flex justify-center items-center opacity-[0.08] pointer-events-none select-none select-none">
          <span className="text-[12rem] lg:text-[20rem] font-black tracking-tighter text-slate-900 leading-none">JobVanta</span>
          <div className="w-32 h-32 lg:w-48 lg:h-48 bg-slate-900 rounded-[3rem] ml-12 flex items-center justify-center">
             <div className="w-16 h-16 lg:w-24 lg:h-24 border-8 lg:border-[12px] border-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 lg:w-6 lg:h-6 bg-white rounded-full" />
             </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
