"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/content/experience";

export default function TopographicMap() {
  return (
    <section className="relative w-full py-28 sm:py-36 px-6 sm:px-10 overflow-hidden bg-gradient-to-b from-[#0A1220] via-[#0D1525] to-[#0E182A]">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header framing */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.08] mb-12">
          <div>
            <span className="text-[11px] tracking-[0.35em] text-[#E2BA72] uppercase font-light block mb-2">
              TERRAIN TOPOGRAPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F8F6F0] font-normal">
              Kaylana Escarpment
            </h2>
          </div>
          <div className="text-left sm:text-right space-y-1">
            <span className="text-xs tracking-widest text-[#A2A7B0] uppercase block">
              COORDINATES: 26°17&apos;58&quot;N 72°58&apos;42&quot;E
            </span>
            <span className="text-xs text-[#E2BA72] font-light block">
              Elevation: 245M ASL (Base) &nbsp;·&nbsp; Sealed Route
            </span>
          </div>
        </div>

        {/* Topographic Visual Map Container */}
        <div className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090E] shadow-2xl">
          {/* SVG Contour Lines */}
          <svg
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background grid */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Topographic Curves */}
            <path
              d="M-50 450 C 150 480, 250 320, 450 340 C 650 360, 750 220, 1050 200"
              stroke="#E2BA72"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
            <path
              d="M-50 380 C 120 400, 280 260, 480 290 C 680 320, 780 170, 1050 150"
              stroke="#E2BA72"
              strokeWidth="1"
              strokeOpacity="0.35"
            />
            <path
              d="M-50 310 C 100 330, 310 200, 520 230 C 720 260, 820 120, 1050 90"
              stroke="#E2BA72"
              strokeWidth="1.2"
              strokeOpacity="0.45"
            />
            <path
              d="M-50 240 C 80 260, 340 140, 560 170 C 760 200, 850 70, 1050 40"
              stroke="#E2BA72"
              strokeWidth="1"
              strokeOpacity="0.3"
            />

            {/* Ridge Peak Contours */}
            <ellipse cx="620" cy="210" rx="140" ry="70" stroke="#E2BA72" strokeWidth="0.8" strokeOpacity="0.35" />
            <ellipse cx="620" cy="210" rx="90" ry="45" stroke="#E2BA72" strokeWidth="1" strokeOpacity="0.5" />
            <ellipse cx="620" cy="210" rx="40" ry="20" stroke="#F3D089" strokeWidth="1.2" strokeOpacity="0.7" />

            {/* Valley contours */}
            <path
              d="M100 600 C 220 500, 340 520, 500 480 C 700 430, 850 520, 1050 480"
              stroke="#A2A7B0"
              strokeWidth="0.8"
              strokeOpacity="0.2"
            />
            <path
              d="M150 600 C 260 540, 380 560, 540 520 C 740 470, 890 560, 1050 520"
              stroke="#A2A7B0"
              strokeWidth="0.6"
              strokeOpacity="0.15"
            />

            {/* Faint trail line that fades into the mist */}
            <path
              d="M220 420 Q 300 390 380 340 T 520 260 T 620 210"
              stroke="#E2BA72"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              strokeOpacity="0.6"
            />
          </svg>

          {/* Meeting Beacon: Kaylana Chouraha */}
          <div className="absolute top-[68%] left-[21%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            {/* Outer pulsating ring */}
            <div className="relative flex items-center justify-center">
              <span className="absolute w-8 h-8 rounded-full bg-[#E2BA72]/30 animate-beacon" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#E2BA72] shadow-lg shadow-[#E2BA72]/50 border-2 border-[#07090E]" />
            </div>

            {/* Callout Tag */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-3 px-3.5 py-1.5 rounded-md bg-[#08090C]/90 border border-[#E2BA72]/40 backdrop-blur-md text-center shadow-xl select-none"
            >
              <div className="flex items-center gap-1.5 text-[10px] tracking-wider text-[#E2BA72] uppercase font-medium">
                <MapPin size={11} />
                <span>MEETING POINT · 05:00 AM</span>
              </div>
              <div className="text-[11px] text-[#F8F6F0] font-serif">
                {experience.meta.locationName}
              </div>
            </motion.div>
          </div>

          {/* Ridge Summit Elevation Label */}
          <div className="absolute top-[28%] left-[62%] -translate-x-1/2 -translate-y-1/2 z-20 hidden sm:block pointer-events-none">
            <div className="px-3 py-1 rounded bg-[#08090C]/80 border border-white/10 text-[10px] tracking-widest text-[#A2A7B0] uppercase font-light">
              RIDGE CREST // 310M
            </div>
          </div>

          {/* Sealed Trail Warning Note */}
          <div className="absolute bottom-6 right-6 z-20 max-w-xs text-right bg-[#08090C]/85 p-4 rounded-xl border border-white/[0.08] backdrop-blur-md">
            <span className="text-[10px] tracking-widest text-[#E2BA72] uppercase block mb-1 font-medium">
              TRAIL ENCRYPTED
            </span>
            <p className="text-xs text-[#A2A7B0] font-light leading-relaxed">
              The route ascending the sandstone escarpment is kept sealed. You only need to reach the beacon at 5:00 AM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
