"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export default function NotebookSection() {
  const { notebook } = experience;
  const disciplines = notebook.disciplines || [];

  return (
    <section
      id="the-companion"
      className="relative w-full bg-gradient-to-b from-[#14100E] via-[#1A1411] to-[#0E0B09] py-32 sm:py-48 px-6 sm:px-10 overflow-hidden border-t border-[#E2BA72]/15"
    >
      {/* Top Gold Horizon Hairline */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2BA72]/30 to-transparent" />

      {/* Ambient paper warmth glow */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] pointer-events-none opacity-25 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(226, 186, 114, 0.22) 0%, rgba(38, 26, 18, 0.45) 55%, transparent 80%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-[840px] mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E2BA72]/10 border border-[#E2BA72]/20 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2BA72] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#E2BA72] uppercase font-medium">
              {notebook.label} {"//"} ANALOG SANCTUARY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F8F6F0] tracking-tight leading-[0.96] mb-6"
          >
            {notebook.title}
            <br />
            <span className="text-[#F3D089]">{notebook.subtitle}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-[#D6C2B4] font-light italic leading-relaxed"
          >
            {notebook.lead}
          </motion.p>
        </div>

        {/* Two-Column Editorial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Tactile Artifact Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="lg:col-span-6 relative group"
          >
            {/* Ambient paper warmth glow behind frame */}
            <div className="absolute -inset-4 bg-[#E2BA72]/15 rounded-3xl blur-3xl pointer-events-none group-hover:bg-[#E2BA72]/25 transition-all duration-700" />

            <div className="relative h-[440px] sm:h-[540px] md:h-[600px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#120F0D]">
              <Image
                src="/images/companion-journal.webp"
                alt="Open vintage traveler's notebook with deckled pages and brass pen resting on desert sandstone"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A] via-[#100D0A]/25 to-transparent" />

              {/* Floating Field Inscription Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#14100D]/90 backdrop-blur-md border border-[#E2BA72]/20">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] tracking-[0.25em] text-[#E2BA72] uppercase font-mono">
                    FIELD SPECIMEN // UNLINED STOCK
                  </span>
                  <span className="text-[10px] font-mono text-[#A2A7B0]">
                    26°17&apos;N · 72°58&apos;E
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#F8F6F0] font-light italic leading-relaxed">
                  &ldquo;05:32 AM — The wind shifted across Kaylana. A stone fell from the ledge. No one looked back. For the first time in months, the mind is quiet.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Three Analog Disciplines */}
          <div className="lg:col-span-6 space-y-6 pt-2">
            <div className="pb-4 border-b border-white/[0.08]">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#E2BA72] uppercase block mb-2">
                THE POWER OF THE PHYSICAL PAGE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F6F0] font-light">
                Why Ink Matters
              </h3>
            </div>

            <div className="space-y-4">
              {disciplines.map((disc, idx) => (
                <motion.div
                  key={disc.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.12 }}
                  className="p-6 rounded-xl bg-[#130F0D]/85 border border-white/[0.07] hover:border-[#E2BA72]/35 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono text-[#E2BA72]">
                      {disc.number}
                    </span>
                    <span className="text-white/20">|</span>
                    <h4 className="text-xs font-mono tracking-widest text-[#F8F6F0] uppercase font-medium">
                      {disc.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A2A7B0] font-light leading-relaxed">
                    {disc.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Inscription Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="p-6 rounded-xl bg-gradient-to-r from-[#E2BA72]/10 via-transparent to-transparent border-l-2 border-[#E2BA72] mt-6"
            >
              <p className="font-serif text-lg sm:text-xl text-[#F8F6F0] italic font-light leading-relaxed">
                &ldquo;{notebook.quote}&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
