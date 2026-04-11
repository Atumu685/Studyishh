import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import { Navbar } from "~/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", weight: "700" });

export const metadata: Metadata = {
  title: "Studyishh",
  description: "Find your favourite math resources",
  metadataBase: new URL("https://studyishh.com"),
  openGraph: {
    url: "https://studyishh.com",
    siteName: "Studyishh",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fredoka.variable} ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
