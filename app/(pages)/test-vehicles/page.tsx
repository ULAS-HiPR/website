import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RocketAnimation from "@/app/3d/rocket";
import { withBasePath } from "@/lib/base-path";
import DullahanScroll from "./dullahan-scroll";

export const metadata: Metadata = {
  title: "Flight Test Vehicles | ULAS HiPR",
  description:
    "Explore Dullahan, HiPR's two-stage altitude-attempt rocket, alongside flight-test vehicles for active control, recovery and new flight technology.",
};

const sguabaSpecifications = [
  ["Purpose", "Active roll control"],
  ["Control surfaces", "Nose-mounted canards"],
  ["Validation", "Wind tunnel + flight"],
  ["Campaign", "Repeated test launches"],
];

const fethSpecifications = [
  ["Airframe", "3 in · 1.334 m"],
  ["Recovery medium", "16 g CO₂ cartridge"],
  ["Actuation", "35 kg servo"],
  ["Campaign", "3 flights"],
];

const sionnaSpecifications = [
  ["Airframe", "3 in · 1.34 m"],
  ["Motor class", "J"],
  ["Apogee", "≈1.5 km"],
  ["Campaign", "International Rocketry Week"],
];

function Specifications({ rows }: { rows: string[][] }) {
  return (
    <dl className="mt-10 border-t border-white/18">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="grid grid-cols-1 gap-1 border-b border-white/14 py-4 text-sm sm:grid-cols-[1fr_auto] sm:gap-5"
        >
          <dt className="text-white/46">{label}</dt>
          <dd className="font-medium text-white/88 sm:text-right">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function SguabaSection() {
  return (
    <section id="sguaba-tuinne" className="scroll-mt-[72px] bg-black text-white min-[760px]:scroll-mt-[88px]">
      <div className="mx-auto grid min-h-[800px] max-w-[1500px] 2xl:max-w-none border-x border-white/10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:border-r lg:border-white/10 lg:px-12 lg:py-24 xl:px-16">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.11em] text-white/45">
            <span>Flight test · 2026</span>
            <span>Vehicle 03</span>
          </div>

          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.13em] text-[#e12e2d]">
            Active roll-control demonstrator
          </p>
          <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.015em] sm:text-7xl">
            Sguaba
            <br />
            Tuinne
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/68">
            Sguaba Tuinne is HiPR&apos;s flight-test vehicle for active roll
            control. Canards mounted in the nose alter the vehicle&apos;s roll in
            flight, creating a practical route from wind-tunnel data to
            closed-loop control on a rocket.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
            The first campaign was cut short by a motor failure. Rebuilt and
            reflown, the vehicle subsequently demonstrated the experimental
            canard system in flight and supplied the data needed to scale the
            architecture toward supersonic vehicles.
          </p>

          <Specifications rows={sguabaSpecifications} />
        </div>

        <figure className="relative min-h-[620px] overflow-hidden bg-[#050505] lg:min-h-full">
          <Image
            src={withBasePath("/test-vehicles/sguaba-launch.png")}
            alt="Sguaba Tuinne climbing during a flight-test launch"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-top brightness-[0.78]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/66 via-transparent to-black/12" />
          <figcaption className="absolute bottom-7 left-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/58 sm:bottom-10 sm:left-10">
            Canard flight test · Bishopscourt
          </figcaption>
        </figure>
      </div>

      <div className="mx-auto grid max-w-[1500px] 2xl:max-w-none border-x border-white/10 lg:grid-cols-3">
        <figure className="bg-[#050505] p-4 sm:p-6 lg:border-r lg:border-white/10">
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src={withBasePath("/test-vehicles/sguaba-rail.png")}
              alt="Sguaba Tuinne's canard-equipped nose on the launch rail"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-center brightness-[0.82]"
            />
          </div>
          <figcaption className="px-1 pb-2 pt-5 text-xs uppercase tracking-[0.11em] text-white/42">
            Nose-mounted canards
          </figcaption>
        </figure>

        <figure className="bg-[#050505] p-4 sm:p-6 lg:border-r lg:border-white/10">
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src={withBasePath("/test-vehicles/sguaba-wind-tunnel.png")}
              alt="Sguaba Tuinne test article in the University of Limerick wind tunnel"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-center brightness-[0.78]"
            />
          </div>
          <figcaption className="px-1 pb-2 pt-5 text-xs uppercase tracking-[0.11em] text-white/42">
            Wind-tunnel validation
          </figcaption>
        </figure>

        <figure className="bg-[#050505] p-4 sm:p-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src={withBasePath("/test-vehicles/sguaba-avionics.png")}
              alt="Electronics being integrated into the Sguaba Tuinne test vehicle"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-center brightness-[0.8]"
            />
          </div>
          <figcaption className="px-1 pb-2 pt-5 text-xs uppercase tracking-[0.11em] text-white/42">
            Flight-system integration
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function FethSection() {
  return (
    <section id="feth-fiada" className="scroll-mt-[72px] bg-black text-white min-[760px]:scroll-mt-[88px]">
      <div className="mx-auto grid min-h-[760px] max-w-[1500px] 2xl:max-w-none border-x border-white/10 lg:grid-cols-[1.1fr_0.9fr]">
        <figure className="relative min-h-[560px] overflow-hidden bg-[#050505] lg:border-r lg:border-white/10">
          <Image
            src={withBasePath("/test-vehicles/feth-fiada-launch.png")}
            alt="Feth Fiada lifting from the pad during a CO2 recovery test flight"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-center brightness-[0.76]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-black/12" />
          <figcaption className="absolute bottom-7 left-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/58 sm:bottom-10 sm:left-10">
            Pneumatic recovery flight test
          </figcaption>
        </figure>

        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-12 lg:py-24 xl:px-16">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.11em] text-white/45">
            <span>Flight test · 2026</span>
            <span>Vehicle 02</span>
          </div>

          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.13em] text-[#e12e2d]">
            Pneumatic recovery demonstrator
          </p>
          <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.015em] sm:text-7xl">
            Feth
            <br />
            Fiada
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/68">
            Feth Fiada was built to move HiPR&apos;s CO₂ recovery concept out of
            the workshop and into repeated flight. The 3-inch vehicle used a
            servo-driven, flame-hardened steel piston to pierce a 16-gram CO₂
            cartridge and pressurise the recovery bay.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
            Three flights exposed the system to real launch loads and recovery
            conditions. Each test informed the larger twin-cartridge assembly
            later integrated into Badhbh.
          </p>

          <Specifications rows={fethSpecifications} />
        </div>
      </div>
    </section>
  );
}

function SionnaSection() {
  return (
    <section id="sionna" className="scroll-mt-[72px] bg-black text-white min-[760px]:scroll-mt-[88px]">
      <div className="mx-auto grid min-h-[720px] max-w-[1500px] 2xl:max-w-none border-x border-white/10 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:border-r lg:border-white/10 lg:px-12 lg:py-24 xl:px-16">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.11em] text-white/45">
            <span>International Rocketry Week</span>
            <span>Vehicle 01</span>
          </div>

          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.13em] text-[#e12e2d]">
            First high-powered vehicle
          </p>
          <h2 className="mt-5 text-6xl font-semibold uppercase leading-none tracking-[-0.015em] sm:text-8xl">
            Sionna
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/68">
            Sionna was HiPR&apos;s first high-powered rocket: a 3-inch vehicle
            built to establish the team&apos;s manufacturing, launch and flight
            operations before the first international competition campaign.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
            It flew stably on a J motor to approximately 1.5 kilometres during
            International Rocketry Week in Glasgow. The recovery failure
            provided the operational lessons carried into EuRoC 2024.
          </p>

          <Specifications rows={sionnaSpecifications} />
        </div>

        <div className="relative min-h-[620px] overflow-hidden bg-black lg:min-h-full">
          <RocketAnimation
            model="/rockets/sionna.glb"
            name="Sionna"
            height={1.34}
            paintScheme="sionna"
          />
        </div>
      </div>
    </section>
  );
}

export default function TestVehiclesPage() {
  return (
    <main className="bg-black pt-[72px] text-white min-[760px]:pt-[88px]">
      <header className="bg-black">
        <div className="mx-auto grid min-h-[360px] max-w-[1500px] 2xl:max-w-none gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Development programme
            </p>
            <h1 className="mt-5 text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.015em] sm:text-7xl">
              Flight test vehicles
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/62 lg:translate-y-[14px] lg:justify-self-end">
            Rockets built to isolate risk, validate new systems in flight and
            carry proven technology into larger competition vehicles.
          </p>
        </div>
      </header>

      <DullahanScroll />
      <SguabaSection />
      <FethSection />
      <SionnaSection />

      <section className="bg-black">
        <div className="mx-auto grid max-w-[1500px] 2xl:max-w-none gap-8 border-x border-white/10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold">Build the next test vehicle</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
              Flight testing turns new mechanisms, avionics and control ideas
              into systems the competition programme can trust.
            </p>
          </div>
          <Link href="/contact-us" className="group inline-flex items-center gap-3 font-semibold">
            Join the programme
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
