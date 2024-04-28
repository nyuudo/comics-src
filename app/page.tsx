import Button from "@/components/shared/buttons/Button";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <section className="relative flex h-[325px] flex-col items-center justify-center gap-4 bg-csrclight bg-background_05 bg-cover bg-center p-4 xs:px-5 sm:px-10 md:h-[520px] md:lg:px-[3.75rem] xl:px-20">
        <div className="flex animate-fade flex-col items-start justify-center gap-3 animate-once animate-ease-in-out after:absolute after:bg-bubble_electric after:bg-cover after:bg-no-repeat xs:h-[249px] xs:w-[360px] after:xs:-bottom-0 after:xs:h-[249px] after:xs:w-[360px] sm:h-[302px] sm:w-[436px] after:sm:-bottom-6 after:sm:h-[302px] after:sm:w-[436px] md:h-[526px] md:w-[760px] after:md:-bottom-12 after:md:h-[526px] after:md:w-[760px]">
          <h1 className="z-10 w-[300px] pl-12 pt-8 text-[1.5rem] leading-6 text-csrcdark sm:w-[380px] sm:pl-14 sm:text-3xl md:w-[590px] md:pb-8 md:pl-28 md:text-5xl">
            Discover <strong>new comics</strong> and <strong>directly</strong>{" "}
            support the artists who make it
          </h1>
          <Link
            href="/catalog"
            className="z-10 pl-12 text-sm font-bold text-csrcdark after:invisible after:inline-block after:h-[32px] after:w-[16.2px] after:pl-1 after:align-middle after:content-link hover:text-csrcblue hover:after:visible sm:pl-14 md:pl-28 md:text-base"
          >
            CHECK OUR CATALOG
          </Link>
        </div>
        <Image
          src="/assets/images/comics-src-hero-character.svg"
          alt="Fan-Hero"
          width={280}
          height={350}
          className="absolute bottom-[0px] xs:invisible sm:visible sm:right-[28px] sm:h-[200px] md:right-[10px] md:h-[350px] lg:right-[120px] xl:right-[242px]"
        ></Image>
      </section>
      <section className="flex h-[325px] flex-col justify-center bg-csrcblue bg-right bg-no-repeat p-4 xs:px-5 sm:bg-background_03 sm:px-10 md:h-[520px] md:lg:px-[3.75rem] xl:px-60">
        <div className="flex items-center">
          <div className="flex flex-col gap-4 md:w-3/5 md:gap-6">
            <h1 className="text-2xl text-csrcyellow sm:text-3xl md:text-5xl">
              Your <strong>definitive source</strong> for independent comics
            </h1>
            <p className="text-sm text-csrcdark md:w-[434px] md:text-base">
              As a fan, stay up to date about your favorite authors and purchase
              exclusive merchandise, get access to original art and of course,
              comics!
            </p>
            <Link href="/fan">
              <Button>Read more</Button>
            </Link>
          </div>
          <div className="flex justify-center md:w-2/5">
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
      <section className="flex h-[325px] flex-col justify-center bg-csrcyellow bg-left bg-no-repeat p-4 xs:px-5 sm:bg-background_07 sm:px-10 md:h-[520px] md:lg:px-[3.75rem] xl:px-60">
        <div className="flex items-center">
          <div className="order-2 flex flex-col items-end gap-4 md:w-3/5 md:gap-6">
            <h1 className="text-right text-2xl text-csrcblue sm:text-3xl md:w-[590px] md:text-5xl">
              A showcase for art that didn&apos;t earn in{" "}
              <strong>exposure</strong>
            </h1>
            <p className="text-right text-sm text-csrcdark md:w-[434px] md:text-base">
              As an author create the right marketplace for your works with
              total control over your art, merchandise and pricing.
            </p>
            <Link href="/author">
              <Button>Read more</Button>
            </Link>
          </div>
          <div className="order-1 flex justify-center md:w-2/5">
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
      <section className="flex h-[325px] flex-col justify-center gap-4 bg-csrcblue bg-right bg-no-repeat p-4 xs:px-5 sm:bg-background_09 sm:px-10 md:h-[520px] md:lg:px-[3.75rem] xl:px-60">
        <div className="flex items-center">
          <div className="flex flex-col gap-4 md:w-3/5 md:gap-6">
            <h1 className="text-2xl text-csrcyellow sm:text-3xl md:max-w-[530px] md:text-5xl">
              A <strong>specialised</strong> niche market selling point
            </h1>
            <p className="text-sm text-csrcdark md:w-[434px] md:text-base">
              Diversify the scope of your products with customers that are
              closer to the authors and already willing to support their work.
            </p>
            <Link href="/publisher">
              <Button>Read more</Button>
            </Link>
          </div>
          <div className="flex justify-center md:w-2/5">
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
