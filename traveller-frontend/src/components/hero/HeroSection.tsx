"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import WordReveal from "@/components/ui/WordReveal";

export default function HeroSection() {
  const { hero } = experience;

  return (
    <section className="relative w-full h-[100svh] min-h-[660px] flex flex-col justify-between overflow-hidden bg-[#04070D]">
      {/* Background Mountain Mist Image */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero-dawn.jpg"
          alt="Atmospheric mountain silhouette in early morning mist"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        {/* Cinematic Multi-layer Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070D]/85 via-[#04070D]/50 to-[#04070D]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#04070D]/40 to-[#04070D]/90" />
      </div>

      {/* Subtle imperceptible warm horizon micro-glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 flex items-end justify-center overflow-hidden z-10 opacity-35"
      >
        <div className="w-[120%] h-[240px] rounded-[100%] bg-gradient-to-t from-[#D7A85B]/15 via-[#0C1424]/30 to-transparent blur-3xl animate-horizon" />
      </div>

      {/* Top spacer to balance fixed navigation */}
      <div className="pt-24 sm:pt-32" />

      {/* Center Hero Statement */}
      <div className="relative z-20 max-w-[1100px] w-full mx-auto px-6 sm:px-10 flex flex-col items-center text-center my-auto">
        {/* 0.5s: Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <span className="tracking-[0.35em] text-[11px] sm:text-xs text-[#D7A85B] uppercase font-light">
            {hero.eyebrow}
          </span>
        </motion.div>

        {/* 0.8s: Title reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[52px] sm:text-[84px] md:text-[108px] lg:text-[124px] font-normal tracking-[-0.015em] leading-[0.92] text-[#F4F1EA] mb-8 sm:mb-12"
        >
          {hero.title}
        </motion.h1>

        {/* 1.2s: Philosophy statement (word by word reveal) */}
        <div className="max-w-[580px] mx-auto mb-10 sm:mb-14">
          <div className="font-serif text-lg sm:text-2xl md:text-3xl text-[#F4F1EA]/90 italic font-light leading-relaxed">
            <WordReveal
              text={hero.quoteLine1}
              delay={1.2}
              stagger={0.12}
              as="p"
              className="block mb-2 text-[#F4F1EA]"
            />
            <WordReveal
              text={hero.quoteLine2}
              delay={1.5}
              stagger={0.06}
              as="p"
              className="block text-[#B8B7B2]"
            />
          </div>
        </div>

        {/* 1.8s: Event details */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="tracking-[0.25em] text-xs sm:text-sm font-light text-[#F4F1EA] uppercase">
            {hero.date} &nbsp;·&nbsp; {hero.time}
          </div>
          <div className="tracking-[0.2em] text-[11px] sm:text-xs text-[#777A7D] uppercase font-light">
            {hero.location} &nbsp;·&nbsp; {hero.reporting}
          </div>
        </motion.div>
      </div>

      {/* 2.5s: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.5 }}
        className="relative z-20 pb-8 sm:pb-10 flex justify-center"
      >
        <ScrollIndicator label={hero.scrollPrompt} />
      </motion.div>
    </section>
  );
}
