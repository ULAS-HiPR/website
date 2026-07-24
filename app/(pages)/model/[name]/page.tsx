import Mach24PayloadAnimation from "@/app/3d/mach-24-payload";
import SionnaAnimation from "@/app/3d/rocket";

export function generateStaticParams() {
  return [{ name: "mach24-payload" }, { name: "sionna" }];
}

export const dynamicParams = false;

export default function Model({ params }: { params: { name: string } }) {
  const name = params.name;
  const Model = () => {
    switch (name) {
      case "mach24-payload":
        return <Mach24PayloadAnimation />;
      case "sionna":
        return <SionnaAnimation paintScheme="sionna" />;
      default:
        return <></>;
    }
  };
  return (
    <main className="min-h-svh bg-black pt-[72px] min-[760px]:pt-[88px]">
      <div className="relative min-h-[calc(100svh-72px)] min-[760px]:min-h-[calc(100svh-88px)]">
        <Model />
      </div>
    </main>
  );
}
