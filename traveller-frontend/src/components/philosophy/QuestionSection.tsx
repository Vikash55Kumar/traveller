"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import WordReveal from "@/components/ui/WordReveal";

export default function QuestionSection() {
  const { question } = experience;

  return (
    <section className="relative w-full bg-gradient-to-b from-[#04070D] via-[#070D18] to-[#0A1220] py-36 sm:py-52 md:py-60 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-[800px] mx-auto text-center relative z-10">
        {/* Subtle Section Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 sm:mb-16"
        >
          <span className="tracking-[0.35em] text-[11px] sm:text-xs text-[#D7A85B] uppercase font-light">
            {question.label}
          </span>
        </motion.div>

        {/* Primary Philosophical Inquiry */}
        <div className="space-y-6 mb-24 sm:mb-36">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4F1EA] leading-[1.14] tracking-tight">
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="max-w-[520px] mx-auto space-y-6 text-base sm:text-lg md:text-xl text-[#B8B7B2] font-light leading-relaxed mb-32 sm:mb-48"
        >
          <p>{question.reflection1}</p>
          <p className="text-[#F4F1EA] font-normal">{question.reflection2}</p>
        </motion.div>

        {/* Scroll Pacing: You walk. You look. You listen. You pause. */}
        <div className="py-16 sm:py-24 border-y border-white/[0.05] my-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {question.paces.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.8, delay: index * 0.18, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center"
              >
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4F1EA] font-light italic">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Emerging Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="max-w-[500px] mx-auto mt-20 sm:mt-28 space-y-3"
        >
          <p className="text-sm sm:text-base text-[#777A7D] tracking-wider font-light">
            {question.revelation.lead}
          </p>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4F1EA] font-normal italic">
            &ldquo;{question.revelation.reveal}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
