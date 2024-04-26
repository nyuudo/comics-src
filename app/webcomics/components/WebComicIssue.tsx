import Image from "next/image";
import getWebComics from "@/lib/getWebComics";
export default async function WebComicIssue() {
  const webComics = getWebComics();
  const webComicIssue = await webComics;
  const latestComics = webComicIssue?.reverse().slice(0, 3);

  return (
    <section className=" bg-background_02 bg-no-repeat bg-bottom bg-auto py-20 px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      <div className="relative flex justify-center items-center mb-4">
        <h3 className="text-2xl mb-10 text-csrclight md:text-3xl font-bold text-center my-4 z-10 after:absolute after:bg-bubble_flag after:w-[320px] after:h-[94px] after:bg-no-repeat after:-translate-x-2/4 after:-translate-y-2/4 after:left-2/4 after:top-2/4 after:-z-10">
          Latest WebComics
        </h3>
      </div>
      <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-3">
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
      </div>
    </section>
  );
}
