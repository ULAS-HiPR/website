import { RocketIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavBar() {
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
      <div className=" px-4 py-2 ml-14 rounded-md mr-4 transition-colors duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-white-50 dark:hover:text-black">
        {text}
      </div>
    </Link>
  );
}
