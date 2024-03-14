import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-csrcyellow">
      <section className="relative flex flex-col justify-center items-center gap-4 h-[325px] md:h-[520px] xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
        <div className="flex flex-col items-center justify-center after:absolute after:bottom-[30px] after:bg-bubble_main after:bg-cover after:bg-no-repeat after:sm:w-[557px] after:sm:h-[301px] after:md:w-[760px] after:md:h-[414px]">
          <h1 className="text-csrcblue text-center font-bold text-3xl sm:text-4xl sm:pb-4 md:text-5xl md:max-w-[590px] md:pb-6 z-10">
            About
          </h1>
          <p className="md: max-w-[590px] z-10 break-words">
            Comics are one of the most <strong>versatile</strong> and{" "}
            <strong>dynamic</strong> forms of expression in our culture, getting
            more and more attention every year. Recently comics have become a
            key factor in the creation of new media.
          </p>
          <p className="md:max-w-[590px] z-10 break-words">
            Despite what it seems an endless source of material for culture,
            society and also markets, what authors receive in compensation, is{" "}
            <strong>disproportionately</strong> less than their contribution.
            This project aims to correct that in association with technology.
          </p>
          <p className="md:max-w-[590px] z-10 break-words">
            This is{" "}
            <Link
              href="/catalog"
              className="text-csrcblue py-4 font-bold z-10 hover:text-csrcdark"
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
