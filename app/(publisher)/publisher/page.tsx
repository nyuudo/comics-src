import Image from "next/image";

export const metadata = {
  title: "Publisher",
};
export default function Publisher() {
  return (
    <main className="bg-csrcyellow px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      <section className="relative flex min-h-[520px] items-center justify-center">
        <Image
          src="/assets/images/comics-src-publisher-page.svg"
          alt="Publisher-Page"
          width={272}
          height={366}
          className="hidden basis-1/2 self-end lg:block lg:h-[366px] lg:w-[272px]"
        ></Image>
        <div className="flex basis-1/2 flex-col items-center justify-center gap-4 after:absolute after:h-[320px] after:w-[344px] after:bg-bubble_square after:bg-cover after:bg-no-repeat after:md:h-[400px] after:md:w-[430px]">
          <h1 className="z-10 text-center text-4xl font-bold text-csrcblue md:w-[590px] md:text-5xl">
            Publisher
          </h1>
          <p className="z-10 w-[248px] text-center md:w-[300px]">
            Unified accounting and stats across all your artists, a single
            fulfillment interface for all your merch, direct payments on a
            per-release basis, and a whole lot more.
          </p>
        </div>
      </section>
    </main>
  );
}
