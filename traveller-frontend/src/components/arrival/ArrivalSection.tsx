"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import { generateIcsFile, getGoogleCalendarUrl } from "@/lib/calendar";

export default function ArrivalSection() {
  const { arrival } = experience;
  const [saved, setSaved] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#080D17] via-[#060912] to-[#05070D] py-36 sm:py-56 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <div className="mb-12 sm:mb-16">
          <span className="tracking-[0.35em] text-[11px] sm:text-xs text-[#D7A85B] uppercase font-light">
            {arrival.label}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1 }}
          className="space-y-8 mb-20 sm:mb-28"
        >
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F4F1EA] tracking-tight leading-[0.98]">
            {arrival.title}
          </h2>

          <div className="max-w-[540px] mx-auto space-y-3 pt-4 text-lg sm:text-2xl text-[#B8B7B2] font-light leading-relaxed">
            {arrival.lines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          <div className="pt-8">
            <p className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#E8C27A] font-light tracking-tight">
              {arrival.ctaTime}
            </p>
          </div>
        </motion.div>

        {/* Minimal Contextual Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {!saved ? (
            <>
              <button
                type="button"
                onClick={() => {
                  generateIcsFile();
                  setSaved(true);
                }}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#D7A85B] text-[#04070D] font-medium text-xs tracking-[0.25em] uppercase hover:bg-[#E8C27A] transition-all duration-300 cursor-pointer"
              >
                {arrival.actionLabel}
              </button>

              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSaved(true)}
                className="text-xs tracking-[0.25em] text-[#B8B7B2] hover:text-[#F4F1EA] transition-colors uppercase border-b border-white/20 pb-1"
              >
                GOOGLE CALENDAR →
              </a>
            </>
          ) : (
            <div className="text-center space-y-2 py-4">
              <span className="tracking-[0.25em] text-xs text-[#D7A85B] uppercase block">
                MORNING SAVED
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#F4F1EA] italic font-light">
                Sunday · Sharp 5:00 AM · Kaylana Chouraha
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
