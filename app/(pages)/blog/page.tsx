import Image from "next/image";
import Posts from "./posts";

export default function Blog() {
  return (
    <main className="bg-white text-black">
      <section className="relative min-h-[440px] overflow-hidden bg-[#020208] text-white">
        <Image
          src="/mach25/IMG_9606_Original.jpg"
          alt="HiPR students working on Macha"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020208_0%,rgba(2,2,8,0.93)_45%,rgba(2,2,8,0.3)_78%,rgba(2,2,8,0.5)_100%)]" />

        <div className="relative mx-auto flex min-h-[440px] max-w-[1180px] flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            From the workshop
          </p>
          <h1 className="mt-5 text-5xl font-bold sm:text-6xl">Blog</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/72">
            Build updates, launch reports and lessons from HiPR&apos;s student
            rocketry programme.
          </p>
        </div>
      </section>

      <Posts />
    </main>
  );
}
