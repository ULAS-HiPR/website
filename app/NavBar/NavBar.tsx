"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavVisible } from "./use-at-top";

const groups = [
  {
    label: "Rockets",
    links: [
      { label: "Badhbh", href: "/projects#mach26" },
      { label: "Macha", href: "/projects#mach25" },
      { label: "Airmedh", href: "/projects#euroc24" },
      { label: "Morrigu", href: "/projects#mach24" },
      { label: "Sionna", href: "/projects#sionna" },
    ],
  },
  {
    label: "Payloads",
    links: [
      { label: "Toirtis", href: "/payloads#toirtis" },
      { label: "Mu", href: "/payloads#mu" },
    ],
  },
  {
    label: "Engines",
    links: [{ label: "Luin", href: "/engines#luin" }],
  },
  {
    label: "Controls",
    links: [
      { label: "Ogma", href: "/controls#ogma" },
      { label: "Airbrakes", href: "/controls#airbrakes" },
      { label: "CO₂ deployment", href: "/controls#co2-deployment" },
    ],
  },
];

const directLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Sponsors", href: "/sponsorship" },
  { label: "Contact", href: "/contact-us" },
];

export default function NavBar() {
  const visible = useNavVisible();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const openLinkCount = groups.find((group) => group.label === openGroup)?.links.length ?? 0;
  const panelHeight = openGroup ? 124 + openLinkCount * 38 : 88;

  return (
    <header
      onMouseLeave={() => setOpenGroup(null)}
      style={{ height: panelHeight }}
      className={`fixed inset-x-0 top-0 z-50 overflow-hidden text-white transition-[height,opacity,transform] duration-500 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black"
      />

      <div className="relative z-10 mx-auto flex h-[88px] max-w-[1600px] items-center gap-5 px-4 lg:gap-8 lg:px-6 xl:gap-10 xl:px-10">
        <Link href="/" aria-label="ULAS HiPR home" className="shrink-0">
          <Image
            src="/logo.png"
            alt="ULAS HiPR"
            width={190}
            height={61}
            priority
            className="h-7 w-auto object-contain lg:h-8 xl:h-9"
          />
        </Link>

        <nav aria-label="Main navigation" className="flex h-full flex-1 items-center justify-between">
          <div className="flex h-full items-center gap-5 lg:gap-8 xl:gap-12">
            {groups.map((group) => (
              <div
                key={group.label}
                className="relative flex h-full items-center"
                onMouseEnter={() => setOpenGroup(group.label)}
                onFocus={() => setOpenGroup(group.label)}
              >
                <button
                  type="button"
                  aria-label={`Open ${group.label} menu`}
                  aria-expanded={openGroup === group.label}
                  onClick={() => setOpenGroup(group.label)}
                  className="flex h-full items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/82 drop-shadow-md transition-colors hover:text-white lg:gap-1.5 lg:text-xs xl:text-[13px]"
                >
                  {group.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openGroup === group.label ? "rotate-180" : ""}`} />
                </button>

                <div
                  className={`absolute left-0 top-[72px] w-56 pt-5 transition-[opacity,transform] duration-500 ${
                    openGroup === group.label
                      ? "pointer-events-auto translate-y-0 opacity-100 delay-75"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-[15px] font-medium uppercase tracking-[0.08em] text-white/68 drop-shadow-md transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5 lg:gap-7 xl:gap-10">
            {directLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setOpenGroup(null)}
                className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/82 drop-shadow-md transition-colors hover:text-white lg:text-xs xl:text-[13px]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
