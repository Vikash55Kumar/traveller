"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export default function MorningSection() {
  const { morning } = experience;

  return (
    <section
      id="the-morning"
      className="relative w-full bg-gradient-to-b from-[#0A1220] via-[#0C1526] to-[#0E1A30] py-36 sm:py-52 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Section Label */}
        <div className="mb-12 sm:mb-16">
          <span className="tracking-[0.35em] text-[11px] sm:text-xs text-[#D7A85B] uppercase font-light">
            {morning.label}
          </span>
        </div>

        {/* Heading & Unanswered Inquiry */}
        <div className="max-w-[760px] mb-24 sm:mb-36">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F4F1EA] tracking-tight leading-[0.98] mb-6">
            {morning.title}
          </h2>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#B8B7B2] font-light italic">
            {morning.subtitle}
          </p>
        </div>

        {/* The Four Abstract Fragments (Arranged as poetic tension, not activities) */}
        <div className="relative py-16 sm:py-24 my-10 max-w-[920px] mx-auto">
          {/* Fragment 1: WALK */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1 }}
            className="flex items-center gap-6 sm:gap-12 mb-20 sm:mb-28"
          >
            <span className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F1EA] tracking-[0.1em] font-light">
              WALK
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
          </motion.div>

          {/* Fragment 2: OBSERVE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="flex items-center justify-end gap-6 sm:gap-12 mb-20 sm:mb-28 pl-8 sm:pl-24"
          >
            <div className="h-[1px] w-24 sm:w-64 bg-gradient-to-l from-white/20 to-transparent hidden sm:block" />
            <span className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E8C27A] tracking-[0.1em] font-light">
              OBSERVE
            </span>
          </motion.div>

          {/* Fragment 3: PAUSE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="flex flex-col items-center justify-center my-16 sm:my-28 text-center"
          >
            <span className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F1EA]/80 tracking-[0.18em] font-light">
              PAUSE
            </span>
            <div className="w-16 h-[1px] bg-[#D7A85B]/40 mt-6" />
          </motion.div>

          {/* Fragment 4: QUESTION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, delay: 0.45 }}
            className="flex items-center gap-6 sm:gap-12 mt-20 sm:mt-28"
          >
            <span className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#D7A85B] tracking-[0.1em] font-light">
              QUESTION
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D7A85B]/30 via-white/10 to-transparent" />
          </motion.div>
        </div>

        {/* The Anti-Agenda: Arrive 05:00 / Leave 09:00 */}
        <div className="mt-36 sm:mt-48 pt-16 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Times */}
            <div className="md:col-span-6 flex items-center gap-10 sm:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-1"
              >
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#D7A85B]">
                  {morning.arrival.time}
                </div>
                <div className="tracking-[0.25em] text-xs font-light text-[#F4F1EA] uppercase">
                  {morning.arrival.label}
                </div>
              </motion.div>

              <div className="h-12 w-[1px] bg-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="space-y-1"
              >
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#777A7D]">
                  {morning.departure.time}
                </div>
                <div className="tracking-[0.25em] text-xs font-light text-[#B8B7B2] uppercase">
                  {morning.departure.label}
                </div>
              </motion.div>
            </div>

            {/* Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="md:col-span-6 md:border-l border-white/[0.08] md:pl-10"
            >
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F4F1EA] font-light leading-relaxed">
                {morning.discoverNote}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
