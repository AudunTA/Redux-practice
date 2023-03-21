import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
};

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    addFriends(state, action) {
      state.friends = action.payload;
    },
  },
});

export const { addFriends } = friendsSlice.actions;
export default friendsSlice.reducer;
