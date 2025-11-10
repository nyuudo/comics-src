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

      return data?.map((row: { followed_id: string }) => row.followed_id) ?? [];
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
      const { error: insertError } = await supabase
        .from("Community")
        .insert([{ follower_id: followerId, followed_id: followedId }]);

      if (insertError) {
        return thunkAPI.rejectWithValue(insertError.message);
      }

      // Try to update the followed user's community array (author_community or fan_community)
      try {
        // Check Author first
        const { data: authorData, error: authorError } = await supabase
          .from("Author")
          .select("author_id, author_community")
          .eq("author_id", followedId)
          .maybeSingle();

        if (authorError) {
          // continue, not fatal for the whole operation
          console.error("author lookup error", authorError);
        }

        if (authorData) {
          const current: string[] = authorData.author_community || [];
          if (!current.includes(followerId)) {
            const updated = [...current, followerId];
            const { error: updateError } = await supabase
              .from("Author")
              .update({ author_community: updated })
              .eq("author_id", followedId);
            if (updateError)
              console.error("author community update error", updateError);
          }
        } else {
          // Not an author; check Fan
          const { data: fanData, error: fanError } = await supabase
            .from("Fan")
            .select("fan_id, fan_community")
            .eq("fan_id", followedId)
            .maybeSingle();

          if (fanError) {
            console.error("fan lookup error", fanError);
          }

          if (fanData) {
            const current: string[] = fanData.fan_community || [];
            if (!current.includes(followerId)) {
              const updated = [...current, followerId];
              const { error: updateError } = await supabase
                .from("Fan")
                .update({ fan_community: updated })
                .eq("fan_id", followedId);
              if (updateError)
                console.error("fan community update error", updateError);
            }
          } else {
            // followedId is not found in Author or Fan - that's odd but not fatal
            console.warn(
              "followedId not found in Author or Fan tables:",
              followedId,
            );
          }
        }
      } catch (err) {
        console.error("Failed to update user community array", err);
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
      const { error: deleteError } = await supabase
        .from("Community")
        .delete()
        .eq("follower_id", followerId)
        .eq("followed_id", followedId);

      if (deleteError) {
        return thunkAPI.rejectWithValue(deleteError.message);
      }

      // Remove followerId from followed user's community array
      try {
        const { data: authorData, error: authorError } = await supabase
          .from("Author")
          .select("author_id, author_community")
          .eq("author_id", followedId)
          .maybeSingle();

        if (authorError) {
          console.error("author lookup error", authorError);
        }

        if (authorData) {
          const current: string[] = authorData.author_community || [];
          const updated = current.filter((id) => id !== followerId);
          const { error: updateError } = await supabase
            .from("Author")
            .update({ author_community: updated })
            .eq("author_id", followedId);
          if (updateError)
            console.error("author community update error", updateError);
        } else {
          // Not an author; check Fan
          const { data: fanData, error: fanError } = await supabase
            .from("Fan")
            .select("fan_id, fan_community")
            .eq("fan_id", followedId)
            .maybeSingle();

          if (fanError) {
            console.error("fan lookup error", fanError);
          }

          if (fanData) {
            const current: string[] = fanData.fan_community || [];
            const updated = current.filter((id) => id !== followerId);
            const { error: updateError } = await supabase
              .from("Fan")
              .update({ fan_community: updated })
              .eq("fan_id", followedId);
            if (updateError)
              console.error("fan community update error", updateError);
          } else {
            console.warn(
              "followedId not found in Author or Fan tables:",
              followedId,
            );
          }
        }
      } catch (err) {
        console.error("Failed to update user community array on remove", err);
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
