import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
  { label: "Sponsorship", href: "/sponsorship" },
];

export default function NavBar() {
  return (
    <header className="relative z-50 h-[106px] bg-black text-white">
      <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-8 lg:px-12">
        <Link href="/" aria-label="ULAS HiPR home" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="ULAS HiPR"
            width={190}
            height={61}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-7 xl:gap-9">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="text-xs font-medium uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
          >
            Join us
          </Link>
        </nav>
      </div>
    </header>
  );
}
