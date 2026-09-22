import React from "react";
import { experience } from "@/content/experience";

export default function MinimalFooter() {
  const { footer } = experience;

  return (
    <footer className="w-full bg-[#050912] py-16 px-6 sm:px-10 border-t border-white/[0.06]">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-1">
          <div className="text-xs sm:text-sm tracking-[0.25em] font-medium text-[#F4F1EA] uppercase">
            {footer.brand}
          </div>
          <div className="text-[11px] sm:text-xs text-[#777A7D] tracking-wider font-light">
            {footer.subline}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-mono text-[10px] text-[#777A7D]/70 tracking-widest uppercase">
          <span>{footer.coordinates}</span>
          <span className="hidden md:inline-block">/</span>
          <span>&copy; {footer.year} THE TRAVELLER</span>
        </div>
      </div>
    </footer>
  );
}
