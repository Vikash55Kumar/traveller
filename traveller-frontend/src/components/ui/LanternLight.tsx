"use client";

import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function LanternLight() {
  const mouseX = useSpring(-500, { stiffness: 120, damping: 24 });
  const mouseY = useSpring(-500, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="hidden md:block pointer-events-none fixed inset-0 z-10 overflow-hidden mix-blend-screen opacity-40 md:opacity-55 transition-opacity duration-1000"
    >
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full bg-radial from-[#D7A85B]/15 via-[#111D30]/10 to-transparent blur-3xl"
      />
    </div>
  );
}
