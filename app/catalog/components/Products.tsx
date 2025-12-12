import Image from "next/image";
import Link from "next/link";
import getPublishersProduct from "@/lib/getPublishersProduct";

export default async function Products() {
  const publishersProduct = getPublishersProduct();
  const products = await publishersProduct;
  const latestProducts = products?.reverse().slice(0, products.length - 1);
  return (
    <section className="relative z-10 flex w-full flex-col items-center bg-background_01 bg-no-repeat py-20 xs:px-5 sm:px-10 md:lg:px-15 xl:px-20">
      <div className="relative mb-4 flex items-center justify-center">
        <h3 className="z-10 my-4 mb-10 text-center text-2xl font-bold text-csrclight after:absolute after:left-2/4 after:top-2/4 after:-z-10 after:h-23.5 after:w-[320px] after:-translate-x-2/4 after:-translate-y-2/4 after:bg-bubble_flag after:bg-no-repeat md:text-3xl">
          Latest Comics
        </h3>
      </div>

      <div className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-2">
        {latestProducts?.map((result) => (
          <Link
            className="group relative flex flex-col gap-4 rounded-sm bg-white p-6 transition duration-300 ease-in-out after:absolute after:-inset-2 after:left-2 after:top-2 after:-z-10 after:hidden after:bg-mock_offset_02 hover:bg-csrcblue hover:after:block"
            key={result.product_id}
            href={`/catalog/${result.product_id}`}
          >
            <h1 className="text-center text-2xl font-bold text-csrcblue group-hover:text-csrcyellow md:text-left md:text-3xl">
              {result.product_title}
            </h1>
            <div className="flex flex-col gap-4 md:flex-row">
              <Image
                src={result.product_cover}
                alt={result.product_title}
                width={160}
                height={266}
                className="mx-auto h-66.5 w-40 group-hover:drop-shadow-md"
              ></Image>
              <div className="flex flex-col md:justify-between">
                <p className="text-sm text-csrcdark/50 group-hover:text-white group-hover:drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                  {result.product_description}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-csrcdark group-hover:text-white">
                    {result.genre?.genre_name}
                  </p>
                  <p className="text-sm text-csrcdark group-hover:text-white">
                    {result.publisher?.publisher_name}
                  </p>
                  <p className="text-xs font-bold text-csrcdark">
                    {result.product_year}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
