import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const muSpecifications = [
  ["Detector", "50 × 50 × 20 mm BC-408"],
  ["Photosensor", "6 × 6 mm SiPM"],
  ["Bias", "≈30 V"],
  ["Observed rate", "18–31 events / min"],
];

function MuSection() {
  return (
    <section id="mu" className="scroll-mt-[-7px] bg-black text-white">
      <div className="mx-auto grid min-h-[780px] max-w-[1500px] border-x border-white/10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:border-r lg:border-white/10 lg:px-12 lg:py-24 xl:px-16">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.11em] text-white/45">
            <span>Mach-26 · 2026</span>
            <span>Payload 02</span>
          </div>

          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.13em] text-[#f15a4f]">
            Standalone cosmic-ray detector
          </p>
          <h2 className="mt-5 text-6xl font-semibold uppercase leading-none tracking-[-0.03em] sm:text-8xl">
            Mu
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/68">
            Mu is a self-contained particle detector built to investigate how
            cosmic-ray count rate changes as a rocket climbs through the
            atmosphere. It carries its own power input, flash storage,
            pressure sensing and flight logger.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
            A plastic scintillator converts particle energy into light. A SiPM
            and custom analogue front end capture the resulting pulses, while
            an STM32 records timestamp, baseline, amplitude and waveform data
            alongside the flight profile.
          </p>

          <dl className="mt-10 border-t border-white/18">
            {muSpecifications.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[1fr_auto] gap-5 border-b border-white/14 py-4 text-sm">
                <dt className="text-white/46">{label}</dt>
                <dd className="text-right font-medium text-white/88">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[620px] overflow-hidden bg-[#050505] lg:min-h-full">
          <Image
            src="/payloads/mu/wrapped-board.jpeg"
            alt="Mu detector board assembled around its wrapped scintillator"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-center brightness-[0.72]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/18" />
          <p className="absolute bottom-7 left-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55 sm:bottom-10 sm:left-10">
            Flight assembly · Mu v1.2
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1500px] border-x border-white/10 md:grid-cols-2">
        <figure className="bg-[#050505] p-4 md:border-r md:border-white/10 sm:p-6">
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-black">
            <Image src="/payloads/mu/enclosure-fit-check.png" alt="Mu detector PCB aligned with its 3D-printed enclosure" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <figcaption className="px-1 pb-2 pt-5 text-xs uppercase tracking-[0.11em] text-white/42">Detector enclosure fit check</figcaption>
        </figure>
        <figure className="bg-[#050505] p-4 sm:p-6">
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-black">
            <Image src="/payloads/mu/preflight-flash-dashboard.png" alt="Mu console displaying stored particle pulses and flight telemetry" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-left" />
          </div>
          <figcaption className="px-1 pb-2 pt-5 text-xs uppercase tracking-[0.11em] text-white/42">Pre-flight logger and flash readout</figcaption>
        </figure>
      </div>
    </section>
  );
}

function ToirtisSection() {
  const specifications = [
    ["Flight computer", "Raspberry Pi 5"],
    ["Actuation", "8 servos"],
    ["Mobility", "4 folding legs"],
    ["Flight state", "Fully stowed"],
  ];

  return (
    <section id="toirtis" className="scroll-mt-[-7px] bg-black text-white">
      <div className="mx-auto grid min-h-[760px] max-w-[1500px] border-x border-white/10 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:border-r lg:border-white/10 lg:px-12 lg:py-24 xl:px-16">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.11em] text-white/45">
            <span>Mach-26 · 2026</span>
            <span>Payload 01</span>
          </div>

          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.13em] text-[#f15a4f]">
            Deployable robotic payload
          </p>
          <h2 className="mt-5 text-6xl font-semibold uppercase leading-none tracking-[-0.03em] sm:text-8xl">
            Toirtis
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/68">
            Toirtis is a four-legged robotic payload built around a Raspberry
            Pi 5 and eight servos. Its legs fold tightly against the body for
            flight, then deploy to create a mobile platform after landing.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
            The mechanism packages the complete walking system into a compact
            stowed volume without sacrificing the range of motion needed on
            the ground.
          </p>

          <dl className="mt-10 border-t border-white/18">
            {specifications.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[1fr_auto] gap-5 border-b border-white/14 py-4 text-sm">
                <dt className="text-white/46">{label}</dt>
                <dd className="text-right font-medium text-white/88">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[560px] overflow-hidden bg-[#030303] lg:min-h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Toirtis folding and deploying its four legs"
            className="absolute inset-0 h-full w-full object-contain"
          >
            <source src="/payloads/toirtis/toirtis-deployment.m4v?v=1" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.05]" />
          <p className="pointer-events-none absolute bottom-7 left-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55 sm:bottom-10 sm:left-10">
            Stow · deploy · walk
          </p>
        </div>
      </div>
    </section>
  );
}

export default function PayloadsPage() {
  return (
    <main className="bg-black pt-[88px] text-white">
      <header className="bg-black">
        <div className="mx-auto grid min-h-[360px] max-w-[1500px] gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">Mission systems</p>
            <h1 className="mt-5 text-5xl font-semibold uppercase tracking-[-0.03em] sm:text-7xl">Payloads</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/62 lg:translate-y-[14px] lg:justify-self-end">
            Scientific instruments and deployable robotic systems designed to fly, survive and return useful data.
          </p>
        </div>
      </header>

      <ToirtisSection />
      <MuSection />

      <section className="bg-black">
        <div className="mx-auto grid max-w-[1500px] gap-8 border-x border-white/10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold">Build the next payload</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/60">HiPR payloads combine electronics, embedded software, sensing, mechanical design and flight operations.</p>
          </div>
          <Link href="/contact-us" className="group inline-flex items-center gap-3 font-semibold">Join the programme <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>
    </main>
  );
}
