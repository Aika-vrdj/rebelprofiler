import React from "react";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";  // Add this import for Link

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

          {/* Main Content */}
          {children}

          {/* Footer */}
          <footer className="bg-gray-900 text-white w-full py-6 mt-8">
            <div className="container mx-auto text-center">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">My Rebel Mind</h3>
                <p className="text-sm">Unleash your inner rebel!</p>
              </div>

              <div className="text-center mt-4 text-sm">
                <p>&copy; {new Date().getFullYear()} Aika Ioka. All rights reserved.</p>
                <p>
                  <Link
                    href="https://aikavrdj.com"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Learn more at AikaVRDJ.com
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://aikavrdj.com/products/beat-the-system"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Beat the System Book
                  </Link>
                </p>
              </div>
            </div>
          </footer>
        </TooltipProvider>
      </body>
    </html>
  );
}
