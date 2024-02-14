import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentz: null,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setCommentSlice: (state, action) => {
      state.commentz = action.payload;
    },
  },
});

export const { setCommentSlice } = commentSlice.actions;

export default commentSlice.reducer;
