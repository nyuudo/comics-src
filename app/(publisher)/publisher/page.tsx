import Image from "next/image";

export const metadata = {
  title: "Publisher",
};
export default function Publisher() {
  return (
    <main className="px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-csrcyellow">
      <section className="relative flex justify-center items-center min-h-[520px]">
        <Image
          src="/assets/images/comics-src-publisher-page.svg"
          alt="Publisher-Page"
          width={272}
          height={366}
          className="hidden basis-1/2 self-end lg:block lg:w-[272px] lg:h-[366px]"
        ></Image>
        <div className="flex flex-col basis-1/2 items-center justify-center gap-4 after:absolute after:bg-bubble_square after:bg-cover after:bg-no-repeat after:w-[344px] after:h-[320px] after:md:w-[430px] after:md:h-[400px]">
          <h1 className="text-csrcblue text-center font-bold text-4xl md:text-5xl md:w-[590px] z-10">
            Publisher
          </h1>
          <p className="text-center w-[248px] md:w-[300px] z-10">
            Unified accounting and stats across all your artists, a single
            fulfillment interface for all your merch, direct payments on a
            per-release basis, and a whole lot more.
          </p>
        </div>
      </section>
    </main>
  );
}
