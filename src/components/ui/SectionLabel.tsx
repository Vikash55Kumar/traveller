import React from "react";

interface SectionLabelProps {
  label: string;
  number?: string;
  light?: boolean;
}

export default function SectionLabel({ label, number, light = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-6 tracking-[0.25em] text-[11px] sm:text-xs uppercase font-medium">
      {number && (
        <span className={light ? "text-[#D7A85B]" : "text-[#D7A85B]/80"}>
          {number}
        </span>
      )}
      {number && <span className="w-1.5 h-[1px] bg-white/20" />}
      <span className={light ? "text-[#E8C27A]" : "text-[#777A7D]"}>
        {label}
      </span>
    </div>
  );
}
