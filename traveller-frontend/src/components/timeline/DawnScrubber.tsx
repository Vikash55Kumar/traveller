"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { experience, EphemerisEvent } from "@/content/experience";

export default function DawnScrubber() {
  const { scrollYProgress } = useScroll();
  const [currentEvent, setCurrentEvent] = useState<EphemerisEvent>(experience.ephemeris[0]);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const p = Math.round(latest * 100);
      setPercent(p);

      // Find current ephemeris event based on threshold
      const matched = [...experience.ephemeris]
        .reverse()
        .find((event) => p >= event.scrollThreshold);

      if (matched) {
        setCurrentEvent(matched);
      }
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Desktop Persistent Timeline (Right Edge) */}
      <aside
        aria-label="Dawn Timeline Progression"
        className="hidden lg:flex fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 select-none pointer-events-none"
      >
        <div className="flex flex-col items-end text-right">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#D7A85B] font-medium">
            {currentEvent.time}
          </span>
          <span className="text-[9px] tracking-[0.2em] uppercase text-[#F4F1EA]/80 font-light max-w-[110px]">
            {currentEvent.phase}
          </span>
          <span className="text-[8px] tracking-[0.15em] text-[#777A7D] font-mono mt-0.5">
            {currentEvent.skyState}
          </span>
        </div>

        {/* Vertical Axis Hairline */}
        <div className="relative w-[1px] h-36 bg-white/[0.08] my-1">
          {/* Active gold scrub head */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-[#D7A85B] bg-[#070B14]"
            style={{
              top: `${percent}%`,
            }}
          />
        </div>

        <div className="font-mono text-[8px] tracking-[0.2em] text-[#777A7D]/60 uppercase">
          {percent}% DAWN
        </div>
      </aside>

      {/* Mobile Subtle Top Progress Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/[0.05] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#D7A85B]/40 via-[#E8C27A] to-[#D7A85B]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </>
  );
}
