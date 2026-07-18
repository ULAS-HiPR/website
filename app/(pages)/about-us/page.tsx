import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="min-h-svh bg-black px-6 pb-24 pt-36 text-white sm:px-10 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">ULAS HiPR</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-bold uppercase leading-[0.92] tracking-[-0.03em] sm:text-7xl lg:text-[88px]">
          Student engineering. Flight-proven hardware.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
          University of Limerick students design, manufacture and test rockets,
          payloads, avionics and propulsion systems for international competition.
        </p>
        <Link href="/contact-us" className="group mt-10 inline-flex items-center gap-4 border border-white/45 px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] hover:bg-white hover:text-black">
          Work with HiPR
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  );
}
