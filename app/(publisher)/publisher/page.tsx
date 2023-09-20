import Image from "next/image";

export const metadata = {
  title: "Publisher",
};
export default function Publisher() {
  return (
    <main className="xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-csrclight p-4">
      <section className="relative flex flex-row items-center justify-between md:h-[520px]">
        <Image
          src="/assets/images/comics-src-publisher-page.svg"
          alt="Publisher-Page"
          width={272}
          height={366}
          className="justify-end basis-1/2 w-[272px] h-[366px]"
        ></Image>
        <div className="flex flex-col basis-1/2 items-center justify-center after:absolute after:bg-bubble_square after:bg-cover after:bg-no-repeat after:sm:w-[557px] after:sm:h-[301px] after:md:w-[590px] after:md:h-[226px]">
          <h1 className="text-csrcblue text-center font-semibold text-3xl sm:text-4xl sm:pb-4 md:text-5xl md:w-[590px] md:pb-6 z-10">
            Publisher
          </h1>
          <p className="md:w-[500px] pl-4 z-10">
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
