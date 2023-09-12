import Image from "next/image";
import getBase64 from "@/lib/getBase62";
import client from "@/database/client";
import Button from "@/components/shared/buttons/Button";

export const metadata = {
  title: "Catalog",
};

export default async function Catalog() {
  const { data } = await client.from("Publishers Product").select();
  /*   const dataUrl = await client
    .from("Publishers Product")
    .select("product_cover");

  const imageUrl = dataUrl || "";
  const updateImage = await getBase64(imageUrl); */

  return (
    <main className="selection:bg-csrcblue selection:text-white">
      <section className="flex flex-col justify-center bg-csrclight bg-[url('https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-sample-highlight.webp')] bg-center h-[325px] md:h-[520px] xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 ">
        <h1 className="font-bold text-3xl md:text-5xl text-csrclight">
          Cómic destacado
        </h1>
        <Button>Purchase</Button>
      </section>
      <section className="bg-csrclight py-4 xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
        {data?.map((result) => (
          <div key={result.product_id}>
            <h1>{result.product_title}</h1>
            <p>{result.product_description}</p>
            <p>{result.product_genre}</p>
            <Image
              src={result.product_cover}
              alt={result.product_title}
              width={160}
              height={266}
              //placeholder="blur"
              //blurDataURL={""}
            ></Image>
            <p>{result.product_publisher}</p>
            <p>{result.product_year}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
