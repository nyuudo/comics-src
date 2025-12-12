import Community from "@/components/feature/Community";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="bg-csrcyellow">
      <section className="relative flex h-150 flex-col items-center justify-center gap-4 px-5 sm:px-10 md:h-130 md:lg:px-15 xl:px-20">
        <div className="after:bg-bubble_small md:after:bg-bubble_main flex flex-col items-center justify-center after:absolute after:bottom-2 after:h-135.5 after:w-89 after:bg-cover after:bg-no-repeat md:after:bottom-7.5 md:after:h-103.5 md:after:w-190">
          <div className="z-10 mx-auto max-w-87.5 px-6 md:max-w-147.5 md:px-0">
            <h1 className="text-csrcblue z-10 text-center text-3xl font-bold md:pb-6 md:text-5xl">
              About
            </h1>
            <p className="z-10 text-center wrap-break-word">
              Comics are one of the most <strong>versatile</strong> and{" "}
              <strong>dynamic</strong> forms of expression in our culture,
              getting more and more attention every year. Recently classic and
              new comics have become one of the <strong>key factors</strong> in
              the creation of original media.
            </p>
            <p className="z-10 text-center wrap-break-word">
              Despite what seems to be an inexhaustible source of content for
              culture, society and markets, what authors receive as compensation
              is <strong>disproportionately less</strong> than their
              contribution. This project aims to correct that.
            </p>
            <p className="z-10 text-center wrap-break-word">
              This is{" "}
              <Link
                href="/catalog"
                className="text-csrcblue hover:text-csrcdark z-10 py-4 font-bold"
              >
                COMICS/
                <span className="align-text-top text-[0.66666666666875rem]">
                  SRC
                </span>
              </Link>{" "}
              : comics closer to the source.
            </p>
          </div>
        </div>
      </section>
      <section id="community">
        <Community />
      </section>
    </main>
  );
}
