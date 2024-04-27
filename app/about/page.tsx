import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="bg-csrcyellow px-10 md:lg:px-[3.75rem] xl:px-20">
      <section className="relative flex h-[600px] flex-col items-center justify-center gap-4 xs:px-5 sm:px-10 md:h-[520px] md:lg:px-[3.75rem] xl:px-20">
        <div className="flex flex-col items-center justify-center after:absolute after:bottom-2 after:h-[542px] after:w-[356px] after:bg-bubble_small after:bg-cover after:bg-no-repeat after:md:bottom-[30px] after:md:h-[414px] after:md:w-[760px] after:md:bg-bubble_main">
          <h1 className="z-10 text-center text-3xl font-bold text-csrcblue md:max-w-[590px] md:pb-6 md:text-5xl">
            About
          </h1>
          <p className="z-10 max-w-[590px] break-words">
            Comics are one of the most <strong>versatile</strong> and{" "}
            <strong>dynamic</strong> forms of expression in our culture, getting
            more and more attention every year. Recently comics have become a
            key factor in the creation of new media.
          </p>
          <p className="z-10 max-w-[590px] break-words">
            Despite what it seems an endless source of material for culture,
            society and also markets, what authors receive in compensation, is{" "}
            <strong>disproportionately</strong> less than their contribution.
            This project aims to correct that in association with technology.
          </p>
          <p className="z-10 max-w-[590px] break-words">
            This is{" "}
            <Link
              href="/catalog"
              className="z-10 py-4 font-bold text-csrcblue hover:text-csrcdark"
            >
              COMICS/src
            </Link>
            , the source for comics that will be closer to the author and also
            to the fan.
          </p>
        </div>
      </section>
    </main>
  );
}
