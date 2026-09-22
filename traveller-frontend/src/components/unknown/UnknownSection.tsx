"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export default function UnknownSection() {
  const { unknown } = experience;

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0E1A30] via-[#09101E] to-[#0D1526] py-36 sm:py-56 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="mb-12 sm:mb-16">
          <span className="tracking-[0.35em] text-[11px] sm:text-xs text-[#D7A85B] uppercase font-light">
            {unknown.label}
          </span>
        </div>

        {/* Heading & Explicit Withholding Rationale */}
        <div className="max-w-[800px] mb-28 sm:mb-40">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4F1EA] tracking-tight leading-[1.05] mb-8">
            {unknown.title}
          </h2>

          <div className="space-y-2 text-base sm:text-lg text-[#B8B7B2] font-light max-w-[560px] mb-8">
            {unknown.paragraphs.slice(0, 4).map((p, idx) => (
              <p key={idx} className={idx === 3 ? "text-[#D7A85B] pt-2" : ""}>
                {p}
              </p>
            ))}
          </div>

          <p className="font-serif text-xl sm:text-2xl text-[#F4F1EA] font-light italic border-l-2 border-[#D7A85B]/30 pl-6 py-1">
            {unknown.paragraphs[4]}
          </p>
        </div>

        {/* Floating Text Fragments (No conventional card boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-4">
          {unknown.fragments.map((fragment, idx) => {
            const isLast = fragment.emphasis || idx === unknown.fragments.length - 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 1, delay: idx * 0.16, ease: "easeOut" }}
                className={isLast ? "md:col-span-2 pt-6 sm:pt-10 border-t border-white/[0.06]" : ""}
              >
                <span className="block text-xs sm:text-sm tracking-[0.25em] text-[#777A7D] uppercase font-light mb-2">
                  {fragment.prefix}
                </span>
                <span
                  className={`block font-serif text-3xl sm:text-4xl md:text-5xl leading-tight font-light ${
                    isLast ? "text-[#E8C27A] italic max-w-2xl" : "text-[#F4F1EA]"
                  }`}
                >
                  {fragment.line}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
