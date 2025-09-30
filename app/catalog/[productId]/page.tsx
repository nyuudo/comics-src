import Image from "next/image";
import type { Metadata } from "next";
import getUserSession from "@/lib/getUserSession";
import type { CatalogProductProps } from "@/types/comics-src-types";
import getPublishersProductId from "@/lib/getPublishersProductId";
import getPublishersProduct from "@/lib/getPublishersProduct";
import Recommended from "../components/Recommended";
import AddButton from "@/components/shared/buttons/AddButton";
import LikedByCommunity from "@/components/feature/LikedByCommunity";
import { addFollower } from "@/store/communitySlice";

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
  const { data } = await getUserSession();
  const userId = data.user?.id;
  const role = data.user?.user_metadata?.user_role;

  console.log("BEFORE AddButton", { productId, userId, role });

  return (
    <div className="flex flex-col justify-between md:flex-row">
      <main className="selection:bg-csrcblue flex bg-white px-5 selection:text-white md:w-5/6 lg:w-1/2 md:lg:px-[3.75rem] xl:px-20">
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
                  className="h-[266px] w-[160px]"
                ></Image>
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
              <hr className="border-csrcdark/15 border-1" />
              <LikedByCommunity productId={result.product_id.toString()} />
            </div>
          ))}
        </section>
      </main>
      <Recommended />
    </div>
  );
}
