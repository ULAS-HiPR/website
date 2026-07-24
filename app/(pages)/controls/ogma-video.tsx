"use client";

import { withBasePath } from "@/lib/base-path";

export default function OgmaVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Rotating render of the Ogma modular flight computer"
      className="absolute inset-0 h-full w-full object-contain p-5 brightness-[0.96] sm:p-8"
    >
      <source
        src={withBasePath("/controls/ogma/ogma-render.mp4")}
        type="video/mp4"
      />
    </video>
  );
}
