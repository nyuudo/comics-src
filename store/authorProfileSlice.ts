import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";
import type { AuthorProfileState } from "@/types/comics-src-types";

const supabase = createClient();

const initialState: AuthorProfileState = {
  author_bio: null,
  author_profileImage: null,
  author_socialmedia: null,
  author_url: null,
  author_username: null,
  loading: false,
  error: null,
};

export const fetchAuthorProfile = createAsyncThunk(
  "authorProfile/fetchAuthorProfile",
  async (userId: string, thunkAPI) => {
    try {
      const { data, error } = await supabase
        .from("Author")
        .select("*")
        .eq("author_id", userId)
        .single();

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch author profile");
    }
  },
);

export const updateAuthorProfile = createAsyncThunk(
  "authorProfile/updateAuthorProfile",
  async (
    {
      userId,
      updatedData,
    }: { userId: string; updatedData: Partial<AuthorProfileState> },
    thunkAPI,
  ) => {
    try {
      const { data, error } = await supabase
        .from("Author")
        .update(updatedData)
        .eq("author_id", userId);

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to update author profile");
    }
  },
);

export const deleteAuthorProfile = createAsyncThunk(
  "authorProfile/deleteAuthorProfile",
  async (userId: string, thunkAPI) => {
    try {
      const { data, error } = await supabase
        .from("Author")
        .delete()
        .eq("author_id", userId);

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to delete author profile");
    }
  },
);

const authorProfileSlice = createSlice({
  name: "authorProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cases for FETCH
      .addCase(fetchAuthorProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuthorProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.author_bio = action.payload.author_bio;
        state.author_profileImage = action.payload.author_profileImage;
        state.author_socialmedia = action.payload.author_socialmedia;
        state.author_url = action.payload.author_url;
        state.author_username = action.payload.author_username;
      })
      .addCase(fetchAuthorProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Cases for UPDATE
      .addCase(updateAuthorProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAuthorProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.author_bio = action.payload;
        state.author_profileImage = action.payload;
        state.author_socialmedia = action.payload;
        state.author_url = action.payload;
        state.author_username = action.payload;
      })
      .addCase(updateAuthorProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Cases for DELETE
      .addCase(deleteAuthorProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAuthorProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.author_bio = null;
        state.author_profileImage = null;
        state.author_socialmedia = null;
        state.author_url = null;
        state.author_username = null;
      })
      .addCase(deleteAuthorProfile.rejected, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default authorProfileSlice.reducer;
