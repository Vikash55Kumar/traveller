"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";

export default function NotebookSection() {
  const { notebook } = experience;

  return (
    <section className="relative w-full bg-[#111C2C] py-32 sm:py-48 px-6 sm:px-10 transition-colors duration-1000 overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <SectionLabel label="AN UNUSUAL COMPANION" number="05" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Notebook Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient paper warmth glow */}
            <div className="absolute -inset-4 bg-[#D7A85B]/10 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#070B14]">
              <div className="relative h-[360px] sm:h-[460px] w-full">
                <Image
                  src="/images/notebook.jpg"
                  alt="A traveler's blank notebook and pen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/90 via-[#070B14]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs tracking-wider text-[#B8B7B2] font-mono">
                    {notebook.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statement */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9 }}
              className="space-y-4"
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#F4F1EA] leading-[1.08] tracking-tight">
                BRING A NOTEBOOK.
                <br />
                <span className="text-[#E8C27A]">AND A PEN.</span>
              </h2>

              <div className="space-y-3 pt-4 text-base sm:text-lg md:text-xl text-[#B8B7B2] font-light leading-relaxed">
                {notebook.lines.map((line, idx) => (
                  <p key={idx} className={idx === 1 ? "text-[#F4F1EA] font-normal" : ""}>
                    {line}
                  </p>
                ))}
              </div>

              <div className="pt-6">
                <div className="w-16 h-[1px] bg-[#D7A85B]/40 mb-6" />
                <p className="font-serif text-lg sm:text-xl text-[#F4F1EA]/80 italic font-light">
                  {notebook.closing}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
