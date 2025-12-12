import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Publisher",
};
export default function Publisher() {
  return (
    <main className="bg-csrcyellow px-5 sm:px-10 md:lg:px-15 xl:px-20">
      <section className="relative flex min-h-130 items-center justify-center">
        <Image
          src="/assets/images/comics-src-publisher-page.svg"
          alt="Publisher-Page"
          width={272}
          height={366}
          className="hidden basis-1/2 self-end lg:block lg:h-91.5 lg:w-68"
        ></Image>
        <div className="flex basis-1/2 flex-col items-center justify-center gap-4 after:absolute after:h-80 after:w-86 after:bg-bubble_square after:bg-cover after:bg-no-repeat md:after:h-100 md:after:w-107.5">
          <h1 className="z-10 text-center text-4xl font-bold text-csrcblue md:w-147.5 md:text-5xl">
            Publisher
          </h1>
          <p className="z-10 w-62 text-center md:w-75">
            Unified accounting and stats across all your artists, a single
            fulfillment interface for all your merch, direct payments on a
            per-release basis, and a whole lot more.
          </p>
          <Link
            className="group z-10 flex items-center font-bold text-csrcblue transition duration-1000 ease-in-out"
            href="/sign-up/publisher"
          >
            <span className="group-hover:text-csrcdark">CREATE ACCOUNT</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10.1 20"
              fill="currentColor"
              className="size-5 translate-x-2 opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path
                fillRule="evenodd"
                d="m0 18.3 6.7-8.3-6.7-8.3 2.1-1.7 8 10-8 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
