import "./globals.css";
import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const assistant = Assistant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COMICS src",
  description:
    "Discover new comics and directly support the artist who make it",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={assistant.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
