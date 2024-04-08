import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function ProjectItem({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="pb-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-end align-end">
        <Link href={path}>
          <Button>Learn more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function HomeProjects() {
  return (
    <div className="sm:h-[840px] px-8">
      <h1 className="text-4xl font-bold pb-6">Our Projects</h1>
      <div className="grid sm:grid-cols-3 gap-8">
        <ProjectItem
          title={"Mach-24"}
          description={
            "The Mach-X Rocketry & CanSat Competition, hosted by Discover Space UK, Exotopic Ltd, Machrihanish Airbase Community Company, and UKSEDS, challenges university students to design, build, and launch rockets and CanSats. With remote technical support, participants gain practical skills in mechanical and electronics engineering, teamwork, and insight into careers in the UK Space Sector."
          }
          path={"/projects?id=mach24"}
        />
        <ProjectItem
          title={"TVC"}
          description={
            "TVC is our first research project for use in future designs. The teams goal is to advance depth of technological knowledge and provide new technologies for future high powered rockets. The ability to manipulate the direction of thrust from a motor to control the attitude or angular velocity of the rocket is a big step in creating more advanced rocket concepts and increasing the capabilities of ULAS HiPr."
          }
          path={"/projects?id=tvc"}
        />
        <ProjectItem
          title={"Sionna"}
          description={
            "Sionna, named after the Celtic goddess of inspiration, creativity, and innovation, is the groundbreaking and pioneering rocket that we are currently in the process of meticulously designing, developing, and refining as part of our ambitious and visionary aerospace engineering project."
          }
          path={"/projects?id=sionna"}
        />
        <ProjectItem
          title={"Sionna 2"}
          description={
            "SPEIR is a high powered rocket designed by a team of first years in order to help them learn the basics of high powered rocketry and to allow them to progress to more advanced projects during their subsequent years in HiPR. SPEIR is heavily based on the design of our first rocket, Sionna, but with the aim to add an on board camera module which can provide us with footage from the rocket’s perspective in flight."
          }
          path={"/projects?id=sionna2"}
        />
      </div>
    </div>
  );
}
