import Image from "next/image";
import { ProjectItem } from "./projects";
import { Button } from "@/components/ui/button";

export default function Sponsors() {
  return (
    <div className="pb-8 px-8">
      <h1 className="text-4xl font-bold pb-6">Our Sponsors</h1>
      <div className="grid grid-cols-2 gap-8">
        <a href="https://www.analog.com/en/index.html" target="_blank">
          <img
            className="w-full rounded-lg object-cover h-[350px]"
            src={"/adi.png"}
            alt={"Analog Devices Logo"}
          />
        </a>
        {/* <a
          href="https://upload.wikimedia.org/wikipedia/commons/7/72/Matt_Berry_Headshot.jpg"
          target="_blank"
        >
          <img
            className="w-full rounded-lg object-cover h-[350px]"
            src={"/garth.jpeg"}
            alt={"Garth Marenghi's Dark Place"}
          />
        </a>
        <a href="https://www.goblinclothing.com" target="_blank">
          <img
            className="w-full rounded-lg object-cover h-[350px]"
            src={"/goblin.png"}
            alt={"Goblin Clothing"}
          />
        </a> */}
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
