import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";
import type { CollectionResponse } from "@/types/comics-src-types";
import getPublishersProductIds from "@/lib/getPublishersProductIds";

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
      let column: keyof CollectionResponse;
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

      console.log(
        `Fetching collection from table: ${table}, column: ${column}`,
      );

      const { data, error } = await supabase
        .from(table)
        .select(column)
        .eq(idColumn, userId)
        .maybeSingle<CollectionResponse>();

      if (error) throw error;
      if (!data) return [];

      const collectionIds = (data[column] ?? []) as string[];
      console.log("Collection IDs:", collectionIds);
      const productIds = collectionIds.map((id) => Number(id));
      console.log("prodcutIds:", productIds);
      const publishersProductsIds = await getPublishersProductIds(productIds);

      const productCovers = (publishersProductsIds ?? []).map(
        (product) => product.product_cover,
      );
    

      return productCovers;
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
