"use client";

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { useEffect } from "react";
import { RootState, AppDispatch } from "@/store/store";
import { setSearch } from "@/store/searchSlice";
//import { comicsSrcApi } from "@/store/comicsSrcApi";
//import { ComicSrcWebComic } from "@/types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  /*   const startupComics = useAppSelector((state) => state.search.startupComics);
  const data = useAppSelector(
    (state) =>
      state.comicsSrcApi.queries[`search("${search}")`]
        ?.data as ComicSrcWebComic[]
  );

  useEffect(() => {
    dispatch(comicsSrcApi.endpoints.search.initiate(search));
  }, [dispatch, search]); */

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
};

export default SearchBar;

//<ComicsCatalog comics={search.length ? data ?? [] : startupComics} />
