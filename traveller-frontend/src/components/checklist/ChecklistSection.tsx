"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export default function ChecklistSection() {
  const { checklist } = experience;

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0D1524] via-[#0A101C] to-[#080D17] py-32 sm:py-44 px-6 sm:px-10 border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="mb-12 sm:mb-16">
          <span className="tracking-[0.35em] text-[11px] sm:text-xs text-[#D7A85B] uppercase font-light">
            {checklist.label}
          </span>
        </div>

        <div className="mb-20">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F4F1EA]">
            {checklist.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Column 1: Essential items */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-xs tracking-[0.3em] text-[#D7A85B] uppercase font-medium pb-4 border-b border-[#D7A85B]/30">
              {checklist.essentialTitle}
            </div>
            <ul className="space-y-3.5">
              {checklist.essentials.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-base sm:text-lg text-[#F4F1EA] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7A85B]/60 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Also bring */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="text-xs tracking-[0.3em] text-[#B8B7B2] uppercase font-medium pb-4 border-b border-white/20">
              {checklist.mindsetTitle}
            </div>
            <ul className="space-y-3.5">
              {checklist.mindset.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-base sm:text-lg text-[#B8B7B2] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
