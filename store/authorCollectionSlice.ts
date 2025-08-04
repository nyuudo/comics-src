import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";
import type { AuthorCollectionState } from "@/types/comics-src-types";

const supabase = createClient();

const initialState: AuthorCollectionState = {
  author_collection: null,
  loading: false,
  error: null,
};

export const fetchAuthorCollection = createAsyncThunk(
  "authorCollection/fetchAuthorCollection",
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
      return thunkAPI.rejectWithValue("Failed to fetch author collection");
    }
  },
);

export const updateAuthorCollection = createAsyncThunk(
  "authorCollection/updateAuthorCollection",
  async (
    {
      userId,
      updatedData,
    }: { userId: string; updatedData: Partial<AuthorCollectionState> },
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
      return thunkAPI.rejectWithValue("Failed to update author collection");
    }
  },
);

export const deleteAuthorCollection = createAsyncThunk(
  "authorCollection/deleteAuthorCollection",
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
      return thunkAPI.rejectWithValue("Failed to delete author collection");
    }
  },
);

const authorCollectionSlice = createSlice({
  name: "authorCollection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cases for FETCH
      .addCase(fetchAuthorCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuthorCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.author_collection = action.payload.author_collection;
      })
      .addCase(fetchAuthorCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Cases for UPDATE
      .addCase(updateAuthorCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAuthorCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.author_collection = action.payload;
      })
      .addCase(updateAuthorCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Cases for DELETE
      .addCase(deleteAuthorCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAuthorCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.author_collection = null;
      })
      .addCase(deleteAuthorCollection.rejected, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default authorCollectionSlice.reducer;
