"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";
import { generateIcsFile, getGoogleCalendarUrl } from "@/lib/calendar";

export default function ArrivalSection() {
  const { arrival } = experience;
  const [committed, setCommitted] = useState(false);

  return (
    <section className="relative w-full bg-[#0A1220] py-32 sm:py-52 px-6 sm:px-10 transition-colors duration-1000 overflow-hidden">
      <div className="max-w-[960px] mx-auto text-center relative z-10">
        <div className="flex justify-center">
          <SectionLabel label={arrival.label} number={arrival.number} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1 }}
          className="space-y-6 mb-20 sm:mb-24"
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-[#F4F1EA] tracking-tight leading-[0.98]">
            {arrival.title}
          </h2>

          <div className="max-w-[580px] mx-auto space-y-3 pt-6 text-base sm:text-xl text-[#B8B7B2] font-light leading-relaxed">
            {arrival.lines.slice(0, 3).map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          <div className="pt-10 space-y-2">
            <p className="font-serif text-2xl sm:text-4xl text-[#F4F1EA] font-normal italic">
              {arrival.lines[3]}
            </p>
            <p className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#D7A85B] font-medium tracking-tight">
              {arrival.lines[4]}
            </p>
          </div>
        </motion.div>

        {/* Action Controls & Digital Field Pass Generator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          {!committed ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  generateIcsFile();
                  setCommitted(true);
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D7A85B] text-[#070B14] font-medium text-xs sm:text-sm font-mono tracking-[0.2em] uppercase hover:bg-[#E8C27A] transition-all duration-300 shadow-xl hover:shadow-[#D7A85B]/20 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Calendar size={15} strokeWidth={2} />
                <span>{arrival.actionLabel}</span>
              </button>

              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCommitted(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.04] text-[#F4F1EA] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] font-medium text-xs sm:text-sm font-mono tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>GOOGLE CALENDAR</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-[#070B14] border border-[#D7A85B]/50 shadow-2xl text-left font-mono relative overflow-hidden"
            >
              {/* Gold watermark accent */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="text-[10px] tracking-widest text-[#D7A85B] uppercase font-bold">
                  FIELD DISPATCH PASS {"//"} 0500-KAYLANA
                </span>
                <span className="text-[10px] text-[#777A7D]">STATUS: CONFIRMED</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#D7A85B]/20 flex items-center justify-center text-[#D7A85B] shrink-0 mt-0.5">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-sm font-serif font-normal text-[#F4F1EA]">
                    The morning remembers your intent.
                  </div>
                  <div className="text-xs text-[#777A7D] mt-1 font-light">
                    Kaylana Chouraha · Sharp 5:00 AM. Bring notebook, pen, and leave the city behind.
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
