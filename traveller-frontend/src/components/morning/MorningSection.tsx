"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export default function MorningSection() {
  const { morning } = experience;

  const portals = [
    {
      word: "WALK",
      image: "/images/walk-trail.jpg",
      sub: "Movement without a digital destination",
      align: "items-start",
    },
    {
      word: "OBSERVE",
      image: "/images/morning-mist.jpg",
      sub: "The changing shadows of stone before light",
      align: "items-end text-right",
    },
    {
      word: "PAUSE",
      image: "/images/observe-light.jpg",
      sub: "Ceasing momentum before you are asked to",
      align: "items-center text-center",
    },
    {
      word: "QUESTION",
      image: "/images/horizon-sunrise.jpg",
      sub: "The inquiry that surfaces in absolute quiet",
      align: "items-start",
    },
  ];

  return (
    <section
      id="the-morning"
      className="relative w-full bg-gradient-to-b from-[#0E182A] via-[#0B1322] to-[#0A101C] py-36 sm:py-52 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
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

        {/* The 4 Words as Visual Photographic Portals */}
        <div className="space-y-16 sm:space-y-24 my-12">
          {portals.map((portal, idx) => (
            <motion.div
              key={portal.word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.12 }}
              className={`flex flex-col ${portal.align} group cursor-default`}
            >
              <div className="relative w-full max-w-4xl">
                {/* Hairline framing */}
                <div className="flex items-center gap-6 sm:gap-10 pb-6 border-b border-white/[0.08] group-hover:border-[#E2BA72]/40 transition-colors duration-500">
                  <span className="text-xs font-mono text-[#E2BA72]/60">
                    0{idx + 1}
                  </span>
                  <span className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F8F6F0] tracking-[0.08em] font-light group-hover:text-[#F3D089] transition-colors duration-500">
                    {portal.word}
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
                  <span className="hidden md:inline-block text-xs text-[#A2A7B0] font-light italic">
                    {portal.sub}
                  </span>
                </div>

                {/* Rich Photographic Expansion Panel */}
                <div className="relative mt-4 h-[180px] sm:h-[260px] md:h-[320px] w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#07090E] shadow-2xl">
                  <Image
                    src={portal.image}
                    alt={portal.word}
                    fill
                    sizes="(max-width: 1200px) 100vw, 896px"
                    className="object-cover object-center brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-[#F8F6F0]">
                    <span className="font-mono text-[10px] tracking-widest text-[#E2BA72] uppercase">
                      ATMOSPHERIC PHASE // 0{idx + 1}
                    </span>
                    <span className="text-[11px] text-[#A2A7B0] font-light">
                      Kaylana Escarpment Trail
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Anti-Agenda Time Pillars */}
        <div className="mt-36 sm:mt-48 pt-16 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Arrive 05:00 / Leave 09:00 */}
            <div className="md:col-span-6 flex items-center gap-12 sm:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-1.5"
              >
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#E2BA72]">
                  {morning.arrival.time}
                </div>
                <div className="tracking-[0.25em] text-xs font-medium text-[#F8F6F0] uppercase">
                  {morning.arrival.label}
                </div>
                <div className="text-[10px] tracking-widest text-[#A2A7B0] font-light uppercase">
                  Dark Horizon
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
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#A2A7B0]">
                  {morning.departure.time}
                </div>
                <div className="tracking-[0.25em] text-xs font-medium text-[#A2A7B0] uppercase">
                  {morning.departure.label}
                </div>
                <div className="text-[10px] tracking-widest text-[#A2A7B0] font-light uppercase">
                  Sunlit Ridge
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
