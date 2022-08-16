import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: [
    {
      answerId: 1,
      questionId: 1,
      userNickname: "nick1",
      comment: "정답1",
      createdAt: "2020-04-11T11:12:30.686",
    },
    {
      answerId: 2,
      questionId: 1,
      userNickname: "nick2",
      comment: "정답2",
      createdAt: "2020-04-11T11:12:30.686",
    },
    {
      answerId: 3,
      questionId: 2,
      userNickname: "nick3",
      comment: "정답3",
      createdAt: "2020-04-11T11:12:30.686",
    },
  ],
};

const comment = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      // action.payload -> comment
      state.comment.push(action.payload);
    },
    removeComment: (state, action) => {
      // action.payload -> comment.answerId
      state.comment = state.comment.filter(
        (item) => item.answerId !== action.payload
      );
    },
  },
});

export const { addComment, removeComment } = comment.actions;
export default comment.reducer;
