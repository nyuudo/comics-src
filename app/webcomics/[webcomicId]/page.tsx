import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import getUserSession from "@/lib/getUserSession";
import RecommendedWebComic from "../components/RecommendedWebComic";
import type { WebComicsProps } from "@/types/comics-src-types";
import getWebComicsId from "@/lib/getWebComicsId";

export default async function WebComic({ params }: WebComicsProps) {
  const { webcomicId } = (await params) as { webcomicId?: string };

  if (!webcomicId) {
    return notFound();
  }

  const id = Number(webcomicId);
  if (Number.isNaN(id)) {
    return notFound();
  }

  const webComicsPromise = getWebComicsId(id);
  const webComics = await webComicsPromise;

  if (!webComics || webComics.length === 0) {
    return notFound();
  }

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
              />
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
