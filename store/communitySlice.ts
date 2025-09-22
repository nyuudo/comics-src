import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  async (
    { userId, role }: { userId: string | undefined; role: string | undefined },
    thunkAPI,
  ) => {
    try {
      if (!userId || !role) throw new Error("Missing userId or role");
      const { data, error } = await supabase
        .from("Community")
        .select("followed_id")
        .eq("follower_id", userId);

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      // Retrieve followed IDs
      return data?.map((row) => row.followed_id) ?? [];
    } catch (err) {
      return thunkAPI.rejectWithValue("failed to fetch Community of Followers");
    }
  },
);

export const addFollower = createAsyncThunk(
  "community/addFollower",
  async (
    { followerId, followedId }: { followerId: string; followedId: string },
    thunkAPI,
  ) => {
    try {
      const { error } = await supabase
        .from("Community")
        .insert([{ follower_id: followerId, followed_id: followedId }]);

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return followedId;
    } catch (err) {
      return thunkAPI.rejectWithValue("failed to add Follower");
    }
  },
);

export const removeFollower = createAsyncThunk(
  "community/removeFollower",
  async (
    { followerId, followedId }: { followerId: string; followedId: string },
    thunkAPI,
  ) => {
    try {
      const { error } = await supabase
        .from("Community")
        .delete()
        .eq("follower_id", followerId)
        .eq("followed_id", followedId);

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return followedId;
    } catch (err) {
      return thunkAPI.rejectWithValue("failed to remove Follower");
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
        state.followers = action.payload as string[];
        state.error = null;
      })
      .addCase(fetchCommunity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default communitySlice.reducer;
