import Link from "next/link";

export const metadata = {
  title: "Denied",
};
export default function Denied() {
  return (
    <main className="flex justify-center gap-4 bg-red-500 p-4 h-[520px]">
      <h1>ACCESS DENIED</h1>
      <h3 className="text-white">
        You do not have the requiered access to view this page
      </h3>
      <Link href="/">RETURN to HOME</Link>
    </main>
  );
}
