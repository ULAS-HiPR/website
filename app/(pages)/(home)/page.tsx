"use client";
import { useEffect, useState } from "react";
import MoonAnimation from "@/app/3d/moon";
import HomeProjects from "./projects";
import Sponsors from "./sponsors";

export default function Home() {
  const [scrollDistance, setScrollDistance] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (e: Event) => {
      const currentScrollTop = (e.currentTarget as Window)!.scrollY;
      setScrollDistance(currentScrollTop);
    });
  }, []);
  return (
    <>
      <div className="relative h-[670px]">
        <MoonAnimation scrollDistance={scrollDistance} />
        <div className="relative z-10 flex flex-col items-center justify-center h-[760px] text-white">
          <h1 className="text-6xl font-bold select-none drop-shadow-md">
            ULAS HiPR
          </h1>
          <h1 className="text-2xl font-light pt-2 text-center select-none drop-shadow-md">
            Competitive High-Powered Rocketry
          </h1>
        </div>
      </div>
      <HomeProjects />
      <div className="pt-12">
        <Sponsors />
      </div>
    </>
  );
}
