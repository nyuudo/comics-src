import Image from "next/image";
import getWebComics from "@/lib/getWebComics";

export default async function RecommendedWebComic() {
  const webComics = getWebComics();
  const products = await webComics;
  const randomProducts = products?.sort(() => Math.random() - 0.5).slice(0, 4);
  return (
    <section className="bg-csrcyellow">
      <h2 className="text-csrcblue text-2xl font-bold text-center py-4">
        You may also like...
      </h2>
      <div className="flex items-center justify-center gap-12 flex-wrap content-between">
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
              className="transition duration-300 hover:delay-150 hover:drop-shadow-md hover:scale-[0.975]"
            ></Image>
          </a>
        ))}
      </div>
    </section>
  );
}
