import Image from "next/image";
import Link from "next/link";
import FollowButton from "@/components/shared/buttons/FollowButton";

export const metadata = {
  title: "Publisher Profile",
};

export default async function PublisherProfile() {
  return (
    <main className="bg-csrcblue px-5 py-16 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      <Image
        className=""
        src="./assets/images/comics-src-profile-publisher.svg"
        width={150}
        height={50}
        alt="Publisher Logo"
      />
      <div className="flex max-w-xs flex-col gap-4">
        <p className="font-bold text-csrcyellow">Username</p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-csrcdark/50">
          <Link
            className="flex gap-1 font-bold underline decoration-dotted transition delay-150 duration-300 hover:text-csrcdark hover:no-underline"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Location</span>
          </Link>
          <Link
            className="flex gap-1 font-bold underline decoration-dotted transition delay-150 duration-300 hover:text-csrcdark hover:no-underline"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Social Media</span>
          </Link>
          <FollowButton />
        </div>
        <p
          id="bio"
          className="max-w-[250ch] overflow-hidden text-ellipsis whitespace-nowrap text-balance text-sm text-csrclight drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <div id="published-works">
          <p className="py-2 font-bold text-csrcdark/50">Published Works</p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="#">
                <Image
                  className="transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
                  src={
                    "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-cover-img-sample-01.webp"
                  }
                  alt={"Comic Sample"}
                  width={80}
                  height={133}
                ></Image>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  className="transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
                  src={
                    "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-cover-img-sample-01.webp"
                  }
                  alt={"Comic Sample"}
                  width={80}
                  height={133}
                ></Image>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  className="transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
                  src={
                    "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-cover-img-sample-01.webp"
                  }
                  alt={"Comic Sample"}
                  width={80}
                  height={133}
                ></Image>
              </Link>
            </li>
          </ul>
        </div>
        <div id="followers">
          <p className="py-2 font-bold text-csrcdark/50">Following</p>
          <ul className="flex flex-wrap gap-2">
            <li className="border mix-blend-multiply grayscale transition duration-1000 ease-in-out clip-followers hover:mix-blend-normal hover:grayscale-0">
              <Link href="#">
                <Image
                  src="/assets/images/comics-src-profile-image.png"
                  alt="Fake Profile Pic"
                  width={32}
                  height={32}
                ></Image>
              </Link>
            </li>
            <li className="border mix-blend-multiply grayscale transition duration-1000 ease-in-out clip-followers hover:mix-blend-normal hover:grayscale-0">
              <Link href="#">
                <Image
                  src="/assets/images/comics-src-profile-image.png"
                  alt="Fake Profile Pic"
                  width={32}
                  height={32}
                ></Image>
              </Link>
            </li>
            <li className="border mix-blend-multiply grayscale transition duration-1000 ease-in-out clip-followers hover:mix-blend-normal hover:grayscale-0">
              <Link href="#">
                <Image
                  src="/assets/images/comics-src-profile-image.png"
                  alt="Fake Profile Pic"
                  width={32}
                  height={32}
                ></Image>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
