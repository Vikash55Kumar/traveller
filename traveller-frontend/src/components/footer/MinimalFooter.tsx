"use client";

import React from "react";
import { experience } from "@/content/experience";
import { ArrowUp, ArrowUpRight, MapPin, Calendar, Compass } from "lucide-react";
import { generateIcsFile, getGoogleCalendarUrl } from "@/lib/calendar";

export default function MinimalFooter() {
  const { footer, meta } = experience;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#05070D] pt-24 pb-16 px-6 sm:px-10 border-t border-white/[0.08] overflow-hidden select-none">
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
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.06]">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <Compass size={16} className="text-[#E2BA72]" />
              <span className="text-sm tracking-[0.3em] font-medium text-[#F8F6F0] uppercase">
                {footer.brand}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A2A7B0] font-light leading-relaxed max-w-sm">
              An unguided early morning communion of walking, silence, and inquiry
              across the sandstone ridges of Jodhpur.
            </p>

            <div className="pt-2">
              <a
                href={meta.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-[#E2BA72]/40 text-xs text-[#F8F6F0] transition-colors group"
              >
                <MapPin size={13} className="text-[#E2BA72] shrink-0" />
                <span className="font-mono text-[11px] text-[#D6C2B4]">
                  Kailana Circle, Kabir Nagar, Jodhpur
                </span>
                <ArrowUpRight
                  size={12}
                  className="text-[#E2BA72] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
                />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#E2BA72] uppercase font-medium block">
              THE TRAVERSE
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="#the-morning"
                  className="text-[#A2A7B0] hover:text-[#F8F6F0] transition-colors"
                >
                  The Morning // 01
                </a>
              </li>
              <li>
                <a
                  href="#the-unknown"
                  className="text-[#A2A7B0] hover:text-[#F8F6F0] transition-colors"
                >
                  The Unknown // 02
                </a>
              </li>
              <li>
                <a
                  href="#essentials"
                  className="text-[#A2A7B0] hover:text-[#F8F6F0] transition-colors"
                >
                  Practical Info // 03
                </a>
              </li>
              <li>
                <a
                  href="#the-companion"
                  className="text-[#A2A7B0] hover:text-[#F8F6F0] transition-colors"
                >
                  The Companion // 04
                </a>
              </li>
              <li>
                <a
                  href="#the-horizon"
                  className="text-[#A2A7B0] hover:text-[#F8F6F0] transition-colors"
                >
                  The Horizon // 05
                </a>
              </li>
            </ul>
          </div>

          {/* Coordination Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#E2BA72] uppercase font-medium block">
              COORDINATION
            </span>
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#777A7D] uppercase block">
                  REPORTING TIME
                </span>
                <span className="text-xs font-mono text-[#F8F6F0]">
                  Sunday · 05:00 AM SHARP
                </span>
              </div>

              <div className="pt-1 flex flex-col space-y-2 font-mono text-[11px]">
                <a
                  href={meta.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E2BA72] hover:text-[#F3D089] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>RSVP via Google Form</span>
                  <ArrowUpRight size={11} />
                </a>

                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A2A7B0] hover:text-[#F8F6F0] transition-colors inline-flex items-center gap-1.5"
                >
                  <Calendar size={11} className="text-[#E2BA72]" />
                  <span>Google Calendar Event</span>
                </a>

                <button
                  type="button"
                  onClick={generateIcsFile}
                  className="text-[#A2A7B0] hover:text-[#F8F6F0] transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span>Download .ICS File</span>
                </button>
              </div>
            </div>
          </div>

          {/* Ethos Column */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#E2BA72] uppercase font-medium block">
              THE COVENANT
            </span>
            <p className="text-xs text-[#777A7D] font-light italic leading-relaxed">
              &ldquo;Spoken words are rare and deliberate. Let the morning speak first.&rdquo;
            </p>
            <p className="text-[11px] text-[#606775] font-light leading-relaxed">
              Bring a notebook, pen, and water. The route remains unrevealed.
            </p>
          </div>
        </div>

        {/* Bottom Horizon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#777A7D]">
          <div className="flex items-center gap-3">
            <span>&copy; {footer.year} {footer.brand}</span>
            <span>·</span>
            <span>JODHPUR, RAJASTHAN</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#606775]">26°17&apos;N · 72°58&apos;E</span>
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
