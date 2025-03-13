import React from "react";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "My Rebel Mind",
  description: "Unleash your inner rebel and explore the nine revolutionary archetypes",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark bg-black text-gray-200`}>
      <body className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <TooltipProvider>
        {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
