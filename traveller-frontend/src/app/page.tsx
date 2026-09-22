import React from "react";
import Navigation from "@/components/navigation/Navigation";
import HeroSection from "@/components/hero/HeroSection";
import QuestionSection from "@/components/philosophy/QuestionSection";
import MorningSection from "@/components/morning/MorningSection";
import UnknownSection from "@/components/unknown/UnknownSection";
import EssentialsSection from "@/components/essentials/EssentialsSection";
import NotebookSection from "@/components/notebook/NotebookSection";
import ArrivalSection from "@/components/arrival/ArrivalSection";
import FinalSection from "@/components/final/FinalSection";
import MinimalFooter from "@/components/footer/MinimalFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#F8F6F0]">
      {/* Navigation */}
      <Navigation />

      {/* The Journey */}
      <main>
        <HeroSection />
        <QuestionSection />
        <MorningSection />
        <UnknownSection />
        <EssentialsSection />
        <NotebookSection />
        <ArrivalSection />
        <FinalSection />
      </main>

      {/* Footer */}
      <MinimalFooter />
    </div>
  );
}
