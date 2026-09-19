import { Drawer } from "@/components/ui/drawer";
import NavBar from "../NavBar/NavBar";
import NavBarMobile from "../NavBar/NavBarMobile";
import NavBarMobileDialog from "../NavBar/NavBarMobileDialog";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";

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
        <footer className="border-t border-white/15 bg-black px-6 py-8 text-white sm:px-10 lg:px-12">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/60">Follow ULAS HiPR</p>
            <nav aria-label="Social media" className="flex flex-wrap gap-6">
              <a
                href="https://www.linkedin.com/company/ulas-hipr/"
                className="inline-flex min-h-11 items-center gap-2 text-sm transition-colors hover:text-[#e12e2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/ulas.hipr/"
                className="inline-flex min-h-11 items-center gap-2 text-sm transition-colors hover:text-[#e12e2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Instagram size={18} aria-hidden="true" />
                Instagram
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </nav>
          </div>
        </footer>
        <NavBarMobileDialog />
      </Drawer>
    </div>
  );
}
