"use client";

import {
  DrawerClose,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import Link from "next/link";

type MobileLink = [label: string, href: string];
type MobileSection = { label: string; href: string; links: MobileLink[] };
type MobileGroup = {
  label: string;
  links?: MobileLink[];
  sections?: MobileSection[];
};

const groups: MobileGroup[] = [
  {
    label: "Rockets",
    sections: [
      {
        label: "Competition",
        href: "/projects",
        links: [
          ["Badhbh", "/projects#mach26"],
          ["Macha", "/projects#mach25"],
          ["Airmedh", "/projects#euroc24"],
          ["Morrigu", "/projects#mach24"],
        ],
      },
      {
        label: "Flight test",
        href: "/test-vehicles",
        links: [
          ["Sguaba Tuinne", "/test-vehicles#sguaba-tuinne"],
          ["Feth Fiada", "/test-vehicles#feth-fiada"],
          ["Sionna", "/test-vehicles#sionna"],
        ],
      },
    ],
  },
  { label: "Engines", links: [["Luin", "/engines#luin"]] },
  {
    label: "Controls",
    links: [
      ["Ogma", "/controls#ogma"],
      ["Airbrakes", "/controls#airbrakes"],
      ["CO₂ deployment", "/controls#co2-deployment"],
    ],
  },
  {
    label: "Payloads",
    links: [
      ["Toirtis", "/payloads#toirtis"],
      ["Mu", "/payloads#mu"],
    ],
  },
];

const directLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Sponsors", "/sponsorship"],
  ["Contact", "/contact-us"],
];

export default function NavBarMobileDialog() {
  return (
    <DrawerContent className="inset-0 mt-0 h-svh max-h-svh overflow-hidden rounded-none border-0 bg-black text-white outline-none [&>div:first-child]:hidden">
      <header className="flex h-[72px] shrink-0 items-center justify-between border-b border-white/15 px-5">
        <DrawerTitle className="text-sm font-semibold uppercase tracking-[0.14em]">
          Navigation
        </DrawerTitle>
        <DrawerClose
          aria-label="Close navigation"
          className="flex h-11 w-11 items-center justify-center border border-white/25"
        >
          <X aria-hidden="true" className="h-6 w-6" />
        </DrawerClose>
      </header>

      <nav
        aria-label="Mobile navigation"
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-10"
      >
        <div className="grid grid-cols-2 border-b border-white/15 py-4">
          {directLinks.map(([label, href]) => (
            <DrawerClose asChild key={href}>
              <Link
                href={href}
                className="flex min-h-12 items-center justify-between border-b border-white/10 py-3 pr-4 text-base font-semibold uppercase tracking-[0.04em] odd:border-r odd:pr-5 even:pl-5"
              >
                {label}
              </Link>
            </DrawerClose>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-7 gap-y-9 py-8">
          {groups.map((group) => (
            <div key={group.label} className={group.sections ? "col-span-2" : ""}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/38">
                {group.label}
              </p>
              {group.sections ? (
                <div className="mt-4 grid grid-cols-2 gap-7">
                  {group.sections.map((section) => (
                    <div key={section.href}>
                      <DrawerClose asChild>
                        <Link
                          href={section.href}
                          className="flex min-h-11 items-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50"
                        >
                          {section.label}
                        </Link>
                      </DrawerClose>
                      <div className="mt-3 space-y-2.5 border-l border-white/14 pl-3">
                        {section.links.map(([label, href]) => (
                          <DrawerClose asChild key={href}>
                            <Link
                              href={href}
                              className="flex min-h-11 items-center text-base font-semibold uppercase tracking-[0.02em]"
                            >
                              {label}
                            </Link>
                          </DrawerClose>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-3 space-y-2.5">
                  {group.links?.map(([label, href]) => (
                    <DrawerClose asChild key={href}>
                      <Link
                        href={href}
                        className="flex min-h-11 items-center text-lg font-semibold uppercase tracking-[0.02em]"
                      >
                        {label}
                      </Link>
                    </DrawerClose>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </DrawerContent>
  );
}
