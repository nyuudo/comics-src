import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import searchReducer from "./searchSlice";
const rootReducer = combineReducers({
  modal: modalReducer,
  search: searchReducer,
  // if more slices are needed
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
