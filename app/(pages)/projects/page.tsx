"use client";
import RocketAnimation from "@/app/3d/rocket";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import router, { useRouter } from "next/router";
import { useEffect } from "react";

function ProjectCard({
  leftOrRight,
  name,
  description,
  image,
  id,
}: {
  leftOrRight: "left" | "right";
  name: string;
  description: string;
  image: string;
  id: string;
}) {
  const imageClass = id === 'tvc' ? 'rounded-lg scale-125 ' : 'rounded-lg';
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
                ? "flex justify-left lg:justify-end align-end"
                : ""
            }
          >
            <Link href={"/model"}>
              {/* <Button className="w-[200px] mt-6 font-bold text-lg">
                View model
              </Button> */}
            </Link>
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
          name="Mach-24"
          description="The Mach-X Rocketry & CanSat Competition, hosted by Discover Space UK, Exotopic Ltd, Machrihanish Airbase Community Company, and UKSEDS, challenges university students to design, build, and launch rockets and CanSats. With remote technical support, participants gain practical skills in mechanical and electronics engineering, teamwork, and insight into careers in the UK Space Sector."
          leftOrRight="right"
          image="/mach-24.webp"
          id="mach24"
        />
        <ProjectCard
          name="TVC"
          description="TVC is our first research project for use in future designs. The teams goal is to advance depth of technological knowledge and provide new technologies for future high powered rockets. The ability to manipulate the direction of thrust from a motor to control the attitude or angular velocity of the rocket is a big step in creating more advanced rocket concepts and increasing the capabilities of ULAS HiPr."
          leftOrRight="left"
          image="TVC_CAD.png"
          id="tvc"
        />
        <ProjectCard 
          name="Sionna"
          description="Sionna, named after the Celtic goddess of inspiration, creativity, and innovation, is the groundbreaking and pioneering rocket that we are currently in the process of meticulously designing, developing, and refining as part of our ambitious and visionary aerospace engineering project."
          leftOrRight="right"
          image="sionna.jpg"
          id="sionna"
        />
        <Link href={"/model"}>
              <Button className="w-[200px] my-2 font-bold text-lg">
                View model
              </Button>
            </Link>
        <ProjectCard
          name="Sionna 2"
          description="SPEIR is a high powered rocket designed by a team of first years in order to help them learn the basics of high powered rocketry and to allow them to progress to more advanced projects during their subsequent years in HiPR. SPEIR is heavily based on the design of our first rocket, Sionna, but with the aim to add an on board camera module which can provide us with footage from the rocket’s perspective in flight."
          leftOrRight="left"
          image="sionna2_temp.png"
          id="sionna2"
        />
      </div>
    </div>
  );
}
