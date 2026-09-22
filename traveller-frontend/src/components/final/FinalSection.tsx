"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export default function FinalSection() {
  const { final } = experience;

  return (
    <section className="relative w-full min-h-[92vh] py-36 sm:py-52 px-6 sm:px-10 flex flex-col justify-between overflow-hidden bg-[#05070D]">
      {/* Background Dawn Horizon Image */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/horizon-sunrise.jpg"
          alt="Warm golden sunrise horizon breaking over mountain silhouettes"
          fill
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        {/* Cinematic gradient transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070D] via-[#05070D]/70 to-[#05070D]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#D7A85B]/20 via-transparent to-transparent mix-blend-screen" />
      </div>

      <div className="max-w-[1000px] w-full mx-auto text-center relative z-10 my-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1 }}
          className="space-y-6 mb-20 sm:mb-28"
        >
          <span className="tracking-[0.35em] text-[11px] sm:text-xs text-[#D7A85B] uppercase block">
            THE HORIZON
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4F1EA] tracking-tight leading-[1.05] max-w-[780px] mx-auto">
            {final.title}
          </h2>

          <div className="space-y-2 pt-6 text-base sm:text-xl text-[#B8B7B2] font-light max-w-[500px] mx-auto leading-relaxed">
            {final.lines.slice(0, 2).map((l, i) => (
              <p key={i}>{l}</p>
            ))}
            <p className="pt-4 text-sm text-[#777A7D]">{final.lines[2]}</p>
            <p className="font-serif text-2xl sm:text-3xl text-[#E8C27A] italic font-normal">
              {final.lines[3]}
            </p>
          </div>
        </motion.div>

        {/* Essential Coordinates */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-8 mb-24 border-y border-white/[0.08]"
        >
          <div>
            <span className="block text-[10px] tracking-[0.25em] text-[#777A7D] uppercase mb-1">
              DAY
            </span>
            <span className="text-base sm:text-lg font-serif tracking-wider text-[#F4F1EA]">
              {final.date}
            </span>
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-white/10" />

          <div>
            <span className="block text-[10px] tracking-[0.25em] text-[#777A7D] uppercase mb-1">
              TIME
            </span>
            <span className="text-base sm:text-lg font-serif tracking-wider text-[#D7A85B]">
              {final.time}
            </span>
          </div>

          <div className="hidden sm:block w-[1px] h-8 bg-white/10" />

          <div>
            <span className="block text-[10px] tracking-[0.25em] text-[#777A7D] uppercase mb-1">
              LOCATION
            </span>
            <span className="text-base sm:text-lg font-serif tracking-wider text-[#F4F1EA]">
              {final.location}
            </span>
          </div>
        </motion.div>

        {/* Closing Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="max-w-[680px] mx-auto"
        >
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4F1EA] font-normal leading-relaxed italic">
            &ldquo;{final.unansweredQuestion}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
