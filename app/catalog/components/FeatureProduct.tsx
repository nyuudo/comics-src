import ButtonRight from "@/components/shared/buttons/ButtonRight";
import Link from "next/link";
export default async function FeatureProduct() {
  return (
    <section className="relative z-10 flex h-[325px] flex-col justify-center gap-6 bg-[url('https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-sample-highlight.webp')] bg-cover bg-center bg-no-repeat before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-10 before:h-[325px] before:bg-gradient-to-r before:from-csrcblue before:from-35% before:via-csrcblue before:via-70% before:to-csrclight/0 before:to-95% xs:px-5 sm:px-10 md:h-[520px] before:md:h-[520px] before:md:w-[520px] md:lg:px-[3.75rem] xl:px-20">
      <h1 className="text-3xl font-bold text-csrclight md:text-5xl">
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
