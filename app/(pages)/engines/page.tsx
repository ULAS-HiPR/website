"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import LuinEngine from "@/app/3d/luin-engine";

const specifications = [
  ["Thrust", "2 kN nominal"],
  ["Specific impulse", "212 s peak average"],
  ["Chamber pressure", "20 bar nominal"],
  ["Combustion efficiency", "97%"],
];

function LuinSection() {
  return (
    <section id="luin" className="relative scroll-mt-[72px] overflow-hidden bg-black text-white min-[760px]:scroll-mt-[88px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-[radial-gradient(ellipse_at_72%_100%,rgba(103,108,116,0.34)_0%,rgba(54,57,62,0.22)_28%,rgba(17,18,20,0.08)_56%,transparent_74%),linear-gradient(180deg,transparent_0%,rgba(29,31,34,0.86)_100%)]"
      />
      <div className="relative mx-auto grid min-h-[820px] max-w-[1500px] 2xl:max-w-none grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 flex min-w-0 flex-col justify-center px-6 py-16 sm:px-10 lg:px-12 lg:py-24 xl:px-16">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.11em] text-white/50">
            <span>Race2Space · 2026</span>
            <span>Engine 01</span>
          </div>

          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.13em] text-[#e12e2d]">
            Ireland&apos;s first additively manufactured liquid rocket engine
          </p>
          <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.012em] sm:text-7xl">
            Luin of
            <br />
            Celtchar
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/68">
            A 2 kN liquid bi-propellant engine designed and built by HiPR&apos;s
            student propulsion team. Luin pairs an additively manufactured
            AlSiMg chamber with machined aluminium hardware.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/68">
            Across five hotfires at Race2Space 2026, it ran repeatedly at
            nominal conditions and survived 150% of nominal chamber pressure,
            earning Best Newcomer.
          </p>

          <dl className="mt-10 border-t border-white/20">
            {specifications.map(([label, value]) => (
              <div key={label} className="grid grid-cols-1 gap-1 border-b border-white/16 py-4 text-sm sm:grid-cols-[1fr_auto] sm:gap-5">
                <dt className="text-white/48">{label}</dt>
                <dd className="font-medium text-white/88">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-xs uppercase tracking-[0.1em] text-white/38">
            5 successful hotfires · 2.9 kN / 30 bar maximum
          </p>
        </div>

        <LuinEngine className="h-[600px] min-w-0 border-t border-white/10 lg:h-auto lg:min-h-full lg:border-l lg:border-t-0" />
      </div>
    </section>
  );
}

export default function EnginesPage() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;

      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
    };

    const initialScroll = window.setTimeout(scrollToHash, 300);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(initialScroll);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <main className="bg-black pt-[72px] text-white min-[760px]:pt-[88px]">
      <header className="bg-black">
        <div className="mx-auto grid min-h-[360px] max-w-[1500px] 2xl:max-w-none gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">Propulsion programme</p>
            <h1 className="mt-5 text-5xl font-semibold uppercase tracking-[-0.015em] sm:text-7xl">Engines</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/62 lg:translate-y-[14px] lg:justify-self-end">
            Student-researched and designed propulsion systems built to establish advanced liquid-engine capability in Ireland.
          </p>
        </div>
      </header>

      <LuinSection />

      <section className="bg-black">
        <div className="mx-auto grid max-w-[1500px] 2xl:max-w-none gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20">
          <div>
            <h2 className="text-3xl font-semibold">Build the next engine</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
              HiPR propulsion combines thermofluids, manufacturing, controls, instrumentation and test operations.
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
