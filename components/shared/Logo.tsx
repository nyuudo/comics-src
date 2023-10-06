import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/icons/comics-src-home.svg"
        alt="COMICS SRC Logo"
        width={185}
        height={32}
      ></Image>
    </Link>
  );
};
