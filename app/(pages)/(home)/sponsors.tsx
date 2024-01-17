import Image from "next/image";
import { ProjectItem } from "./projects";
import { Button } from "@/components/ui/button";

export default function Sponsors() {
  return (
    <div className="pb-8">
      <h1 className="text-4xl font-bold pb-6">Our Sponsors</h1>
      <div className="grid grid-cols-2 gap-8">
        <a href="https://www.analog.com/en/index.html" target="_blank">
          <img
            className="w-full rounded-lg object-cover h-[350px]"
            src={"/adi.png"}
            alt={"Analog Devices Logo"}
          />
        </a>
        <a
          href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2F2022%2F08%2F08%2F1116341629%2Fmatt-berry&psig=AOvVaw3ij6aPUqjZyTx1myq3CwIb&ust=1705591651170000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNiwrpXe5IMDFQAAAAAdAAAAABAE"
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
        </a>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Become a sponsor!</h1>
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
