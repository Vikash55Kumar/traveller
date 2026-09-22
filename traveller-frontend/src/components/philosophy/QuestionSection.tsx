"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";
import WordReveal from "@/components/ui/WordReveal";

export default function QuestionSection() {
  const { question } = experience;

  return (
    <section className="relative w-full bg-[#0A1220] py-28 sm:py-36 md:py-48 px-6 sm:px-10 transition-colors duration-1000 overflow-hidden">
      {/* Subtle radial ambient blue light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#111D30]/30 rounded-full blur-[120px]"
      />

      <div className="max-w-[840px] mx-auto text-center relative z-10">
        {/* Label */}
        <div className="flex justify-center">
          <SectionLabel label={question.label} number="01" />
        </div>

        {/* Primary Philosophical Inquiry */}
        <div className="space-y-4 mb-20 sm:mb-28">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#F4F1EA] leading-[1.18] tracking-tight">
            <WordReveal
              text={question.mainQuestionLine1}
              stagger={0.06}
              as="span"
              className="block"
            />
            <WordReveal
              text={question.mainQuestionLine2}
              delay={0.4}
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
          className="max-w-[560px] mx-auto space-y-6 text-base sm:text-lg md:text-xl text-[#B8B7B2] font-light leading-relaxed mb-28 sm:mb-40"
        >
          <p>{question.reflection1}</p>
          <p className="text-[#F4F1EA] font-normal">{question.reflection2}</p>
        </motion.div>

        {/* Scroll-Based Pacing: You walk. You look. You listen. You pause. */}
        <div className="relative py-12 sm:py-20 border-y border-white/[0.06] my-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 py-8">
            {question.paces.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.8, delay: index * 0.18, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center"
              >
                <span className="text-[10px] tracking-[0.3em] text-[#D7A85B]/60 font-mono mb-2">
                  0{index + 1}
                </span>
                <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F4F1EA] font-light italic">
                  {step}
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
          className="max-w-[540px] mx-auto mt-16 sm:mt-24 space-y-3"
        >
          <p className="text-sm sm:text-base text-[#777A7D] tracking-wide">
            {question.revelation.lead}
          </p>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4F1EA] font-normal italic">
            {question.revelation.reveal}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
