import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="/assets/icons/branding.svg"
          alt="COMICS SRC Logo"
          width={185}
          height={32}
        ></Image>
      </Link>
      <p>This is a shared Header component</p>
      <SearchBar />
    </header>
  );
}
