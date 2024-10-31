import Image from "next/image";
import Link from "next/link";

export default function ProfilePublications() {
  return (
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
  );
}
