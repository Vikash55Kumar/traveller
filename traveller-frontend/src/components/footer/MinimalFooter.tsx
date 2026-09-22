"use client";

import React from "react";
import { experience } from "@/content/experience";
import { ArrowUp } from "lucide-react";

export default function MinimalFooter() {
  const { footer } = experience;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#05070D] pt-4 pb-8 px-6 sm:px-10 border-t border-white/[0.08] overflow-hidden select-none">
      {/* Top Gold Horizon Hairline */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2BA72]/30 to-transparent pointer-events-none" />

      {/* Ambient warm glow in background */}
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[350px] pointer-events-none opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(226, 186, 114, 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto relative z-10">

        {/* Bottom Horizon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#777A7D]">
          <div className="flex items-center gap-3">
            <span>&copy; {footer.year} {footer.brand}</span>
            <span>·</span>
            <span>JODHPUR, RAJASTHAN</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#A2A7B0] hover:text-[#E2BA72] transition-colors cursor-pointer"
            >
              <span>BACK TO DAWN</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
