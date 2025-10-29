"use client";

import { useDispatch, useSelector } from "react-redux";
// types from Redux
import type { TypedUseSelectorHook } from "react-redux";

// functions from the store
import { RootState, AppDispatch } from "@/store/store";
import { setSearch, setShowSearchResults } from "@/store/searchSlice";
import { useRouter } from "next/navigation";
// hooks from React
import { useCallback } from "react";
import type { FormEvent } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const router = useRouter();

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Hide any UI-level inline results (we now use a dedicated page)
      dispatch(setShowSearchResults(false));
      const trimmed = search.trim();
      if (trimmed.length) {
        router.push(`/search?q=${encodeURIComponent(trimmed)}`);
      } else {
        router.push("/search");
      }
    },
    [dispatch, search, router],
  );

  return (
    <div className="flex flex-col">
      <form className="relative" onSubmit={onSubmit}>
        <span className="bg-100% bg-search animate-twice animate-ease-in-out absolute top-2 h-5 w-5 animate-pulse bg-no-repeat"></span>
        <input
          type="search"
          className="bg-csrcblue/5 text-csrcdark placeholder-csrclight caret-csrcyellow focus:border-csrcblue focus:ring-csrcblue h-9 w-69.25 rounded-xs pr-2 pl-6 focus:ring-1 focus:outline-hidden"
          placeholder="Search for Comics..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <span className="after:bg-search_area after:absolute after:top-6 after:left-0 after:block after:h-full after:w-full after:bg-position-[100%] after:bg-no-repeat after:content-['']"></span>
      </form>
    </div>
  );
};

export default SearchBar;
