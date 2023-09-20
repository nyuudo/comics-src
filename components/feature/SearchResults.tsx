import Image from "next/image";
import { useAppSelector } from "../shared/SearchBar";
import type { PublishersProducts } from "@/types/comics-src-types";
const SearchResults = () => {
  const search = useAppSelector((state) => state.search.search);
  const data = useAppSelector(
    (state) =>
      state.comicsSrcApi.queries[`search("${search}")`]
        ?.data as PublishersProducts[]
  );

  if (!data) {
    return <div className="placeholder-csrcdark">No results found</div>;
  }

  return (
    <main className="absolute top-40 md:top-20 w-[17.3125rem] flex flex-col items-center justify-center bg-csrclight/75 rounded shadow-lg z-20">
      {data.slice(0, 3).map((result) => (
        <a
          className="group flex p-4 hover:bg-gradient-to-t hover:from-csrcblue hover:via-csrcblue hover:via-50%"
          key={result.product_id}
          href={`/catalog/${result.product_id}`}
        >
          <Image
            src={result.product_cover}
            alt={result.product_title}
            className="rounded group-hover:scale-[.98]"
            width={160}
            height={266}
          ></Image>
          <div className="pl-3 flex flex-col">
            <h2 className="text-csrcdark font-bold text-[0.6875rem] leading-5 group-hover:text-csrcblue">
              {result.product_title}
            </h2>
            <p className="text-csrcblue font-normal text-[0.6875rem] leading-0 group-hover:text-csrclight">
              {result.product_description?.substring(0, 200)}...
            </p>
          </div>
        </a>
      ))}
    </main>
  );
};

export default SearchResults;
