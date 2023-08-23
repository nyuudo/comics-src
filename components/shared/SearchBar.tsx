"use client";

// hooks from Redux
import { useDispatch, useSelector } from "react-redux";
// types from Redux
import type { TypedUseSelectorHook } from "react-redux";

// functions from the store
import { RootState, AppDispatch } from "@/store/store";
import { setSearch } from "@/store/searchSlice";
import { comicsSrcApi } from "@/store/comicsSrcApi";

// hooks from React
import { useEffect } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);

  useEffect(() => {
    dispatch(comicsSrcApi.endpoints.search.initiate(search));
  }, [dispatch, search]);

  return (
    <form className="relative">
      <span className="absolute bg-search bg-100% bg-no-repeat h-5 w-5 top-2"></span>
      <input
        type="search"
        className="w-[17.3125rem] h-9 pl-6 pr-2 rounded-sm placeholder-csrclight text-csrcdark bg-csrcblue/5 focus:outline-none focus:border-csrcblue focus:ring-1 focus:ring-csrcblue caret-csrcyelow"
        placeholder="Search for Comics..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <span className="after:content-[''] after:block after:absolute after:w-full after:h-full after:bg-search_area after:bg-no-repeat after:bg-[100%] after:left-0 after:top-6"></span>
    </form>
  );
};

export default SearchBar;
