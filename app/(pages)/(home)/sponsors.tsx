import Image from "next/image";
import { ProjectItem } from "./projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Sponsors() {
  return (
    <div className="pb-8 pt-10 px-8">
      <h1 className="text-4xl font-bold pb-6">Our Sponsors</h1>
      <div className="grid sm:grid-cols-2 gap-8">
        <a href="" target="_blank">
          <img
            className="w-full scale-95 rounded-lg object-cover p-4 bg-white "
            src={"/ADI_Logo_Blue.jpg"}
            alt={"Sponsor Placeholder"}
          />
        </a>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4 p-4 text-center">
            Become a sponsor and get your name on the moon!
          </h1>
          <Link href="/contact-us">
            <Button className="text-lg font-bold" variant={"outline"}>
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
