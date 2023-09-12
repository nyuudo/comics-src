import Image from "next/image";
import getBase64 from "@/lib/getBase62";
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
    <main className="absolute top-20 w-[17.3125rem] flex flex-col items-center justify-center bg-gradient-to-t from-white from-10% via-white via-50% to-csrclight/0 to-95% rounded-b shadow-lg z-20">
      {data.slice(0, 3).map((result) => (
        <div
          className="group flex p-4 hover:bg-gradient-to-t hover:from-csrcblue hover:via-csrcblue hover:via-50%"
          key={result.product_id}
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
        </div>
      ))}
    </main>
  );
};

export default SearchResults;
