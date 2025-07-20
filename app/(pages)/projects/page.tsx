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
          name="Mach 25 - Macha"
          description="Macha was our Mach 25 competition rocket, it was made of a fiber glass upper section and a carbon fiber lower section. It was launched at the Mach 25 competition, where it placed second in its category, reaching 2.273km. It also successfully deployed a CanSat which mapped safe and unsafe landing zones during descent using AI."
          leftOrRight="left"
          image="/mach25/IMG_9646_Original.jpg"
          id="mach25"
        />
        <ProjectCard
          name="EuRoC 24 - Airmedh"
          description="Airmedh was constucted using bluetube. It was launched at EuRoC 2024 in Portugal. It reached 2.275km."
          leftOrRight="right"
          image="/euroc_24/2745EA1C-D1BB-4A37-96B7-EC7DC82FA9DB.JPG"
          id="euroc24"
        />
        <ProjectCard
          name="Mach 24 - Morrigiu"
          description="Mach 24 was the first rocket ULAS HiPR launched, it was made of fiber glass and carbon fiber. It used spring deployment and had a deployable payload. It was launched at the Mach 24 Competition, where it disasembled soon after launch, reaching 600m"
          leftOrRight="left"
          image="/mach_24/ee5fae67-df3b-4e7b-b6da-cc28ca9c7ff3.JPG"
          id="mach24"
          modelName="mach24-payload"
        />
        <ProjectCard
          name="Sionna"
          description="Sionna, named after the Celtic goddess of inspiration, creativity, and innovation, was our first high powered rocket. It was built to go 1.5km and was launched at international rocketry week in Glasgow"
          leftOrRight="right"
          image="sionna.jpg"
          id="sionna"
         // modelName="rocket"
        />

      </div>
    </div>
  );
}
