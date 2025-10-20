import Image from "next/image";
import RecommendedWebComic from "../components/RecommendedWebComic";

import type { WebComicsProps } from "@/types/comics-src-types";
import getWebComicsId from "@/lib/getWebComicsId";

export default async function WebComic({ params }: WebComicsProps) {
  const { webcomicId } = params;
  const webComcicId = getWebComicsId(Number(webcomicId));
  const webComics = await webComcicId;

  return (
    <>
      <main className="px-5 sm:px-10 md:lg:px-15 xl:px-20">
        <section className="flex flex-col items-center-safe justify-center pb-18">
          {webComics?.map((issue) => (
            <div key={issue.webcomic_id}>
              <Image
                src={issue.webcomic_cover}
                alt={issue.webcomic_title}
                width={800}
                height={1280}
              ></Image>
              {issue.webcomic_images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={issue.webcomic_title}
                  width={800}
                  height={1280}
                />
              ))}
            </div>
          ))}
        </section>
      </main>
      <RecommendedWebComic />
    </>
  );
}
