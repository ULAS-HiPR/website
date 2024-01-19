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
  return (
    <div id={id} className="my-4 w-full h-[300px] border-white rounded-lg">
      <div className="grid grid-cols-4 gap-8">
        {leftOrRight === "left" ? (
          <div className="flex justify-center col-span1 h-[260px]">
            <img className="rounded-lg" src={image} />
          </div>
        ) : null}
        <div className="flex flex-col col-span-3 justify-center align-center">
          <h1 className="text-3xl pb-2 font-bold">{name}</h1>
          <p className="text-xl font-medium">{description}</p>
          <div
            className={
              leftOrRight === "left" ? "flex justify-end align-end" : ""
            }
          >
            <Link href={"/model"}>
              <Button className="w-[200px] mt-6 font-bold text-lg">
                View model
              </Button>
            </Link>
          </div>
        </div>
        {leftOrRight === "right" ? (
          <div className="flex justify-center col-span1 h-[260px]">
            <img className="rounded-lg" src={image} />
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
      console.log(id);
      div?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);
  return (
    <div className="px-12 pb-8">
      <h1 className="text-4xl font-bold">Our Projects</h1>
      <div className="">
        <ProjectCard
          name="Mach-24"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur."
          leftOrRight="right"
          image="/mach-24.webp"
          id="mach24"
        />
        <ProjectCard
          name="TVC"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur."
          leftOrRight="left"
          image="tvc.webp"
          id="tvc"
        />
        <ProjectCard
          name="Sionna"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur."
          leftOrRight="right"
          image="sionna.jpeg"
          id="sionna"
        />
        <ProjectCard
          name="Sionna 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur."
          leftOrRight="left"
          image="sionna2.jpeg"
          id="sionna2"
        />
        <ProjectCard
          name="Hybrid Motor"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur."
          leftOrRight="right"
          image="/hybrid-motor.jpeg"
          id="hybridmotor"
        />
      </div>
    </div>
  );
}
