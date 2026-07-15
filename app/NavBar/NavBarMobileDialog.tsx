"use client";

import { DrawerClose, DrawerContent } from "@/components/ui/drawer";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
  { label: "Sponsorship", href: "/sponsorship" },
];

export default function NavBarMobileDialog() {
  return (
    <DrawerContent className="border-white/15 bg-[#05070a] pb-6 text-white">
      <nav aria-label="Mobile navigation" className="flex flex-col px-6 pb-4 pt-8">
        {links.map((link, index) => (
          <DrawerClose asChild key={link.href}>
            <Link
              href={link.href}
              className="flex items-center justify-between border-b border-white/15 py-5 text-2xl font-black uppercase tracking-[-0.03em]"
            >
              <span>{link.label}</span>
              <span className="text-xs font-bold tracking-[0.16em] text-[#f15a4f]">
                0{index + 1}
              </span>
            </Link>
          </DrawerClose>
        ))}
      </nav>
    </DrawerContent>
  );
}
