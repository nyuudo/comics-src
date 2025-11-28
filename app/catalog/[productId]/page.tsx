import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import getUserSession from "@/lib/getUserSession";
import type { CatalogProductProps } from "@/types/comics-src-types";
import getPublishersProductId from "@/lib/getPublishersProductId";
import getPublishersProduct from "@/lib/getPublishersProduct";
import Recommended from "../components/Recommended";
import AddButton from "@/components/shared/buttons/AddButton";
import LikedByCommunity from "@/components/feature/LikedByCommunity";

/**
 * Notes:
 * - Next may give `params` as a Promise. We `await params` before destructuring.
 * - We validate numeric id conversions and bail with `notFound()` if invalid to avoid sending NaN to the DB.
 * - `generateMetadata` also awaits `params` and performs safe lookup for title/description.
 */

export async function generateMetadata({
  params,
}: CatalogProductProps): Promise<Metadata> {
  // unwrap params (params may be a Promise)
  const { productId } = (await params) as { productId?: string };

  // validate
  if (!productId) {
    return {
      title: "Product",
      description: "Product not found",
    };
  }

  const id = Number(productId);
  if (Number.isNaN(id)) {
    return {
      title: "Product",
      description: "Product not found",
    };
  }

  // load the product list for metadata lookup (defensive)
  const publishersProductId = getPublishersProductId(id);
  const products = await publishersProductId;
  const product = products?.find((item) => item.product_id === id);

  return {
    title: product?.product_title ?? "Product",
    description: product
      ? `This is the page for the ${product.product_title}`
      : "Product not found",
  };
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const publishersProduct = getPublishersProduct();
  const products = await publishersProduct;
  return (
    products?.map((product) => ({
      productId: product.product_id.toString(),
    })) ?? []
  );
}

export default async function CatalogProduct({ params }: CatalogProductProps) {
  // unwrap params safely (params may be a Promise)
  const { productId } = (await params) as { productId?: string };

  // Guard: missing or invalid productId
  if (!productId) {
    return notFound();
  }

  const id = Number(productId);
  if (Number.isNaN(id)) {
    // prevents NaN going to the DB or downstream functions
    return notFound();
  }

  // fetch products for this publisher/product id
  const publishersProductId = getPublishersProductId(id);
  const products = await publishersProductId;

  // if nothing returned, 404
  if (!products || products.length === 0) {
    return notFound();
  }

  // user session (may be undefined - handled by components)
  const { data } = await getUserSession();
  const userId = data?.user?.id;
  const role = data?.user?.user_metadata?.user_role;

  return (
    <div className="flex flex-col justify-between md:flex-row">
      <main className="selection:bg-csrcblue flex bg-white px-5 selection:text-white md:w-5/6 lg:w-1/2 md:lg:px-15 xl:px-20">
        <section>
          {products?.map((result) => (
            <div
              className="flex flex-col gap-4 rounded-sm py-6"
              key={result.product_id}
            >
              <h1 className="text-csrcblue text-2xl font-bold md:text-3xl">
                {result.product_title}
              </h1>
              <div className="flex flex-col gap-4 pb-2 md:flex-row">
                <Image
                  src={result.product_cover}
                  alt={result.product_title}
                  width={160}
                  height={266}
                  className="h-[266px] w-40"
                />
                <div className="flex flex-col md:justify-between">
                  <p className="text-csrcdark text-sm wrap-normal">
                    {result.product_description}
                  </p>
                  <div className="flex flex-col gap-1 py-2">
                    <p className="text-csrcblue text-xs">
                      {result.genre?.genre_name}
                    </p>
                    <p className="text-csrcdark/35 text-sm">
                      {result.publisher?.publisher_name}
                    </p>
                    <p className="text-csrcdark/50 text-xs font-bold">
                      {result.product_year}
                    </p>
                  </div>
                  <AddButton
                    productId={result.product_id}
                    userId={userId}
                    role={role}
                  />
                </div>
              </div>
              <hr className="border-csrcdark/15 border" />
              <LikedByCommunity productId={result.product_id.toString()} />
            </div>
          ))}
        </section>
      </main>
      <Recommended />
    </div>
  );
}