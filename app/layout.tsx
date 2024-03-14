import "./globals.css";
import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Providers from "@/store/Provider";

const gabarito = Gabarito({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "COMICS/src | %s",
    default: "COMICS/src",
  },
  description:
    "Discover new comics and directly support the artist who make it",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gabarito.className}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
