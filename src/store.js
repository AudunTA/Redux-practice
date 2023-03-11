import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./components/postsSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
