import Image from "next/image";

export const metadata = {
  title: "Fan",
};
export default function Fan() {
  return (
    <main className="px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-csrcyellow">
      <section className="relative flex justify-center items-center min-h-[520px]">
        <Image
          src="/assets/images/comics-src-fan-page.svg"
          alt="Fan-Page"
          width={294}
          height={360}
          className="hidden basis-1/2 self-end lg:block lg:w-[294px] lg:h-[360px]"
        ></Image>
        <div className="flex flex-col basis-1/2 items-center justify-center gap-4 after:absolute after:bg-bubble_double after:bg-cover after:bg-no-repeat after:w-[344px] after:h-[320px] after:md:w-[430px] after:md:h-[400px]">
          <h1 className="text-csrcblue text-center font-bold text-4xl md:text-5xl md:w-[590px] z-10">
            Fan
          </h1>
          <p className="text-center w-[248px] md:w-[300px] z-10">
            Sell directly to your fans with total control over your art and
            pricing. Easy access to real-time stats, comics chart reporting, and
            more.
          </p>
        </div>
      </section>
    </main>
  );
}
