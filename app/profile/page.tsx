import Image from "next/image";
import type { Metadata } from "next";
import type { ProfileProps } from "@/types/comics-src-types";
import getUserNames from "@/lib/getUserNames";
import FollowButton from "@/components/shared/buttons/FollowButton";
import Community from "@/components/feature/Community";

export default function Profile() {
  return (
    <main>
      <section className="bg-csrcdark flex flex-col items-center gap-12 px-5 py-10 sm:px-10 md:flex-row md:items-start md:gap-5 md:lg:px-[3.75rem] xl:px-20">
        <div className="flex flex-col items-center gap-3">
          <Image
            className="clip-followers min-h-32 min-w-32"
            src={"/assets/images/comics-src-profile-image.png"}
            alt="user name"
            width={128}
            height={128}
          ></Image>
          <FollowButton />
        </div>
        <div className="flex max-w-64 flex-col gap-4">
          <h1 className="text-csrcyellow text-3xl">Nombre Usuario</h1>
          <h2 className="text-csrclight/50 text-2xl">Bio</h2>
          <p className="text-csrclight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            dolorem laudantium earum rerum voluptates. Mollitia reiciendis
            magnam tenetur eveniet temporibus delectus quisquam non? Quod alias
            tempora eveniet magni quam eius!
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 md:items-start md:gap-4 md:self-start">
          <h3 className="text-csrclight/50 text-2xl">Collection</h3>
          <ul className="grid grid-flow-row grid-cols-3 gap-8 lg:grid-cols-4">
            <li>
              <Image
                src={
                  "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-cover-img-sample-01.webp"
                }
                alt={"chamullo"}
                width={80}
                height={133}
                className="max-h-[133px] max-w-[80px] transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
              ></Image>
            </li>
            <li>
              <Image
                src={
                  "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-cover-img-sample-01.webp"
                }
                alt={"chamullo"}
                width={80}
                height={133}
                className="max-h-[133px] max-w-[80px] transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
              ></Image>
            </li>
            <li>
              <Image
                src={
                  "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-cover-img-sample-01.webp"
                }
                alt={"chamullo"}
                width={80}
                height={133}
                className="max-h-[133px] max-w-[80px] transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
              ></Image>
            </li>
            <li>
              <Image
                src={
                  "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-cover-img-sample-01.webp"
                }
                alt={"chamullo"}
                width={80}
                height={133}
                className="max-h-[133px] max-w-[80px] transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
              ></Image>
            </li>
          </ul>
        </div>
      </section>
      <Community />
    </main>
  );
}
