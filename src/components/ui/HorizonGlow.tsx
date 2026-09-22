"use client";

import React from "react";
import { motion } from "framer-motion";

interface HorizonGlowProps {
  className?: string;
  intensity?: "subtle" | "dawn" | "sunrise";
}

export default function HorizonGlow({ className = "", intensity = "subtle" }: HorizonGlowProps) {
  const opacities = {
    subtle: "opacity-30 md:opacity-40",
    dawn: "opacity-45 md:opacity-60",
    sunrise: "opacity-65 md:opacity-85",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden flex items-end justify-center ${className}`}
    >
      {/* Broad soft horizon glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
        className={`w-[140%] h-[320px] rounded-[100%] bg-gradient-to-t from-[#D7A85B]/20 via-[#0C1424]/40 to-transparent blur-3xl ${opacities[intensity]} animate-horizon`}
      />
      {/* Intense amber slit along the horizon line */}
      <div className="absolute bottom-0 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#E8C27A]/30 to-transparent blur-[1px]" />
    </div>
  );
}
