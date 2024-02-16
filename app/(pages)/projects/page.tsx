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
    <div
      id={id}
      className="my-4 w-full pt-4 pb-10 sm:pb-0 sm:h-[300px] border-white rounded-lg "
    >
      <div className="grid sm:grid-cols-4 gap-8">
        {leftOrRight === "left" ? (
          <div className="hidden sm:block flex justify-center sm:col-span1 h-[260px]">
            <img className=" rounded-lg" src={image} />
          </div>
        ) : null}
        <div className="flex flex-col sm:col-span-3 justify-center align-center">
          <h1 className="text-3xl pb-2 font-bold">{name}</h1>
          <p className="text-xl font-medium">{description}</p>
          <div
            className={
              leftOrRight === "left"
                ? "flex justify-left sm:justify-end align-end"
                : ""
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
          <div className="hidden sm:block flex justify-center sm:col-span1 h-[260px]">
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
      div?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);
  return (
    <div className="sm:px-12 px-8 pb-8">
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
          description="Thrust-vector control is a technology used in aerospace engineering to adjust the direction and stability of a vehicle during flight. It involves altering the angle of a rocket’s engines or exhaust nozzles, enabling precise control over the vehicle’s movement and enhancing maneuverability."
          leftOrRight="left"
          image="tvc.webp"
          id="tvc"
        />
        <ProjectCard
          name="Sionna"
          description="Sionna, named after the Celtic goddess of inspiration, creativity, and innovation, is the groundbreaking and pioneering rocket that we are currently in the process of meticulously designing, developing, and refining as part of our ambitious and visionary aerospace engineering project."
          leftOrRight="right"
          image="sionna.jpeg"
          id="sionna"
        />
        <ProjectCard
          name="Sionna 2"
          description="Sionna 2 is the successor to our Sionna rocket, designed to take our high-performance model rocketry team to new heights of achievement. With enhanced performance and precision, Sionna 2 showcases our team’s commitment to pushing the boundaries of model rocketry excellence."
          leftOrRight="left"
          image="sionna2.jpeg"
          id="sionna2"
        />
        <ProjectCard
          name="Hybrid Motor"
          description="A hybrid motor combines elements of solid and liquid rocket motors. It uses a solid fuel grain ignited separately and a liquid oxidizer injected into the combustion chamber to generate thrust. This allows for precise thrust control and improved safety, but will involve significant engineering resources to accomplish."
          leftOrRight="right"
          image="/hybrid-motor.jpeg"
          id="hybridmotor"
        />
      </div>
    </div>
  );
}
