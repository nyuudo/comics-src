import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-csrcdark p-4">
      <div
        className="flex xs:px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 flex-col text-csrcyelow font-semibold
      "
      >
        <div className="flex gap-4">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/catalog">Catalog</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/author">Author</Link>
            </li>
            <li>
              <Link href="/publisher">Publisher</Link>
            </li>
            <li>
              <Link href="/fan">Fan</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
        <p className="text-xs text-csrclight py-3">
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
