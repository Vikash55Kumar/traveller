"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export default function MorningSection() {
  const { morning } = experience;

  return (
    <section
      id="the-morning"
      className="relative w-full bg-gradient-to-b from-[#0E182A] via-[#0B1322] to-[#0A101C] py-36 sm:py-52 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-[780px] mb-24 sm:mb-36">
          <span className="text-[11px] tracking-[0.35em] text-[#E2BA72] uppercase font-light block mb-4">
            {morning.label}
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F8F6F0] tracking-tight leading-[0.98] mb-6">
            {morning.title}
          </h2>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#A2A7B0] font-light italic">
            {morning.subtitle}
          </p>
        </div>

        {/* The 4 Abstract Fragments (No trail images, no phase numbers, pure mystery) */}
        <div className="relative py-16 sm:py-24 my-10 max-w-[920px] mx-auto">
          {/* Fragment 1: WALK */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1 }}
            className="flex items-center gap-6 sm:gap-12 mb-20 sm:mb-28"
          >
            <span className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F8F6F0] tracking-[0.1em] font-light">
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
            <span className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F8F6F0]/80 tracking-[0.18em] font-light">
              PAUSE
            </span>
            <div className="w-16 h-[1px] bg-[#E2BA72]/40 mt-6" />
          </motion.div>

          {/* Fragment 4: QUESTION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, delay: 0.45 }}
            className="flex items-center gap-6 sm:gap-12 mt-20 sm:mt-28"
          >
            <span className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E2BA72] tracking-[0.1em] font-light">
              QUESTION
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#E2BA72]/30 via-white/10 to-transparent" />
          </motion.div>
        </div>

        {/* Anti-Agenda Time Pillars: Arrive 05:00 / Leave 09:00 */}
        <div className="mt-36 sm:mt-48 pt-16 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Arrive 05:00 & Leave 09:00 */}
            <div className="md:col-span-6 flex items-center gap-12 sm:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-1"
              >
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#E2BA72]">
                  {morning.arrival.time}
                </div>
                <div className="tracking-[0.25em] text-xs font-medium text-[#F8F6F0] uppercase">
                  {morning.arrival.label}
                </div>
              </motion.div>

              <div className="h-14 w-[1px] bg-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="space-y-1"
              >
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#A2A7B0]">
                  {morning.departure.time}
                </div>
                <div className="tracking-[0.25em] text-xs font-medium text-[#A2A7B0] uppercase">
                  {morning.departure.label}
                </div>
              </motion.div>
            </div>

            {/* Core Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="md:col-span-6 md:border-l border-white/[0.08] md:pl-10"
            >
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F8F6F0] font-light leading-relaxed">
                {morning.discoverNote}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
