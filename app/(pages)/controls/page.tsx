import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CO2Deployment from "@/app/3d/co2-deployment";
import OgmaVideo from "./ogma-video";

const ogmaSpecifications = [
  ["Architecture", "5 × four-layer PCBs"],
  ["Network", "CAN bus"],
  ["Telemetry", "LoRa + GNSS"],
  ["Flight target", "≈9 km apogee"],
];

const airbrakeSpecifications = [
  ["Vehicle", "Badhbh"],
  ["Competition", "Mach-26"],
  ["Actuation", "Servo-driven mechanism"],
  ["Control", "Real-time PID"],
  ["Aerodynamics", "CFD-derived drag model"],
];

const recoverySpecifications = [
  ["Vehicle", "Badhbh"],
  ["Medium", "Compressed CO₂"],
  ["Cartridges", "Twin"],
  ["Integration", "Custom recovery bulkhead"],
];

function Specifications({ rows }: { rows: string[][] }) {
  return (
    <dl className="mt-10 border-t border-white/18">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="grid grid-cols-[1fr_auto] gap-5 border-b border-white/14 py-4 text-sm"
        >
          <dt className="text-white/46">{label}</dt>
          <dd className="text-right font-medium text-white/88">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function OgmaSection() {
  return (
    <section id="ogma" className="scroll-mt-[-7px] bg-black text-white">
      <div className="mx-auto grid min-h-[790px] max-w-[1500px] border-x border-white/10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:border-r lg:border-white/10 lg:px-12 lg:py-24 xl:px-16">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.11em] text-white/45">
            <span>EuRoC-26 · 2026</span>
            <span>Control 01</span>
          </div>

          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.13em] text-[#f15a4f]">
            Modular flight computer
          </p>
          <h2 className="mt-5 text-6xl font-semibold uppercase leading-none tracking-[-0.03em] sm:text-8xl">
            Ogma
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/68">
            Ogma is HiPR&apos;s modular flight computer: five purpose-built
            boards connected over CAN and packaged as a single avionics stack
            for a student rocket targeting roughly 9 km altitude.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
            Croí handles flight state, sensing and logging. Teachtaire provides
            LoRa telemetry and GNSS, Foinse manages power, Lámh controls the
            airbrakes and Pléasc commands recovery deployment.
          </p>

          <Specifications rows={ogmaSpecifications} />
        </div>

        <div className="relative min-h-[600px] overflow-hidden bg-black lg:min-h-full">
          <OgmaVideo />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-black/12" />
          <p className="pointer-events-none absolute bottom-7 left-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/54 sm:bottom-10 sm:left-10">
            Five boards · one flight network
          </p>
        </div>
      </div>

      <figure className="mx-auto max-w-[1500px] border-x border-white/10 bg-[#050505] p-4 sm:p-6">
        <div className="relative aspect-[4/3] overflow-hidden bg-black sm:aspect-[16/8]">
          <Image
            src="/controls/ogma/ogma-avbay.jpeg"
            alt="Ogma flight-computer boards integrated into the avionics bay"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.78]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        </div>
        <figcaption className="px-1 pb-2 pt-5 text-xs uppercase tracking-[0.11em] text-white/42">
          Integrated avionics bay
        </figcaption>
      </figure>
    </section>
  );
}

function AirbrakesSection() {
  return (
    <section id="airbrakes" className="scroll-mt-[-7px] bg-black text-white">
      <div className="mx-auto grid min-h-[850px] max-w-[1500px] border-x border-white/10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:border-r lg:border-white/10 lg:px-12 lg:py-24 xl:px-16">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.11em] text-white/45">
            <span>Mach-26 · 2026</span>
            <span>Control 02</span>
          </div>

          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.13em] text-[#f15a4f]">
            Active altitude control
          </p>
          <h2 className="mt-5 text-5xl font-semibold uppercase leading-none tracking-[-0.03em] sm:text-7xl">
            Airbrakes
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/68">
            Badhbh&apos;s active airbrake system adds controllable drag during
            ascent. A compact servo-driven mechanism deploys low-profile blades
            from the composite airframe, then retracts them into the vehicle.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
            CFD was used to generate the drag polar and verify that an
            accidental deployment would not destabilise the rocket. The reduced
            model gives Ogma&apos;s PID controller efficient force estimates in
            real time.
          </p>

          <Specifications rows={airbrakeSpecifications} />
        </div>

        <div className="grid min-h-[720px] grid-rows-2 overflow-hidden bg-[#030303] lg:min-h-full">
          <figure className="relative overflow-hidden border-b border-white/10 bg-[#080808]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="CAD animation of the airbrake mechanism deploying"
              className="absolute inset-0 h-full w-full object-contain p-6 opacity-90 sm:p-10"
            >
              <source src="/controls/airbrakes/airbrake-mechanism-colour.mp4" type="video/mp4" />
            </video>
            <figcaption className="pointer-events-none absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/48 sm:bottom-7 sm:left-7">
              Mechanism development
            </figcaption>
          </figure>

          <figure className="relative overflow-hidden bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Airbrake deploying from Badhbh's carbon-fibre airframe"
              className="absolute inset-0 h-full w-full object-cover object-center"
            >
              <source src="/controls/airbrakes/airbrake-airframe.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-black/10" />
            <figcaption className="pointer-events-none absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/58 sm:bottom-7 sm:left-7">
              Integrated deployment test
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function RecoverySection() {
  return (
    <section id="co2-deployment" className="scroll-mt-[-7px] bg-black text-white">
      <div className="mx-auto grid min-h-[760px] max-w-[1500px] border-x border-white/10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:border-r lg:border-white/10 lg:px-12 lg:py-24 xl:px-16">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.11em] text-white/45">
            <span>Mach-26 · 2026</span>
            <span>Control 03</span>
          </div>

          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.13em] text-[#f15a4f]">
            Pneumatic recovery
          </p>
          <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.95] tracking-[-0.03em] sm:text-7xl">
            CO2
            <br />
            deployment
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/68">
            HiPR&apos;s custom recovery system packages twin CO₂ cartridges and
            their controlled release hardware into a compact structural
            bulkhead. On command, the gas pressurises the recovery bay and
            deploys the parachute.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
            The assembly brings the cartridge holders, harness attachment,
            actuation and airframe interface into one serviceable flight module
            designed specifically for Badhbh.
          </p>

          <Specifications rows={recoverySpecifications} />
        </div>

        <div className="relative min-h-[620px] overflow-hidden bg-[#040404] lg:min-h-full">
          <CO2Deployment className="h-full min-h-[620px]" />
          <p className="pointer-events-none absolute bottom-7 left-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60 sm:bottom-10 sm:left-10">
            Twin-cartridge deployment assembly
          </p>
        </div>
      </div>

      <figure className="mx-auto max-w-[1500px] border-x border-white/10 bg-[#050505] p-4 sm:p-6">
        <div className="relative aspect-[4/3] overflow-hidden bg-black sm:aspect-[16/8]">
          <Image
            src="/controls/co2/co2-deployment.jpg"
            alt="Close view of HiPR's machined twin-cartridge CO2 recovery bulkhead"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.82]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-black/8" />
        </div>
        <figcaption className="px-1 pb-2 pt-5 text-xs uppercase tracking-[0.11em] text-white/42">
          Machined recovery bulkhead · twin CO₂ cartridges
        </figcaption>
      </figure>
    </section>
  );
}

export default function ControlsPage() {
  return (
    <main className="bg-black pt-[88px] text-white">
      <header className="bg-black">
        <div className="mx-auto grid min-h-[360px] max-w-[1500px] gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Guidance and recovery
            </p>
            <h1 className="mt-5 text-5xl font-semibold uppercase tracking-[-0.03em] sm:text-7xl">
              Controls
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/62 lg:translate-y-[14px] lg:justify-self-end">
            Flight computers, active aerodynamic control and recovery hardware
            developed to command the vehicle from launch through landing.
          </p>
        </div>
      </header>

      <OgmaSection />
      <AirbrakesSection />
      <RecoverySection />

      <section className="bg-black">
        <div className="mx-auto grid max-w-[1500px] gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold">Build the next control system</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
              HiPR controls combine embedded systems, electronics, simulation,
              aerodynamics, mechanisms and flight testing.
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
