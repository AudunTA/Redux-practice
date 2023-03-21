import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./components/postsSlice";
import friendReducer from "./components/friendsSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    friends: friendReducer,
  },
});
