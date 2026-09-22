"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export default function NotebookSection() {
  const { notebook } = experience;

  return (
    <section className="relative w-full bg-gradient-to-b from-[#121F33] via-[#101A2C] to-[#0D1524] py-36 sm:py-52 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-12 sm:mb-16">
          <span className="tracking-[0.35em] text-[11px] sm:text-xs text-[#D7A85B] uppercase font-light">
            {notebook.label}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Visual Notebook Element bleeding into shadows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/notebook.jpg"
                alt="A blank traveler's notebook and pen in dawn light"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center brightness-90"
              />
              {/* Soft shadow vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A2C] via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right Column: Statement */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F4F1EA] leading-[1.02] tracking-tight">
                {notebook.title}
                <br />
                <span className="text-[#E8C27A]">{notebook.subtitle}</span>
              </h2>

              <div className="space-y-4 pt-4 text-lg sm:text-2xl text-[#B8B7B2] font-light leading-relaxed">
                {notebook.lines.map((line, idx) => (
                  <p key={idx} className={idx === 1 ? "text-[#F4F1EA] font-normal" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
