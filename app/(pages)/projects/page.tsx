"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect } from "react";

type Project = {
  id: string;
  number: string;
  programme: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  details: string[];
  theme: "dark" | "light";
  imageFirst?: boolean;
  model?: string;
};

const projects: Project[] = [
  {
    id: "sionna",
    number: "01",
    programme: "First high-powered vehicle",
    name: "Sionna",
    description:
      "Named after the Celtic goddess of inspiration and innovation, Sionna was HiPR's first high-powered rocket. It was designed for a 1.5 km flight and launched during International Rocketry Week in Glasgow.",
    image: "/sionna.jpg",
    alt: "Sionna on display at the University of Limerick",
    details: ["1.5 km design target", "Student-built airframe", "Launched in Glasgow"],
    theme: "light",
    imageFirst: true,
  },
  {
    id: "mach24",
    number: "02",
    programme: "Mach-24 · 2024",
    name: "Morrigu",
    description:
      "Morrigu was HiPR's first competition rocket, built from fibreglass and carbon fibre with spring recovery and a deployable payload. The airframe broke up shortly after launch, reaching roughly 600 m and giving the new team its first full set of competition-flight lessons.",
    image: "/mach_24/ee5fae67-df3b-4e7b-b6da-cc28ca9c7ff3.JPG",
    alt: "Morrigu launching at the Mach-24 competition",
    details: ["First competition flight", "Spring recovery", "Deployable payload"],
    theme: "dark",
    model: "/model/mach24-payload",
  },
  {
    id: "euroc24",
    number: "03",
    programme: "EuRoC · 2024",
    name: "Airmedh",
    description:
      "Airmedh was built around a Blue Tube airframe for the 3 km category at EuRoC 2024. The team launched it in Ponte de Sor, Portugal, reaching an apogee of 2.275 km and completing HiPR's first EuRoC campaign.",
    image: "/euroc_24/2745EA1C-D1BB-4A37-96B7-EC7DC82FA9DB.JPG",
    alt: "Airmedh being prepared on the EuRoC launch rail",
    details: ["2.275 km apogee", "Blue Tube airframe", "Ponte de Sor, Portugal"],
    theme: "light",
    imageFirst: true,
  },
  {
    id: "mach25",
    number: "04",
    programme: "Mach-25 · 2025",
    name: "Macha",
    description:
      "Macha combined a fibreglass upper section with a carbon-fibre lower airframe. It reached 2.273 km at Mach-25, finished second in its category and successfully deployed a CanSat that mapped safe and unsafe landing zones during descent.",
    image: "/mach25/IMG_9646_Original.jpg",
    alt: "Macha standing in the workshop before competition",
    details: ["2.273 km apogee", "Second place in category", "AI landing-zone CanSat"],
    theme: "dark",
  },
];

function ProjectSection({ project }: { project: Project }) {
  const dark = project.theme === "dark";

  return (
    <section
      id={project.id}
      className={`scroll-mt-6 ${dark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="mx-auto grid min-h-[680px] max-w-[1180px] lg:grid-cols-2">
        <div
          className={`relative min-h-[560px] overflow-hidden ${
            project.imageFirst ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`object-cover ${
              project.id === "mach25"
                ? "object-[center_48%]"
                : project.id === "sionna"
                  ? "object-[center_58%]"
                  : "object-center"
            }`}
          />
          {dark ? <div className="absolute inset-0 bg-black/5" /> : null}
        </div>

        <div
          className={`flex flex-col justify-center px-7 py-16 sm:px-12 lg:px-16 lg:py-20 ${
            project.imageFirst ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.11em] opacity-55">
            <span>{project.programme}</span>
            <span>{project.number} / 04</span>
          </div>
          <h2 className="mt-14 text-5xl font-semibold uppercase leading-none sm:text-6xl">
            {project.name}
          </h2>
          <p className={`mt-8 max-w-xl text-base leading-8 ${dark ? "text-white/72" : "text-black/68"}`}>
            {project.description}
          </p>

          <div className={`mt-9 border-t pt-7 ${dark ? "border-white/18" : "border-black/15"}`}>
            <ul className={`space-y-2 text-sm ${dark ? "text-white/68" : "text-black/62"}`}>
              {project.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>

            {project.model ? (
              <Link
                href={project.model}
                className="group mt-9 inline-flex items-center gap-3 font-semibold"
              >
                View payload model
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
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
    <main className="bg-white">
      <section className="relative min-h-[520px] overflow-hidden bg-[#020208] text-white">
        <Image
          src="/mach25/IMG_9612_Original.jpg"
          alt="HiPR students preparing Macha outdoors"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_47%] opacity-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020208_0%,rgba(2,2,8,0.94)_45%,rgba(2,2,8,0.25)_76%,rgba(2,2,8,0.42)_100%)]" />

        <div className="relative mx-auto flex min-h-[520px] max-w-[1180px] flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            Flight programme
          </p>
          <h1 className="mt-5 text-5xl font-bold sm:text-6xl">Our projects</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
            Four rockets charting HiPR&apos;s progress from its first high-powered
            build to international competition flights.
          </p>
          <a
            href="#project-index"
            aria-label="See project index"
            className="mt-10 flex h-11 w-11 items-center justify-center bg-black/55 transition-colors hover:bg-[#c95049]"
          >
            <ArrowDown aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </section>

      <nav id="project-index" aria-label="Project index" className="bg-white text-black">
        <div className="mx-auto grid max-w-[1180px] sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <a
              key={project.id}
              href={`#${project.id}`}
              className="group border-b border-black/15 px-7 py-7 transition-colors hover:bg-[#f3f2ef] sm:border-r"
            >
              <span className="text-xs text-black/40">{project.number}</span>
              <span className="mt-2 flex items-center justify-between font-semibold">
                {project.name}
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>
          ))}
        </div>
      </nav>

      {[...projects].reverse().map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}

      <section className="bg-[#090909] text-white">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20">
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
