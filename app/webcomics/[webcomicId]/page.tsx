import Image from "next/image";

import type { WebComicsProps } from "@/types/comics-src-types";
import getWebComicsId from "@/lib/getWebComicsId";

export default async function WebComicIssue({ params }: WebComicsProps) {
  const { webcomicId } = params;
  const webComcicId = getWebComicsId(webcomicId);
  const webComics = await webComcicId;

  return (
    <main className="xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      <section className="flex flex-col justify-center items-center">
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
        <h2 className="text-3xl">Recomended by the Author</h2>
      </section>
    </main>
  );
}
