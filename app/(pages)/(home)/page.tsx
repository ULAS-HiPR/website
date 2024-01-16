"use client";
import RocketAnimation from "@/app/3d/rocket";
import HomeProjects from "./projects";
import EarthAnimation from "@/app/3d/earth";

export default function Home() {
  return (
    <>
      <div className="relative h-full">
        <EarthAnimation />
        <div className="relative z-10 flex flex-col items-center justify-center h-[760px] text-white">
          <h1 className="text-6xl font-bold">UL Aerosoc HiPR</h1>
          <h1 className="text-2xl font-light pt-2">
            Rocketry something something
          </h1>
        </div>
      </div>
      <HomeProjects />
    </>
  );
}
