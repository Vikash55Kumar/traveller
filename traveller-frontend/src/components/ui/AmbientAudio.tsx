"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const toggleAudio = () => {
    if (isPlaying) {
      // Fade out
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0.0001, audioCtxRef.current.currentTime, 0.8);
        setTimeout(() => {
          setIsPlaying(false);
        }, 800);
      }
    } else {
      // Initialize Web Audio API on first user gesture
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = audioCtxRef.current || new AudioCtx();
        audioCtxRef.current = ctx;

        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        masterGain.gain.setTargetAtTime(0.05, ctx.currentTime, 1.2); // Extremely gentle 5% volume
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Low meditative fundamental drone (55Hz / A1)
        const osc1 = ctx.createOscillator();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(55, ctx.currentTime);

        // Subtle sub-harmonic warmth (110Hz / A2)
        const osc2 = ctx.createOscillator();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(110, ctx.currentTime);

        // Filter to remove sharp edges and evoke early morning desert wind
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(180, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(masterGain);

        osc1.start();
        osc2.start();

        osc1Ref.current = osc1;
        osc2Ref.current = osc2;

        setIsPlaying(true);
      } catch (err) {
        console.warn("Web Audio not supported or restricted", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggleAudio}
      title={isPlaying ? "Mute atmospheric drone" : "Activate pre-dawn atmospheric audio"}
      className="inline-flex items-center gap-2 py-1 px-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[10px] tracking-[0.2em] font-mono text-[#B8B7B2] hover:text-[#E8C27A] transition-all cursor-pointer"
    >
      {isPlaying ? (
        <>
          <Volume2 size={12} className="text-[#D7A85B] animate-pulse" />
          <span className="hidden sm:inline">AUDIO: ON</span>
        </>
      ) : (
        <>
          <VolumeX size={12} className="text-[#777A7D]" />
          <span className="hidden sm:inline">AUDIO: OFF</span>
        </>
      )}
    </button>
  );
}
