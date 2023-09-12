import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  SearchState,
  PublishersProducts,
  AuthorWebComics,
} from "@/types/comics-src-types";

const initialState: SearchState = {
  search: "",
  startupComics: [],
  authorWebComics: [],
  showSearchResults: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.showSearchResults = true;
    },
    setStartupComics: (state, action: PayloadAction<PublishersProducts[]>) => {
      state.startupComics = action.payload;
    },
    setAuthorWebComics: (state, action: PayloadAction<AuthorWebComics[]>) => {
      state.authorWebComics = action.payload;
    },
    setShowSearchResults: (state, action: PayloadAction<boolean>) => {
      state.showSearchResults = action.payload;
    },
  },
});

export const {
  setSearch,
  setStartupComics,
  setAuthorWebComics,
  setShowSearchResults,
} = searchSlice.actions;
export default searchSlice.reducer;
