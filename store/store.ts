import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";
import modalReducer from "./modalSlice";
import searchReducer from "./searchSlice";
import fanProfileReducer from "./fanProfileSlice";
import authorProfileReducer from "./authorProfileSlice";
import publisherProfileReducer from "./publisherProfileSlice";
import uploadAvatarReducer from "./uploadAvatarSlice";
import fanCollectionReducer from "./addToFanCollection";
import authorCollectionReducer from "./addToAuthorCollection";
import userCollectionReducer from "./userCollectionSlice";
import communityReducer from "./communitySlice";
import fetchLikedByCommunityreducer from "./fetchedLikedByCommunity";
import communityUsersReducer from "./communityUsersSlice";
import { comicsSrcApi } from "./comicsSrcApi";

const rootReducer = combineReducers({
  signup: signupReducer,
  modal: modalReducer,
  search: searchReducer,
  fanProfile: fanProfileReducer,
  authorProfile: authorProfileReducer,
  publisherProfile: publisherProfileReducer,
  fanCollection: fanCollectionReducer,
  authorCollection: authorCollectionReducer,
  avatar: uploadAvatarReducer,
  userCollection: userCollectionReducer,
  community: communityReducer,
  likedByCommunity: fetchLikedByCommunityreducer,
  communityUsers: communityUsersReducer,
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
