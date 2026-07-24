"use client";

import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/base-path";

type IntroPhase = "visible" | "glitching" | "hidden";

export default function HeroReel() {
  const [phase, setPhase] = useState<IntroPhase>("visible");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealVideo = window.setTimeout(
      () => setPhase(reduceMotion ? "hidden" : "glitching"),
      2200
    );
    const hideCopy = window.setTimeout(() => setPhase("hidden"), reduceMotion ? 2700 : 3150);

    return () => {
      window.clearTimeout(revealVideo);
      window.clearTimeout(hideCopy);
    };
  }, []);

  const revealVideo = phase !== "visible";

  return (
    <section
      id="demo-reel"
      data-intro-phase={phase}
      className="relative bg-black px-3 pb-3 pt-[88px] sm:px-4 sm:pb-4"
    >
      <div className="relative h-[calc(100svh-176px)] min-h-[520px] max-h-[980px] overflow-hidden border-x border-b border-white/10 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onEnded={(event) => {
            event.currentTarget.currentTime = 0;
            void event.currentTarget.play();
          }}
          aria-label="ULAS HiPR project demo reel"
          className={`absolute inset-0 h-full w-full object-cover transition-[filter] duration-1000 ease-out ${
            revealVideo ? "brightness-100" : "brightness-[0.68]"
          }`}
        >
          <source src={withBasePath("/hipr-demo-reel.mp4")} type="video/mp4" />
        </video>

        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.04)_38%,rgba(0,0,0,0.82)_100%)] transition-opacity duration-1000 ${
            revealVideo ? "opacity-0" : "opacity-100"
          }`}
        />

        <div
          className={`hero-reel-copy absolute inset-0 flex items-end px-6 pb-10 sm:px-10 sm:pb-14 xl:px-12 xl:pb-16 hero-reel-copy--${phase}`}
        >
          <div className="max-w-4xl">
            <p className="hero-reel-secondary text-xs font-semibold uppercase tracking-[0.16em] text-white/66">
              ULAS HiPR · 2026
            </p>
            <h1
              aria-label="Ireland's first competitive rocketry team."
              data-text={"IRELAND'S FIRST\nCOMPETITIVE\nROCKETRY TEAM."}
              className="hero-glitch-title mt-5 text-[50px] font-bold uppercase leading-[0.88] tracking-[-0.017em] sm:text-7xl lg:text-[96px]"
            >
              <span className="block">Ireland&apos;s first</span>
              <span className="block text-[#e12e2d]">Competitive</span>
              <span className="block">rocketry team.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
