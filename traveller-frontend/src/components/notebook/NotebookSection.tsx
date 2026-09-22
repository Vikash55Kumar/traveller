"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export default function NotebookSection() {
  const { notebook } = experience;

  return (
    <section className="relative w-full bg-gradient-to-b from-[#101A2C] via-[#0E1726] to-[#0A101C] py-36 sm:py-52 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-12 sm:mb-16">
          <span className="text-[11px] tracking-[0.35em] text-[#E2BA72] uppercase font-light">
            {notebook.label}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Tactile Artifact Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="lg:col-span-7 relative"
          >
            {/* Ambient paper warmth glow */}
            <div className="absolute -inset-4 bg-[#E2BA72]/10 rounded-3xl blur-3xl pointer-events-none" />

            <div className="relative h-[420px] sm:h-[520px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#080B12]">
              <Image
                src="/images/notebook.jpg"
                alt="A physical field notebook and brass pen on stone"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/20 to-transparent" />
              
              {/* Field note label */}
              <div className="absolute bottom-6 left-8 right-8">
                <span className="text-[10px] tracking-[0.25em] text-[#E2BA72] uppercase font-mono block mb-1">
                  TACTILE COMPANION // UNLINED STOCK
                </span>
                <p className="text-xs text-[#A2A7B0] font-light">
                  A silent surface for thoughts that vanish the moment they are typed into a screen.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statement */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F8F6F0] leading-[1.02] tracking-tight">
                {notebook.title}
                <br />
                <span className="text-[#F3D089]">{notebook.subtitle}</span>
              </h2>

              <div className="space-y-4 pt-2 text-lg sm:text-2xl text-[#A2A7B0] font-light leading-relaxed">
                {notebook.lines.map((line, idx) => (
                  <p key={idx} className={idx === 1 ? "text-[#F8F6F0] font-normal" : ""}>
                    {line}
                  </p>
                ))}
              </div>

              <div className="pt-8 border-t border-white/[0.08]">
                <p className="font-serif text-lg sm:text-xl text-[#F8F6F0]/85 italic font-light">
                  &ldquo;Some observations exist only in ink before the sun climbs.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
