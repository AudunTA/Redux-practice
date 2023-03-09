import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts(state, action) {
      state.posts = action.payload;
    },
    likePost(state, action) {
      console.log("testtttttttt: ", action.payload);
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        post._count.reactions += 1;
        console.log(post._count.reactions);
      }
    },
    unLikePost(state, action) {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        post._count.reactions += -1;
        console.log(post._count.reactions);
      }
    },
  },
});

export const { addPosts, likePost, unLikePost } = postSlice.actions;
export default postSlice.reducer;
