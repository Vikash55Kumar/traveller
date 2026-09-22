"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ScrollIndicator({ label = "SCROLL TO BEGIN" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 select-none">
      <span className="tracking-[0.3em] text-[10px] sm:text-[11px] text-[#777A7D] uppercase font-light">
        {label}
      </span>
      <div className="relative w-[1px] h-14 sm:h-16 bg-white/10 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#D7A85B] to-transparent"
          animate={{
            y: ["-100%", "200%"],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
