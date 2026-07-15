"use client";

import { DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBarMobile() {
  return (
    <header className="relative z-50 flex h-[80px] w-full items-center justify-between border-b border-white/10 bg-[#05070a] px-6 text-white">
      <Link href="/" aria-label="ULAS HiPR home">
        <Image
          src="/logo.png"
          alt="ULAS HiPR"
          width={150}
          height={48}
          priority
          className="h-9 w-auto object-contain"
        />
      </Link>
      <DrawerTrigger
        aria-label="Open navigation"
        className="flex h-11 w-11 items-center justify-center border border-white/20 transition-colors hover:border-[#f15a4f] hover:bg-[#f15a4f]"
      >
        <Menu aria-hidden="true" size={24} />
      </DrawerTrigger>
    </header>
  );
}
