import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeroReel from "./hero-reel";

const featuredSystems = [
  {
    name: "Badhbh",
    label: "Mach-26 · Category 3",
    href: "/projects#mach26",
    image: "/mach26/badhbh-launch.jpeg",
    position: "object-[50%_52%]",
    scale: "scale-[1.24]",
    zoom: "group-hover:scale-[1.28]",
    backdrop: false,
  },
  {
    name: "Macha",
    label: "Mach-25 · second in category",
    href: "/projects#mach25",
    image: "/mach25/macha-rail-keyframe.jpg",
    position: "object-center",
    scale: "",
    zoom: "group-hover:scale-[1.025]",
    backdrop: false,
  },
  {
    name: "Morrigu",
    label: "First competition flight",
    href: "/projects#mach24",
    image: "/mach_24/morrigu-launch-keyframe.jpg",
    position: "object-[50%_31%]",
    backdrop: false,
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroReel />

      <section aria-label="Featured systems" className="bg-black px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {featuredSystems.map((system) => (
            <Link
              key={system.name}
              href={system.href}
              className="group relative h-[260px] overflow-hidden border border-white/10 bg-[#080808] sm:h-[340px]"
            >
              {system.backdrop ? (
                <Image
                  src={system.image}
                  alt=""
                  fill
                  aria-hidden="true"
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="scale-110 object-cover blur-2xl brightness-[0.42]"
                />
              ) : null}
              <Image
                src={system.image}
                alt=""
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className={`object-cover ${system.scale ?? ""} ${system.zoom ?? "group-hover:scale-[1.025]"} brightness-[0.62] transition duration-700 group-hover:brightness-[0.78] ${system.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/48">{system.label}</p>
                <h2 className="mt-2 text-3xl font-semibold uppercase tracking-[-0.01em]">{system.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="ireland" className="relative mx-3 min-h-svh overflow-hidden border border-white/10 bg-black sm:mx-4">
        <Image
          src="/hero-earth.png"
          alt="Ireland seen from orbit at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.58]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.22)_46%,rgba(0,0,0,0.88)_100%)]" />

        <div className="relative mx-auto flex min-h-svh max-w-[1600px] items-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 xl:px-12 xl:pb-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/62">
              University of Limerick
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-bold uppercase leading-[0.92] tracking-[-0.015em] sm:text-7xl lg:text-[88px]">
              Building Ireland&apos;s Space Industry.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              More than 100 students developing flight-proven rockets,
              payloads, avionics and liquid propulsion for international
              competition.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="group inline-flex min-w-44 items-center justify-between border border-white/60 px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-white hover:text-black"
              >
                Explore rockets
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/sponsorship"
                className="group inline-flex min-w-44 items-center justify-between border border-white/25 px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:border-white"
              >
                Partner with HiPR
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
