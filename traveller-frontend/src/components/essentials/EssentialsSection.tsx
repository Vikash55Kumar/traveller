"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export default function EssentialsSection() {
  const { essentials } = experience;

  return (
    <section
      id="essentials"
      className="relative w-full bg-gradient-to-b from-[#0D1526] via-[#101A2C] to-[#121F33] py-36 sm:py-52 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-12 sm:mb-16">
          <span className="tracking-[0.35em] text-[11px] sm:text-xs text-[#D7A85B] uppercase font-light">
            {essentials.label}
          </span>
        </div>

        <div className="max-w-[720px] mb-24 sm:mb-32">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4F1EA] tracking-tight leading-[1.05]">
            {essentials.title}
          </h2>
        </div>

        {/* Minimal Editorial Columns (No rounded cards or colored badge squares) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-6 border-t border-white/[0.08]">
          {essentials.columns.map((col, idx) => (
            <motion.div
              key={col.tag}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="flex flex-col justify-between space-y-8"
            >
              <div>
                <span className="tracking-[0.3em] text-[10px] text-[#D7A85B] uppercase font-medium block mb-4">
                  {col.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] font-normal mb-2">
                  {col.title}
                </h3>
                <p className="text-sm text-[#B8B7B2] font-light leading-relaxed">
                  {col.details}
                </p>
              </div>

              {col.action && (
                <div className="pt-4">
                  <a
                    href={col.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs tracking-[0.2em] font-medium text-[#D7A85B] hover:text-[#E8C27A] transition-colors uppercase border-b border-[#D7A85B]/30 pb-0.5"
                  >
                    {col.action.label}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
