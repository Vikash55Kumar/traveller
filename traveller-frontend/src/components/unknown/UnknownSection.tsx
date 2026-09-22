"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import { Lock } from "lucide-react";

export default function UnknownSection() {
  const { unknown } = experience;
  const sealedPillars = unknown.sealedPillars || [];
  const revelations = unknown.revelations || unknown.fragments || [];
  const manifesto = unknown.manifesto || [
    "In a world where every step is mapped by satellite and every view is photographed in advance, uncertainty has become a lost art.",
    "The Traveller restores the quiet dignity of the unwritten morning. By withholding the route and the questions, we leave room for genuine discovery.",
  ];

  return (
    <section
      id="the-unknown"
      className="relative w-full bg-[#08090C] py-32 sm:py-52 px-6 sm:px-10 overflow-hidden"
    >
      {/* Ambient Pre-Dawn Atmospheric Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-25 blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(226, 186, 114, 0.16) 0%, rgba(20, 26, 44, 0.45) 50%, transparent 80%)",
        }}
      />

      {/* Subtle Starfield & Celestial Noise Texture */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 30px 40px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 160px 100px, #E2BA72, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 340px 240px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 580px 190px, #F3D089, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 780px 320px, #ffffff, rgba(0,0,0,0))`,
          backgroundSize: "750px 750px",
        }}
      />

      <div className="max-w-[1140px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-[840px] mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-[1px] bg-[#E2BA72]" />
            <span className="text-[11px] font-mono tracking-[0.35em] text-[#E2BA72] uppercase font-medium">
              {unknown.label} {"//"} THE UNWRITTEN TRAIL
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F8F6F0] tracking-tight leading-[0.96] mb-6"
          >
            {unknown.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-[#D6C2B4] font-light italic leading-relaxed"
          >
            {unknown.subtitle || "The rare luxury of not knowing what lies ahead."}
          </motion.p>
        </div>

        {/* The Withholding Manifesto Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-2xl bg-[#0A0D15]/80 border border-white/[0.08] backdrop-blur-md mb-24 sm:mb-32 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold accent line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2BA72]/40 to-transparent" />

          {/* Left: Philosophy text */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#E2BA72] uppercase block">
              THE PHILOSOPHY OF WITHHOLDING
            </span>
            <p className="text-base sm:text-lg text-[#F8F6F0] font-light leading-relaxed">
              {manifesto[0]}
            </p>
            <p className="text-sm sm:text-base text-[#A2A7B0] font-light leading-relaxed">
              {manifesto[1]}
            </p>
          </div>

          {/* Right: Architectural Quote Callout */}
          <div className="lg:col-span-5 lg:border-l border-white/[0.08] lg:pl-10 pt-6 lg:pt-0">
            <blockquote className="font-serif text-2xl sm:text-3xl text-[#F3D089] font-light italic leading-snug">
              &ldquo;When you already know every turn, you are no longer exploring. You are merely verifying.&rdquo;
            </blockquote>
            <span className="text-[10px] font-mono tracking-widest text-[#A2A7B0] uppercase block mt-4">
              — The Principle of the Unmapped Morning
            </span>
          </div>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* THE 3 SEALED MYSTERY FOLIOS (WHAT IS WITHHELD & WHY) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-28 sm:mb-40">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#E2BA72] uppercase font-light block mb-2">
                THREE CONSCIOUS SECRETS
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F8F6F0] font-light">
                What We Keep Hidden
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A2A7B0] mt-3 sm:mt-0">
              <Lock className="w-3.5 h-3.5 text-[#E2BA72]" />
              <span>INTENTIONAL OMISSION</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {sealedPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6% 0px" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0A0D15]/80 backdrop-blur-sm p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#E2BA72]/40 hover:bg-[#0E1320]/90 shadow-xl overflow-hidden"
              >
                {/* Subtle Amber Glow Accent on Hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#E2BA72]/5 blur-3xl pointer-events-none group-hover:bg-[#E2BA72]/15 transition-all duration-700" />

                <div>
                  {/* Top Bar: Roman Numeral & Tag */}
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.06] group-hover:border-[#E2BA72]/20 transition-colors duration-500">
                    <div className="flex items-center gap-2.5">
                      <span className="font-serif text-sm text-[#E2BA72] tracking-wider font-light">
                        {pillar.number}
                      </span>
                      <span className="text-white/20">|</span>
                      <span className="text-[10px] font-mono tracking-widest text-[#A2A7B0] uppercase">
                        {pillar.tag}
                      </span>
                    </div>

                    {/* Bespoke Geometric Icon */}
                    <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#E2BA72] group-hover:border-[#E2BA72]/50 group-hover:scale-110 transition-all duration-500">
                      {pillar.glyph === "path" && (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M4 19C8 19 8 5 12 5C16 5 16 19 20 19" strokeDasharray="3 3" />
                          <circle cx="4" cy="19" r="2" fill="currentColor" />
                          <circle cx="20" cy="19" r="2" />
                        </svg>
                      )}
                      {pillar.glyph === "scroll" && (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <rect x="5" y="4" width="14" height="16" rx="2" />
                          <line x1="9" y1="9" x2="15" y2="9" />
                          <line x1="9" y1="13" x2="13" y2="13" />
                        </svg>
                      )}
                      {pillar.glyph === "horizon" && (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <line x1="3" y1="15" x2="21" y2="15" />
                          <circle cx="12" cy="11" r="4" strokeDasharray="2 2" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Title & Core Question */}
                  <h4 className="font-serif text-2xl sm:text-3xl text-[#F8F6F0] font-light mb-3 group-hover:text-[#F3D089] transition-colors duration-500">
                    {pillar.title}
                  </h4>
                  <div className="font-serif text-base text-[#D6C2B4] font-light italic mb-5">
                    &ldquo;{pillar.question}&rdquo;
                  </div>

                  {/* Philosophy Text */}
                  <p className="text-xs sm:text-sm text-[#A2A7B0] font-light leading-relaxed mb-6">
                    {pillar.philosophy}
                  </p>
                </div>

                {/* Bottom Hairline */}
                <div className="h-[1px] w-full bg-gradient-to-r from-[#E2BA72]/30 via-white/5 to-transparent group-hover:from-[#E2BA72]/60 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* THE FOUR UNSEEN REVELATIONS */}
        {/* ------------------------------------------------------------- */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#07090F]/90 backdrop-blur-md p-8 sm:p-12 shadow-2xl relative">
          {/* Top Gold Horizon Hairline */}
          <div className="absolute top-0 inset-x-8 sm:inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-[#E2BA72]/40 to-transparent" />

          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-10 border-b border-white/[0.08]">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#E2BA72] uppercase block mb-2">
                WHAT YOU WILL FIND INSTEAD
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#F8F6F0] font-light">
                The Unseen Revelations
              </h3>
            </div>
            <p className="text-xs text-[#A2A7B0] font-light max-w-xs mt-2 sm:mt-0">
              When certainty is stripped away, these four moments take its place.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {revelations.map((rev, idx) => {
              const isLast = rev.emphasis || idx === revelations.length - 1;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.12 }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline pb-6 border-b border-white/[0.04] last:border-b-0 last:pb-0 ${
                    isLast ? "pt-4" : ""
                  }`}
                >
                  <div className="md:col-span-3 flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[#E2BA72]/60">
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-xs font-mono tracking-[0.25em] uppercase ${
                        isLast ? "text-[#E2BA72] font-medium" : "text-[#A2A7B0]"
                      }`}
                    >
                      {rev.prefix}
                    </span>
                  </div>

                  <div className="md:col-span-9">
                    <p
                      className={`font-serif text-xl sm:text-2xl md:text-3xl font-light leading-snug ${
                        isLast
                          ? "text-[#F3D089] italic"
                          : "text-[#F8F6F0]"
                      }`}
                    >
                      {rev.line}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
