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
  const publishersProductId = getPublishersProductId(productId);
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
  const publishersProductId = getPublishersProductId(productId);
  const products = await publishersProductId;

  return (
    <>
      <main className="flex flex-col xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-60 justify-center gap-4 bg-white p-4 selection:bg-csrcblue selection:text-white">
        <section>
          {products?.map((result) => (
            <div
              className="flex flex-col gap-4 rounded p-6"
              key={result.product_id}
            >
              <h1 className="text-2xl md:text-3xl text-csrcblue font-bold">
                {result.product_title}
              </h1>
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  src={result.product_cover}
                  alt={result.product_title}
                  width={160}
                  height={266}
                  className="w-[160px] h-[266px]"
                ></Image>
                <div className="flex flex-col md:justify-between">
                  <p className="text-csrcdark">{result.product_description}</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-csrcdark text-xs">
                      {result.product_genre}
                    </p>
                    <p className="text-csrcdark text-sm">
                      {result.product_publisher}
                    </p>
                    <p className="text-csrcdark text-xs font-bold">
                      {result.product_year}
                    </p>
                    <button className="flex gap-x-2 max-w-[200px] justify-center items-center text-csrclight font-bold tracking-wider bg-csrcblue disabled:bg-csrcdark/50 py-2 rounded transition duration-300 delay-150 hover:delay-150 hover:bg-csrcdark">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="m21.111 7.99689a2.14517 2.14517 0 0 0 -2.111-1.99689h-2c0-3.31372-2.23859-6-5-6s-5 2.68628-5 6h-2a2.14517 2.14517 0 0 0 -2.111 1.99689l-.778 14.00616a1.87565 1.87565 0 0 0 1.889 1.99695h16a1.87565 1.87565 0 0 0 1.889-1.99695zm-9.111-6.49689c1.933 0 3.5 2.01471 3.5 4.5h-7c0-2.48529 1.567-4.5 3.5-4.5z" />
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
    </>
  );
}
