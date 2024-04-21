import Image from "next/image";
import getPublishersProduct from "@/lib/getPublishersProduct";

export default async function Products() {
  const publishersProduct = getPublishersProduct();
  const products = await publishersProduct;
  const latestProducts = products?.reverse()?.slice(0, products.length - 1);
  return (
    <section className="flex flex-col items-center py-20 bg-background_01 bg-no-repeat z-10 w-full xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 relative">
      <h1 className="text-2xl md:text-3xl font-bold text-center my-4">
        Latest Comics
      </h1>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 auto-rows-auto gap-4">
        {latestProducts?.map((result) => (
          <a
            className="group transition duration-300 ease-in-out flex flex-col gap-4 rounded bg-white p-6 hover:bg-csrcblue after:hidden hover:after:block after:absolute after:-inset-2 after:top-2 after:left-2 after:bg-mock_offset_02 after:-z-10 relative"
            key={result.product_id}
            href={`/catalog/${result.product_id}`}
          >
            <h1 className="text-2xl md:text-3xl text-csrcblue font-bold group-hover:text-csrcyellow">
              {result.product_title}
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <Image
                src={result.product_cover}
                alt={result.product_title}
                width={160}
                height={266}
                className="w-[160px] h-[266px] group-hover:drop-shadow-md"
              ></Image>
              <div className="flex flex-col md:justify-between">
                <p className="text-csrcdark/50 text-sm group-hover:text-white group-hover:drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                  {result.product_description}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-csrcdark text-xs group-hover:text-white">
                    {result.product_genre}
                  </p>
                  <p className="text-csrcdark text-sm group-hover:text-white">
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
      </div>
    </section>
  );
}
