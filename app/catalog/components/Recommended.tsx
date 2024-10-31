import Image from "next/image";
import getPublishersProduct from "@/lib/getPublishersProduct";

export default async function Recommended() {
  const publishersProduct = getPublishersProduct();
  const products = await publishersProduct;
  const randomProducts = products?.sort(() => Math.random() - 0.5).slice(0, 4);
  return (
    <section className="bg-csrcyellow p-4">
      <h2 className="py-4 text-center text-2xl font-bold text-csrcblue">
        You may also like...
      </h2>
      <div className="flex flex-wrap content-between items-center justify-center">
        {randomProducts?.map((result) => (
          <a
            className="p-4"
            key={result.product_id}
            href={`/catalog/${result.product_id}`}
          >
            <Image
              src={result.product_cover}
              alt={result.product_title}
              width={80}
              height={133}
              className="transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
            ></Image>
          </a>
        ))}
      </div>
    </section>
  );
}
