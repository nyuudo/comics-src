import Image from "next/image";
import getPublishersProduct from "@/lib/getPublishersProduct";
export default async function Recommended() {
  const publishersProduct = getPublishersProduct();
  const products = await publishersProduct;
  const randomProducts = products?.sort(() => Math.random() - 0.5);
  return (
    <section className="bg-csrcyellow">
      <h2 className="text-csrcblue text-3xl font-bold text-center py-4">
        You may also like...
      </h2>
      <div className="flex items-center justify-center gap-12 flex-wrap content-between">
        {randomProducts?.map((result) => (
          <a
            className="p-4"
            key={result.product_id}
            href={`/catalog/${result.product_id}`}
          >
            <Image
              src={result.product_cover}
              alt={result.product_title}
              width={60}
              height={99}
              className="group-hover:drop-shadow-md"
            ></Image>
          </a>
        ))}
      </div>
    </section>
  );
}
