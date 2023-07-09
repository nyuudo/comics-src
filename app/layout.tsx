import "./globals.css";
import type { Metadata } from "next";
import { Assistant } from "next/font/google";

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
      <body className={assistant.className}>{children}</body>
    </html>
  );
}
