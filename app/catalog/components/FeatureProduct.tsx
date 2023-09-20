import Button from "@/components/shared/buttons/Button";
import Link from "next/link";
export default async function FeatureProduct() {
  return (
    <section className="flex flex-col justify-center gap-6 relative z-10 bg-[url('https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-sample-highlight.webp')] bg-center bg-cover bg-no-repeat h-[325px] md:h-[520px] xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 before:absolute before:bg-gradient-to-r before:from-csrcblue before:from-35% before:via-csrcblue before:via-70% before:to-csrclight/0 before:to-95% before:-z-10 before:h-[325px] before:md:h-[520px] before:md:w-[520px] before:top-0 before:right-0 before:bottom-0 before:left-0">
      <h1 className="font-bold text-3xl md:text-5xl text-csrclight">
        Featured comic issue
      </h1>
      <p className="text-csrcdark">
        Description of the plot or main features of the featured comic
      </p>
      <Link href="/catalog/3">
        <Button>More Info</Button>
      </Link>
    </section>
  );
}
