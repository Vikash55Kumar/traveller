"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";

export default function EssentialsSection() {
  const { essentials } = experience;

  return (
    <section
      id="essentials"
      className="relative w-full bg-[#172536] py-32 sm:py-48 px-6 sm:px-10 transition-colors duration-1000 overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto relative z-10">
        <div className="flex justify-between items-center pb-8 border-b border-white/[0.06] mb-16 sm:mb-24">
          <SectionLabel label={essentials.label} number={essentials.number} />
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#D7A85B] uppercase hidden sm:inline-block">
            MANDATORY READINESS PROTOCOL
          </span>
        </div>

        <div className="max-w-[780px] mb-20 sm:mb-28">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F4F1EA] tracking-tight leading-[1.05]">
            {essentials.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8B7B2] font-light max-w-xl">
            {essentials.subtitle}
          </p>
        </div>

        {/* Architectural Field Dispatch Grid (No generic rounded icon squares) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {essentials.dispatches.map((dispatch, idx) => (
            <motion.div
              key={dispatch.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="group bg-[#111D30]/90 border border-white/[0.08] hover:border-[#D7A85B]/40 rounded-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top indicator accent */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#D7A85B]/30 to-transparent" />

              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-[#D7A85B]">
                      {dispatch.code}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[11px] font-mono tracking-widest text-[#B8B7B2] uppercase">
                      {dispatch.tag}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#777A7D]">
                    REF {"//"} 0{dispatch.index}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] font-normal mb-2 group-hover:text-[#E8C27A] transition-colors">
                    {dispatch.primary}
                  </h3>
                  <p className="text-sm text-[#B8B7B2] font-light leading-relaxed">
                    {dispatch.secondary}
                  </p>

                  {dispatch.specs && (
                    <div className="mt-6 pt-4 border-t border-white/[0.04] space-y-2">
                      {dispatch.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2.5 text-xs font-mono text-[#777A7D]">
                          <span className="w-1 h-1 bg-[#D7A85B]/60 rounded-full" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {dispatch.action && (
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <a
                    href={dispatch.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] font-medium text-[#D7A85B] hover:text-[#E8C27A] transition-colors uppercase group/link"
                  >
                    <span>{dispatch.action.label}</span>
                    <ArrowUpRight
                      size={14}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    />
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
