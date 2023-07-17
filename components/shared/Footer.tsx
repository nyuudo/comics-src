import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <h1>This is a shared Footer component</h1>
      <div className="flex flex-col">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/catalog">Catalog</Link>
        <Link href="/author">Author</Link>
        <Link href="/publisher">Publisher</Link>
        <Link href="/fan">Fan</Link>
      </div>
      <span className="text">©2023 COMICS src by @nyuudo</span>
    </footer>
  );
}
