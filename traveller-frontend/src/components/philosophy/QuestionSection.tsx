"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import WordReveal from "@/components/ui/WordReveal";

export default function QuestionSection() {
  const { question } = experience;
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      num: "I",
      title: "You walk.",
      desc: "Pacing the cold sandstone before sunlight.",
      image: "/images/walk-trail.jpg",
      time: "05:15 AM",
    },
    {
      num: "II",
      title: "You look.",
      desc: "Eyes adjusting to silhouettes in the blue hour.",
      image: "/images/morning-mist.jpg",
      time: "05:35 AM",
    },
    {
      num: "III",
      title: "You listen.",
      desc: "The breath of the desert before the city awakens.",
      image: "/images/observe-light.jpg",
      time: "05:55 AM",
    },
    {
      num: "IV",
      title: "You pause.",
      desc: "The silent interval between one step and the next.",
      image: "/images/horizon-sunrise.jpg",
      time: "06:10 AM",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#08090C] via-[#0B101E] to-[#0A1220] py-36 sm:py-52 px-6 sm:px-10 overflow-hidden">
      {/* Background Celestial Astrolabe Dial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] opacity-15"
      >
        <svg viewBox="0 0 800 800" className="w-full h-full animate-[spin_180s_linear_infinite]" fill="none">
          <circle cx="400" cy="400" r="380" stroke="#E2BA72" strokeWidth="0.8" strokeDasharray="4 8" />
          <circle cx="400" cy="400" r="300" stroke="#E2BA72" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="220" stroke="#E2BA72" strokeWidth="0.8" strokeDasharray="2 12" />
          <circle cx="400" cy="400" r="140" stroke="#E2BA72" strokeWidth="0.5" />
          <line x1="400" y1="20" x2="400" y2="780" stroke="#E2BA72" strokeWidth="0.5" strokeOpacity="0.4" />
          <line x1="20" y1="400" x2="780" y2="400" stroke="#E2BA72" strokeWidth="0.5" strokeOpacity="0.4" />
        </svg>
      </div>

      {/* Atmospheric Radial Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#1A2234]/40 rounded-full blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E2BA72]/10 rounded-full blur-[140px]"
      />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/[0.08] mb-16 sm:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2BA72]" />
            <span className="text-[11px] tracking-[0.35em] text-[#E2BA72] uppercase font-light">
              {question.label} {"//"} INQUIRY
            </span>
          </div>
          <span className="text-xs font-mono text-[#A2A7B0] tracking-widest uppercase">
            ASTRONOMICAL SILENCE · KAYLANA
          </span>
        </div>

        {/* Dramatic Question Typography & Reflection Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 sm:mb-36">
          {/* Left Column: The Central Question */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F8F6F0] leading-[1.08] tracking-tight">
              <WordReveal
                text={question.mainQuestionLine1}
                stagger={0.06}
                as="span"
                className="block"
              />
              <WordReveal
                text={question.mainQuestionLine2}
                delay={0.35}
                stagger={0.07}
                as="span"
                className="block text-[#F3D089] mt-3 font-medium italic"
              />
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-[#E2BA72] to-transparent pt-2" />
          </div>

          {/* Right Column: The Reflection Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-4 p-8 rounded-2xl bg-[#080B14]/80 border border-white/[0.08] backdrop-blur-md space-y-4 shadow-xl"
          >
            <span className="text-[10px] tracking-[0.25em] text-[#E2BA72] uppercase font-mono block">
              OBSERVATION
            </span>
            <p className="text-sm sm:text-base text-[#A2A7B0] font-light leading-relaxed">
              {question.reflection1}
            </p>
            <p className="font-serif text-lg sm:text-xl text-[#F8F6F0] font-normal italic pt-2 border-t border-white/[0.06]">
              {question.reflection2}
            </p>
          </motion.div>
        </div>

        {/* The 4 Milestones: Interactive Photographic Cards */}
        <div className="space-y-6 my-20">
          <div className="flex items-center justify-between text-xs font-mono text-[#A2A7B0] pb-4 border-b border-white/[0.06]">
            <span>THE PACING {"//"} 04 PHASES OF DAWN</span>
            <span>EXPERIENCED IN SILENCE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.8, delay: idx * 0.14 }}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`group relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#E2BA72]/60 bg-[#07090E] transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 cursor-default shadow-2xl ${
                  hoveredStep !== null && hoveredStep !== idx ? "opacity-50 scale-[0.98]" : "opacity-100 scale-100"
                }`}
              >
                {/* Background Image with Dark Vignette */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/40 to-transparent" />
                </div>

                {/* Top Step Metadata */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#E2BA72] font-semibold tracking-wider">
                    PHASE {step.num}
                  </span>
                  <span className="font-mono text-[10px] text-[#A2A7B0] tracking-widest">
                    {step.time}
                  </span>
                </div>

                {/* Bottom Step Content */}
                <div className="relative z-10 space-y-2">
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F8F6F0] font-normal group-hover:text-[#F3D089] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A2A7B0] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Revelation Sanctum */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="mt-24 sm:mt-32 p-10 sm:p-14 rounded-3xl bg-[#080B14]/90 border border-[#E2BA72]/30 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Subtle gold center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E2BA72]/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-[10px] tracking-[0.35em] text-[#E2BA72] uppercase font-mono block mb-4">
            THE UNSEEN REVELATION
          </span>

          <p className="text-base sm:text-lg text-[#A2A7B0] tracking-wider font-light mb-3">
            {question.revelation.lead}
          </p>

          <p className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F8F6F0] font-normal italic">
            &ldquo;{question.revelation.reveal}&rdquo;
          </p>

          <p className="text-xs text-[#606775] font-light mt-6 tracking-wide">
            Leave the answer behind. Only the question walks with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
