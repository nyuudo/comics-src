import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";
import { PublisherProfileState } from "@/types/comics-src-types";

const supabase = createClient();

const initialState: PublisherProfileState = {
  publisher_bio: null,
  publisher_name: null,
  publisher_profileImage: null,
  publisher_socialmedia: null,
  publisher_url: null,
  loading: false,
  error: null,
};

export const fetchPublisherProfile = createAsyncThunk(
  "publisherProfile/fetchPublisherProfile",
  async (userId: string, thunkAPI) => {
    try {
      const { data, error } = await supabase
        .from("Publisher")
        .select("*")
        .eq("publisher_id", userId)
        .single();

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to fetch publisher profile");
    }
  },
);

export const updatePublisherProfile = createAsyncThunk(
  "publisherProfile/updatePublisherProfile",
  async (
    {
      userId,
      updatedData,
    }: { userId: string; updatedData: Partial<PublisherProfileState> },
    thunkAPI,
  ) => {
    try {
      const { data, error } = await supabase
        .from("Publisher")
        .update(updatedData)
        .eq("publisher_id", userId);

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to update publisher profile");
    }
  },
);

export const deletePublisherProfile = createAsyncThunk(
  "publisherProfile/deletePublisherProfile",
  async (userId: string, thunkAPI) => {
    try {
      const { data, error } = await supabase
        .from("Publisher")
        .delete()
        .eq("publisher_id", userId);

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to delete publisher profile");
    }
  },
);

const publisherProfileSlice = createSlice({
  name: "PublisherProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cases for FETCH
      .addCase(fetchPublisherProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPublisherProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.publisher_bio = action.payload.publisher_bio;
        state.publisher_profileImage = action.payload.publisher_profileImage;
        state.publisher_socialmedia = action.payload.publisher_socialmedia;
        state.publisher_url = action.payload.publisher_url;
        state.publisher_name = action.payload.publisher_name;
      })
      .addCase(fetchPublisherProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Cases for UPDATE
      .addCase(updatePublisherProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePublisherProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.publisher_bio = action.payload;
        state.publisher_profileImage = action.payload;
        state.publisher_socialmedia = action.payload;
        state.publisher_url = action.payload;
        state.publisher_name = action.payload;
      })
      .addCase(updatePublisherProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Cases for DELETE
      .addCase(deletePublisherProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePublisherProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.publisher_bio = null;
        state.publisher_profileImage = null;
        state.publisher_socialmedia = null;
        state.publisher_url = null;
        state.publisher_name = null;
      })
      .addCase(deletePublisherProfile.rejected, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default publisherProfileSlice.reducer;
