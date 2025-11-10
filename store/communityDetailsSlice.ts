import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";
import type {
  CommunityDetail,
  CommunityDetailsState,
} from "@/types/comics-src-types";

const supabase = createClient();

const initialState: CommunityDetailsState = {
  users: [],
  loading: false,
  error: null,
};

// Fetch the followed user details (avatars + usernames + role) for a given userId
export const fetchFollowedUsers = createAsyncThunk<
  CommunityDetail[],
  { userId: string | undefined; role?: string | undefined }
>("communityDetails/fetchFollowedUsers", async ({ userId }, thunkAPI) => {
  try {
    if (!userId) throw new Error("Missing userId");

    // Get list of followed ids
    const { data, error } = await supabase
      .from("Community")
      .select("followed_id")
      .eq("follower_id", userId);

    if (error) return thunkAPI.rejectWithValue(error.message);

    const ids: string[] = (data || []).map((r: any) => r.followed_id);
    if (!ids.length) return [];

    // Query authors and fans whose id is in the ids list
    const [authorRes, fanRes] = await Promise.all([
      supabase
        .from("Author")
        .select("author_id, author_username, author_profileImage")
        .in("author_id", ids),
      supabase
        .from("Fan")
        .select("fan_id, fan_username, fan_profileImage")
        .in("fan_id", ids),
    ]);

    if (authorRes.error) throw authorRes.error;
    if (fanRes.error) throw fanRes.error;

    const authors = (authorRes.data || []).map((a: any) => ({
      id: a.author_id,
      username: a.author_username,
      profileImage: a.author_profileImage || null,
      role: "author" as const,
    }));

    const fans = (fanRes.data || []).map((f: any) => ({
      id: f.fan_id,
      username: f.fan_username,
      profileImage: f.fan_profileImage || null,
      role: "fan" as const,
    }));

    // Keep server order best-effort: order by ids input (optional)
    const combined = [...authors, ...fans];
    // Optionally reorder to match ids order
    const byId = new Map(combined.map((c) => [c.id, c]));
    const ordered = ids
      .map((i) => byId.get(i))
      .filter(Boolean) as CommunityDetail[];

    return ordered;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const communityDetailsSlice = createSlice({
  name: "communityDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFollowedUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.users = [];
      })
      .addCase(
        fetchFollowedUsers.fulfilled,
        (state, action: PayloadAction<CommunityDetail[]>) => {
          state.loading = false;
          state.users = action.payload;
        },
      )
      .addCase(fetchFollowedUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.users = [];
      });
  },
});

export default communityDetailsSlice.reducer;
