import Link from "next/link";
import Image from "next/image";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export default function Footer() {
  return (
    <footer className=" bg-csrcdark">
      <div className="flex flex-col py-10 font-bold xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
        <div className="flex gap-6">
          <Link href="/">
            <Image
              src="/assets/icons/comics-src.svg"
              alt="COMICS SRC Logo"
              width={185}
              height={32}
            ></Image>
          </Link>
          <ul className="flex flex-col gap-2 divide-y divide-dotted divide-csrclight/20">
            <li className=" text-csrcyellow  hover:text-csrclight">
              <Link href="/about">About</Link>
            </li>
            <li className=" text-csrcyellow  hover:text-csrclight">
              <Link href="/catalog">Catalog</Link>
            </li>
            <li className=" text-csrcyellow  hover:text-csrclight">
              <Link href="/login">Login</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 divide-y divide-dotted divide-csrclight/20">
            <li className=" text-csrcyellow  hover:text-csrclight">
              <Link href="/fan">Fan</Link>
            </li>
            <li className=" text-csrcyellow  hover:text-csrclight">
              <Link href="/author">Author</Link>
            </li>
            <li className=" text-csrcyellow  hover:text-csrclight">
              <Link href="/publisher">Publisher</Link>
            </li>
          </ul>
        </div>
        <p className="py-4 text-xs font-normal text-csrclight">
          ©{currentYear} COMICS/
          <span className="inline-block align-text-top text-[0.5rem]">
            SRC
          </span>{" "}
          by <Link href="https://nyuudo.com/">@nyuudo</Link>
        </p>
      </div>
    </footer>
  );
}
