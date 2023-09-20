import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-csrcdark">
      <div className="flex py-10 xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 flex-col font-semibold">
        <div className="flex flex-row gap-6">
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
        <p className="text-xs text-csrclight py-4">
          ©2023 COMICS/
          <span className="text-[0.5rem] inline-block align-text-top">
            SRC
          </span>{" "}
          by @nyuudo
        </p>
      </div>
    </footer>
  );
}
