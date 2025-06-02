import Image from "next/image";
import getWebComics from "@/lib/getWebComics";

export default async function RecommendedWebComic() {
  const webComics = getWebComics();
  const products = await webComics;
  const randomProducts = products?.sort(() => Math.random() - 0.5).slice(0, 3);
  return (
    <section className="bg-csrcyellow">
      <h2 className="text-csrcblue py-4 text-center text-2xl font-bold">
        You may also like...
      </h2>
      <div className="flex flex-wrap content-between items-center justify-center gap-1">
        {randomProducts?.map((result) => (
          <a
            className="p-4"
            key={result.webcomic_id}
            href={`/webcomics/${result.webcomic_id}`}
          >
            <Image
              src={result.webcomic_cover}
              alt={result.webcomic_title}
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
