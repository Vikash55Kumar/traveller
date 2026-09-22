"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ChecklistSection() {
  const { preparation } = experience;

  return (
    <section className="relative w-full bg-[#0C1424] py-28 sm:py-36 px-6 sm:px-10 border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <SectionLabel label={preparation.label} number="06" />

        <div className="mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F1EA]">
            {preparation.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Column 1: Essential items */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-xs tracking-[0.25em] text-[#D7A85B] uppercase font-semibold pb-2 border-b border-white/10">
              {preparation.essentialTitle}
            </div>
            <ul className="space-y-4">
              {preparation.essentials.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3.5 text-sm sm:text-base text-[#F4F1EA]">
                  <span className="w-5 h-5 rounded-full bg-[#D7A85B]/15 border border-[#D7A85B]/30 flex items-center justify-center text-[#D7A85B] shrink-0">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Also bring (Internal / Mindset) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="text-xs tracking-[0.25em] text-[#B8B7B2] uppercase font-semibold pb-2 border-b border-white/10">
              {preparation.mindsetTitle}
            </div>
            <ul className="space-y-4">
              {preparation.mindset.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3.5 text-sm sm:text-base text-[#B8B7B2]">
                  <span className="w-5 h-5 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#E8C27A] shrink-0">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#777A7D] pt-4 font-light italic">
              Leave expectations behind. They only weigh down the bag.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
