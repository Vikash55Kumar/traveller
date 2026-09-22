"use client";

import React, { useEffect, useState } from "react";
import { experience } from "@/content/experience";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-[#070B14]/80 backdrop-blur-md border-b border-white/[0.06] py-4"
          : "bg-transparent py-7 sm:py-9"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        <a
          href="#"
          className="text-xs sm:text-sm tracking-[0.25em] font-medium text-[#F4F1EA] hover:text-[#D7A85B] transition-colors duration-300 uppercase"
        >
          {experience.navigation.brand}
        </a>

        <div className="flex items-center gap-6 sm:gap-10">
          {experience.navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] sm:text-xs tracking-[0.2em] font-light text-[#B8B7B2] hover:text-[#F4F1EA] transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
