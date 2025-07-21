import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Providers from "@/store/Provider";
import { Toaster } from "react-hot-toast";

const gabarito = localFont({
  src: [
    {
      path: "webfonts/Gabarito-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "webfonts/Gabarito-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
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
