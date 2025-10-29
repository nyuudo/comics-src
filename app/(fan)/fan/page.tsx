import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Fan",
};
export default function Fan() {
  return (
    <main className="bg-csrcyellow px-5 sm:px-10 md:lg:px-15 xl:px-20">
      <section className="relative flex min-h-[520px] items-center justify-center">
        <Image
          src="/assets/images/comics-src-fan-page.svg"
          alt="Fan-Page"
          width={294}
          height={360}
          className="hidden basis-1/2 self-end lg:block lg:h-[360px] lg:w-[294px]"
        ></Image>
        <div className="flex basis-1/2 flex-col items-center justify-center gap-4 after:absolute after:h-80 after:w-[344px] after:bg-bubble_double after:bg-cover after:bg-no-repeat md:after:h-[400px] md:after:w-[430px]">
          <h1 className="z-10 text-center text-4xl font-bold text-csrcblue md:w-[590px] md:text-5xl">
            Fan
          </h1>
          <p className="z-10 w-[248px] text-center md:w-[300px]">
            Follow your favorite artists, keep a wishlist, get instant access to
            your purchases, showcase your collection, and explore the comics of
            like-minded fans.
          </p>
          <Link
            className="group z-10 flex items-center font-bold text-csrcblue transition duration-1000 ease-in-out"
            href="/sign-up/fan"
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
