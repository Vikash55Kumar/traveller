"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import { Eye, Compass, Moon } from "lucide-react";

export default function MorningSection() {
  const { morning } = experience;
  const movements = morning.movements || [];
  const principles = morning.principles || [];

  return (
    <section
      id="the-morning"
      className="relative w-full bg-gradient-to-b from-[#0A1220] via-[#0E172A] to-[#090F1C] py-32 sm:py-48 px-6 sm:px-10 overflow-hidden"
    >
      {/* Cinematic Jodhpur Dawn Mist Photography Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/jodhpur-dawn.webp"
          alt="Atmospheric early morning mist over Kaylana and ancient Jodhpur fortress silhouette at pre-dawn"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105 opacity-90 brightness-90 contrast-105"
        />
        {/* Atmospheric Indigo Vignettes for text contrast and depth */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0A1220] via-[#0E172A]/70 to-[#090F1C]" /> */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(14,23,42,0.4)_0%,rgba(9,15,28,0.92)_85%)]" />
      </div>

      {/* Ambient Pre-Dawn Radial Glow (Warm Sunrise Rim Light) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] pointer-events-none opacity-40 blur-[140px] z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(226, 186, 114, 0.24) 0%, rgba(14, 23, 42, 0.4) 55%, transparent 80%)",
        }}
      />

      {/* Subtle Starfield & Celestial Noise Texture */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 40px 60px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 190px 120px, #E2BA72, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 320px 280px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 510px 170px, #F3D089, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 740px 380px, #ffffff, rgba(0,0,0,0))`,
          backgroundSize: "800px 800px",
        }}
      />

      <div className="max-w-[1140px] mx-auto relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-[820px] mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-[1px] bg-[#E2BA72]" />
            <span className="text-[11px] font-mono tracking-[0.35em] text-[#E2BA72] uppercase font-medium">
              {morning.label}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F8F6F0] tracking-tight leading-[0.96] mb-6"
          >
            {morning.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-[#D6C2B4] font-light italic leading-relaxed mb-6"
          >
            {morning.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-base sm:text-lg text-[#A2A7B0] font-light leading-relaxed max-w-[680px]"
          >
            {morning.lead}
          </motion.p>
        </div>

        {/* 4 Contemplative Movements — Artisanal Editorial Cards */}
        <div className="mb-28 sm:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {movements.map((movement, idx) => (
              <motion.div
                key={movement.word}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0A0D15]/80 backdrop-blur-sm p-8 sm:p-10 transition-all duration-500 hover:border-[#E2BA72]/40 hover:bg-[#0E1320]/90 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle Amber Glow Accent on Hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#E2BA72]/5 blur-3xl pointer-events-none group-hover:bg-[#E2BA72]/15 transition-all duration-700" />

                <div>
                  {/* Top Bar: Roman Numeral & Tag */}
                  <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06] group-hover:border-[#E2BA72]/20 transition-colors duration-500">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-base sm:text-lg text-[#E2BA72] tracking-wider font-light">
                        {movement.roman}
                      </span>
                      <span className="text-white/20">|</span>
                      <span className="text-[10px] font-mono tracking-widest text-[#A2A7B0] uppercase">
                        {movement.tag}
                      </span>
                    </div>

                    {/* Minimalist Emblem */}
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#E2BA72] group-hover:border-[#E2BA72]/50 group-hover:scale-110 transition-all duration-500">
                      {movement.glyph === "pulse" && (
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <circle cx="12" cy="12" r="9" strokeOpacity="0.4" />
                          <circle cx="12" cy="12" r="5" />
                          <circle cx="12" cy="12" r="1" fill="currentColor" />
                        </svg>
                      )}
                      {movement.glyph === "aperture" && (
                        <Eye className="w-4 h-4 stroke-[1.5]" />
                      )}
                      {movement.glyph === "zenith" && (
                        <Moon className="w-4 h-4 stroke-[1.5]" />
                      )}
                      {movement.glyph === "labyrinth" && (
                        <Compass className="w-4 h-4 stroke-[1.5]" />
                      )}
                    </div>
                  </div>

                  {/* Word & Subtitle */}
                  <div className="mb-6">
                    <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] tracking-[0.08em] font-light group-hover:text-[#F3D089] transition-colors duration-500 mb-2">
                      {movement.word}
                    </h3>
                    <div className="font-serif text-lg sm:text-xl text-[#D6C2B4] font-light italic">
                      {movement.subtitle}
                    </div>
                  </div>

                  {/* Body Prose */}
                  <p className="text-sm sm:text-base text-[#A2A7B0] font-light leading-relaxed mb-6">
                    {movement.description}
                  </p>
                </div>

                {/* Bottom Hairline */}
                <div className="h-[1px] w-full bg-gradient-to-r from-[#E2BA72]/30 via-white/5 to-transparent group-hover:from-[#E2BA72]/60 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Three Principles (Covenant of the Morning) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-2xl border border-white/[0.08] bg-[#07090F]/90 backdrop-blur-md p-8 sm:p-12 shadow-2xl relative"
        >
          {/* Top Gold Horizon Hairline */}
          <div className="absolute top-0 inset-x-8 sm:inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-[#E2BA72]/40 to-transparent" />

          {/* Core Philosophy Quote */}
          <div className="pb-10 mb-10 border-b border-white/[0.08] text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#E2BA72] uppercase block mb-3">
              THE COVENANT
            </span>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F8F6F0] font-light leading-relaxed">
              &ldquo;{morning.discoverNote}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-[#A2A7B0] mt-3 font-light">
              No itinerary. No exercise routine. No required conversation. Room to simply be.
            </p>
          </div>

          {/* Three Quiet Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p) => (
              <div key={p.label} className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#E2BA72] uppercase block">
                  {p.label}
                </span>
                <p className="text-sm text-[#A2A7B0] font-light leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
