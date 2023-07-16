import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// types Comics Search (pendiente)
// types SearchState (update with the info from the definitive types)

export interface SearchState {
  search: string;
  startupComics: string[];
}

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
    setStartupComics: (state, action: PayloadAction<string[]>) => {
      state.startupComics = action.payload;
    },
  },
});

export const { setSearch, setStartupComics } = searchSlice.actions;
export default searchSlice.reducer;
