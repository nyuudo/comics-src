import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Author",
};
export default function Author() {
  return (
    <main className="bg-csrcyellow px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      <section className="relative flex min-h-[520px] items-center justify-center">
        <div className="flex basis-1/2 flex-col items-center justify-center gap-4 after:absolute after:h-[307px] after:w-[344px] after:bg-bubble_idea after:bg-cover after:bg-no-repeat after:md:h-[384px] after:md:w-[430px]">
          <h1 className="z-10 text-center text-4xl font-bold text-csrcblue md:w-[590px] md:text-5xl">
            Author
          </h1>
          <p className="z-10 w-[200px] text-center md:w-[240px]">
            Sell directly to your fans with total control over your art and
            pricing. Easy access to real-time stats, comics chart reporting, and
            more.
          </p>
          <Link
            className="z-10 font-bold text-csrcblue after:invisible after:inline-block after:h-[32px] after:w-[16.2px] after:pl-2 after:align-middle after:content-link hover:text-csrcdark hover:after:visible"
            href="/sign-up/author"
          >
            CREATE ACCOUNT
          </Link>
        </div>
        <Image
          src="/assets/images/comics-src-author-page.svg"
          alt="Author-Page"
          width={374}
          height={348}
          className="hidden basis-1/2 self-end lg:block lg:h-[348px] lg:w-[374px]"
        ></Image>
      </section>
    </main>
  );
}
