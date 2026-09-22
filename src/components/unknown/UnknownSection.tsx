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
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#070B14]/60 rounded-full blur-[140px]"
      />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <SectionLabel label={unknown.label} number="03" />

        {/* Section Title & Philosophy of Withholding */}
        <div className="max-w-[780px] mb-24 sm:mb-32">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4F1EA] tracking-tight leading-[1.08] mb-8">
            {unknown.title}
          </h2>

          <div className="space-y-2 text-base sm:text-lg text-[#B8B7B2] font-light max-w-[600px] mb-8">
            {unknown.paragraphs.slice(0, 4).map((p, idx) => (
              <p key={idx} className={idx === 3 ? "text-[#D7A85B] font-normal pt-2" : ""}>
                {p}
              </p>
            ))}
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#F4F1EA] font-light italic border-l-2 border-[#D7A85B]/40 pl-6 py-1">
            {unknown.paragraphs[4]}
          </p>
        </div>

        {/* Floating Mystery Text Fragments (Not Conventional Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 pt-4">
          {unknown.cards.map((card, idx) => {
            const isLast = card.emphasis || idx === unknown.cards.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: "easeOut" }}
                className={`relative p-8 sm:p-10 rounded-2xl transition-all duration-500 ${
                  isLast
                    ? "md:col-span-2 bg-gradient-to-br from-[#172536]/80 via-[#111D30]/90 to-[#0C1424] border border-[#D7A85B]/25"
                    : "bg-[#0C1424]/60 backdrop-blur-sm border border-white/[0.06] hover:border-white/15"
                }`}
              >
                <div className="flex flex-col justify-between h-full space-y-4">
                  <div className="text-[11px] tracking-[0.25em] text-[#777A7D] uppercase font-mono">
                    FRAGMENT · 0{idx + 1}
                  </div>
                  <div>
                    <span className="block text-sm sm:text-base tracking-wide text-[#777A7D] uppercase font-medium mb-1">
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
