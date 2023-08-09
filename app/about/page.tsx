import { Logo } from "@/components/shared/Logo";
import Head from "next/head";

export default function About() {
  return (
    <main className="flex flex-col gap-4 bg-csrclight p-4 h-[520px]">
      <Head>
        <title>About</title>
      </Head>
      <Logo />
      <h1>this is the About Page</h1>
      <h3 className="text-red-500">This is a Public Area</h3>
    </main>
  );
}
