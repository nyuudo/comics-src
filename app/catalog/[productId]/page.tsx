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
      <main className="flex flex-col justify-center gap-4 bg-white p-4 selection:bg-csrcblue selection:text-white xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-60">
        <section>
          {products?.map((result) => (
            <div
              className="flex flex-col gap-4 rounded p-6"
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
                      {result.product_genre}
                    </p>
                    <p className="text-sm text-csrcdark">
                      {result.product_publisher}
                    </p>
                    <p className="text-xs font-bold text-csrcdark">
                      {result.product_year}
                    </p>
                    <button className="flex max-w-[200px] items-center justify-center gap-x-2 rounded bg-csrcblue py-2 font-bold tracking-wider text-csrclight transition delay-150 duration-300 hover:bg-csrcdark hover:delay-150 disabled:bg-csrcdark/50">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
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
