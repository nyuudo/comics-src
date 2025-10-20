import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Error",
};
export default function ErrorPage() {
  return (
    <main className="bg-csrcdark flex flex-col items-center justify-center gap-2 py-16">
      <div className="w-69.25">
        <Image
          src="/assets/images/comics-src-not-found.svg"
          alt="Not Found"
          width={320}
          height={326}
          className="animate-fade-left animate-once animate-ease-in-out -ml-2 pb-8"
        ></Image>
        <h1 className="text-csrcyellow text-center text-2xl font-bold">
          Sorry
        </h1>
        <p className="text-csrclight text-center">Something went wrong</p>
      </div>
      <Link
        href="/"
        className="text-csrcblue hover:text-csrclight text-center text-xs"
      >
        Back to Home
      </Link>
    </main>
  );
}
