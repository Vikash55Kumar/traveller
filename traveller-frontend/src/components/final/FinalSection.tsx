"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import HorizonGlow from "@/components/ui/HorizonGlow";

export default function FinalSection() {
  const { final } = experience;

  return (
    <section className="relative w-full min-h-[92vh] py-32 sm:py-52 px-6 sm:px-10 flex flex-col justify-between overflow-hidden bg-[#070B14]">
      {/* Background Dawn Sunrise Horizon Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/horizon-sunrise.jpg"
          alt="Warm golden sunrise horizon breaking over mountains"
          fill
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        {/* Layer 1: Dark gradient overlay transitioning down */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1220]/95 via-[#0C1424]/80 to-[#070B14]/90" />
        
        {/* Layer 2: Warm dawn horizon tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#D7A85B]/25 via-transparent to-transparent mix-blend-screen" />
      </div>

      <HorizonGlow intensity="sunrise" />

      <div className="max-w-[1040px] w-full mx-auto text-center relative z-10 my-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1 }}
          className="space-y-6 mb-20 sm:mb-24"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7A85B]" />
            <span className="tracking-[0.3em] text-[10px] sm:text-xs font-mono font-medium text-[#D7A85B] uppercase">
              06:12 AM · CIVIL TWILIGHT BREAKS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4F1EA] tracking-tight leading-[1.05] max-w-[840px] mx-auto">
            {final.title}
          </h2>

          <div className="space-y-2 pt-4 text-base sm:text-xl text-[#B8B7B2] font-light max-w-[560px] mx-auto leading-relaxed">
            {final.lines.slice(0, 2).map((l, i) => (
              <p key={i}>{l}</p>
            ))}
            <p className="pt-4 text-xs font-mono tracking-widest text-[#777A7D] uppercase">
              {final.lines[2]}
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-[#E8C27A] italic font-normal">
              {final.lines[3]}
            </p>
          </div>
        </motion.div>

        {/* Essential Coordinates Recap */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-14 py-7 px-10 rounded-2xl bg-[#070B14]/80 backdrop-blur-md border border-[#D7A85B]/30 mb-20"
        >
          <div className="text-center sm:text-left">
            <span className="block text-[10px] tracking-widest text-[#777A7D] uppercase font-mono mb-0.5">
              INTERVAL
            </span>
            <span className="text-base sm:text-lg font-serif tracking-wider text-[#F4F1EA]">
              {final.date}
            </span>
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-white/10" />

          <div className="text-center sm:text-left">
            <span className="block text-[10px] tracking-widest text-[#777A7D] uppercase font-mono mb-0.5">
              REPORTING
            </span>
            <span className="text-base sm:text-lg font-mono text-[#D7A85B]">
              {final.time}
            </span>
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-white/10" />

          <div className="text-center sm:text-left">
            <span className="block text-[10px] tracking-widest text-[#777A7D] uppercase font-mono mb-0.5">
              LOCATION
            </span>
            <span className="text-base sm:text-lg font-serif tracking-wider text-[#F4F1EA]">
              {final.location}
            </span>
          </div>
        </motion.div>

        {/* Final Unanswered Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.35 }}
          className="pt-12 max-w-[720px] mx-auto border-t border-white/[0.08]"
        >
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4F1EA] font-normal leading-relaxed italic">
            &ldquo;{final.unansweredQuestion}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
