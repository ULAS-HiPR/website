"use client";
import { Bike, Menu, RocketIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DrawerTrigger } from "@/components/ui/drawer";

export default async function NavBar() {
  function isMobile() {
    const regex =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
  return (
    <div className="w-full flex">
      <div className="p-8 w-1/5 font-medium text-lg flex items-center">
        <Link className="flex" href={"/"}>
          ULAS HiPR
          <RocketIcon className="ml-3 text-lg" />
        </Link>
      </div>
      <div className="p-8 w-4/5 justify-end flex font-medium text-lg">
        <ListItem text={"Home"} path={"/"}></ListItem>
        <ListItem text={"Projects"} path={"/projects"}></ListItem>
        <ListItem text={"Blog"} path={"/blog"}></ListItem>
        <ListItem text={"About Us"} path={"/about-us"}></ListItem>
        <ListItem text={"Contact Us"} path={"/contact-us"}></ListItem>
      </div>
    </div>
  );
}

function ListItem({ text, path }: { text: string; path: string }) {
  return (
    <Link href={path}>
      <div className=" px-4 py-2 ml-4 rounded-md transition-colors duration-150 ease-in-out hover:bg-white hover:text-black">
        {text}
      </div>
    </Link>
  );
}
