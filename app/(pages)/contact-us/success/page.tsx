import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function ContactSuccess() {
  return (
    <main className="flex min-h-[calc(100svh-106px)] items-center bg-white px-6 py-20 text-black sm:px-10">
      <div className="mx-auto w-full max-w-2xl border border-black/15 bg-[#f4f3f0] px-7 py-14 text-center sm:px-14 sm:py-20">
        <div className="mx-auto flex h-16 w-16 items-center justify-center bg-black text-white">
          <Check aria-hidden="true" className="h-7 w-7" />
        </div>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.1em] text-black/45">
          Message sent
        </p>
        <h1 className="mt-4 text-4xl font-semibold">Thanks for getting in touch.</h1>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-black/60">
          Your message has reached HiPR. A member of the student team will reply
          when they can.
        </p>
        <Link
          href="/"
          className="group mt-9 inline-flex items-center gap-3 font-semibold"
        >
          Return home
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </main>
  );
}
