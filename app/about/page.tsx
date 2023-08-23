import { Logo } from "@/components/shared/Logo";

export const metadata = {
  title: "About",
};
export default function About() {
  return (
    <main className="flex flex-col gap-4 bg-csrclight p-4 h-[520px]">
      <Logo />
      <h1>this is the About Page</h1>
      <h3 className="text-red-500">This is a Public Area</h3>
    </main>
  );
}
