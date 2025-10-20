import ButtonRight from "@/components/shared/buttons/ButtonRight";
import ButtonLeft from "@/components/shared/buttons/ButtonLeft";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <section className="bg-csrclight bg-background_05 relative flex h-[325px] flex-col items-center justify-center gap-4 bg-cover bg-center px-5 py-4 sm:px-10 md:h-[520px] md:lg:px-15 xl:px-20">
        <div className="animate-fade animate-once animate-ease-in-out after:bg-bubble_electric flex h-[249px] w-[360px] flex-col items-start justify-center gap-3 after:absolute after:bottom-0 after:h-[249px] after:w-[360px] after:bg-cover after:bg-no-repeat sm:h-[302px] sm:w-[436px] sm:after:-bottom-6 sm:after:h-[302px] sm:after:w-[436px] md:h-[526px] md:w-[760px] md:after:-bottom-12 md:after:h-[526px] md:after:w-[760px]">
          <h1 className="text-csrcdark z-10 w-[300px] pt-8 pl-12 text-[1.5rem] leading-none sm:w-[380px] sm:pl-14 sm:text-3xl md:w-[590px] md:pb-8 md:pl-28 md:text-5xl">
            Discover <strong>new comics</strong> and <strong>directly</strong>{" "}
            support the artists who make it
          </h1>
          <Link
            className="group text-csrcblue z-10 flex items-center pl-12 font-bold transition duration-1000 ease-in-out sm:pl-14 md:pl-28"
            href="/catalog"
          >
            <span className="group-hover:text-csrcdark">CHECK OUR CATALOG</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10.1 20"
              fill="currentColor"
              className="size-5 translate-x-2 opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path
                fillRule="evenodd"
                d="m0 18.3 6.7-8.3-6.7-8.3 2.1-1.7 8 10-8 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <Image
          src="/assets/images/comics-src-hero-character.svg"
          alt="Fan-Hero"
          width={280}
          height={350}
          className="invisible absolute bottom-0 sm:visible sm:right-[28px] sm:h-[200px] md:right-[10px] md:h-[350px] lg:right-[120px] xl:right-[242px]"
        ></Image>
      </section>
      <section className="bg-csrcblue sm:bg-background_03 flex h-[325px] flex-col justify-center bg-right bg-no-repeat px-5 py-4 sm:px-10 md:h-[520px] md:lg:px-15 xl:px-60">
        <div className="flex items-center">
          <div className="flex flex-col gap-4 md:w-3/5 md:gap-6">
            <h1 className="text-csrcyellow text-2xl sm:text-3xl md:text-5xl">
              Your <strong>definitive source</strong> for independent comics
            </h1>
            <p className="text-csrcdark text-sm md:w-[434px] md:text-base">
              As a fan, stay up to date about your favorite authors and purchase
              exclusive merchandise, get access to original art and of course,
              comics!
            </p>
            <Link href="/fan">
              <ButtonRight>Read more</ButtonRight>
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
      <section className="bg-csrcyellow sm:bg-background_07 flex h-[325px] flex-col justify-center bg-left bg-no-repeat px-5 py-4 sm:px-10 md:h-[520px] md:lg:px-15 xl:px-60">
        <div className="flex items-center">
          <div className="order-2 flex flex-col items-end gap-4 md:w-3/5 md:gap-6">
            <h1 className="text-csrcblue text-right text-2xl sm:text-3xl md:w-[590px] md:text-5xl">
              A showcase for art that didn&apos;t earn in{" "}
              <strong>exposure</strong>
            </h1>
            <p className="text-csrcdark text-right text-sm md:w-[434px] md:text-base">
              As an author create the right marketplace for your works with
              total control over your art, merchandise and pricing.
            </p>
            <Link href="/author">
              <ButtonLeft>Read more</ButtonLeft>
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
      <section className="bg-csrcblue sm:bg-background_09 flex h-[325px] flex-col justify-center gap-4 bg-right bg-no-repeat px-5 py-4 sm:px-10 md:h-[520px] md:lg:px-15 xl:px-60">
        <div className="flex items-center">
          <div className="flex flex-col gap-4 md:w-3/5 md:gap-6">
            <h1 className="text-csrcyellow text-2xl sm:text-3xl md:max-w-[530px] md:text-5xl">
              A <strong>specialised</strong> niche market selling point
            </h1>
            <p className="text-csrcdark text-sm md:w-[434px] md:text-base">
              Diversify the scope of your products with customers that are
              closer to the authors and already willing to support their work.
            </p>
            <Link href="/publisher">
              <ButtonRight>Read more</ButtonRight>
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
