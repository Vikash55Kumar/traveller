"use client";

import React, { useEffect, useState } from "react";
import { experience } from "@/content/experience";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigation, meta } = experience;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-[#05070D]/85 backdrop-blur-xl border-b border-white/[0.07] py-3.5 sm:py-4 shadow-2xl"
          : "bg-gradient-to-b from-[#04070D]/80 via-[#04070D]/30 to-transparent py-6 sm:py-8"
      }`}
    >
      {/* Top Gold Horizon Hairline when scrolled */}
      {scrolled && (
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2BA72]/30 to-transparent pointer-events-none" />
      )}

      <nav className="max-w-[1240px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand & City Indicator */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 group select-none cursor-pointer"
        >
          <span className="text-xs sm:text-sm tracking-[0.28em] font-medium text-[#F8F6F0] group-hover:text-[#E2BA72] transition-colors duration-300 uppercase">
            {navigation.brand}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-mono tracking-[0.2em] font-light text-[#A2A7B0] hover:text-[#E2BA72] transition-colors duration-300 uppercase select-none relative group py-1"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E2BA72] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={navigation.cta.href}
            className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#E2BA72] text-[#08090C] hover:bg-[#F3D089] text-[10px] sm:text-[11px] font-mono tracking-[0.2em] font-medium transition-all duration-300 shadow-md hover:shadow-[#E2BA72]/20"
          >
            <span>{navigation.cta.label}</span>
            <ArrowUpRight size={12} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-[#F8F6F0] hover:text-[#E2BA72] hover:bg-white/[0.05] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#07090F]/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-8 overflow-hidden"
          >
            <div className="space-y-5">

              <div className="flex flex-col space-y-4">
                {navigation.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-mono tracking-[0.22em] text-[#D6C2B4] hover:text-[#E2BA72] uppercase transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <a
                  href="#arrival"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-[#E2BA72] text-[#08090C] text-xs font-mono tracking-widest uppercase font-medium flex items-center justify-center gap-2"
                >
                  <span>Google Form Link</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={meta.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-white/[0.04] border border-[#E2BA72]/30 text-[#F8F6F0] text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  <span>RSVP VIA GOOGLE FORM</span>
                  <ArrowUpRight size={13} className="text-[#E2BA72]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
