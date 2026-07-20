"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  bannerImage?: string;
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
    launchVideo: "/mach_24/morrigu-launch.mp4",
    launchPoster: "/mach_24/morrigu-launch-keyframe.jpg",
    bannerImage: "/mach_24/hipr-banner.png",
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
  },
  {
    id: "mach26",
    number: "05",
    programme: "Mach-26 · 2026",
    name: "Badhbh",
    description:
      "Badhbh is HiPR's 2.5-metre Category 3 vehicle and its most integrated competition rocket to date. The fully composite airframe carried active airbrakes, a custom six-board flight computer, twin-cartridge CO₂ recovery, a walking robotic payload and a muon detector.",
    model: "/rockets/badhbh-assembly.glb",
    height: 2.5,
    details: [
      "2.5 m fully composite airframe",
      "Active airbrakes and custom CO₂ recovery",
      "Best-Looking Rocket and Best Social Media",
    ],
    imageFirst: true,
  },
];

const badhbhAnnotations = [
  {
    label: "Structure",
    title: "Composite airframe",
    copy: "A 2.5-metre Category 3 vehicle built around a fully composite airframe, carrying HiPR's most tightly integrated flight architecture to date.",
    stat: "2.5 m vehicle",
    side: "left" as const,
    placement: "middle" as const,
  },
  {
    label: "Flight control",
    title: "Ogma avionics",
    copy: "A custom six-board flight computer links sensing, logging, communications and actuator control across the vehicle.",
    stat: "6-board stack",
    side: "right" as const,
    placement: "threeFifths" as const,
  },
  {
    label: "Altitude control",
    title: "Active airbrakes",
    copy: "Servo-driven airbrakes add controllable drag during ascent. CFD-derived force models feed the onboard controller in real time.",
    stat: "Closed-loop control",
    side: "left" as const,
    placement: "oneThird" as const,
  },
  {
    label: "Recovery",
    title: "CO₂ deployment",
    copy: "A twin-cartridge pneumatic system pressurises the recovery bay on command and deploys the parachute through custom flight hardware.",
    stat: "Twin cartridges",
    side: "right" as const,
    placement: "middle" as const,
  },
  {
    label: "Payload bay",
    title: "Toirtis + Mu",
    copy: "The payload stack combined a deployable walking robot with a standalone cosmic-ray detector and its own flight logger.",
    stat: "Two experimental payloads",
    side: "left" as const,
    placement: "threeFifths" as const,
  },
];

function BadhbhAnnotation({
  annotation,
}: {
  annotation: (typeof badhbhAnnotations)[number];
}) {
  const containerElement = useRef<HTMLDivElement>(null);
  const stickyElement = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const placementPoint = {
    threeFifths: 0.4,
    middle: 0.5,
    oneThird: 2 / 3,
  }[annotation.placement];

  useEffect(() => {
    const containerNode = containerElement.current;
    const stickyNode = stickyElement.current;
    if (!containerNode || !stickyNode) {
      setVisible(true);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const containerBounds = containerNode.getBoundingClientRect();
      const stickyBounds = stickyNode.getBoundingClientRect();
      const pinLine = window.innerHeight * placementPoint;
      const exitRunway = window.innerHeight * 0.45;
      const isPinned = Math.abs(stickyBounds.top - pinLine) < 2;
      const hasExitRunway =
        containerBounds.bottom >
        pinLine + stickyBounds.height + exitRunway;
      setVisible(isPinned && hasExitRunway);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [placementPoint]);

  const isLeft = annotation.side === "left";
  const placementClass = {
    threeFifths: "top-[40svh]",
    middle: "top-[50svh]",
    oneThird: "top-[66.666svh]",
  }[annotation.placement];

  return (
    <div
      ref={containerElement}
      className="relative h-[170svh] px-5 sm:px-10 lg:px-16"
    >
      <div ref={stickyElement} className={`sticky ${placementClass} ${isLeft ? "mr-auto" : "ml-auto"} w-[min(86vw,390px)]`}>
        <article
          className={`relative -translate-y-1/2 border-white/16 bg-black/78 p-6 shadow-2xl backdrop-blur-md transition-all duration-700 sm:p-7 ${
            isLeft ? "border-l-2" : "border-r-2 text-right"
          } ${
            visible
              ? "translate-x-0 opacity-100"
              : `opacity-0 ${isLeft ? "-translate-x-4" : "translate-x-4"}`
          }`}
        >
          <span
            aria-hidden="true"
            className={`absolute top-1/2 hidden h-px w-[clamp(84px,13vw,205px)] bg-gradient-to-r transition-opacity duration-700 lg:block ${
              isLeft
                ? "left-full from-[#e12e2d] to-transparent"
                : "right-full rotate-180 from-[#e12e2d] to-transparent"
            } ${visible ? "opacity-100" : "opacity-0"}`}
          />
          <span
            aria-hidden="true"
            className={`absolute top-[calc(50%-3px)] hidden h-1.5 w-1.5 rounded-full bg-[#e12e2d] shadow-[0_0_14px_#e12e2d] transition-opacity duration-700 lg:block ${
              isLeft
                ? "left-[calc(100%+clamp(84px,13vw,205px)-3px)]"
                : "right-[calc(100%+clamp(84px,13vw,205px)-3px)]"
            } ${visible ? "opacity-100" : "opacity-0"}`}
          />
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e12e2d]">
            {annotation.label}
          </p>
          <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.01em] sm:text-3xl">
            {annotation.title}
          </h3>
          <p className="mt-5 text-sm leading-7 text-white/66">
            {annotation.copy}
          </p>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
            {annotation.stat}
          </p>
        </article>
      </div>
    </div>
  );
}

function BadhbhScrollSection({ project }: { project: Project }) {
  return (
    <section
      id={project.id}
      className="relative h-[980svh] scroll-mt-[88px] bg-black text-white"
    >
      <div className="sticky top-0 h-svh overflow-hidden bg-black">
        <RocketAnimation
          model={project.model}
          name={project.name}
          height={project.height}
          verticalOffset={-0.22}
          controlsTopClass="lg:top-[104px]"
          modelAxis="y"
          preserveMaterials
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
        <div className="h-[68svh]" aria-hidden="true" />
        <div className="sticky top-0 z-30 flex h-[88px] items-center bg-black/88 px-6 backdrop-blur-md sm:px-10 lg:px-16">
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center gap-6">
            <p className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-white/38 sm:block">
              {project.programme} · Vehicle {project.number}
            </p>
            <div className="text-center">
              <h2 className="text-2xl font-semibold uppercase leading-none tracking-[0.04em] sm:text-3xl">
                {project.name}
              </h2>
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/38">
                Scroll to see more
              </p>
            </div>
            <p className="hidden justify-self-end text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30 sm:block">
              Category 3 · 2.5 m
            </p>
          </div>
        </div>
        <div className="h-[40svh]" aria-hidden="true" />
        {badhbhAnnotations.map((annotation) => (
          <BadhbhAnnotation key={annotation.title} annotation={annotation} />
        ))}
      </div>
    </section>
  );
}

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
          <div className={`grid gap-3 sm:gap-4 ${project.bannerImage ? "lg:grid-cols-2" : ""}`}>
            <div className="relative h-[78svh] min-h-[560px] max-h-[900px] overflow-hidden bg-black">
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
            {project.bannerImage ? (
              <div className="relative h-[78svh] min-h-[560px] max-h-[900px] overflow-hidden bg-[#0c0d14]">
                <Image
                  src={project.bannerImage}
                  alt="ULAS HiPR vehicle programme banner showing Sionna, Morrigu, Airmedh and Macha"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            ) : null}
          </div>
          <figcaption className="px-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
            {project.name} launch · {project.programme}
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
            <h1 className="mt-5 text-5xl font-semibold uppercase tracking-[-0.015em] sm:text-7xl">Rockets</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/62 lg:translate-y-[14px] lg:justify-self-end">
            A chronological record of the vehicles designed, built and flown by HiPR at the University of Limerick.
          </p>
        </div>
      </header>

      <BadhbhScrollSection project={projects.find((project) => project.id === "mach26")!} />

      {[...projects].filter((project) => project.id !== "mach26").reverse().map((project) => (
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
