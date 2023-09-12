import { createSlice } from "@reduxjs/toolkit";
import type { SignupState } from "@/types/comics-src-types";

const initialState: SignupState = {
  showSignUp: true,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    hideSignUp: (state) => {
      state.showSignUp = false;
    },
    showSignUp: (state) => {
      state.showSignUp = true;
    },
  },
});

export const { hideSignUp, showSignUp } = signupSlice.actions;
export default signupSlice.reducer;
