"use client";
import RocketAnimation from "@/app/3d/rocket";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

function ProjectCard({
  leftOrRight,
  name,
  description,
  image,
  id,
  modelName,
}: {
  leftOrRight: "left" | "right";
  name: string;
  description: string;
  image: string;
  id: string;
  modelName?: string;
}) {
  const imageClass = id === "tvc" ? "rounded-lg scale-125 " : "rounded-lg";
  return (
    <div
      id={id}
      className="my-8 w-full pt-4 pb-10 lg:pb-0 lg:pt-0 border-white rounded-lg"
    >
      <div className="grid lg:grid-cols-4 gap-8">
        {leftOrRight === "left" ? (
          <div className="hidden  lg:flex justify-center lg:col-span1 h-[260px]">
            <img className={imageClass} src={image} />
          </div>
        ) : null}
        <div className="flex flex-col lg:col-span-3 justify-center align-center">
          <h1 className="text-3xl pb-2 font-bold">{name}</h1>
          <p className="text-xl font-medium">{description}</p>
          <div
            className={
              leftOrRight === "left"
                ? "flex justify-right"
                : "flex justify-left"
            }
          >
            {modelName ? (
              <Link href={`/model/${modelName}`}>
                <Button className="text-lg font-medium mt-2">View model</Button>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
        {leftOrRight === "right" ? (
          <div className="hidden  lg:flex justify-center lg:col-span1 h-[260px]">
            <img className={imageClass} src={image} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Projects() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") as string;
    params.delete("id");
    if (id) {
      const div = document.getElementById(id);
      div?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);
  return (
    <div className="lg:px-20 px-8 pb-8">
      <h1 className="text-4xl font-bold">Our Projects</h1>
      <div className="">
        <ProjectCard
          name="Mach 25"
          description="The Mach-X Rocketry & CanSat Competition, hosted by Discover Space UK, Exotopic Ltd, Machrihanish Airbase Community Company, and UKSEDS, challenges university students to design, build, and launch rockets and CanSats. With remote technical support, participants gain practical skills in mechanical and electronics engineering, teamwork, and insight into careers in the UK Space Sector."
          leftOrRight="left"
          image="/mach-24-payload-ass.png"
          id="mach25"
          modelName="mach25-rocket"
        />
        <ProjectCard
          name="EuRoC 24"
          description="The Mach-X Rocketry & CanSat Competition, hosted by Discover Space UK, Exotopic Ltd, Machrihanish Airbase Community Company, and UKSEDS, challenges university students to design, build, and launch rockets and CanSats. With remote technical support, participants gain practical skills in mechanical and electronics engineering, teamwork, and insight into careers in the UK Space Sector."
          leftOrRight="right"
          image="/mach-24-payload-ass.png"
          id="euroc24"
          modelName="euroc-rocket"
        />
        <ProjectCard
          name="Mach-24"
          description="The Mach-X Rocketry & CanSat Competition, hosted by Discover Space UK, Exotopic Ltd, Machrihanish Airbase Community Company, and UKSEDS, challenges university students to design, build, and launch rockets and CanSats. With remote technical support, participants gain practical skills in mechanical and electronics engineering, teamwork, and insight into careers in the UK Space Sector."
          leftOrRight="left"
          image="/mach-24-payload-ass.png"
          id="mach24"
          modelName="mach24-payload"
        />
        <ProjectCard
          name="Sionna"
          description="Sionna, named after the Celtic goddess of inspiration, creativity, and innovation, is the groundbreaking and pioneering rocket that we are currently in the process of meticulously designing, developing, and refining as part of our ambitious and visionary aerospace engineering project."
          leftOrRight="right"
          image="sionna.jpg"
          id="sionna"
          modelName="rocket"
        />

      </div>
    </div>
  );
}
