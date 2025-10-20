"use client";

// hooks from Redux
import { useDispatch, useSelector } from "react-redux";
// types from Redux
import type { TypedUseSelectorHook } from "react-redux";

// functions from the store
import { RootState, AppDispatch } from "@/store/store";
import { setSearch } from "@/store/searchSlice";
import { comicsSrcApi } from "@/store/comicsSrcApi";
import SearchResults from "../feature/SearchResults";

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

  const showSearchResults = useSelector(
    (state: RootState) => state.search.showSearchResults,
  );

  return (
    <div className="flex flex-col">
      <form className="relative">
        <span className="bg-100% absolute top-2 h-5 w-5 animate-pulse bg-search bg-no-repeat animate-twice animate-ease-in-out"></span>
        <input
          type="search"
          className="h-9 w-69.25 rounded-xs bg-csrcblue/5 pl-6 pr-2 text-csrcdark placeholder-csrclight caret-csrcyellow focus:border-csrcblue focus:outline-hidden focus:ring-1 focus:ring-csrcblue"
          placeholder="Search for Comics..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <span className="after:absolute after:left-0 after:top-6 after:block after:h-full after:w-full after:bg-search_area after:bg-position-[100%] after:bg-no-repeat after:content-['']"></span>
      </form>
      {showSearchResults ? <SearchResults /> : null}
    </div>
  );
};

export default SearchBar;
