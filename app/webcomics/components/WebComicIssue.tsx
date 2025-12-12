import Image from "next/image";
import getWebComics from "@/lib/getWebComics";
export default async function WebComicIssue() {
  const webComics = getWebComics();
  const webComicIssue = await webComics;
  const latestComics = webComicIssue?.reverse().slice(0, 3);

  return (
    <section className="bg-background_02 bg-auto bg-bottom bg-no-repeat px-5 py-20 sm:px-10 md:lg:px-15 xl:px-20">
      <div className="relative mb-4 flex items-center justify-center">
        <h3 className="z-10 my-4 mb-10 text-center text-2xl font-bold text-csrclight after:absolute after:left-2/4 after:top-2/4 after:-z-10 after:h-23.5 after:w-[320px] after:-translate-x-2/4 after:-translate-y-2/4 after:bg-bubble_flag after:bg-no-repeat md:text-3xl">
          Latest WebComics
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-3">
        {latestComics?.map((issue) => (
          <a
            className="group relative rounded-sm bg-white p-8 transition duration-300 ease-in-out after:absolute after:-inset-2 after:left-2 after:top-2 after:-z-10 after:hidden after:bg-mock_offset_02 hover:bg-csrcblue hover:after:block"
            key={issue.webcomic_id}
            href={`/webcomics/${issue.webcomic_id}`}
          >
            <h1 className="text-center text-3xl font-bold text-csrcblue group-hover:text-csrcyellow">
              {issue.webcomic_title}
            </h1>
            <Image
              src={issue.webcomic_cover}
              alt={issue.webcomic_title}
              width={190}
              height={304}
              className="mx-auto py-4 group-hover:drop-shadow-md"
            ></Image>
            <p className="my-4 font-bold text-csrcdark group-hover:text-white">
              {issue.author?.author_username}
            </p>
            <p className="my-4 text-sm text-csrcdark/50 group-hover:text-white">
              {issue.webcomic_description}
            </p>
            <p className="font-bold text-csrcdark">{issue.webcomic_year}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
