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
          className="group transition duration-300 bg-white ease-in-out hover:bg-csrcblue p-8 rounded after:hidden hover:after:block after:absolute after:-inset-2 after:top-2 after:left-2 after:bg-mock_offset_02 after:-z-10 relative"
          key={issue.webcomic_id}
          href={`/webcomics/${issue.webcomic_id}`}
        >
          <h1 className="text-3xl text-csrcblue font-bold text-center group-hover:text-csrcyellow">
            {issue.webcomic_title}
          </h1>
          <Image
            src={issue.webcomic_cover}
            alt={issue.webcomic_title}
            width={190}
            height={304}
            className="w-[190px] h-[304px] mx-auto py-4 group-hover:drop-shadow-md"
          ></Image>
          <p className="text-csrcdark group-hover:text-white font-bold my-4">
            {issue.webcomic_author}
          </p>
          <p className="text-csrcdark/50 group-hover:text-white text-sm my-4">
            {issue.webcomic_description}
          </p>
          <p className="text-csrcdark font-bold">{issue.webcomic_year}</p>
        </a>
      ))}
    </section>
  );
}
