import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 bg-csrcdark py-16">
      <div className="w-[17.3125rem]">
        <Image
          src="/assets/images/comics-src-not-found.svg"
          alt="Not Found"
          width={320}
          height={326}
          className="animate-fade-left pb-8 animate-once animate-ease-in-out"
        ></Image>
        <h1 className="text-center text-2xl font-bold text-csrcyellow">
          Page Not Found
        </h1>
        <p className="text-center text-csrclight">
          Could not find requested resource
        </p>
      </div>
      <Link
        href="/"
        className="text-center text-xs text-csrcblue hover:text-csrclight"
      >
        Back to Home
      </Link>
    </main>
  );
}
