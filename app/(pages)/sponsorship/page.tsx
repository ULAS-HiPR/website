import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Sponsorship() {
  return (
    <>
      <div className="px-5">
        {/* Gold Sponsorship */}
        <div className="text-4xl font-bold text-center mt-4 mb-8">
          Gold Sponsorship
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Images adjusted for responsive design */}
          <a
            className="rounded-lg flex flex-col justify-center p-3 h-full w-full"
            href="https://www.analog.com/en/index.html"
            target="_blank"
          >
            <img
              className="object-scale-down"
              src={"/ADI-AWP.png"}
              alt="Analog Devices Logo"
            />
          </a>
        </div>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        <div className="text-4xl font-bold text-center mt-4 mb-8">
          Partnerships
        </div>
        <div className="grid md:grid-cols-2 gap-8 ">
          <a
            className="rounded-lg flex justify-center items-center"
            href="https://www.ul.ie/scieng"
            target="_blank"
          >
            <img
              className="rounded-lg object-scale-down max-w-sm sm:max-w-xs p-3 bg-white"
              src={"/UL_school_of_engineering.jpeg"}
              alt="UL School of Engineering Logo"
            />
          </a>
          <a
            className="rounded-lg flex justify-center items-center"
            href="https://www.ansys.com/"
            target="_blank"
          >
            <img
              className="rounded object-scale-down max-w-sm sm:max-w-xs p-3 bg-white"
              src={"/ansys.png"}
              alt="Ansys Logo"
            />
          </a>
        </div>  

        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        <div className="text-4xl font-bold text-center my-8">
          Interested in becoming a sponsor?
        </div>
        <div className="flex justify-center pb-20">
          <Link href={"/contact-us"}>
            <Button
              className="text-lg font-bold ailign-center text-center items-center"
              variant={"outline"}
            >
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
