"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";
import WordReveal from "@/components/ui/WordReveal";

export default function QuestionSection() {
  const { question } = experience;

  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#0A1220] py-32 sm:py-44 md:py-52 px-6 sm:px-10 transition-colors duration-1000 overflow-hidden"
    >
      {/* Subtle radial ambient blue light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[650px] bg-[#111D30]/35 rounded-full blur-[140px]"
      />

      <div className="max-w-[1000px] mx-auto relative z-10">
        {/* Section Label */}
        <div className="flex justify-between items-center pb-8 border-b border-white/[0.06] mb-16 sm:mb-24">
          <SectionLabel label={question.label} number={question.number} />
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#777A7D] uppercase hidden sm:inline-block">
            05:38 AM · ASTRONOMICAL TWILIGHT
          </span>
        </div>

        {/* Primary Inquiry with Editorial Typography */}
        <div className="space-y-4 mb-24 sm:mb-32">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4F1EA] leading-[1.12] tracking-tight max-w-[880px]">
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
              className="block text-[#E8C27A] mt-2 font-medium"
            />
          </h2>
        </div>

        {/* The Reflection (Pause) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-28 sm:mb-40"
        >
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-widest text-[#D7A85B] uppercase block mb-2">
              DISCOVERY · PROTOCOL
            </span>
            <p className="text-xs text-[#777A7D] font-light leading-relaxed">
              Walking without destinations allows the observer to separate from the momentum of daily purpose.
            </p>
          </div>
          <div className="md:col-span-8 space-y-6 text-base sm:text-lg md:text-xl text-[#B8B7B2] font-light leading-relaxed pl-0 md:pl-8 md:border-l border-white/[0.08]">
            <p>{question.reflection1}</p>
            <p className="text-[#F4F1EA] font-normal text-lg sm:text-2xl font-serif italic">
              {question.reflection2}
            </p>
          </div>
        </motion.div>

        {/* Chronological Pacing Sequence */}
        <div className="relative py-12 sm:py-16 border-t border-white/[0.08] my-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {question.paces.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.8, delay: index * 0.16, ease: "easeOut" }}
                className="group relative pl-6 border-l border-white/[0.12] hover:border-[#D7A85B] transition-colors duration-300"
              >
                <span className="text-[10px] tracking-[0.25em] text-[#D7A85B] font-mono block mb-1">
                  0{index + 1} {"//"} STEP
                </span>
                <span className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] font-light italic block group-hover:text-[#E8C27A] transition-colors">
                  {step.step}
                </span>
                <span className="text-xs text-[#777A7D] mt-2 block font-light">
                  {step.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Emerging Question */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="mt-20 sm:mt-28 pt-12 border-t border-white/[0.06] text-center max-w-[620px] mx-auto space-y-3"
        >
          <p className="font-mono text-xs text-[#777A7D] tracking-widest uppercase">
            {question.revelation.lead}
          </p>
          <p className="font-serif text-2xl sm:text-4xl text-[#F4F1EA] font-normal italic">
            &ldquo;{question.revelation.reveal}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
