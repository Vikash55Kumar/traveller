import React from "react";
import Navigation from "@/components/navigation/Navigation";
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

      {/* Main Experience Journey */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: The Question (Philosophy) */}
        <QuestionSection />

        {/* Section 3: Between 5 AM and 9 AM (The Morning) */}
        <MorningSection />

        {/* Section 4: The Unknown (Mystery Cards) */}
        <UnknownSection />

        {/* Section 5: The Essentials (Clear Practical Info) */}
        <EssentialsSection />

        {/* Section 6: The Notebook & Pen (Tactile Visual) */}
        <NotebookSection />

        {/* Section 7: Preparation Checklist */}
        <ChecklistSection />

        {/* Section 8: Who Is This For? / Arrival CTA */}
        <ArrivalSection />

        {/* Section 9: The Trail Begins Before The Sun Rises (Final Horizon) */}
        <FinalSection />
      </main>

      {/* Section 10: Footer */}
      <MinimalFooter />
    </div>
  );
}
