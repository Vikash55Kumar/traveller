"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/content/experience";
import { Sparkles, Wind, Eye, Compass, Moon, Sun } from "lucide-react";

export default function MorningSection() {
  const { morning } = experience;
  const dawnHours = morning.dawnHours || [];
  const movements = morning.movements || [];
  const specs = morning.specs || [];

  const [activeHourIndex, setActiveHourIndex] = useState(0);
  const activeHour = dawnHours[activeHourIndex] || dawnHours[0];

  // Distinct ambient sky glow presets for the interactive dawn timeline
  const skyGradients = [
    "radial-gradient(ellipse at 50% 30%, rgba(30, 41, 74, 0.45) 0%, rgba(8, 9, 12, 0.95) 75%)",
    "radial-gradient(ellipse at 50% 30%, rgba(45, 45, 95, 0.5) 0%, rgba(14, 20, 34, 0.95) 75%)",
    "radial-gradient(ellipse at 50% 30%, rgba(180, 115, 45, 0.35) 0%, rgba(20, 18, 25, 0.95) 75%)",
    "radial-gradient(ellipse at 50% 30%, rgba(226, 186, 114, 0.3) 0%, rgba(15, 17, 24, 0.95) 75%)",
  ];

  return (
    <section
      id="the-morning"
      className="relative w-full bg-[#08090C] py-32 sm:py-48 px-6 sm:px-10 overflow-hidden transition-colors duration-1000"
    >
      {/* Dynamic Ambient Dawn Lighting */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: skyGradients[activeHourIndex] || skyGradients[0],
        }}
      />

      {/* Subtle Starfield & Celestial Noise Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 150px 80px, #E2BA72, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 280px 220px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 420px 140px, #F3D089, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 620px 340px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 850px 180px, #A2A7B0, rgba(0,0,0,0))`,
          backgroundSize: "900px 900px",
        }}
      />

      {/* Subtle Top & Bottom Blends */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#08090C] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#08090C] to-transparent pointer-events-none" />

      <div className="max-w-[1140px] mx-auto relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-[840px] mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-[1px] bg-[#E2BA72]" />
            <span className="text-[11px] font-mono tracking-[0.35em] text-[#E2BA72] uppercase font-medium">
              {morning.label} {"//"} TEMPORAL HORIZON
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F8F6F0] tracking-tight leading-[0.96] mb-6"
          >
            {morning.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-[#D6C2B4] font-light italic leading-relaxed"
          >
            {morning.subtitle}
          </motion.p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* FEATURE 1: INTERACTIVE DAWN ATMOSPHERE DIAL (05:00 → 09:00) */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-28 sm:mb-36 rounded-2xl border border-white/[0.08] bg-[#0A0D14]/70 backdrop-blur-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold accent edge */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2BA72]/40 to-transparent" />

          {/* Dial Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-white/[0.06] gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E2BA72] block mb-1">
                ASTRONOMICAL PROGRESSION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F6F0] font-light">
                The Four Hours of Light & Silence
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A2A7B0]">
              <Sparkles className="w-3.5 h-3.5 text-[#E2BA72]" />
              <span>INTERACTIVE CELESTIAL TIMELINE</span>
            </div>
          </div>

          {/* Time Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {dawnHours.map((hour, idx) => {
              const isActive = activeHourIndex === idx;
              return (
                <button
                  key={hour.time}
                  onClick={() => setActiveHourIndex(idx)}
                  className={`relative p-4 rounded-xl text-left transition-all duration-300 border ${
                    isActive
                      ? "bg-[#141A28] border-[#E2BA72]/60 shadow-[0_0_25px_rgba(226,186,114,0.15)]"
                      : "bg-[#07090E]/60 border-white/[0.05] hover:border-white/20 hover:bg-[#0D121D]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-serif text-xl sm:text-2xl font-light ${
                        isActive ? "text-[#E2BA72]" : "text-[#F8F6F0]/70"
                      }`}
                    >
                      {hour.time}
                    </span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#E2BA72] shadow-[0_0_8px_#E2BA72]" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    )}
                  </div>
                  <div className="text-[11px] font-medium text-[#F8F6F0] truncate">
                    {hour.phase}
                  </div>
                  <div className="text-[10px] font-mono text-[#A2A7B0] mt-1">
                    Light: {hour.lightLevel}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Celestial Specimen Display */}
          <AnimatePresence mode="wait">
            {activeHour && (
              <motion.div
                key={activeHour.time}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 sm:p-8 rounded-xl bg-[#07090F]/80 border border-white/[0.05]"
              >
                {/* Poetic Atmosphere */}
                <div className="md:col-span-7 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest bg-[#E2BA72]/15 text-[#E2BA72] border border-[#E2BA72]/30">
                      {activeHour.phase}
                    </span>
                    <span className="text-xs font-mono text-[#A2A7B0]">
                      @ {activeHour.time}
                    </span>
                  </div>
                  <p className="font-serif text-xl sm:text-2xl text-[#F8F6F0] font-light italic leading-relaxed">
                    &ldquo;{activeHour.poeticNote}&rdquo;
                  </p>
                </div>

                {/* Micro Telemetry Metrics */}
                <div className="md:col-span-5 grid grid-cols-2 gap-4 border-t md:border-t-0 md:border-l border-white/[0.08] pt-4 md:pt-0 md:pl-6">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#A2A7B0] mb-1 flex items-center gap-1.5">
                      <Wind className="w-3 h-3 text-[#E2BA72]" />
                      TEMPERATURE
                    </div>
                    <div className="text-sm font-medium text-[#F8F6F0]">
                      {activeHour.temperature}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#A2A7B0] mb-1 flex items-center gap-1.5">
                      <Sun className="w-3 h-3 text-[#E2BA72]" />
                      SKY HUE
                    </div>
                    <div className="text-sm font-medium text-[#F8F6F0]">
                      {activeHour.skyState}
                    </div>
                  </div>

                  <div className="col-span-2 pt-2">
                    <div className="flex justify-between text-[10px] font-mono text-[#A2A7B0] mb-1.5">
                      <span>DAWN ILLUMINATION</span>
                      <span className="text-[#E2BA72]">
                        {activeHour.lightLevel}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: activeHour.lightLevel }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#E2BA72]/70 to-[#F3D089]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* FEATURE 2: THE 4 CONTEMPLATIVE MOVEMENTS (EDITORIAL FOLIO TABLETS) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-32 sm:mb-44">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#E2BA72] uppercase font-light block mb-2">
                FOUR MOVEMENTS OF THE SOUL
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F8F6F0] font-light">
                The Inner Rhythm
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#A2A7B0] max-w-sm mt-3 sm:mt-0 font-light leading-relaxed">
              No itinerary or fitness drills. Four simple movements to guide your awareness across four hours.
            </p>
          </div>

          {/* 2x2 Luxury Editorial Folio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {movements.map((movement, idx) => (
              <motion.div
                key={movement.word}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0A0D15]/80 backdrop-blur-md p-8 sm:p-10 transition-all duration-500 hover:border-[#E2BA72]/40 hover:bg-[#0E1320]/90 shadow-xl overflow-hidden"
              >
                {/* Subtle Card Glow Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#E2BA72]/5 blur-3xl pointer-events-none group-hover:bg-[#E2BA72]/15 transition-all duration-700" />

                {/* Card Topline / Tag */}
                <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06] group-hover:border-[#E2BA72]/20 transition-colors duration-500">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-sm text-[#E2BA72] tracking-widest font-light">
                      MOVEMENT {movement.roman}
                    </span>
                    <span className="text-white/20">|</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#A2A7B0] uppercase">
                      {movement.tag}
                    </span>
                  </div>

                  {/* Bespoke Geometric Emblem */}
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#E2BA72] group-hover:border-[#E2BA72]/50 group-hover:scale-110 transition-all duration-500">
                    {movement.glyph === "pulse" && (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" strokeOpacity="0.4" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="1" fill="currentColor" />
                      </svg>
                    )}
                    {movement.glyph === "aperture" && (
                      <Eye className="w-4 h-4 stroke-[1.5]" />
                    )}
                    {movement.glyph === "zenith" && (
                      <Moon className="w-4 h-4 stroke-[1.5]" />
                    )}
                    {movement.glyph === "labyrinth" && (
                      <Compass className="w-4 h-4 stroke-[1.5]" />
                    )}
                  </div>
                </div>

                {/* Big Bold Serif Word & Subtitle */}
                <div className="mb-6">
                  <h4 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F6F0] tracking-[0.08em] font-light group-hover:text-[#F3D089] transition-colors duration-500 mb-2">
                    {movement.word}
                  </h4>
                  <div className="font-serif text-lg sm:text-xl text-[#D6C2B4] font-light italic">
                    {movement.subtitle}
                  </div>
                </div>

                {/* Editorial Description */}
                <p className="text-sm sm:text-base text-[#A2A7B0] font-light leading-relaxed mb-6">
                  {movement.description}
                </p>

                {/* Bottom Hairline */}
                <div className="h-[1px] w-full bg-gradient-to-r from-[#E2BA72]/30 via-white/5 to-transparent group-hover:from-[#E2BA72]/60 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* FEATURE 3: THE ANTI-AGENDA HORIZON LEDGER */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-2xl border border-white/[0.08] bg-[#07090F]/90 backdrop-blur-xl p-8 sm:p-12 shadow-2xl relative"
        >
          {/* Top Gold Horizon Hairline */}
          <div className="absolute top-0 inset-x-8 sm:inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-[#E2BA72]/50 to-transparent" />

          {/* Time Nodes: 05:00 ARRIVE ────── 09:00 LEAVE */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 mb-10 border-b border-white/[0.08]">
            <div className="md:col-span-6 flex items-center justify-between sm:justify-start sm:gap-16">
              {/* Arrive */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#E2BA72] uppercase block">
                  {morning.arrival.label}
                </span>
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#F8F6F0]">
                  {morning.arrival.time}
                </div>
                <div className="text-xs text-[#A2A7B0] font-light">
                  Before Dawn · Dark Horizon
                </div>
              </div>

              {/* Connecting Horizon Ribbon */}
              <div className="hidden sm:flex flex-col items-center px-4 flex-1">
                <span className="text-[9px] font-mono tracking-widest text-[#E2BA72]/70 uppercase mb-2">
                  4 HOURS UNINTERRUPTED
                </span>
                <div className="w-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E2BA72]" />
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#E2BA72]/60 via-white/20 to-[#A2A7B0]/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A2A7B0]" />
                </div>
              </div>

              {/* Leave */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#A2A7B0] uppercase block">
                  {morning.departure.label}
                </span>
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#A2A7B0]">
                  {morning.departure.time}
                </div>
                <div className="text-xs text-[#A2A7B0] font-light">
                  The Day Begins · You Return
                </div>
              </div>
            </div>

            {/* Core Contemplative Statement */}
            <div className="md:col-span-6 md:border-l border-white/[0.08] md:pl-10">
              <p className="font-serif text-2xl sm:text-3xl text-[#F8F6F0] font-light leading-relaxed">
                &ldquo;{morning.discoverNote}&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-[#A2A7B0] mt-3 font-light">
                No itinerary. No exercise routine. No required conversation. Four hours with the morning.
              </p>
            </div>
          </div>

          {/* Expedition Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
            {specs.map((spec) => (
              <div key={spec.label} className="space-y-1">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#E2BA72] uppercase block">
                  {spec.label}
                </span>
                <span className="text-xs sm:text-sm text-[#F8F6F0] font-light block">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
