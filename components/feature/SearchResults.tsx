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
        <div className="absolute left-6 text-red-800 placeholder-csrcdark">
          No results found
        </div>
      </div>
    );
  }

  return (
    <main className="absolute top-40 z-20 flex w-[17.3125rem] flex-col items-center justify-center rounded bg-csrclight/75 shadow-lg md:top-20">
      {data.slice(0, 3).map((result) => (
        <a
          className="group flex p-4 hover:bg-gradient-to-t hover:from-csrcblue hover:via-csrcblue hover:via-50%"
          key={result.product_id}
          href={`/catalog/${result.product_id}`}
        >
          <Image
            src={result.product_cover}
            alt={result.product_title}
            className="h-[133px] w-[80px] rounded group-hover:scale-[.98]"
            width={160}
            height={266}
          ></Image>
          <div className="flex flex-col pl-3">
            <h2 className="text-[0.6875rem] font-bold leading-5 text-csrcdark group-hover:text-csrcblue">
              {result.product_title}
            </h2>
            <p className="leading-0 text-[0.6875rem] font-normal text-csrcblue group-hover:text-csrclight">
              {result.product_description?.substring(0, 200)}...
            </p>
          </div>
        </a>
      ))}
    </main>
  );
};

export default SearchResults;
