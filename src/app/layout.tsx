import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/components/ui/GrainOverlay";
import { experience } from "@/content/experience";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070B14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: experience.meta.title,
  description: experience.meta.description,
  metadataBase: new URL("https://thetraveller.experience"),
  openGraph: {
    title: "The Traveller — A Morning Experience",
    description: "Sunday · 5:00 AM · Kaylana Chouraha. The trail begins before the sun rises.",
    siteName: "The Traveller",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Traveller — Sunday 5:00 AM",
    description: "A four-hour morning experience beginning at 5 AM at Kaylana Chouraha. Come prepared.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#070B14] text-[#F4F1EA] font-sans min-h-screen selection:bg-[#D7A85B]/30 selection:text-[#F4F1EA]">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
