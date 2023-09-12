import Button from "@/components/shared/buttons/Button";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <section className="relative flex flex-col justify-center items-center gap-4 bg-csrclight p-4 h-[325px] md:h-[520px] xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-background_05 bg-center bg-cover">
        <div className="flex flex-col items-start justify-center xs:w-[360px] xs:h-[249px] sm:w-[436px] sm:h-[302px] md:w-[760px] md:h-[526px] after:block after:absolute after:bg-bubble_electric after:bg-cover after:bg-no-repeat after:xs:w-[360px] after:xs:h-[249px] after:sm:w-[436px] after:sm:h-[302px] after:sm:-bottom-6 after:md:w-[760px] after:md:h-[526px] after:md:-bottom-12 animate-fade animate-once animate-ease-in-out">
          <h1 className="text-csrcdark text-3xl sm:text-4xl sm:pl-14 md:text-5xl md:w-[590px] md:pb-8 md:pl-28 z-10">
            Discover <span className="font-bold">new comics</span> and{" "}
            <span className="font-bold">directly</span> support the artists who
            make it
          </h1>
          <Link
            href="/about"
            className="text-csrcdark font-bold sm:pl-14 md:pl-28 z-10 hover:text-csrcblue after:invisible after:content-['_⟩'] hover:after:visible"
          >
            READ MORE
          </Link>
        </div>
        <Image
          src="/assets/images/comics-scr-hero-character.svg"
          alt="Fan-Hero"
          width={280}
          height={350}
          className="absolute bottom-[0px] right-[242px]"
        ></Image>
      </section>
      <section className="flex flex-col justify-center bg-csrcblue p-4 h-[325px] md:h-[520px] xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-background_03 bg-right bg-no-repeat">
        <div className="flex items-center">
          <div className="flex flex-col gap-6 md:w-1/2">
            <h1 className="text-csrcdark text-3xl sm:text-4xl md:text-5xl">
              Your <span className="font-bold">definitive source</span> for
              independent comics
            </h1>
            <p className="text-csrcdark">
              As a fan, stay up to date about your favorite authors and purchase
              exclusive merchandise, get access to original art and of course,
              comics!
            </p>
            <Button>Read more</Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/assets/images/comics-src-fan.svg"
              alt="Fan"
              width={320}
              height={336}
              className="animate-fade-left animate-once animate-ease-in-out"
            ></Image>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center bg-csrcyellow p-4 h-[325px] md:h-[520px] xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-background_07 bg-left bg-no-repeat">
        <div className="flex items-center">
          <div className="md:w-1/2 flex flex-col items-end gap-6 order-2">
            <h1 className="text-csrcdark text-3xl sm:text-4xl md:text-5xl md:w-[590px] text-right">
              A showcase for your art that{" "}
              <span className="font-bold">didn&apos;t earn</span> in exposure
            </h1>
            <p className="text-csrcdark md:w-[434px] text-right">
              As an author create the right marketplace for your works with
              total control over your art, merchandise and pricing.
            </p>
            <Button>Read more</Button>
          </div>
          <div className="md:w-1/2 flex justify-center order-1">
            <Image
              src="/assets/images/comics-src-author.svg"
              alt="Author"
              width={280}
              height={380}
              className="animate-fade-right animate-once animate-ease-in-out"
            ></Image>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center gap-4 bg-csrcblue p-4 h-[325px] md:h-[520px] xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 bg-background_09 bg-right bg-no-repeat">
        <div className="flex items-center">
          <div className="md:w-1/2 flex flex-col gap-6">
            <h1 className="text-csrcdark text-3xl sm:text-4xl md:text-5xl md:w-[590px]">
              A <span className="font-bold">specialized</span> niche market
              selling point
            </h1>
            <p className="text-csrcdark md:w-[434px]">
              Stay up to date about your favorite authors and purchase exclusive
              merchandise, get access to original art and of course, comics!
            </p>
            <Button>Read more</Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/assets/images/comics-src-publisher.svg"
              alt="Publisher"
              width={200}
              height={368}
              className="animate-fade-left animate-once animate-ease-in-out"
            ></Image>
          </div>
        </div>
      </section>
    </main>
  );
}
