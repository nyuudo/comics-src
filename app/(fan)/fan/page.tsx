import Image from "next/image";

export const metadata = {
  title: "Fan",
};
export default function Fan() {
  return (
    <main className="xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-csrcyellow">
      <section className="relative flex justify-center items-center md:h-[520px]">
        <Image
          src="/assets/images/comics-src-fan-page.svg"
          alt="Fan-Page"
          width={294}
          height={360}
          className="basis-1/2 self-end w-[294px] h-[360px]"
        ></Image>
        <div className="flex flex-col basis-1/2 items-center justify-center after:absolute after:bg-bubble_double after:bg-cover after:bg-no-repeat after:sm:w-[557px] after:sm:h-[301px] after:md:w-[430px] after:md:h-[400px]">
          <h1 className="text-csrcblue text-center font-semibold text-3xl sm:text-4xl sm:pb-4 md:text-5xl md:w-[590px] md:pb-6 z-10">
            Fan
          </h1>
          <p className="md:w-[280px] z-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </section>
    </main>
  );
}
