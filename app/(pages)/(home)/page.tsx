import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

function UnderlineLink({
  href,
  children,
  accent = "red",
}: {
  href: string;
  children: React.ReactNode;
  accent?: "red" | "blue";
}) {
  const accentClass = accent === "blue" ? "bg-[#5aa9b3]" : "bg-[#c95049]";

  return (
    <Link
      href={href}
      className="group inline-flex flex-col text-sm font-semibold text-current"
    >
      <span className="flex items-center gap-3">
        {children}
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
      <span className={`mt-3 h-[2px] w-full origin-left ${accentClass}`} />
    </Link>
  );
}

export default function Home() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-[650px] overflow-hidden bg-[#020208] lg:min-h-[calc(100svh-106px)]">
        <Image
          src="/hero-earth.png"
          alt="Ireland seen from orbit at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.58]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,2,8,0.88)_0%,rgba(2,2,8,0.68)_42%,rgba(2,2,8,0.2)_72%,rgba(2,2,8,0.38)_100%)]" />

        <div className="relative mx-auto flex min-h-[650px] max-w-[1180px] flex-col justify-center px-6 pb-24 pt-16 sm:px-10 lg:min-h-[calc(100svh-106px)] lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-[64px]">
              ULAS HiPR
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Ireland&apos;s first competitive high-powered rocketry team,
              designed and built by students at the University of Limerick.
            </p>
            <div className="mt-8 uppercase tracking-[0.16em]">
              <UnderlineLink href="#about">Learn more</UnderlineLink>
            </div>
          </div>

          <Link
            href="#about"
            aria-label="Scroll to about HiPR"
            className="absolute bottom-8 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center bg-black/60 transition-colors hover:bg-[#c95049]"
          >
            <ArrowDown aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="about" className="bg-white text-black">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-24">
          <div>
            <h2 className="max-w-lg text-2xl font-semibold uppercase leading-snug">
              Competitive rockets developed by students
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-black/75">
              HiPR gives University of Limerick students the opportunity to
              turn classroom engineering into flight hardware and represent
              Ireland at international rocketry competitions.
            </p>
            <ul className="mt-7 space-y-2 text-sm leading-relaxed text-black/80 sm:text-base">
              <li>• Student-led design, manufacture and launch operations</li>
              <li>• Structures, avionics, recovery and deployable payloads</li>
              <li>• Competition flights in Scotland and Portugal</li>
              <li>• Industry-supported engineering at the University of Limerick</li>
            </ul>
            <div className="mt-9">
              <UnderlineLink href="/contact-us">Join us</UnderlineLink>
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/mach25/IMG_9606_Original.jpg"
              alt="HiPR students preparing Macha in the workshop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 text-black lg:pb-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <article className="grid overflow-hidden bg-black text-white lg:min-h-[500px] lg:grid-cols-2">
            <div className="flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/75">
                Competition rocket
              </p>
              <h2 className="mt-4 text-4xl font-medium uppercase">Macha</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-white/80">
                Built for Mach-25, Macha reached 2.273 km, placed second in its
                category and deployed a CanSat that mapped landing zones during
                descent.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/75">
                <li>• 2.273 km apogee</li>
                <li>• Second place in category</li>
                <li>• Successful deployable payload</li>
              </ul>
              <div className="mt-9">
                <UnderlineLink href="/projects?id=mach25" accent="blue">
                  Learn about Macha
                </UnderlineLink>
              </div>
            </div>
            <div className="relative min-h-[430px] lg:min-h-full">
              <Image
                src="/mach25/IMG_0265_Original.jpg"
                alt="HiPR members standing with Macha"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[center_40%]"
              />
            </div>
          </article>

          <article className="grid border-x border-b border-black/15 bg-white lg:min-h-[560px] lg:grid-cols-2">
            <div className="flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-black/60">
                EuRoC 2024
              </p>
              <h2 className="mt-4 text-4xl font-semibold uppercase">Airmedh</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-black/70">
                Designed for the 3 km category at EuRoC in Portugal, Airmedh
                reached 2.275 km and marked HiPR&apos;s first appearance at
                Europe&apos;s largest student rocketry competition.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-black/65">
                <li>• 2.275 km apogee</li>
                <li>• Blue Tube airframe</li>
                <li>• Launched in Ponte de Sor, Portugal</li>
              </ul>
              <div className="mt-9">
                <UnderlineLink href="/projects?id=euroc24">Learn about Airmedh</UnderlineLink>
              </div>
            </div>
            <div className="relative min-h-[520px] lg:min-h-full">
              <Image
                src="/euroc_24/2745EA1C-D1BB-4A37-96B7-EC7DC82FA9DB.JPG"
                alt="Airmedh being prepared on the EuRoC launch rail"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#080808]">
        <div className="mx-auto grid max-w-[1180px] border-t border-white/15 px-6 py-16 sm:px-10 lg:grid-cols-[1.4fr_0.6fr] lg:px-12 lg:py-20">
          <div className="lg:pr-16">
            <h2 className="text-3xl font-bold">Latest updates</h2>
            <div className="mt-8 divide-y divide-white/15 border-y border-white/15">
              {[
                ["02 July 2025", "Mach 25"],
                ["13 October 2024", "EuRoC 2024"],
                ["24 January 2024", "Looking ahead"],
              ].map(([date, title]) => (
                <Link
                  key={title}
                  href="/blog"
                  className="group grid gap-2 py-5 sm:grid-cols-[150px_1fr_auto] sm:items-center"
                >
                  <span className="text-xs text-white/45">{date}</span>
                  <span className="font-semibold">{title}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="hidden h-4 w-4 transition-transform group-hover:translate-x-1 sm:block"
                  />
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <UnderlineLink href="/blog">See updates</UnderlineLink>
            </div>
          </div>

          <div className="mt-14 border-t border-white/15 pt-10 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <h2 className="text-3xl font-bold">Join our team</h2>
            <p className="mt-5 leading-relaxed text-white/65">
              Build flight hardware, support launches and learn alongside the
              next generation of Irish aerospace engineers.
            </p>
            <div className="mt-8">
              <UnderlineLink href="/contact-us">Get involved</UnderlineLink>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black">
        <div className="mx-auto grid max-w-[1180px] gap-10 border-t border-white/15 px-6 py-12 text-sm sm:px-10 lg:grid-cols-3 lg:px-12">
          <div>
            <Image src="/logo.png" alt="ULAS HiPR" width={180} height={58} className="h-auto w-40" />
            <p className="mt-5 max-w-xs leading-relaxed text-white/50">
              University of Limerick Aerospace Society High-Powered Rocketry.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Team</h3>
            <div className="mt-4 flex flex-col gap-2 text-white/55">
              <Link className="hover:text-white" href="/projects">Projects</Link>
              <Link className="hover:text-white" href="/blog">Blog</Link>
              <Link className="hover:text-white" href="/contact-us">Contact us</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Support HiPR</h3>
            <p className="mt-4 max-w-sm leading-relaxed text-white/55">
              Help UL students design, manufacture and launch their next vehicle.
            </p>
            <Link className="mt-4 inline-block text-white hover:text-[#c95049]" href="/sponsorship">
              Sponsorship →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
