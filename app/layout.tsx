import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

import { FloatingDock } from "@/components/ui/FloatingDock";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Oyefeso Afolabi",
  description: "Oyefeso Afolabi",
  icons: {
    icon: [
      {
        url: "/fav.png",
        href: "/fav.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSerif.variable}>
        {children}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <FloatingDock />
        </div>
      </body>
    </html>
  );
}

