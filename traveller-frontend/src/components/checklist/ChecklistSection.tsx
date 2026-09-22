"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ChecklistSection() {
  const { preparation } = experience;

  return (
    <section className="relative w-full bg-[#0C1424] py-32 sm:py-44 px-6 sm:px-10 border-t border-white/[0.04]">
      <div className="max-w-[1140px] mx-auto relative z-10">
        <div className="flex justify-between items-center pb-8 border-b border-white/[0.06] mb-16 sm:mb-24">
          <SectionLabel label={preparation.label} number={preparation.number} />
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#777A7D] uppercase hidden sm:inline-block">
            EQUIPMENT AUDIT {"//"} DEPARTURE WEIGHT
          </span>
        </div>

        <div className="mb-20">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F4F1EA]">
            {preparation.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Column 1: Tangible Load */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#D7A85B]/40">
              <span className="font-mono text-xs tracking-[0.25em] text-[#D7A85B] uppercase font-semibold">
                {preparation.essentialTitle}
              </span>
              <span className="font-mono text-[10px] text-[#777A7D]">05 SPECIFICATIONS</span>
            </div>

            <div className="space-y-6">
              {preparation.essentials.map((item, idx) => (
                <div key={idx} className="flex items-baseline justify-between gap-4 pb-4 border-b border-white/[0.05]">
                  <div>
                    <span className="font-serif text-xl sm:text-2xl text-[#F4F1EA] block">
                      {item.name}
                    </span>
                    <span className="text-xs text-[#777A7D] font-light mt-0.5 block">
                      {item.rationale}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#D7A85B]">REQ</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Internal Mindset Preparation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/20">
              <span className="font-mono text-xs tracking-[0.25em] text-[#B8B7B2] uppercase font-semibold">
                {preparation.mindsetTitle}
              </span>
              <span className="font-mono text-[10px] text-[#777A7D]">03 CONDITIONS</span>
            </div>

            <div className="space-y-6">
              {preparation.mindset.map((item, idx) => (
                <div key={idx} className="flex items-baseline justify-between gap-4 pb-4 border-b border-white/[0.05]">
                  <div>
                    <span className="font-serif text-xl sm:text-2xl text-[#E8C27A] block">
                      {item.name}
                    </span>
                    <span className="text-xs text-[#777A7D] font-light mt-0.5 block">
                      {item.rationale}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#777A7D]">STATE</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p className="font-serif text-base sm:text-lg text-[#777A7D] font-light italic">
                &ldquo;Leave expectations behind. They only weigh down the pack before the first ascent.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
