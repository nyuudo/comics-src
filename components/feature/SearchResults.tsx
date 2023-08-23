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
    return <div>No results found.</div>;
  }

  return (
    <main className="w-[17.3125rem] inset-0 flex flex-col items-center justify-center bg-white/50">
      {data.slice(0, 3).map((result) => (
        <div className="flex p-4" key={result.product_id}>
          <Image
            src={result.product_cover}
            alt={result.product_title}
            className="rounded"
            /* placeholder="blur" blurDataURL */
            width={160}
            height={266}
          ></Image>
          <div className="pl-3 flex flex-col">
            <h2 className="text-csrcdark font-bold text-[0.6875rem] leading-5">
              {result.product_title}
            </h2>
            <p className="text-csrcblue font-normal text-[0.6875rem] leading-0">
              {result.product_description?.substring(0, 200)}...
            </p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default SearchResults;
