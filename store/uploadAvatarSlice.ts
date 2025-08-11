import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "@/utils/browser";
import type { AvatarState } from "@/types/comics-src-types";
import { nanoid } from "nanoid";

const supabase = createClient();

export const uploadAvatar = createAsyncThunk(
  "avatar/uploadAvatar",
  async (file: File, { rejectWithValue }) => {
    try {
      const filename = nanoid();
      const ext = file.name.split(".").pop();
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(`${filename}.${ext}`, file);

      if (error) {
        return rejectWithValue(error.message);
      }

      const { data: fileData } = await supabase.storage
        .from("avatars")
        .getPublicUrl(data?.path);

      return fileData?.publicUrl;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

const initialState: AvatarState = {
  url: null,
  loading: false,
  error: null,
};

const uploadAvatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadAvatar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.url = action.payload;
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default uploadAvatarSlice.reducer;
