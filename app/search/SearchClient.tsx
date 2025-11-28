"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useSearchQuery } from "@/store/comicsSrcApi";

const SearchClient = () => {
  const searchParams = useSearchParams();
  const q = searchParams?.get("q") ?? "";

  const { data, isLoading, isError } = useSearchQuery(q, {
    skip: q.trim() === "",
  });

  if (q.trim() === "") {
    return (
      <main className="flex flex-col items-center p-6">
        <h1 className="text-csrcblue text-xl font-bold">Search</h1>
        <hr className="border-csrcdark/15 border" />
        <p className="text-csrcdark/75 mt-4">
          Please, enter a search term to find comics.
        </p>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="flex flex-col items-center p-6">
        <h1 className="text-csrcblue text-xl font-bold">Searching for "{q}"</h1>
        <hr className="border-csrcdark/15 border" />
        <p className="mt-4">Loading results…</p>
      </main>
    );
  }

  if (isError || !data || (Array.isArray(data) && data.length === 0)) {
    return (
      <main className="bg-csrcdark/95 flex flex-col items-center p-6">
        <h1 className="text-csrcblue text-xl font-bold">
          Search results for <span className="text-csrclight">"{q}"</span>
        </h1>
        <Image
          src="/assets/images/comics-src-not-found.svg"
          alt="Not Found"
          width={160}
          height={163}
          className="animate-fade-left animate-once animate-ease-in-out m-4"
        />
        <p className="text-csrcdanger mt-4">No results found.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-csrcblue mb-4 text-xl font-bold">
        Search results for <span className="text-csrcdark">"{q}"</span>
      </h1>
      <hr className="border-csrcdark/15 border" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((result: any) => (
          <Link
            key={result.product_id}
            href={`/catalog/${result.product_id}`}
            className="hover:bg-csrcblue group flex gap-4 rounded-sm p-4"
          >
            <Image
              src={result.product_cover}
              alt={result.product_title}
              width={160}
              height={266}
              className="rounded-sm"
            />
            <div>
              <h2 className="group-hover:text-csrcyellow font-bold">
                {result.product_title}
              </h2>
              <p className="text-csrcblue group-hover:text-csrclight text-sm">
                {result.product_description?.substring(0, 200)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default SearchClient;