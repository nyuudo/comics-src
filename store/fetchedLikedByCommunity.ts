import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";
import type { LikedByCommunityState } from "@/types/comics-src-types";

const supabase = createClient();

const initialState: LikedByCommunityState = {
  avatars: [],
  loading: false,
  error: null,
};

export const fetchLikedByCommunity = createAsyncThunk(
  "likedByCommunity/fetchLikedByCommunity",
  async (productId: string, thunkAPI) => {
    try {
      const [authorRes, fanRes] = await Promise.all([
        supabase
          .from("Author")
          .select("author_collection, author_profileImage"),
        supabase.from("Fan").select("fan_collection, fan_profileImage"),
      ]);

      if (authorRes.error) throw authorRes.error;
      if (fanRes.error) throw fanRes.error;

      const authorAvatars = (authorRes.data || [])
        .filter(
          (author: any) =>
            Array.isArray(author.author_collection) &&
            author.author_collection.includes(productId),
        )
        .map((author: any) => author.author_profileImage);

      const fanAvatars = (fanRes.data || [])
        .filter(
          (fan: any) =>
            Array.isArray(fan.fan_collection) &&
            fan.fan_collection.includes(productId),
        )
        .map((fan: any) => fan.fan_profileImage);

      return [...authorAvatars, ...fanAvatars];
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const likedByCommunitySlice = createSlice({
  name: "likedByCommunity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLikedByCommunity.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.avatars = [];
      })
      .addCase(fetchLikedByCommunity.fulfilled, (state, action) => {
        state.loading = false;
        state.avatars = action.payload;
      })
      .addCase(fetchLikedByCommunity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.avatars = [];
      });
  },
});

export default likedByCommunitySlice.reducer;
