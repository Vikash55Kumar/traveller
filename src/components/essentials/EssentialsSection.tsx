"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Clock, MapPin, Backpack, Shirt } from "lucide-react";
import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";

export default function EssentialsSection() {
  const { essentials } = experience;

  const icons = [Clock, MapPin, Backpack, Shirt];

  return (
    <section
      id="essentials"
      className="relative w-full bg-[#172536] py-32 sm:py-44 px-6 sm:px-10 transition-colors duration-1000 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto relative z-10">
        <SectionLabel label={essentials.label} number="04" />

        <div className="max-w-[720px] mb-20 sm:mb-28">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F4F1EA] tracking-tight leading-[1.08]">
            {essentials.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8B7B2] font-light">
            No route map. No schedule. Only the essentials required to experience the morning fully.
          </p>
        </div>

        {/* 4 Practical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {essentials.cards.map((card, idx) => {
            const IconComponent = icons[idx] || Clock;
            return (
              <motion.div
                key={card.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="bg-[#111D30]/80 border border-white/[0.08] hover:border-[#D7A85B]/40 rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="tracking-[0.25em] text-xs font-semibold text-[#D7A85B] uppercase">
                      {card.tag}
                    </span>
                    <span className="font-mono text-xs text-[#777A7D]">
                      CARD · {card.index}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-white/[0.04] text-[#E8C27A] shrink-0 mt-1">
                      <IconComponent size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] font-normal mb-2">
                        {card.primary}
                      </h3>
                      <p className="text-sm sm:text-base text-[#B8B7B2] font-light leading-relaxed">
                        {card.secondary}
                      </p>
                      {card.details && (
                        <ul className="mt-3 space-y-1 text-xs sm:text-sm text-[#777A7D]">
                          {card.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#D7A85B]" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {card.action && (
                  <div className="mt-8 pt-6 border-t border-white/[0.06]">
                    <a
                      href={card.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs tracking-[0.2em] font-medium text-[#D7A85B] hover:text-[#E8C27A] transition-colors uppercase group"
                    >
                      <span>{card.action.label}</span>
                      <ExternalLink
                        size={13}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
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
