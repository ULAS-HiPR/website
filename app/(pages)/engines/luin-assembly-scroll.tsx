"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useNavVisible } from "@/app/NavBar/use-at-top";
import { withBasePath } from "@/lib/base-path";

const FRAME_DURATION = 1 / 30;

export default function LuinAssemblyScroll() {
  const sectionElement = useRef<HTMLElement>(null);
  const videoElement = useRef<HTMLVideoElement>(null);
  const progressElement = useRef<HTMLSpanElement>(null);
  const progressBarElement = useRef<HTMLSpanElement>(null);
  const navVisible = useNavVisible();

  useEffect(() => {
    const section = sectionElement.current;
    const video = videoElement.current;
    if (!section || !video) return;

    const desktopQuery = window.matchMedia("(min-width: 760px)");
    const reduceMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animationFrame = 0;
    let targetTime = 0;
    let scrubEnabled = false;

    const seekToTarget = () => {
      if (
        !scrubEnabled ||
        video.seeking ||
        video.readyState < HTMLMediaElement.HAVE_METADATA ||
        !Number.isFinite(video.duration)
      ) {
        return;
      }

      const maximumTime = Math.max(0, video.duration - FRAME_DURATION);
      const nextTime = Math.min(targetTime, maximumTime);
      if (Math.abs(video.currentTime - nextTime) < FRAME_DURATION / 2) return;

      video.currentTime = nextTime;
    };

    const update = () => {
      animationFrame = 0;
      const bounds = section.getBoundingClientRect();
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-bounds.top / scrollDistance, 0), 1);

      if (progressElement.current) {
        progressElement.current.textContent = `${String(
          Math.round(progress * 100),
        ).padStart(3, "0")}%`;
      }
      if (progressBarElement.current) {
        progressBarElement.current.style.transform = `scaleX(${progress})`;
      }

      if (Number.isFinite(video.duration)) {
        targetTime = progress * Math.max(0, video.duration - FRAME_DURATION);
      }
      seekToTarget();
    };

    const scheduleUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(update);
      }
    };

    const updateMode = () => {
      scrubEnabled = desktopQuery.matches && !reduceMotionQuery.matches;
      video.pause();
      scheduleUpdate();
    };

    updateMode();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    video.addEventListener("loadedmetadata", scheduleUpdate);
    video.addEventListener("seeked", seekToTarget);
    desktopQuery.addEventListener("change", updateMode);
    reduceMotionQuery.addEventListener("change", updateMode);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      video.removeEventListener("loadedmetadata", scheduleUpdate);
      video.removeEventListener("seeked", seekToTarget);
      desktopQuery.removeEventListener("change", updateMode);
      reduceMotionQuery.removeEventListener("change", updateMode);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={sectionElement}
      id="luin-assembly"
      className="relative h-auto scroll-mt-[72px] bg-black text-white min-[760px]:h-[900svh] min-[760px]:scroll-mt-[88px] motion-reduce:!h-auto"
    >
      <div className="relative h-[min(78svh,720px)] min-h-[520px] overflow-hidden bg-black min-[760px]:sticky min-[760px]:top-0 min-[760px]:h-svh motion-reduce:!relative motion-reduce:!h-[min(78svh,720px)]">
        <Image
          src={withBasePath("/engines/luin/assembly-complete.jpg")}
          alt="Luin of Celtchar liquid rocket engine assembly"
          fill
          sizes="100vw"
          className="object-contain p-3 min-[760px]:hidden motion-reduce:!block"
        />

        <video
          ref={videoElement}
          muted
          playsInline
          preload="auto"
          poster={withBasePath("/engines/luin/assembly-start.jpg")}
          aria-label="Scroll-controlled exploded assembly animation of the Luin liquid rocket engine"
          className="absolute left-1/2 top-1/2 hidden max-h-[72svh] w-[min(72vw,820px)] -translate-x-1/2 -translate-y-1/2 object-contain min-[760px]:block motion-reduce:!hidden"
        >
          <source
            src={withBasePath("/engines/luin/assembly-motion-study.mp4")}
            type="video/mp4"
            media="(min-width: 760px) and (prefers-reduced-motion: no-preference)"
          />
        </video>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42)_0%,transparent_22%,transparent_70%,rgba(0,0,0,0.6)_100%)]"
        />

        <div
          className={`absolute inset-x-0 top-0 z-20 hidden h-[88px] items-center border-b border-white/10 bg-black/72 px-6 backdrop-blur-md transition-opacity duration-300 sm:px-10 min-[760px]:flex lg:px-16 ${
            navVisible ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center gap-6 2xl:max-w-none">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/38">
              Engine architecture
            </p>
            <div className="text-center">
              <h2 className="text-2xl font-semibold uppercase leading-none tracking-[0.04em] sm:text-3xl">
                Luin assembly
              </h2>
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/38">
                Scroll to inspect
              </p>
            </div>
            <p className="justify-self-end text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
              2 kN · Liquid bipropellant
            </p>
          </div>
        </div>

        <div className="absolute inset-x-5 bottom-6 z-20 min-[760px]:hidden">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e12e2d]">
            Engine architecture
          </p>
          <h2 className="mt-2 text-3xl font-semibold uppercase tracking-[0.03em]">
            Luin assembly
          </h2>
        </div>

        <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/42 min-[760px]:flex motion-reduce:!hidden lg:bottom-10 lg:right-12">
          <span ref={progressElement}>000%</span>
          <span className="h-px w-24 overflow-hidden bg-white/18">
            <span
              ref={progressBarElement}
              className="block h-full origin-left scale-x-0 bg-[#e12e2d]"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
