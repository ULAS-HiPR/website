import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
