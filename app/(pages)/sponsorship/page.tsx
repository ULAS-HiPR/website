import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Sponsorship() {
  return (
    <main className="bg-white text-black">
      <section className="relative min-h-[540px] overflow-hidden bg-[#020208] text-white">
        <Image
          src="/hero-earth.png"
          alt="Ireland seen from orbit at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,2,8,0.92)_0%,rgba(2,2,8,0.7)_48%,rgba(2,2,8,0.2)_80%,rgba(2,2,8,0.35)_100%)]" />

        <div className="relative mx-auto flex min-h-[540px] max-w-[1180px] flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            Support HiPR
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
            Put Irish student rocketry into flight.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/72">
            Partner with University of Limerick students as they design, build
            and launch their next competition vehicle.
          </p>
          <Link
            href="/contact-us"
            className="group mt-9 inline-flex w-fit items-center gap-3 font-semibold"
          >
            Start a conversation
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-black/45">
                Gold sponsor
              </p>
              <h2 className="mt-4 text-4xl font-semibold">Analog Devices</h2>
              <p className="mt-6 max-w-lg leading-8 text-black/62">
                HiPR&apos;s gold sponsor supports the team as students turn
                ambitious designs into tested flight hardware.
              </p>
              <a
                href="https://www.analog.com/en/index.html"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 font-semibold"
              >
                Visit Analog Devices
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <a
              href="https://www.analog.com/en/index.html"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[340px] items-center justify-center bg-black p-12"
            >
              <div className="relative h-32 w-full max-w-xl">
                <Image
                  src="/ADI-AWP.png"
                  alt="Analog Devices"
                  fill
                  sizes="600px"
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f1ee]">
        <div className="mx-auto max-w-[1180px] px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-8 border-b border-black/15 pb-10 lg:grid-cols-2 lg:items-end">
            <h2 className="text-4xl font-semibold">Partners</h2>
            <p className="max-w-xl leading-8 text-black/62">
              Academic and engineering partners give students access to the
              knowledge and tools needed for serious aerospace work.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-black/15 md:grid-cols-2">
            <a
              href="https://www.ul.ie/scieng"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[280px] items-center justify-center bg-white p-10"
            >
              <div className="relative h-28 w-full max-w-lg">
                <Image
                  src="/UL_school_of_engineering.jpeg"
                  alt="University of Limerick Science and Engineering"
                  fill
                  sizes="500px"
                  className="object-contain"
                />
              </div>
            </a>
            <a
              href="https://www.ansys.com/"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[280px] items-center justify-center bg-white p-10"
            >
              <div className="relative h-28 w-full max-w-lg">
                <Image
                  src="/ansys.png"
                  alt="Ansys"
                  fill
                  sizes="500px"
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-24">
          <div>
            <h2 className="text-4xl font-semibold">Become a sponsor</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/62">
              Tell us what your organisation can bring to the programme and
              where you want to make an impact.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-3 font-semibold"
          >
            Get in touch
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
