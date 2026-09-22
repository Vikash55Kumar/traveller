"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";

export default function MorningSection() {
  const { morning } = experience;

  return (
    <section
      id="the-morning"
      className="relative w-full bg-[#0C1424] py-32 sm:py-48 px-6 sm:px-10 transition-colors duration-1000 overflow-hidden"
    >
      {/* Background Mist Fragment with dark gradient mask */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
        <Image
          src="/images/morning-mist.jpg"
          alt="Morning atmospheric mist at Kaylana lake"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1424] via-transparent to-[#0C1424]" />
      </div>

      <div className="max-w-[1140px] mx-auto relative z-10">
        {/* Section Label */}
        <div className="flex justify-between items-center pb-8 border-b border-white/[0.06] mb-16 sm:mb-24">
          <SectionLabel label={morning.label} number={morning.number} />
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#777A7D] uppercase hidden sm:inline-block">
            EPHEMERIS · 04 HOURS 00 MINUTES
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-[820px] mb-24 sm:mb-32">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4F1EA] tracking-tight leading-[1.02] mb-6">
            {morning.title}
          </h2>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#B8B7B2] font-light italic">
            {morning.subtitle}
          </p>
        </div>

        {/* Abstract Word Fragments with editorial field monograph definitions */}
        <div className="relative py-12 my-10 max-w-[960px] mx-auto space-y-16 sm:space-y-24">
          {/* Fragment 1: WALK */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-8"
          >
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs text-[#D7A85B]/60">01</span>
              <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA] tracking-[0.08em] font-light">
                WALK
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#777A7D] font-light max-w-xs sm:text-right font-mono">
              {morning.fragments[0].definition}
            </p>
          </motion.div>

          {/* Fragment 2: OBSERVE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: 0.15 }}
            className="flex flex-col sm:flex-row-reverse items-start sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-8"
          >
            <div className="flex items-center gap-6">
              <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#E8C27A] tracking-[0.08em] font-light">
                OBSERVE
              </span>
              <span className="font-mono text-xs text-[#D7A85B]/60">02</span>
            </div>
            <p className="text-xs sm:text-sm text-[#777A7D] font-light max-w-xs sm:text-left font-mono">
              {morning.fragments[1].definition}
            </p>
          </motion.div>

          {/* Fragment 3: PAUSE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center justify-center text-center py-6 border-b border-white/[0.06]"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="font-mono text-xs text-[#D7A85B]/60">03</span>
              <div className="w-8 h-[1px] bg-white/20" />
            </div>
            <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F4F1EA]/85 tracking-[0.14em] font-light">
              PAUSE
            </span>
            <p className="text-xs sm:text-sm text-[#777A7D] font-light max-w-xs mt-3 font-mono">
              {morning.fragments[2].definition}
            </p>
          </motion.div>

          {/* Fragment 4: QUESTION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-8"
          >
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs text-[#D7A85B]/60">04</span>
              <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#D7A85B] tracking-[0.08em] font-light">
                QUESTION
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#777A7D] font-light max-w-xs sm:text-right font-mono">
              {morning.fragments[3].definition}
            </p>
          </motion.div>
        </div>

        {/* Anti-Agenda Section: Arrive 05:00 / Leave 09:00 */}
        <div className="mt-32 sm:mt-44 pt-16 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* 05:00 ARRIVE & 09:00 LEAVE */}
            <div className="md:col-span-6 flex items-center gap-10 sm:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-1.5"
              >
                <div className="font-mono text-3xl sm:text-4xl font-light text-[#D7A85B]">
                  {morning.arrival.time}
                </div>
                <div className="tracking-[0.25em] text-xs font-semibold text-[#F4F1EA] uppercase">
                  {morning.arrival.label}
                </div>
                <div className="text-[10px] tracking-widest text-[#777A7D] font-mono uppercase">
                  {morning.arrival.phase}
                </div>
              </motion.div>

              <div className="h-14 w-[1px] bg-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="space-y-1.5"
              >
                <div className="font-mono text-3xl sm:text-4xl font-light text-[#777A7D]">
                  {morning.departure.time}
                </div>
                <div className="tracking-[0.25em] text-xs font-semibold text-[#B8B7B2] uppercase">
                  {morning.departure.label}
                </div>
                <div className="text-[10px] tracking-widest text-[#777A7D] font-mono uppercase">
                  {morning.departure.phase}
                </div>
              </motion.div>
            </div>

            {/* Core statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="md:col-span-6 md:border-l border-white/[0.08] md:pl-10"
            >
              <span className="font-mono text-[10px] tracking-widest text-[#D7A85B] uppercase block mb-2">
                UNSTRUCTURED INTERVAL
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] font-light leading-relaxed">
                {morning.discoverNote}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
