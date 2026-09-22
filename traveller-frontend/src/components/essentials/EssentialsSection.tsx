"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, ShieldCheck, Thermometer, Wind } from "lucide-react";
import { experience } from "@/content/experience";

export default function EssentialsSection() {
  const { essentials } = experience;

  const icons = [Thermometer, Compass, ShieldCheck, Wind];

  return (
    <section
      id="essentials"
      className="relative w-full bg-gradient-to-b from-[#0A101C] via-[#0D1525] to-[#101A2C] py-36 sm:py-52 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.08] mb-16">
          <div>
            <span className="text-[11px] tracking-[0.35em] text-[#E2BA72] uppercase font-light block mb-2">
              {essentials.label}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F8F6F0]">
              {essentials.title}
            </h2>
          </div>
          <p className="text-sm text-[#A2A7B0] font-light max-w-sm">
            No schedule will be shared. Only the conditions of arrival and the equipment required to witness the morning.
          </p>
        </div>

        {/* 4 Rich Editorial Equipment Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-4">
          {essentials.columns.map((col, idx) => {
            const IconComp = icons[idx] || Compass;
            return (
              <motion.div
                key={col.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="group relative rounded-2xl bg-[#080B12]/80 border border-white/[0.08] hover:border-[#E2BA72]/50 p-8 flex flex-col justify-between transition-all duration-500 shadow-xl overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#E2BA72]/20 to-transparent" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] tracking-[0.3em] text-[#E2BA72] uppercase font-medium">
                      {col.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-[#E2BA72]/80 group-hover:text-[#F3D089] transition-colors">
                      <IconComp size={15} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F6F0] font-normal mb-2 group-hover:text-[#F3D089] transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-sm text-[#A2A7B0] font-light leading-relaxed">
                    {col.details}
                  </p>
                </div>

                {col.action && (
                  <div className="pt-8 mt-6 border-t border-white/[0.06]">
                    <a
                      href={col.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] font-medium text-[#E2BA72] hover:text-[#F3D089] transition-colors uppercase group/link"
                    >
                      <span>{col.action.label}</span>
                      <ArrowUpRight
                        size={13}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
