import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RetaEU – Premium Research Peptides | Fast EU Shipping",
  description:
    "Buy certified research peptides with 99%+ purity. Retatrutide, BPC-157, TB-500 and more. Discreet, fast EU delivery from Leidschendam, Netherlands.",
  keywords: "research peptides, retatrutide, BPC-157, TB-500, GHK-Cu, buy peptides EU, Netherlands peptides",
  openGraph: {
    title: "RetaEU – Premium Research Peptides",
    description: "Certified research peptides with 99%+ purity. Fast EU shipping.",
    url: "https://retaeu.nl",
    siteName: "RetaEU",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={geist.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
