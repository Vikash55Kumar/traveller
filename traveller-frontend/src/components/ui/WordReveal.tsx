"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface WordRevealProps {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
  wordClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
  once?: boolean;
}

export default function WordReveal({
  text,
  delay = 0,
  stagger = 0.08,
  className = "",
  wordClassName = "",
  as = "p",
  once = true,
}: WordRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (customDelay: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: shouldReduceMotion ? 0 : customDelay,
      },
    }),
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    },
  };

  const Component = motion[as];

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-8% 0px" }}
      custom={delay}
      className={`inline-block ${className}`}
    >
      {words.map((word, idx) => (
        <span key={`${word}-${idx}`} className="inline-block whitespace-nowrap mr-[0.28em] overflow-hidden">
          <motion.span variants={wordVariants} className={`inline-block ${wordClassName}`}>
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
