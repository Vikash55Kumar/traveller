"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";

export default function UnknownSection() {
  const { unknown } = experience;

  return (
    <section className="relative w-full bg-[#111C2C] py-32 sm:py-48 px-6 sm:px-10 transition-colors duration-1000 overflow-hidden">
      {/* Deep ambient dark tone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#070B14]/70 rounded-full blur-[160px]"
      />

      <div className="max-w-[1140px] mx-auto relative z-10">
        <div className="flex justify-between items-center pb-8 border-b border-white/[0.06] mb-16 sm:mb-24">
          <SectionLabel label={unknown.label} number={unknown.number} />
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#777A7D] uppercase hidden sm:inline-block">
            SECURITY LEVEL · ZERO DISCLOSURE
          </span>
        </div>

        {/* Section Title & Philosophy of Withholding */}
        <div className="max-w-[840px] mb-24 sm:mb-32">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4F1EA] tracking-tight leading-[1.05] mb-8">
            {unknown.title}
          </h2>

          <div className="space-y-3 text-base sm:text-lg text-[#B8B7B2] font-light max-w-[640px] mb-10">
            {unknown.paragraphs.slice(0, 4).map((p, idx) => (
              <p key={idx} className={idx === 3 ? "text-[#D7A85B] font-mono text-sm pt-2" : ""}>
                {p}
              </p>
            ))}
          </div>

          <div className="border-l-2 border-[#D7A85B]/50 pl-6 py-2">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F4F1EA] font-light italic">
              {unknown.paragraphs[4]}
            </p>
          </div>
        </div>

        {/* Floating Field Fragments (Not Standard Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4">
          {unknown.cards.map((card, idx) => {
            const isLast = card.emphasis || idx === unknown.cards.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.9, delay: idx * 0.14, ease: "easeOut" }}
                className={`relative p-8 sm:p-12 transition-all duration-500 ${
                  isLast
                    ? "md:col-span-2 bg-[#0C1424]/90 border border-[#D7A85B]/30 rounded-2xl sm:rounded-3xl"
                    : "bg-[#0C1424]/40 border border-white/[0.07] hover:border-white/20 rounded-xl"
                }`}
              >
                <div className="flex flex-col justify-between h-full space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] text-[#D7A85B] uppercase font-mono">
                      SPECIMEN {"//"} 0{idx + 1}
                    </span>
                    <span className="font-mono text-[9px] text-[#777A7D]/70 uppercase">
                      UNTRACKED
                    </span>
                  </div>

                  <div>
                    <span className="block text-xs sm:text-sm tracking-[0.2em] text-[#777A7D] uppercase font-mono mb-2">
                      {card.prefix}
                    </span>
                    <span
                      className={`block font-serif text-2xl sm:text-3xl md:text-4xl leading-tight font-light ${
                        isLast ? "text-[#E8C27A] italic" : "text-[#F4F1EA]"
                      }`}
                    >
                      {card.line}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
