"use client";
import { DrawerContent, DrawerClose } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

import { Camera, LayoutDashboard, LocateFixed, LogOut } from "lucide-react";
import Link from "next/link";

export default function NavBarMobileDialog() {
  return (
    <>
      <DrawerContent className="pb-3">
        <div className="flex flex-col pt-6 pb-2 px-6 gap-4">
          <DrawerItem path={"/"} label={"Home"} />
          <Separator />
          <DrawerItem path={"/projects"} label={"Projects"} />
          <Separator />
          <DrawerItem path={"/blog"} label={"Blog"} />
          <Separator />
          <DrawerItem path={"/about-us"} label={"About Us"} />
          <Separator />
          <DrawerItem path={"/contact-us"} label={"Contact Us"} />
        </div>
      </DrawerContent>
    </>
  );
}

function DrawerItem({ path, label }: { path: string; label: string }) {
  return (
    <DrawerClose asChild>
      <Link href={path}>
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-2xl font-medium text-center">{label}</h1>
        </div>
      </Link>
    </DrawerClose>
  );
}
