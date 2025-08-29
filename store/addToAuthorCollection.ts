import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";

const supabase = createClient();

export const addToAuthorCollection = createAsyncThunk(
  "authorCollection/addToAuthorCollection",
  async (
    { productId, userId }: { productId: number; userId: string | undefined },
    thunkAPI,
  ) => {
    try {
      const { data, error } = await supabase
        .from("Author")
        .select("author_collection")
        .eq("author_id", userId)
        .maybeSingle();

      if (error) throw error;
      if (!data) return thunkAPI.rejectWithValue("User data not found");

      const currentCollection = (data.author_collection as string[]) || [];
      if (currentCollection.includes(String(productId))) {
        return { alreadyExists: true };
      }

      const updatedCollection = [...currentCollection, String(productId)];
      const { error: updateError } = await supabase
        .from("Author")
        .update({ author_collection: updatedCollection })
        .eq("author_id", userId);

      if (updateError) throw updateError;

      return { success: true };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const authorCollectionSlice = createSlice({
  name: "authorCollection",
  initialState: {
    loading: false,
    error: null as string | null,
    success: false,
    alreadyExists: false,
  },
  reducers: {
    resetAuthorCollectionStatus: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.alreadyExists = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToAuthorCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.alreadyExists = false;
      })
      .addCase(addToAuthorCollection.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.alreadyExists) {
          state.alreadyExists = true;
        } else {
          state.success = true;
        }
      })
      .addCase(addToAuthorCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetAuthorCollectionStatus } = authorCollectionSlice.actions;
export default authorCollectionSlice.reducer;
