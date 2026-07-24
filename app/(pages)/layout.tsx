import { Drawer } from "@/components/ui/drawer";
import NavBar from "../NavBar/NavBar";
import NavBarMobile from "../NavBar/NavBarMobile";
import NavBarMobileDialog from "../NavBar/NavBarMobileDialog";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Drawer shouldScaleBackground={false}>
        <div className="hidden min-[760px]:block">
          <NavBar />
        </div>
        <div className="min-[760px]:hidden">
          <NavBarMobile />
        </div>
        <div>{children}</div>
        <NavBarMobileDialog />
      </Drawer>
    </div>
  );
}
