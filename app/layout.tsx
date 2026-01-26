import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://dalenian.com"),
  title: {
    default: "Dalenian | Handmade Clay Lighter Cases",
    template: "%s | Dalenian"
  },
  description:
    "Premium handmade clay lighter cases with soft peach hues, crafted for protection and style.",
  openGraph: {
    title: "Dalenian | Handmade Clay Lighter Cases",
    description:
      "Premium handmade clay lighter cases with soft peach hues, crafted for protection and style.",
    url: "https://dalenian.com",
    siteName: "Dalenian",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dalenian handmade clay lighter cases"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

