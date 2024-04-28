import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Fan",
};
export default function Fan() {
  return (
    <main className="bg-csrcyellow px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      <section className="relative flex min-h-[520px] items-center justify-center">
        <Image
          src="/assets/images/comics-src-fan-page.svg"
          alt="Fan-Page"
          width={294}
          height={360}
          className="hidden basis-1/2 self-end lg:block lg:h-[360px] lg:w-[294px]"
        ></Image>
        <div className="flex basis-1/2 flex-col items-center justify-center gap-4 after:absolute after:h-[320px] after:w-[344px] after:bg-bubble_double after:bg-cover after:bg-no-repeat after:md:h-[400px] after:md:w-[430px]">
          <h1 className="z-10 text-center text-4xl font-bold text-csrcblue md:w-[590px] md:text-5xl">
            Fan
          </h1>
          <p className="z-10 w-[248px] text-center md:w-[300px]">
            Follow your favorite artists, keep a wishlist, get instant access to
            your purchases, showcase your collection, and explore the comics of
            like-minded fans.
          </p>
          <Link
            className="z-10 font-bold text-csrcblue after:invisible after:inline-block after:h-[32px] after:w-[16.2px] after:pl-2 after:align-middle after:content-link hover:text-csrcdark hover:after:visible"
            href="/sign-up/fan"
          >
            CREATE ACCOUNT
          </Link>
        </div>
      </section>
    </main>
  );
}
