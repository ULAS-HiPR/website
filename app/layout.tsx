import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "ULAS HiPR | Ireland's first competitive high-powered rocketry team",
  description:
    "University of Limerick students designing, building and flying competitive high-powered rockets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
