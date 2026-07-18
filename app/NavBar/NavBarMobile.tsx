"use client";

import { DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useNavVisible } from "./use-at-top";

export default function NavBarMobile() {
  const visible = useNavVisible();

  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between bg-gradient-to-b from-black/65 to-transparent px-5 text-white transition-[opacity,transform] duration-500 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}>
      <Link href="/" aria-label="ULAS HiPR home">
        <Image
          src="/logo.png"
          alt="ULAS HiPR"
          width={150}
          height={48}
          priority
          className="h-8 w-auto object-contain"
        />
      </Link>
      <DrawerTrigger
        aria-label="Open navigation"
        className="flex h-10 w-10 items-center justify-center border border-white/25 transition-colors hover:border-white"
      >
        <Menu aria-hidden="true" size={24} />
      </DrawerTrigger>
    </header>
  );
}
