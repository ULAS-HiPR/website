import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { withBasePath } from "@/lib/base-path";

function PartnerCard({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group flex min-h-[250px] items-center justify-center bg-[#070707] p-10 transition-colors hover:bg-[#0c0c0c]"
    >
      {children}
    </a>
  );
}

export default function Sponsorship() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-[540px] overflow-hidden bg-black text-white">
        <Image
          src={withBasePath("/sponsorship-team.png")}
          alt="ULAS HiPR team gathered at the University of Limerick"
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover object-[center_56%] sm:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35" />

        <div className="relative mx-auto flex min-h-[540px] max-w-[1500px] 2xl:max-w-none flex-col justify-center px-6 pb-20 pt-32 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            Support HiPR
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight sm:text-6xl">
            Partner with Ireland&apos;s largest student rocketry team.
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

      <section className="bg-[#050505]">
        <div className="mx-auto max-w-[1500px] 2xl:max-w-none px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40">
                Gold sponsor
              </p>
              <h2 className="mt-4 text-4xl font-semibold">Analog Devices</h2>
              <p className="mt-6 max-w-lg leading-8 text-white/62">
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
              className="flex min-h-[340px] items-center justify-center border border-white/15 bg-black p-12"
            >
              <div className="relative h-32 w-full max-w-xl">
                <Image
                  src={withBasePath("/ADI-AWP.png")}
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

      <section className="bg-black">
        <div className="mx-auto max-w-[1500px] 2xl:max-w-none px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-2 lg:items-end">
            <h2 className="text-4xl font-semibold">Partners</h2>
            <p className="max-w-xl leading-8 text-white/62 lg:translate-y-4">
              Academic, manufacturing and engineering partners give students
              the expertise, components and tools needed for serious aerospace
              work.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            <PartnerCard
              href="https://www.ul.ie/scieng"
              label="Visit the University of Limerick Faculty of Science and Engineering"
            >
              <Image
                src={withBasePath("/partners/university-of-limerick.png")}
                alt="University of Limerick"
                width={640}
                height={293}
                loading="eager"
                className="h-auto w-full max-w-[420px] object-contain"
              />
            </PartnerCard>

            <PartnerCard
              href="https://software-engineering.ie/"
              label="Visit Immersive Software Engineering"
            >
              <Image
                src={withBasePath("/partners/ise.png")}
                alt="Immersive Software Engineering"
                width={440}
                height={300}
                loading="eager"
                className="h-auto w-full max-w-[270px] object-contain"
              />
            </PartnerCard>

            <PartnerCard href="https://purcell.ie/" label="Visit Purcell">
              <Image
                src={withBasePath("/partners/purcell.png")}
                alt="Purcell"
                width={555}
                height={100}
                loading="eager"
                className="h-auto w-full max-w-[340px] object-contain"
              />
            </PartnerCard>

            <PartnerCard href="https://easyeda.com/" label="Visit EasyEDA">
              <Image
                src={withBasePath("/partners/easyeda.svg")}
                alt="EasyEDA"
                width={300}
                height={64}
                loading="eager"
                className="h-auto w-full max-w-[260px] object-contain"
              />
            </PartnerCard>

            <PartnerCard href="https://www.onsemi.com/" label="Visit onsemi">
              <Image
                src={withBasePath("/partners/onsemi.svg")}
                alt="onsemi"
                width={346}
                height={60}
                loading="eager"
                className="h-auto w-full max-w-[300px] object-contain brightness-0 invert"
              />
            </PartnerCard>

            <PartnerCard
              href="https://luxiumsolutions.com/"
              label="Visit Luxium Solutions"
            >
              <Image
                src={withBasePath("/partners/luxium.svg")}
                alt="Luxium Solutions"
                width={300}
                height={78}
                loading="eager"
                className="h-auto w-full max-w-[280px] object-contain"
              />
            </PartnerCard>

            <PartnerCard
              href="https://www.ansys.com/"
              label="Visit Ansys"
            >
              <div className="relative h-28 w-full max-w-lg">
                <Image
                  src={withBasePath("/ansys.png")}
                  alt="Ansys"
                  fill
                  sizes="500px"
                  loading="eager"
                  className="object-contain brightness-0 invert"
                />
              </div>
            </PartnerCard>
            <PartnerCard
              href="https://imr.ie/"
              label="Visit Irish Manufacturing Research"
            >
              <Image
                src={withBasePath("/partners/imr.svg")}
                alt="Irish Manufacturing Research"
                width={335}
                height={85}
                loading="eager"
                className="h-auto w-full max-w-[285px] object-contain"
              />
            </PartnerCard>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-[1500px] 2xl:max-w-none gap-12 border-t border-white/15 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-24">
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
