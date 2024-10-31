import Image from "next/image";
import Link from "next/link";
export default function ProfileWorks() {
  return (
    <div id="my-works">
      <p className="py-2 font-bold text-csrcdark/50">My Works</p>
      <ul className="flex flex-wrap gap-4">
        <li>
          <Link href="#">
            <Image
              className="transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
              src={
                "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/webcomics/cover/comics-src-webcomic-cover-02.webp"
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
                "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/webcomics/cover/comics-src-webcomic-cover-02.webp"
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
                "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/webcomics/cover/comics-src-webcomic-cover-02.webp"
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
