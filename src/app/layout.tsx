import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexa Websites — Premium Websites for Nigerian Businesses",
  description: "Browse real, ready-made business websites. Pick a design, make it yours, and launch without the agency headache.",
  keywords: ["website design Nigeria", "business websites Lagos", "ready-made websites", "Nigerian web design"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
