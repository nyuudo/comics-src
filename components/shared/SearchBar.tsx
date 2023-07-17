"use client";

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "@/store/store";
import { setSearch } from "@/store/searchSlice";

import ComicsCatalog from "../feature/ComicsCatalog";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const startupComics = useAppSelector((state) => state.search.startupComics);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <ComicsCatalog comics={startupComics} />
    </div>
  );
};

export default SearchBar;
