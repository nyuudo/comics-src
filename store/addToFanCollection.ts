import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";

const supabase = createClient();

export const addToFanCollection = createAsyncThunk(
  "fanCollection/addToFanCollection",
  async (
    { productId, userId }: { productId: number; userId: string | undefined },
    thunkAPI,
  ) => {
    try {
      const { data, error } = await supabase
        .from("Fan")
        .select("fan_collection")
        .eq("fan_id", userId)
        .maybeSingle();

      if (error) throw error;
      if (!data) return thunkAPI.rejectWithValue("User data not found");

      const currentCollection = (data.fan_collection as string[]) || [];
      if (currentCollection.includes(String(productId))) {
        return { alreadyExists: true };
      }

      const updatedCollection = [...currentCollection, String(productId)];
      const { error: updateError } = await supabase
        .from("Fan")
        .update({ fan_collection: updatedCollection })
        .eq("fan_id", userId);

      if (updateError) throw updateError;

      return { success: true };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const fanCollectionSlice = createSlice({
  name: "fanCollection",
  initialState: {
    loading: false,
    error: null as string | null,
    success: false,
    alreadyExists: false,
  },
  reducers: {
    resetFanCollectionStatus: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.alreadyExists = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToFanCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.alreadyExists = false;
      })
      .addCase(addToFanCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.success = !!action.payload?.success;
        state.alreadyExists = !!action.payload?.alreadyExists;
      })
      .addCase(addToFanCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetFanCollectionStatus } = fanCollectionSlice.actions;
export default fanCollectionSlice.reducer;
