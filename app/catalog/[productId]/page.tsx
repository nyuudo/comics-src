import Image from "next/image";
import type { Metadata } from "next";
import type { CatalogProductProps } from "@/types/comics-src-types";
import getPublishersProductId from "@/lib/getPublishersProductId";
import getPublishersProduct from "@/lib/getPublishersProduct";

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
    <main className="flex flex-col xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 justify-center gap-4 bg-white p-4 selection:bg-csrcblue selection:text-white">
      <section>
        {products?.map((result) => (
          <div
            className="flex flex-col gap-4 rounded bg-gradient-to-t from-csrclight to-white/50 p-6"
            key={result.product_id}
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
                  <p className="text-csrcdark text-xs">
                    {result.product_genre}
                  </p>
                  <p className="text-csrcdark text-sm">
                    {result.product_publisher}
                  </p>
                  <p className="text-csrcdark text-xs font-bold">
                    {result.product_year}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
