import Image from "next/image";
import getWebComics from "@/lib/getWebComics";
export default async function WebComicIssue() {
  const webComics = getWebComics();
  const webComicIssue = await webComics;
  const latestComics = webComicIssue?.reverse();

  return (
    <section className="grid gap-x-8 gap-y-4 md:grid-cols-3 bg-background_02 bg-no-repeat bg-bottom bg-auto py-20 xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      {latestComics?.map((issue) => (
        <a
          className="group transition duration-300 ease-in-out hover:bg-white p-8 rounded"
          key={issue.webcomic_id}
          href={`/webcomics/${issue.webcomic_id}`}
        >
          <h1 className="text-3xl text-csrcblue font-bold text-center">
            {issue.webcomic_title}
          </h1>
          <Image
            src={issue.webcomic_cover}
            alt={issue.webcomic_title}
            width={270}
            height={432}
            className="mx-auto py-4 group-hover:drop-shadow-md"
          ></Image>
          <p className="text-csrcdark font-bold my-4">
            {issue.webcomic_author}
          </p>
          <p className="text-csrcdark/50 text-sm my-4">
            {issue.webcomic_description}
          </p>
          <p className="text-csrcdark font-bold">{issue.webcomic_year}</p>
        </a>
      ))}
    </section>
  );
}
