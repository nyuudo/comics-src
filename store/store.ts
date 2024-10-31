import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";
import modalReducer from "./modalSlice";
import searchReducer from "./searchSlice";
import fanProfileReducer from "./fanProfileSlice";
import { comicsSrcApi } from "./comicsSrcApi";

const rootReducer = combineReducers({
  signup: signupReducer,
  modal: modalReducer,
  search: searchReducer,
  fanProfile: fanProfileReducer,
  comicsSrcApi: comicsSrcApi.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(comicsSrcApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
