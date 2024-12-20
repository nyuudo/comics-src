import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";
import type { CommunityState } from "@/types/comics-src-types";

const supabase = createClient();

const initialState: CommunityState = {
  followers: [],
  loading: false,
  error: null,
};

export const fetchCommunity = createAsyncThunk(
  "community/fetchCommunity",
  async (userId: string, thunkAPI) => {
    try {
      const { data, error } = await supabase
        .from("Community")
        .select("folowed_id")
        .eq("folower_id", userId)
        .single();
      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue("failed to fetch Community of Followers");
    }
  },
);

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommunity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommunity.fulfilled, (state, action) => {
        state.loading = false;
        state.followers = action.payload.folowed_id;
      })
      .addCase(fetchCommunity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default communitySlice.reducer;
