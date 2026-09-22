import React from "react";
import Navigation from "@/components/navigation/Navigation";
import DawnScrubber from "@/components/timeline/DawnScrubber";
import HeroSection from "@/components/hero/HeroSection";
import QuestionSection from "@/components/philosophy/QuestionSection";
import MorningSection from "@/components/morning/MorningSection";
import UnknownSection from "@/components/unknown/UnknownSection";
import EssentialsSection from "@/components/essentials/EssentialsSection";
import NotebookSection from "@/components/notebook/NotebookSection";
import ChecklistSection from "@/components/checklist/ChecklistSection";
import ArrivalSection from "@/components/arrival/ArrivalSection";
import FinalSection from "@/components/final/FinalSection";
import MinimalFooter from "@/components/footer/MinimalFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070B14] text-[#F4F1EA] selection:bg-[#D7A85B]/30 selection:text-[#F4F1EA]">
      {/* Navigation */}
      <Navigation />

      {/* Persistent Chronological Dawn Scrubber */}
      <DawnScrubber />

      {/* Main Experience Journey */}
      <main>
        {/* Section 1: Hero with coordinates & lantern light */}
        <HeroSection />

        {/* Section 2: The Question (Philosophy & Step Pacing) */}
        <QuestionSection />

        {/* Section 3: Between 5 AM and 9 AM (Kinetic Fragments & Anti-Agenda) */}
        <MorningSection />

        {/* Section 4: The Unknown (Specimen Fragments) */}
        <UnknownSection />

        {/* Section 5: The Essentials (Architectural Field Dispatches) */}
        <EssentialsSection />

        {/* Section 6: The Notebook & Pen (Tactile Field Artifact) */}
        <NotebookSection />

        {/* Section 7: Preparation Ledger (Tangible Load vs Internal Readiness) */}
        <ChecklistSection />

        {/* Section 8: Who Is This For? / Arrival CTA & Field Pass */}
        <ArrivalSection />

        {/* Section 9: The Trail Begins Before The Sun Rises (Golden Hour & Closing Inquest) */}
        <FinalSection />
      </main>

      {/* Section 10: Minimal Archival Footer */}
      <MinimalFooter />
    </div>
  );
}
