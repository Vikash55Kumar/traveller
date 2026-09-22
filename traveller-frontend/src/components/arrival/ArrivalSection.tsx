"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { experience } from "@/content/experience";
import { generateIcsFile, getGoogleCalendarUrl } from "@/lib/calendar";

export default function ArrivalSection() {
  const { arrival } = experience;
  const [saved, setSaved] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0E0B09] via-[#080B14] to-[#05070D] py-36 sm:py-56 px-6 sm:px-10 overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <div className="mb-12 sm:mb-16">
          <span className="text-[11px] tracking-[0.35em] text-[#E2BA72] uppercase font-light">
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
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F8F6F0] tracking-tight leading-[0.98]">
            {arrival.title}
          </h2>

          <div className="max-w-[560px] mx-auto space-y-3 pt-4 text-lg sm:text-2xl text-[#A2A7B0] font-light leading-relaxed">
            {arrival.lines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          <div className="pt-8">
            <p className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#F3D089] font-light tracking-tight">
              {arrival.ctaTime}
            </p>
          </div>
        </motion.div>

        {/* Luxury Gold Foil Expedition Pass */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-xl mx-auto rounded-3xl p-8 sm:p-10 bg-[#080A10] border border-[#E2BA72]/30 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold watermark glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E2BA72]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Pass Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6 text-left">
            <div>
              <span className="text-[9px] tracking-[0.3em] text-[#E2BA72] uppercase font-mono block">
                EXPEDITION PASS
              </span>
              <span className="font-serif text-xl sm:text-2xl text-[#F8F6F0]">
                The Traveller · Dawn Traverse
              </span>
            </div>
            <div className="text-right font-mono text-[10px] text-[#A2A7B0]">
              SERIAL: 0500-KAYLANA
            </div>
          </div>

          {/* Pass Details */}
          <div className="grid grid-cols-2 gap-4 pb-6 border-b border-dashed border-white/15 text-left text-xs mb-8">
            <div>
              <span className="text-[#606775] font-mono text-[10px] uppercase block">
                REPORTING TIME
              </span>
              <span className="text-[#F8F6F0] font-mono text-sm mt-0.5 block">
                05:00 AM SHARP
              </span>
            </div>
            <div>
              <span className="text-[#606775] font-mono text-[10px] uppercase block">
                COORDINATES
              </span>
              <a
                href={experience.meta.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E2BA72] hover:text-[#F3D089] font-mono text-xs mt-0.5 block hover:underline transition-colors"
                title="Open location in Google Maps"
              >
                Kailana Circle, Kabir Nagar ↗
              </a>
            </div>
          </div>

          {/* Actions */}
          {!saved ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  generateIcsFile();
                  setSaved(true);
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E2BA72] text-[#08090C] font-medium text-xs tracking-[0.25em] uppercase hover:bg-[#F3D089] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#E2BA72]/20"
              >
                <Calendar size={14} />
                <span>SAVE TO CALENDAR (.ICS)</span>
              </button>

              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSaved(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/[0.04] text-[#F8F6F0] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>GOOGLE CALENDAR</span>
                <ArrowRight size={13} />
              </a>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 py-2 text-[#E2BA72]"
            >
              <CheckCircle2 size={18} />
              <span className="text-xs font-mono tracking-widest uppercase">
                PASS CONFIRMED // SEE YOU AT 5:00 AM
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
