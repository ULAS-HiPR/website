import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import NavBar from "../NavBar/NavBar";
import NavBarMobile from "../NavBar/NavBarMobile";
import { Button } from "@/components/ui/button";
import NavBarMobileDialog from "../NavBar/NavBarMobileDialog";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Drawer>
        <div className="hidden  sm:block">
          <NavBar />
        </div>
        <div className="sm:hidden">
          <NavBarMobile />
        </div>
        <div>{children}</div>
        <NavBarMobileDialog />
      </Drawer>
    </div>
  );
}
