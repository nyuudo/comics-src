import Image from "next/image";
import { useAppSelector } from "../shared/SearchBar";
import type { PublishersProducts } from "@/types/comics-src-types";
const SearchResults = () => {
  const search = useAppSelector((state) => state.search.search);
  const data = useAppSelector(
    (state) =>
      state.comicsSrcApi.queries[`search("${search}")`]
        ?.data as PublishersProducts[],
  );

  if (!data) {
    return (
      <div className="relative">
        <div className="placeholder-csrcdark absolute left-6 text-csrcdanger">
          No results found
        </div>
      </div>
    );
  }

  return (
    <main className="bg-csrclight/75 absolute top-40 z-20 flex w-69.25 flex-col items-center justify-center rounded-sm shadow-lg md:top-20">
      {data.slice(0, 3).map((result) => (
        <a
          className="group hover:bg-csrcblue hover:from-csrcblue hover:via-csrcblue flex rounded-sm p-4 transition delay-150 hover:via-50%"
          key={result.product_id}
          href={`/catalog/${result.product_id}`}
        >
          <Image
            src={result.product_cover}
            alt={result.product_title}
            className="h-[133px] w-[80px] rounded-sm group-hover:scale-[.98]"
            width={160}
            height={266}
          ></Image>
          <div className="flex flex-col pl-3">
            <h2 className="text-csrcdark group-hover:text-csrcyellow text-[0.6875rem] leading-5 font-bold">
              {result.product_title}
            </h2>
            <p className="text-csrcblue group-hover:text-csrclight line-clamp-6 text-[0.6875rem]">
              {result.product_description?.substring(0, 200)}...
            </p>
          </div>
        </a>
      ))}
    </main>
  );
};

export default SearchResults;
