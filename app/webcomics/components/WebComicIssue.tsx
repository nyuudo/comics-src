import Image from "next/image";
import getWebComics from "@/lib/getWebComics";
export default async function WebComicIssue() {
  const webComics = getWebComics();
  const webComicIssue = await webComics;
  const latestComics = webComicIssue?.reverse();
  //flex flex-row gap-8 bg-background_01 bg-no-repeat py-6 xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20
  //grid gap-x-8 gap-y-4 grid-cols-3
  return (
    <section className="grid gap-x-8 gap-y-4 md:grid-cols-3 bg-background_01 bg-no-repeat py-20 xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      {latestComics?.map((issue) => (
        <a
          className=""
          key={issue.webcomic_id}
          href={`/webcomics/${issue.webcomic_id}`}
        >
          <h1 className="text-3xl text-csrcblue font-semibold text-center">
            {issue.webcomic_title}
          </h1>
          <Image
            src={issue.webcomic_cover}
            alt={issue.webcomic_title}
            width={270}
            height={432}
            className="mx-auto py-4"
          ></Image>
          <p className="text-csrcdark font-bold">{issue.webcomic_author}</p>
          <p className="text-csrcdark/50 text-sm">
            {issue.webcomic_description}
          </p>
          <p className="text-csrcdark font-semibold">{issue.webcomic_year}</p>
        </a>
      ))}
    </section>
  );
}
