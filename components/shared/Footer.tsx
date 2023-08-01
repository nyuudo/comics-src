import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-csrcdark p-4">
      <div className="flex flex-col text-csrcblue">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/catalog">Catalog</Link>
        <Link href="/author">Author</Link>
        <Link href="/publisher">Publisher</Link>
        <Link href="/fan">Fan</Link>
        <Link href="/login">Login</Link>
      </div>
      <p className="text-xs text-csrclight">
        ©2023 COMICS/
        <span className="text-[0.5rem] inline-block align-text-top">
          SRC
        </span>{" "}
        by @nyuudo
      </p>
    </footer>
  );
}
