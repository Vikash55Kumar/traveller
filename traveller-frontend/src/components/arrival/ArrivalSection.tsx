"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";
import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";
import { generateIcsFile, getGoogleCalendarUrl } from "@/lib/calendar";

export default function ArrivalSection() {
  const { arrival } = experience;
  const [committed, setCommitted] = useState(false);

  return (
    <section className="relative w-full bg-[#0A1220] py-32 sm:py-48 px-6 sm:px-10 transition-colors duration-1000 overflow-hidden">
      <div className="max-w-[880px] mx-auto text-center relative z-10">
        <div className="flex justify-center">
          <SectionLabel label={arrival.label} number="07" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1 }}
          className="space-y-6 mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4F1EA] tracking-tight leading-[1.08]">
            {arrival.title}
          </h2>

          <div className="max-w-[620px] mx-auto space-y-4 pt-4 text-base sm:text-xl text-[#B8B7B2] font-light leading-relaxed">
            {arrival.lines.slice(0, 3).map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          <div className="pt-6">
            <p className="font-serif text-2xl sm:text-4xl text-[#F4F1EA] font-normal italic">
              {arrival.lines[3]}
            </p>
            <p className="font-serif text-3xl sm:text-5xl text-[#E8C27A] font-medium mt-1">
              {arrival.lines[4]}
            </p>
          </div>
        </motion.div>

        {/* Action: Save the Morning */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {!committed ? (
            <>
              <button
                type="button"
                onClick={() => {
                  generateIcsFile();
                  setCommitted(true);
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D7A85B] text-[#070B14] font-medium text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#E8C27A] transition-all duration-300 shadow-lg hover:shadow-[#D7A85B]/20 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Calendar size={16} strokeWidth={2} />
                <span>{arrival.actionLabel}</span>
              </button>

              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCommitted(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.04] text-[#F4F1EA] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] font-medium text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>GOOGLE CALENDAR</span>
              </a>
            </>
          ) : (
            <div className="p-6 rounded-2xl bg-[#111D30] border border-[#D7A85B]/40 max-w-md mx-auto flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-[#D7A85B]/20 flex items-center justify-center text-[#D7A85B] shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-widest text-[#D7A85B] uppercase">
                  CALENDAR SAVED
                </div>
                <div className="text-xs text-[#B8B7B2] mt-0.5">
                  Sunday · 5:00 AM · Kaylana Chouraha. We will see you when the dawn is dark.
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
