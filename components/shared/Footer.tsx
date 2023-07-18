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
      </div>
      <span className="text-csrclight">©2023 COMICS src by @nyuudo</span>
    </footer>
  );
}
