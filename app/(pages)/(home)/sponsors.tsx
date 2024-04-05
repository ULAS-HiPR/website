import Image from "next/image";
import { ProjectItem } from "./projects";
import { Button } from "@/components/ui/button";

export default function Sponsors() {
  return (
    <div className="pb-8 pt-10 px-8">
      <h1 className="text-4xl font-bold pb-6">Our Sponsors</h1>
      <div className="grid sm:grid-cols-2 gap-8">
        <a href="" target="_blank">
          <img
            className="w-full rounded-lg object-cover h-[350px]"
            src= {"/ADI_Logo__Blue_Transparent.png"}
            alt={"Sponsor Placeholder"}
          />
        </a>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4 p-4 text-center">
            Become a sponsor and get your name on the moon!
          </h1>
          <a href="mailto:22346279@studentmail.ul.ie">
            <Button className="text-lg font-bold" variant={"outline"}>
              Get in touch
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
