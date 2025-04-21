import Image from "next/image";
import type { Metadata } from "next";
import type { CatalogProductProps } from "@/types/comics-src-types";
import getPublishersProductId from "@/lib/getPublishersProductId";
import getPublishersProduct from "@/lib/getPublishersProduct";
import Recommended from "../components/Recommended";

export async function generateMetadata({
  params,
}: CatalogProductProps): Promise<Metadata> {
  const { productId } = params;
  const publishersProductId = getPublishersProductId(Number(productId));
  const products = await publishersProductId;
  const product = products?.find((item) => item.product_id);
  return {
    title: product?.product_title,
    description: `This is the page for the ${product?.product_title}`,
  };
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const publishersProduct = getPublishersProduct();
  const products = await publishersProduct;
  return products?.map((product) => ({
    productId: product.product_id.toString(),
  }));
}

export default async function CatalogProduct({ params }: CatalogProductProps) {
  const { productId } = params;
  const publishersProductId = getPublishersProductId(Number(productId));
  const products = await publishersProductId;

  return (
    <div className="flex flex-col justify-around align-middle md:flex-row">
      <main className="flex bg-white selection:bg-csrcblue selection:text-white xs:px-5 sm:px-10 md:w-5/6 lg:w-1/2 md:lg:xl:px-[3.75rem]">
        <section>
          {products?.map((result) => (
            <div
              className="flex flex-col gap-4 rounded-sm p-6"
              key={result.product_id}
            >
              <h1 className="text-2xl font-bold text-csrcblue md:text-3xl">
                {result.product_title}
              </h1>
              <div className="flex flex-col gap-4 md:flex-row">
                <Image
                  src={result.product_cover}
                  alt={result.product_title}
                  width={160}
                  height={266}
                  className="h-[266px] w-[160px]"
                ></Image>
                <div className="flex flex-col md:justify-between">
                  <p className="text-csrcdark">{result.product_description}</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-csrcdark">
                      {result.genre?.genre_name}
                    </p>
                    <p className="text-sm text-csrcdark">
                      {result.publisher?.publisher_name}
                    </p>
                    <p className="text-xs font-bold text-csrcdark">
                      {result.product_year}
                    </p>
                    <button className="flex max-w-[200px] items-center justify-center gap-x-2 rounded-sm bg-csrcblue py-2 font-bold tracking-wider text-csrclight transition delay-150 duration-300 hover:bg-csrcdark hover:delay-150 disabled:bg-csrcdark/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 4a3 3 0 0 1 6 0v1h.643a1.5 1.5 0 0 1 1.492 1.35l.7 7A1.5 1.5 0 0 1 12.342 15H3.657a1.5 1.5 0 0 1-1.492-1.65l.7-7A1.5 1.5 0 0 1 4.357 5H5V4Zm4.5 0v1h-3V4a1.5 1.5 0 0 1 3 0Zm-3 3.75a.75.75 0 0 0-1.5 0v1a3 3 0 1 0 6 0v-1a.75.75 0 0 0-1.5 0v1a1.5 1.5 0 1 1-3 0v-1Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span>ADD TO BASKET</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Recommended />
    </div>
  );
}
