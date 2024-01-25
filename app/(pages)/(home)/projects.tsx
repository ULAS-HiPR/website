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
    <div className="h-[840px] px-8">
      <h1 className="text-4xl font-bold pb-6">Our Projects</h1>
      <div className="grid grid-cols-3 gap-8">
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
            "Thrust-vector control is a technology used in aerospace engineering to adjust the direction and stability of a vehicle during flight. It involves altering the angle of a rocket’s engines or exhaust nozzles, enabling precise control over the vehicle’s movement and enhancing maneuverability."
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
            "Sionna 2 is the successor to our Sionna rocket, designed to take our high-performance model rocketry team to new heights of achievement. With enhanced performance and precision, Sionna 2 showcases our team’s commitment to pushing the boundaries of model rocketry excellence."
          }
          path={"/projects?id=sionna2"}
        />
        <ProjectItem
          title={"Hybrid Motor"}
          description={
            "A hybrid motor combines elements of solid and liquid rocket motors. It uses a solid fuel grain ignited separately and a liquid oxidizer injected into the combustion chamber to generate thrust. This allows for precise thrust control and improved safety, but will involve significant engineering resources to accomplish."
          }
          path={"/projects?id=hybridmotor"}
        />
      </div>
    </div>
  );
}
