"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import RocketAnimation from "@/app/3d/rocket";

type Project = {
  id: string;
  number: string;
  programme: string;
  name: string;
  description: string;
  model: string;
  height: number;
  details: string[];
  imageFirst?: boolean;
  launchVideo?: string;
  launchPoster?: string;
};

const projects: Project[] = [
  {
    id: "sionna",
    number: "01",
    programme: "First high-powered vehicle",
    name: "Sionna",
    description:
      "Named after the Celtic goddess of inspiration and innovation, Sionna was HiPR's first high-powered rocket. It was designed for a 1.5 km flight and launched during International Rocketry Week in Glasgow.",
    model: "/rockets/sionna.glb",
    height: 1.34,
    details: ["1.5 km design target", "Student-built airframe", "Launched in Glasgow"],
    imageFirst: true,
  },
  {
    id: "mach24",
    number: "02",
    programme: "Mach-24 · 2024",
    name: "Morrigu",
    description:
      "Morrigu was HiPR's first competition rocket, built from fibreglass and carbon fibre with spring recovery and a deployable payload. The airframe broke up shortly after launch, reaching roughly 600 m and giving the new team its first full set of competition-flight lessons.",
    model: "/rockets/morrigu.glb",
    height: 1.84,
    details: ["First competition flight", "Spring recovery", "Deployable payload"],
  },
  {
    id: "euroc24",
    number: "03",
    programme: "EuRoC · 2024",
    name: "Airmedh",
    description:
      "Airmedh was built around a Blue Tube airframe for the 3 km category at EuRoC 2024. The team launched it in Ponte de Sor, Portugal, reaching an apogee of 2.275 km and completing HiPR's first EuRoC campaign.",
    model: "/rockets/airmedh.glb",
    height: 1.95,
    details: ["2.275 km apogee", "Blue Tube airframe", "Ponte de Sor, Portugal"],
    imageFirst: true,
  },
  {
    id: "mach25",
    number: "04",
    programme: "Mach-25 · 2025",
    name: "Macha",
    description:
      "Macha combined a fibreglass upper section with a carbon-fibre lower airframe. It reached 2.273 km at Mach-25, finished second in its category and successfully deployed a CanSat that mapped safe and unsafe landing zones during descent.",
    model: "/rockets/macha.glb",
    height: 1.96,
    details: ["2.273 km apogee", "Second place in category", "AI landing-zone CanSat"],
    launchVideo: "/mach25/macha-launch.mp4",
    launchPoster: "/mach25/macha-launch-keyframe.jpg",
  },
  {
    id: "mach26",
    number: "05",
    programme: "Mach-26 · 2026",
    name: "Badhbh",
    description:
      "Badhbh is HiPR's 2.5-metre Category 3 vehicle and its most integrated competition rocket to date. The fully composite airframe carried active airbrakes, a custom six-board flight computer, twin-cartridge CO₂ recovery, a walking robotic payload and a muon detector.",
    model: "/rockets/badhbh.glb",
    height: 2.5,
    details: [
      "2.5 m fully composite airframe",
      "Active airbrakes and custom CO₂ recovery",
      "Best-Looking Rocket and Best Social Media",
    ],
    imageFirst: true,
  },
];

function ProjectSection({ project }: { project: Project }) {
  return (
    <section
      id={project.id}
      className="scroll-mt-[88px] bg-black text-white"
    >
      <div className="mx-auto grid min-h-[720px] max-w-[1500px] lg:grid-cols-2">
        <div className={`relative min-h-[520px] overflow-hidden border-white/10 ${project.imageFirst ? "lg:order-1 lg:border-r" : "lg:order-2 lg:border-l"}`}>
          <RocketAnimation
            model={project.model}
            name={project.name}
            height={project.height}
          />
        </div>

        <div
          className={`flex flex-col justify-center px-7 py-16 sm:px-12 lg:px-16 lg:py-20 ${
            project.imageFirst ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.11em] opacity-55">
            <span>{project.programme}</span>
            <span>{project.number} / 05</span>
          </div>
          <h2 className="mt-14 text-5xl font-semibold uppercase leading-none sm:text-6xl">
            {project.name}
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/68">
            {project.description}
          </p>

          <div className="mt-9">
            <ul className="space-y-2 text-sm text-white/62">
              {project.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>

          </div>
        </div>
      </div>

      {project.launchVideo ? (
        <figure className="mx-auto max-w-[1500px] bg-black px-3 pb-3 sm:px-4 sm:pb-4">
          <div className="h-[78svh] min-h-[560px] max-h-[900px] overflow-hidden bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={project.launchPoster}
              aria-label={`${project.name} launch at ${project.programme}`}
              className="h-full w-full object-contain"
            >
              <source src={project.launchVideo} type="video/mp4" />
            </video>
          </div>
          <figcaption className="px-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
            Macha launch · Mach-25
          </figcaption>
        </figure>
      ) : null}
    </section>
  );
}

export default function Projects() {
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    if (!id) return;

    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  return (
    <main className="bg-black pt-[88px] text-white">
      <header className="bg-black">
        <div className="mx-auto grid min-h-[360px] max-w-[1500px] gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">Flight programme</p>
            <h1 className="mt-5 text-5xl font-semibold uppercase tracking-[-0.03em] sm:text-7xl">Rockets</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/62 lg:translate-y-[14px] lg:justify-self-end">
            A chronological record of the vehicles designed, built and flown by HiPR at the University of Limerick.
          </p>
        </div>
      </header>

      {[...projects].reverse().map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}

      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold">Build the next vehicle</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/62">
              HiPR projects are built by students across engineering,
              electronics, software, operations and communications.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-3 font-semibold"
          >
            Join the team
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
