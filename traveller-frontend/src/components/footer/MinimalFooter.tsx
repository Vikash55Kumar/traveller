import React from "react";
import { experience } from "@/content/experience";

export default function MinimalFooter() {
  const { footer } = experience;

  return (
    <footer className="w-full bg-[#04070D] py-16 px-6 sm:px-10 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left select-none">
        <div className="space-y-1">
          <div className="text-xs sm:text-sm tracking-[0.25em] font-medium text-[#F4F1EA] uppercase">
            {footer.brand}
          </div>
          <div className="text-[11px] sm:text-xs text-[#777A7D] tracking-wider font-light">
            {footer.subline}
          </div>
        </div>

        <div className="text-[11px] tracking-widest text-[#777A7D]/70 font-light">
          &copy; {footer.year}
        </div>
      </div>
    </footer>
  );
}
