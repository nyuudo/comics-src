import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";

const supabase = createClient();

export const fetchUserCollection = createAsyncThunk(
  "userCollection/fetchUserCollection",
  async (
    { userId, role }: { userId: string | undefined; role: string | undefined },
    thunkAPI,
  ) => {
    try {
      if (!userId || !role) throw new Error("Missing userId or role");
      let table = "";
      let column = "";
      let idColumn = "";

      if (role === "fan") {
        table = "Fan";
        column = "fan_collection";
        idColumn = "fan_id";
      } else if (role === "author") {
        table = "Author";
        column = "author_collection";
        idColumn = "author_id";
      } else {
        throw new Error("Invalid role");
      }

      const { data, error } = await supabase
        .from(table)
        .select(column)
        .eq(idColumn, userId)
        .maybeSingle();

      if (error) throw error;
      if (!data) return [];

      const collectionIds = (data[column] as string[]) || [];
      if (collectionIds.length === 0) return [];

      const { data: products, error: prodError } = await supabase
        .from("Publishers Product")
        .select("product_id, product_cover")
        .in("product_id", collectionIds);

      if (prodError) throw prodError;

      return (products || []).map((p: any) => p.product_cover as string);
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const userCollectionSlice = createSlice({
  name: "userCollection",
  initialState: {
    loading: false,
    error: null as string | null,
    items: [] as string[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload as string[];
      })
      .addCase(fetchUserCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userCollectionSlice.reducer;