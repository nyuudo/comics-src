import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-csrcyellow p-4">
      <section className="relative flex flex-col justify-center items-center gap-4 p-4 h-[325px] md:h-[520px] xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
        <div className="flex flex-col items-center justify-center after:absolute after:bg-bubble_main after:bg-cover after:bg-no-repeat after:sm:w-[557px] after:sm:h-[301px] after:md:w-[760px] after:md:h-[414px]">
          <h1 className="text-csrcblue text-center font-semibold text-3xl sm:text-4xl sm:pb-4 md:text-5xl md:w-[590px] md:pb-6 z-10">
            About
          </h1>
          <p className="md:w-[590px] z-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <Link
            href="/catalog"
            className="text-csrcblue py-4 font-bold z-10 hover:text-csrcdark after:invisible after:content-['_⟩'] hover:after:visible"
          >
            CHECK OUR CATALOG
          </Link>
        </div>
      </section>
    </main>
  );
}
