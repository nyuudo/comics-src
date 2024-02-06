import Image from "next/image";

export const metadata = {
  title: "Author",
};
export default function Author() {
  return (
    <main className="xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-csrcyellow">
      <section className="relative flex justify-center items-center md:h-[520px]">
        <div className="flex flex-col basis-1/2 items-center justify-center after:absolute after:bg-bubble_idea after:bg-cover after:bg-no-repeat after:sm:w-[557px] after:sm:h-[301px] after:md:w-[430px] after:md:h-[384px]">
          <h1 className="text-csrcblue text-center font-semibold text-3xl sm:text-4xl sm:pb-4 md:text-5xl md:w-[590px] md:pb-6 z-10">
            Author
          </h1>
          <p className="md:w-[220px] z-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <Image
          src="/assets/images/comics-src-author-page.svg"
          alt="Author-Page"
          width={374}
          height={348}
          className="basis-1/2 self-end w-[374px] h-[348px]"
        ></Image>
      </section>
    </main>
  );
}
