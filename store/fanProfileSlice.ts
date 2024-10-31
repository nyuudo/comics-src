import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";
import { FanProfileState } from "@/types/comics-src-types";

const supabase = createClient();

const initialState: FanProfileState = {
  fan_bio: null,
  fan_profileImage: null,
  fan_socialmedia: null,
  fan_url: null,
  fan_username: null,
  loading: false,
  error: null,
};

export const fetchFanProfile = createAsyncThunk(
  "fanProfile/fetchFanProfile",
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
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to fetch fan profile");
    }
  },
);

export const updateFanProfile = createAsyncThunk(
  "fanProfile/updateFanProfile",
  async (
    {
      userId,
      updatedData,
    }: { userId: string; updatedData: Partial<FanProfileState> },
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
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to update fan profile");
    }
  },
);

export const deleteFanProfile = createAsyncThunk(
  "fanProfile/deleteFanProfile",
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
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to delete fan profile");
    }
  },
);

const fanProfileSlice = createSlice({
  name: "fanProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cases for FETCH
      .addCase(fetchFanProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFanProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.fan_bio = action.payload.fan_bio;
        state.fan_profileImage = action.payload.fan_profileImage;
        state.fan_socialmedia = action.payload.fan_socialmedia;
        state.fan_url = action.payload.fan_url;
        state.fan_username = action.payload.fan_username;
      })
      .addCase(fetchFanProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Cases for UPDATE
      .addCase(updateFanProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateFanProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.fan_bio = action.payload;
        state.fan_profileImage = action.payload;
        state.fan_socialmedia = action.payload;
        state.fan_url = action.payload;
        state.fan_username = action.payload;
      })
      .addCase(updateFanProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Cases for DELETE
      .addCase(deleteFanProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFanProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.fan_bio = null;
        state.fan_profileImage = null;
        state.fan_socialmedia = null;
        state.fan_url = null;
        state.fan_username = null;
      })
      .addCase(deleteFanProfile.rejected, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default fanProfileSlice.reducer;
