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
    <div className="sm:h-[500px] px-8">
      <h1 className="text-4xl font-bold pb-6">Our Projects</h1>
      <div className="grid sm:grid-cols-3 gap-8">
        <ProjectItem
          title={"Macha"}
          description={
            "Macha is our Mach 25 competition Rocket, it was built to reach 2km and has a deployable CanSat and achieved second place in it's category"
          }
          path={"/projects?id=mach25"}
        />
        <ProjectItem
          title={"Airmedh"}
          description={
            "Airmedh was our EuRoC 24 rocket, it was built to reach 3km"
          }
          path={"/projects?id=euroc24"}
        />
        <ProjectItem
          title={"Morrigu"}
          description={
            "Morrigu was our Mach 24 rocket, as well as ULAS HiPR's first launch"
          }
          path={"/projects?id=mach24"}
        />
      </div>
    </div>
  );
}
