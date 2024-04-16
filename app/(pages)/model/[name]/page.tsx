import Mach24PayloadAnimation from "@/app/3d/mach-24-payload";
import SionnaAnimation from "@/app/3d/rocket";
import ModelAnimation from "@/app/3d/rocket";
import RocketAnimation from "@/app/3d/rocket";

export default function Model({ params }: { params: { name: string } }) {
  const name = params.name;
  const Model = () => {
    switch (name) {
      case "mach24-payload":
        return <Mach24PayloadAnimation />;
      case "sionna":
        return <SionnaAnimation />;
      default:
        return <></>;
    }
  };
  return (
    <div className="px-12 pb-8">
      <Model />
    </div>
  );
}
