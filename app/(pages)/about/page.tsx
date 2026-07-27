import type { Metadata } from "next";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "About | ULAS HiPR",
  description:
    "The story of ULAS HiPR, the University of Limerick's student high-powered rocketry team.",
};

const chapters = [
  {
    marker: "01",
    label: "2022–2023 · Foundations",
    paragraphs: [
      "The University of Limerick Aeronautical Society was founded in 2022 by five Aeronautical Engineering students seeking to create more opportunities for UL students to explore aerospace engineering. Its early high-powered rocketry activity evolved into ULAS HiPR in late 2023.",
      "What began as a small student initiative rapidly became one of Ireland's leading university rocketry teams: ambitious, space-obsessed students working to push the boundaries of student rocketry in Ireland and establish a lasting foundation for the teams that follow.",
    ],
  },
  {
    marker: "02",
    label: "Mach-24 · First principles",
    paragraphs: [
      "HiPR joined the first wave of Irish student teams entering international high-powered rocketry, becoming the first Irish university group accepted into both Mach-24 and EuRoC 24. With no established national knowledge base or experienced alumni network, the team adopted a simple philosophy: fail fast, learn quickly and share knowledge openly.",
      "Morrigu embodied that approach. The rocket combined composite airframes, a spring-based student-researched-and-designed recovery system, a metal 3D-printed CanSat and an elastic-loaded side-door deployment mechanism. It reached approximately 650 metres of its intended 3-kilometre altitude before breaking up in flight. The failure delivered hard lessons in systems integration, manufacturing and project management—and accelerated the team beyond what incremental success could have achieved.",
    ],
  },
  {
    marker: "03",
    label: "2024 · Learning in flight",
    paragraphs: [
      "The team returned to Scotland with Sionna, a 3-inch vehicle that flew stably on a J motor to approximately 1.5 kilometres. Recovery failed, but the flight provided the operational data needed for the next campaign.",
      "At EuRoC 24 in Portugal, Airmedh—a 4-inch-diameter, 190-centimetre vehicle flying on a commercial L motor—marked a turning point. Exposure to teams developing student-built solid motors, liquid propulsion systems and sophisticated test infrastructure fundamentally changed HiPR's view of what was possible.",
    ],
  },
  {
    marker: "04",
    label: "2025 · Momentum",
    paragraphs: [
      "Membership grew from roughly 20 to more than 50 within a year. Returning to Mach, HiPR completed its first fully successful competition flight and placed second overall with an improved airframe and an advanced AI-driven payload system.",
      "By the following academic year the society had grown beyond 130 members, with more than 100 actively participating in HiPR projects. Over 60 members began designing and building Level 1 certification rockets, gaining practical experience in design, manufacturing, electronics and launch operations before moving into larger competition systems.",
    ],
  },
  {
    marker: "05",
    label: "2026 · One programme",
    paragraphs: [
      "EuRoC became the focus of a two-year development programme spanning propulsion, avionics, recovery, active control, software and payloads. Dedicated test vehicles were built for canard-based roll control and repeated CO₂ recovery testing, while Mach became a proving ground for a 5.5-inch vehicle, active airbrakes and new flight systems.",
      "Alongside the competition programme, electronics and software teams developed ground-station infrastructure and AI-driven robotic payloads. Members also pursued a two-stage vehicle and Ireland's first additively manufactured liquid rocket engine for Race2Space 2026.",
    ],
  },
  {
    marker: "06",
    label: "Beyond competition",
    paragraphs: [
      "For ULAS HiPR, the work is larger than any competition. It demonstrates how quickly an ambitious student group can develop real technical capability and helps place Ireland firmly on the European aerospace map.",
      "Through initiatives including EirSEDS—the Irish chapter of Students for the Exploration and Development of Space—HiPR is working with other universities to unite Irish rocketry organisations and build a sustainable, open knowledge network for future generations.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-black text-white">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <Image
          src={withBasePath("/about-team-ulster.png")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80 brightness-[0.72] saturate-[0.82]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.32)_48%,rgba(0,0,0,0.62)_100%)]" />
      </div>

      <header className="relative z-10 mx-auto grid min-h-[78svh] max-w-[1500px] 2xl:max-w-none content-center gap-14 px-6 pb-20 pt-36 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:pt-40 xl:px-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/38">
            University of Limerick
          </p>
          <h1 className="mt-5 text-6xl font-semibold uppercase leading-[0.9] tracking-[-0.02em] sm:text-8xl lg:text-[104px]">
            About
          </h1>
        </div>

        <p className="self-end max-w-2xl text-xl leading-[1.65] tracking-[0.01em] text-white/78 sm:text-2xl sm:leading-[1.6]">
          Founded in late 2023, University of Limerick Aeronautical Society High
          Powered Rocketry is a team of ambitious, space-obsessed students
          building the technical foundation for Ireland&apos;s next generation of
          aerospace teams.
        </p>
      </header>

      <article className="relative z-10 mx-auto max-w-[1500px] 2xl:max-w-none px-6 pb-28 sm:px-10 lg:px-12 xl:px-16">
        {chapters.map((chapter) => (
          <section
            key={chapter.marker}
            className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[minmax(220px,0.72fr)_1.28fr] lg:gap-20 lg:py-24"
          >
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-[#e12e2d]">
                {chapter.marker}
              </p>
              <h2 className="mt-4 max-w-xs text-sm font-semibold uppercase leading-6 tracking-[0.14em] text-white/48">
                {chapter.label}
              </h2>
            </div>

            <div className="max-w-3xl space-y-7">
              {chapter.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-[1.85] tracking-[0.012em] text-white/72 sm:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </article>
    </main>
  );
}
