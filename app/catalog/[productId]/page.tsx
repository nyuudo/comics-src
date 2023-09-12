import type { CatalogProductProps } from "@/types/comics-src-types";
import client from "@/database/client";

export const metadata = {
  title: "Product",
};
export async function generateStaticParams() {
  const products = await client.from("Publishers Product").select();
  return products.data?.map((product) => ({
    productId: product.product_id.toString,
  }));
}
export default function CatalogProduct({ params }: CatalogProductProps) {
  const { productId } = params;
  return (
    <>
      <main className="flex flex-col xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 justify-center gap-4 bg-csrclight p-4 selection:bg-csrcblue selection:text-white">
        <h1>This is Product {productId}</h1>
      </main>
    </>
  );
}
