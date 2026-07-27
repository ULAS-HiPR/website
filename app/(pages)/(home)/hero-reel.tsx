"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { withBasePath } from "@/lib/base-path";

type IntroPhase = "visible" | "glitching" | "hidden";

export default function HeroReel() {
  const [phase, setPhase] = useState<IntroPhase>("visible");
  const [playbackBlocked, setPlaybackBlocked] = useState(false);
  const videoElement = useRef<HTMLVideoElement>(null);

  const startPlayback = useCallback(() => {
    const video = videoElement.current;
    if (!video || document.visibilityState === "hidden") return;

    video.muted = true;
    video.defaultMuted = true;
    void video
      .play()
      .then(() => setPlaybackBlocked(false))
      .catch(() => setPlaybackBlocked(true));
  }, []);

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

  useEffect(() => {
    startPlayback();

    const restartWhenVisible = () => {
      if (document.visibilityState === "visible") startPlayback();
    };
    window.addEventListener("pageshow", startPlayback);
    document.addEventListener("visibilitychange", restartWhenVisible);

    return () => {
      window.removeEventListener("pageshow", startPlayback);
      document.removeEventListener("visibilitychange", restartWhenVisible);
    };
  }, [startPlayback]);

  const revealVideo = phase !== "visible";

  return (
    <section
      id="demo-reel"
      data-intro-phase={phase}
      className="relative bg-black px-3 pb-3 pt-[72px] sm:px-4 sm:pb-4 min-[760px]:pt-[88px]"
    >
      <div className="relative h-[calc(100svh-84px)] min-h-[520px] max-h-[980px] overflow-hidden border-x border-b border-white/10 bg-black min-[760px]:h-[calc(100svh-176px)]">
        <video
          ref={videoElement}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={startPlayback}
          onEnded={(event) => {
            event.currentTarget.currentTime = 0;
            void event.currentTarget.play();
          }}
          aria-label="ULAS HiPR project demo reel"
          className={`absolute inset-0 h-full w-full object-cover transition-[filter] duration-1000 ease-out ${
            revealVideo ? "brightness-100" : "brightness-[0.68]"
          }`}
        >
          <source
            src={withBasePath("/hipr-demo-reel.m4v")}
            type="video/mp4"
            media="(max-width: 759px)"
          />
          <source src={withBasePath("/hipr-demo-reel.mp4")} type="video/mp4" />
        </video>

        {playbackBlocked ? (
          <button
            type="button"
            onClick={startPlayback}
            className="absolute bottom-5 right-5 z-30 border border-white/60 bg-black/75 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:bottom-7 sm:right-7"
          >
            Play video
          </button>
        ) : null}

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
