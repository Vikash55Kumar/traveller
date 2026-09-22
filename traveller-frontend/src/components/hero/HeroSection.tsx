"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import HorizonGlow from "@/components/ui/HorizonGlow";
import WordReveal from "@/components/ui/WordReveal";

export default function HeroSection() {
  const { hero } = experience;

  return (
    <section className="relative w-full h-[100svh] min-h-[680px] flex flex-col justify-between overflow-hidden bg-[#050912]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-dawn.jpg"
          alt="Early dawn atmospheric mountain mist"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.03] transition-transform duration-1000"
        />
        {/* Layer 1: Dark atmospheric base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070D]/90 via-[#070B14]/75 to-[#050912]" />
        
        {/* Layer 2: Deep blue dawn tint */}
        <div className="absolute inset-0 bg-[#0A1220]/40 mix-blend-multiply" />
        
        {/* Layer 3: Subtle vertical vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#050912]/80" />
      </div>

      {/* Imperceptible Horizon Glow Micro-interaction */}
      <HorizonGlow intensity="subtle" />

      {/* Top spacing to offset fixed navigation */}
      <div className="pt-24 sm:pt-28" />

      {/* Center Hero Content */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 sm:px-10 flex flex-col items-center text-center">
        {/* 0.5s: Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-block tracking-[0.3em] text-[11px] sm:text-xs text-[#D7A85B] uppercase font-medium">
            {hero.eyebrow}
          </span>
        </motion.div>

        {/* 0.8s: Title reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[44px] sm:text-[68px] md:text-[96px] lg:text-[112px] font-normal tracking-[-0.01em] leading-[0.95] text-[#F4F1EA] mb-6 sm:mb-8"
        >
          {hero.title}
        </motion.h1>

        {/* 1.2s: Philosophy Statement with Word-by-Word pacing */}
        <div className="max-w-[620px] mx-auto mb-8 sm:mb-12">
          <div className="font-serif text-lg sm:text-2xl md:text-3xl text-[#F4F1EA]/90 italic font-light leading-relaxed">
            <WordReveal
              text={hero.quoteLine1}
              delay={1.2}
              stagger={0.12}
              as="p"
              className="block mb-1 sm:mb-2 text-[#F4F1EA]"
            />
            <WordReveal
              text={hero.quoteLine2}
              delay={1.5}
              stagger={0.07}
              as="p"
              className="block text-[#B8B7B2]"
            />
          </div>
        </div>

        {/* 1.8s: Essential Time & Coordinates */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="tracking-[0.25em] text-xs sm:text-sm font-medium text-[#F4F1EA] uppercase">
            {hero.date} &nbsp;·&nbsp; {hero.time}
          </div>
          <div className="tracking-[0.2em] text-[11px] sm:text-xs text-[#777A7D] uppercase font-light">
            {hero.location} &nbsp;·&nbsp; {hero.reporting}
          </div>
        </motion.div>
      </div>

      {/* 2.5s: Scroll Indicator at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.5 }}
        className="relative z-10 pb-6 sm:pb-8 flex justify-center"
      >
        <ScrollIndicator label={hero.scrollPrompt} />
      </motion.div>
    </section>
  );
}
