import Image from "next/image";

export const metadata = {
  title: "Author",
};
export default function Author() {
  return (
    <main className="px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-csrcyellow">
      <section className="relative flex justify-center items-center min-h-[520px]">
        <div className="flex flex-col basis-1/2 items-center justify-center gap-4 after:absolute after:bg-bubble_idea after:bg-cover after:bg-no-repeat after:w-[344px] after:h-[307px] after:md:w-[430px] after:md:h-[384px]">
          <h1 className="text-csrcblue text-center font-bold text-4xl md:text-5xl md:w-[590px] z-10">
            Author
          </h1>
          <p className="text-center w-[200px] md:w-[240px] z-10">
            Follow your favorite artists, keep a wishlist, get instant streaming
            of your purchases, showcase your collection, and explore the music
            of like-minded fans.
          </p>
        </div>
        <Image
          src="/assets/images/comics-src-author-page.svg"
          alt="Author-Page"
          width={374}
          height={348}
          className="hidden basis-1/2 self-end lg:block lg:w-[374px] lg:h-[348px]"
        ></Image>
      </section>
    </main>
  );
}
