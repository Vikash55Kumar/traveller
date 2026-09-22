"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import HorizonGlow from "@/components/ui/HorizonGlow";
import WordReveal from "@/components/ui/WordReveal";
import LanternLight from "@/components/ui/LanternLight";

export default function HeroSection() {
  const { hero } = experience;

  return (
    <section className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#050912] select-none">
      {/* Background Mountain Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-dawn.jpg"
          alt="Early dawn atmospheric mountain mist at Kaylana"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.03] transition-transform duration-1000"
        />
        {/* Layer 1: Dark atmospheric base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070D]/90 via-[#070B14]/80 to-[#050912]" />
        
        {/* Layer 2: Deep blue dawn tint */}
        <div className="absolute inset-0 bg-[#0A1220]/45 mix-blend-multiply" />
        
        {/* Layer 3: Tactile grid subtle overlay */}
        <div className="absolute inset-0 bg-tactical-grid opacity-30" />
      </div>

      {/* Mouse Lantern Glow */}
      <LanternLight />

      {/* Imperceptible Horizon Glow Micro-interaction */}
      <HorizonGlow intensity="subtle" />

      {/* Editorial Top Field Metadata */}
      <div className="relative z-20 pt-28 sm:pt-32 max-w-[1240px] w-full mx-auto px-6 sm:px-10 flex items-center justify-between text-[#777A7D] text-[10px] font-mono tracking-widest uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D7A85B]/60" />
          <span>PHASE · 04:45 AM DEPARTURE</span>
        </span>
        <span className="hidden sm:inline-block">
          ELEVATION · {hero.elevation} {"//"} {hero.coordinates}
        </span>
      </div>

      {/* Center Cinematic Hero Content */}
      <div className="relative z-20 max-w-[1100px] w-full mx-auto px-6 sm:px-10 flex flex-col items-center text-center my-auto">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-block tracking-[0.35em] text-[10px] sm:text-xs text-[#D7A85B] uppercase font-mono font-medium border-b border-[#D7A85B]/20 pb-1">
            {hero.eyebrow}
          </span>
        </motion.div>

        {/* Title reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[48px] sm:text-[76px] md:text-[104px] lg:text-[124px] font-normal tracking-[-0.015em] leading-[0.92] text-[#F4F1EA] mb-6 sm:mb-8"
        >
          {hero.title}
        </motion.h1>

        {/* Staggered Philosophy Statement */}
        <div className="max-w-[620px] mx-auto mb-8 sm:mb-10">
          <div className="font-serif text-lg sm:text-2xl md:text-3xl text-[#F4F1EA]/90 italic font-light leading-relaxed">
            <WordReveal
              text={hero.quoteLine1}
              delay={1.1}
              stagger={0.12}
              as="p"
              className="block mb-1 sm:mb-2 text-[#F4F1EA]"
            />
            <WordReveal
              text={hero.quoteLine2}
              delay={1.4}
              stagger={0.06}
              as="p"
              className="block text-[#B8B7B2]"
            />
          </div>
        </div>

        {/* Precise Time & Coordinates Dispatch */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-1.5 pt-2"
        >
          <div className="tracking-[0.25em] text-xs sm:text-sm font-mono text-[#F4F1EA] uppercase">
            {hero.date} &nbsp;—&nbsp; {hero.time}
          </div>
          <div className="tracking-[0.2em] text-[11px] sm:text-xs text-[#777A7D] uppercase font-light">
            {hero.location} &nbsp;·&nbsp; {hero.reporting}
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Bar with Scroll Indicator */}
      <div className="relative z-20 pb-6 sm:pb-8 max-w-[1240px] w-full mx-auto px-6 sm:px-10 flex items-end justify-between">
        <div className="hidden sm:block text-[9px] font-mono tracking-widest text-[#777A7D]/60 uppercase max-w-[180px]">
          ROUTE ENCRYPTED {"//"} DESTINATION UNDISCLOSED
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.2 }}
          className="mx-auto sm:mx-0"
        >
          <ScrollIndicator label={hero.scrollPrompt} />
        </motion.div>

        <div className="hidden sm:block text-right text-[9px] font-mono tracking-widest text-[#777A7D]/60 uppercase max-w-[180px]">
          DAWN TRAVERSE {"//"} {experience.meta.region}
        </div>
      </div>
    </section>
  );
}
