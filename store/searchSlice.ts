import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ComicSrcWebComic, SearchState } from "@/types";

const initialState: SearchState = {
  search: "",
  startupComics: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupComics: (state, action: PayloadAction<ComicSrcWebComic[]>) => {
      state.startupComics = action.payload;
    },
  },
});

export const { setSearch, setStartupComics } = searchSlice.actions;
export default searchSlice.reducer;
