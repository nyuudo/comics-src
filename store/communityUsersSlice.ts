import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";
import type {
  CommunityUser,
  CommunityUsersState,
} from "@/types/comics-src-types";

const supabase = createClient();

const initialState: CommunityUsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchCommunityUsers = createAsyncThunk<CommunityUser[], void>(
  "communityUsers/fetchCommunityUsers",
  async (_, thunkAPI) => {
    try {
      const [fanRes, authorRes] = await Promise.all([
        supabase.from("Fan").select("fan_username, fan_profileImage"),
        supabase.from("Author").select("author_username, author_profileImage"),
      ]);

      if (fanRes.error) throw fanRes.error;
      if (authorRes.error) throw authorRes.error;

      const fans: CommunityUser[] = (fanRes.data || []).map((fan) => ({
        username: fan.fan_username,
        profileImage: fan.fan_profileImage,
      }));

      const authors: CommunityUser[] = (authorRes.data || []).map((author) => ({
        username: author.author_username,
        profileImage: author.author_profileImage,
      }));

      return [...fans, ...authors];
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const communityUsersSlice = createSlice({
  name: "communityUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommunityUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCommunityUsers.fulfilled,
        (state, action: PayloadAction<CommunityUser[]>) => {
          state.loading = false;
          state.users = action.payload;
        },
      )
      .addCase(fetchCommunityUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default communityUsersSlice.reducer;
