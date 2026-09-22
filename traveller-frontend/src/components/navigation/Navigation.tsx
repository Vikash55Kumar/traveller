"use client";

import React, { useEffect, useState } from "react";
import { experience } from "@/content/experience";
import AmbientAudio from "@/components/ui/AmbientAudio";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-[#070B14]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5 sm:py-4"
          : "bg-transparent py-6 sm:py-8"
      }`}
    >
      <nav className="max-w-[1240px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand & Geographic Anchor */}
        <div className="flex items-baseline gap-3">
          <a
            href="#"
            className="text-xs sm:text-sm tracking-[0.25em] font-medium text-[#F4F1EA] hover:text-[#D7A85B] transition-colors duration-300 uppercase"
          >
            {experience.navigation.brand}
          </a>
          <span className="hidden md:inline-block font-mono text-[9px] tracking-widest text-[#777A7D]/70">
            {experience.meta.coordinates}
          </span>
        </div>

        {/* Action Controls & Navigation */}
        <div className="flex items-center gap-5 sm:gap-8">
          <AmbientAudio />

          <div className="hidden sm:flex items-center gap-7">
            {experience.navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-[0.22em] font-light text-[#B8B7B2] hover:text-[#F4F1EA] transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Minimal Live Reporting Badge */}
          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7A85B] animate-ping" />
            <span className="font-mono text-[10px] tracking-wider text-[#D7A85B]">
              05:00 AM SHARP
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
