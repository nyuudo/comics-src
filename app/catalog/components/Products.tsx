import Image from "next/image";
import getPublishersProduct from "@/lib/getPublishersProduct";
export default async function Products() {
  const publishersProduct = getPublishersProduct();
  const products = await publishersProduct;
  const latestProducts = products?.reverse()?.slice(0, products.length - 1);
  return (
    <section className="grid xs:grid-cols-1 md:grid-cols-2 auto-rows-auto gap-4 bg-background_01 bg-no-repeat py-20 xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      {latestProducts?.map((result) => (
        <a
          className="flex flex-col gap-4 rounded bg-gradient-to-t from-csrclight to-white/50 p-6 hover:bg-white hover:shadow-md"
          key={result.product_id}
          href={`/catalog/${result.product_id}`}
        >
          <h1 className="text-2xl md:text-3xl text-csrcblue font-semibold">
            {result.product_title}
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <Image
              src={result.product_cover}
              alt={result.product_title}
              width={160}
              height={266}
              className="w-[160px] h-[266px]"
              //placeholder="blur"
              //blurDataURL={""}
            ></Image>
            <div className="flex flex-col md:justify-between">
              <p className="text-csrcdark">{result.product_description}</p>
              <div className="flex flex-col gap-2">
                <p className="text-csrcdark text-xs">{result.product_genre}</p>
                <p className="text-csrcdark text-sm">
                  {result.product_publisher}
                </p>
                <p className="text-csrcdark text-xs font-bold">
                  {result.product_year}
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
