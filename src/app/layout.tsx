import React from "react";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "The Rebel Mind",
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
          {/* Hero Image */}
          <div className="w-full h-[300px] flex justify-center items-center mb-8">
            <img
              src="https://4i1h6tiuqp.ufs.sh/f/Ps88lifda4yii9uqi4CERXTrNUVfQdLcP8GDwlaC5Zu6z4Mm"
              alt="The Rebel Mind"
              className="object-contain h-full max-w-full"
            />
          </div>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
