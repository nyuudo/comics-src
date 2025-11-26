import ButtonRight from "@/components/shared/buttons/ButtonRight";
import Link from "next/link";
export default async function FeatureProduct() {
  return (
    <section className="bg-product_highlight before:from-csrcblue before:via-csrcblue before:to-csrclight/0 xs:px-5 relative z-10 flex h-[325px] flex-col justify-center gap-6 bg-cover bg-center bg-no-repeat before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:-z-10 before:h-[325px] before:bg-linear-to-r before:from-35% before:via-70% before:to-95% sm:px-10 md:h-[520px] md:before:h-[520px] md:before:w-[520px] md:lg:px-15 xl:px-20">
      <h1 className="text-csrclight text-3xl font-bold md:text-5xl">
        Featured comic issue
      </h1>
      <p className="text-csrcdark">
        Description of the plot or main features of the featured comic
      </p>
      <Link href="/catalog/3">
        <ButtonRight>More Info</ButtonRight>
      </Link>
    </section>
  );
}
