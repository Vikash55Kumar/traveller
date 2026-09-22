"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/content/experience";

export default function EssentialsSection() {
  const { essentials } = experience;

  return (
    <section
      id="essentials"
      className="relative w-full bg-gradient-to-b from-[#040507] via-[#09101E] to-[#0E1729] py-32 sm:py-48 px-6 sm:px-10 overflow-hidden border-t border-white/[0.06]"
    >
      {/* Ambient background mist glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(226, 186, 114, 0.15) 0%, rgba(14, 23, 42, 0.5) 60%, transparent 80%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.08] mb-14 sm:mb-18">
          <div>
            <span className="text-[11px] font-mono tracking-[0.35em] text-[#E2BA72] uppercase font-medium block mb-3">
              {essentials.label}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F8F6F0] tracking-tight">
              {essentials.title}
            </h2>
          </div>
          <p className="text-sm text-[#A2A7B0] font-light max-w-sm leading-relaxed">
            No schedule will be shared. Only the conditions of arrival and the equipment required to witness the morning.
          </p>
        </div>

        {/* 4 Rich Editorial Equipment Panels with Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {essentials.columns.map((col, idx) => (
            <motion.div
              key={col.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="group relative rounded-2xl bg-[#080B12]/90 border border-white/[0.08] hover:border-[#E2BA72]/50 p-4 flex flex-col justify-between transition-all duration-500 shadow-2xl overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#E2BA72]/20 to-transparent pointer-events-none" />

              <div>
                {/* Photographic Header */}
                {col.image && (
                  <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden mb-5 bg-[#0A0E18]">
                    <Image
                      src={col.image}
                      alt={col.imageAlt || col.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover object-center brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                    />
                    {/* Atmospheric gradient overlay at bottom of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-transparent to-black/20" />

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded text-[10px] font-mono tracking-widest bg-[#080B12]/80 backdrop-blur-md text-[#E2BA72] border border-[#E2BA72]/30 uppercase">
                        {col.tag}
                      </span>
                    </div>
                  </div>
                )}

                {/* Text Content */}
                <div className="px-2 pb-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F6F0] font-normal mb-2 group-hover:text-[#F3D089] transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-sm text-[#A2A7B0] font-light leading-relaxed whitespace-pre-line">
                    {col.details}
                  </p>
                </div>
              </div>

              {/* Action Link for Location */}
              {col.action && (
                <div className="pt-4 mt-4 px-2 border-t border-white/[0.06]">
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
          ))}
        </div>
      </div>
    </section>
  );
}
