import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Author",
};
export default function Author() {
  return (
    <main className="bg-csrcyellow px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      <section className="relative flex min-h-[520px] items-center justify-center">
        <div className="flex basis-1/2 flex-col items-center justify-center gap-4 after:absolute after:h-[307px] after:w-[344px] after:bg-bubble_idea after:bg-cover after:bg-no-repeat md:after:h-[384px] md:after:w-[430px]">
          <h1 className="z-10 text-center text-4xl font-bold text-csrcblue md:w-[590px] md:text-5xl">
            Author
          </h1>
          <p className="z-10 w-[200px] text-center md:w-[240px]">
            Sell directly to your fans with total control over your art and
            pricing. Easy access to real-time stats, comics chart reporting, and
            more.
          </p>
          <Link
            className="group z-10 flex items-center font-bold text-csrcblue transition duration-1000 ease-in-out"
            href="/sign-up/author"
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
