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
      className="relative w-full bg-[#0C1424] py-32 sm:py-44 px-6 sm:px-10 transition-colors duration-1000 overflow-hidden"
    >
      {/* Background Mist Fragment with dark gradient mask */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen">
        <Image
          src="/images/morning-mist.jpg"
          alt="Morning atmospheric mist"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1424] via-transparent to-[#0C1424]" />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Section Label */}
        <SectionLabel label={morning.label} number="02" />

        {/* Heading */}
        <div className="max-w-[760px] mb-20 sm:mb-28">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4F1EA] tracking-tight leading-[1.05] mb-6">
            {morning.title}
          </h2>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#B8B7B2] font-light italic">
            {morning.subtitle}
          </p>
        </div>

        {/* Abstract Word Fragments with delicate horizontal connecting lines */}
        <div className="relative py-16 sm:py-24 my-10 max-w-[900px] mx-auto">
          {/* Fragment 1: WALK */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1 }}
            className="flex items-center gap-6 mb-16 sm:mb-24"
          >
            <span className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F4F1EA] tracking-[0.1em] font-light">
              WALK
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
          </motion.div>

          {/* Fragment 2: OBSERVE (offset right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: 0.15 }}
            className="flex items-center justify-end gap-6 mb-16 sm:mb-24 pl-8 sm:pl-24"
          >
            <div className="h-[1px] w-24 sm:w-48 bg-gradient-to-l from-white/20 to-transparent hidden sm:block" />
            <span className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#E8C27A] tracking-[0.1em] font-light">
              OBSERVE
            </span>
          </motion.div>

          {/* Fragment 3: PAUSE (centered) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center justify-center my-14 sm:my-20"
          >
            <span className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F4F1EA]/80 tracking-[0.15em] font-light">
              PAUSE
            </span>
            <div className="w-12 h-[1px] bg-[#D7A85B]/40 mt-4" />
          </motion.div>

          {/* Fragment 4: QUESTION (offset left with trailing line) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, delay: 0.45 }}
            className="flex items-center gap-6 mt-16 sm:mt-24"
          >
            <span className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#D7A85B] tracking-[0.1em] font-light">
              QUESTION
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D7A85B]/30 via-white/10 to-transparent" />
          </motion.div>
        </div>

        {/* Anti-Agenda Section: Arrive 05:00 / Leave 09:00 */}
        <div className="mt-28 sm:mt-40 pt-16 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* 05:00 ARRIVE & 09:00 LEAVE */}
            <div className="flex items-center gap-12 sm:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-1"
              >
                <div className="font-mono text-2xl sm:text-3xl font-light text-[#D7A85B]">
                  {morning.arrival.time}
                </div>
                <div className="tracking-[0.25em] text-xs font-medium text-[#F4F1EA] uppercase">
                  {morning.arrival.label}
                </div>
              </motion.div>

              <div className="h-10 w-[1px] bg-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="space-y-1"
              >
                <div className="font-mono text-2xl sm:text-3xl font-light text-[#777A7D]">
                  {morning.departure.time}
                </div>
                <div className="tracking-[0.25em] text-xs font-medium text-[#B8B7B2] uppercase">
                  {morning.departure.label}
                </div>
              </motion.div>
            </div>

            {/* Core statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="font-serif text-xl sm:text-2xl text-[#F4F1EA] font-light leading-relaxed">
                {morning.discoverNote}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
