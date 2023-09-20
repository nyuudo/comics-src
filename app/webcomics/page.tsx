import Image from "next/image";
import getWebComics from "@/lib/getWebComics";
export default async function WebComics() {
  const webComics = getWebComics();
  const webComicIssue = await webComics;
  return (
    <main className="bg-background_01 bg-no-repeat py-6 xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      {webComicIssue?.map((issue) => (
        <a key={issue.webcomic_id} href={`/webcomics/${issue.webcomic_id}`}>
          <h1 className="text-3xl">{issue.webcomic_title}</h1>
          <Image
            src={issue.webcomic_cover}
            alt={issue.webcomic_title}
            width={320}
            height={512}
          ></Image>
          <p>{issue.webcomic_author}</p>
          <p>{issue.webcomic_description}</p>
          <p>{issue.webcomic_year}</p>
        </a>
      ))}
    </main>
  );
}
