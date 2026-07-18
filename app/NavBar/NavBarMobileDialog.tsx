"use client";

import { DrawerClose, DrawerContent } from "@/components/ui/drawer";
import Link from "next/link";

const groups = [
  {
    label: "Rockets",
    links: [
      ["Badhbh", "/projects#mach26"],
      ["Macha", "/projects#mach25"],
      ["Airmedh", "/projects#euroc24"],
      ["Morrigu", "/projects#mach24"],
      ["Sionna", "/projects#sionna"],
    ],
  },
  {
    label: "Payloads",
    links: [
      ["Toirtis", "/payloads#toirtis"],
      ["Mu", "/payloads#mu"],
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
];

const directLinks = [
  ["Home", "/"],
  ["Blog", "/blog"],
  ["Sponsors", "/sponsorship"],
  ["Contact", "/contact-us"],
];

export default function NavBarMobileDialog() {
  return (
    <DrawerContent className="max-h-[88svh] overflow-y-auto rounded-none border-x-0 border-b-0 border-white/15 bg-black pb-8 text-white outline-none [&>div:first-child]:bg-white/20">
      <nav aria-label="Mobile navigation" className="px-6 pb-4 pt-7">
        <div className="grid grid-cols-2 gap-x-8 gap-y-9 border-b border-white/15 pb-8">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/38">
                {group.label}
              </p>
              <div className="mt-3 space-y-2.5">
                {group.links.map(([label, href]) => (
                  <DrawerClose asChild key={href}>
                    <Link href={href} className="block text-lg font-semibold uppercase tracking-[0.02em]">
                      {label}
                    </Link>
                  </DrawerClose>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 divide-y divide-white/15">
          {directLinks.map(([label, href]) => (
            <DrawerClose asChild key={href}>
              <Link href={href} className="flex items-center justify-between py-4 text-lg font-semibold uppercase tracking-[0.04em]">
                {label}
                <span aria-hidden="true" className="text-white/35">↗</span>
              </Link>
            </DrawerClose>
          ))}
        </div>
      </nav>
    </DrawerContent>
  );
}
