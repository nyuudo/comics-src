import "./globals.css";
import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Providers from "@/store/Provider";
import { Toaster } from "react-hot-toast";

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
      <body className="grid h-screen grid-rows-[auto_1fr_auto]">
        <Providers>
          <Toaster
            toastOptions={{
              success: {
                style: {
                  background: "#def6ff",
                  color: "#00a4de",
                },
              },
              error: {
                style: {
                  background: "#ff4757",
                  color: "#def6ff",
                },
              },
            }}
          />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
