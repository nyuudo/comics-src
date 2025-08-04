import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";
import type { FanCollectionState } from "@/types/comics-src-types";

const supabase = createClient();

const initialState: FanCollectionState = {
  fan_collection: null,
  loading: false,
  error: null,
};

export const fetchFanCollection = createAsyncThunk(
  "fanCollection/fetchFanCollection",
  async (userId: string, thunkAPI) => {
    try {
      const { data, error } = await supabase
        .from("Fan")
        .select("*")
        .eq("fan_id", userId)
        .single();

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch fan collection");
    }
  },
);

export const updateFanCollection = createAsyncThunk(
  "fanCollection/updateFanCollection",
  async (
    {
      userId,
      updatedData,
    }: { userId: string; updatedData: Partial<FanCollectionState> },
    thunkAPI,
  ) => {
    try {
      const { data, error } = await supabase
        .from("Fan")
        .update(updatedData)
        .eq("fan_id", userId);

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to update fan collection");
    }
  },
);

export const deleteFanCollection = createAsyncThunk(
  "fanCollection/deleteFanCollection",
  async (userId: string, thunkAPI) => {
    try {
      const { data, error } = await supabase
        .from("Fan")
        .delete()
        .eq("fan_id", userId);

      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to delete fan collection");
    }
  },
);

const fanCollectionSlice = createSlice({
  name: "fanCollection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cases for FETCH
      .addCase(fetchFanCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFanCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.fan_collection = action.payload.fan_collection;
      })
      .addCase(fetchFanCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Cases for UPDATE
      .addCase(updateFanCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateFanCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.fan_collection = action.payload;
      })
      .addCase(updateFanCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Cases for DELETE
      .addCase(deleteFanCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFanCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.fan_collection = null;
      })
      .addCase(deleteFanCollection.rejected, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default fanCollectionSlice.reducer;
