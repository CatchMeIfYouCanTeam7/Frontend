import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  QUESTION: {
    ok: true,
    result: [
      {
        questionId: 1,
        userNickname: "nick1",
        imageUrl:
          "http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg",
        hint: "힌트1",
        answer: "정답1",
        createdAt: "2020-04-11T11:12:30.686",
      },
      {
        questionId: 2,
        userNickname: "nick1",
        imageUrl:
          "http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg",
        hint: "힌트2",
        answer: "정답2",
        createdAt: "2020-04-11T11:12:30.686",
      },
      {
        questionId: 3,
        userNickname: "nick1",
        imageUrl:
          "https://img.koreatimes.co.kr/upload/newsV2/images/paint450.jpg/dims/resize/740/optimize",
        hint: "힌트3",
        answer: "정답3",
        createdAt: "2020-04-11T11:12:30.686",
      },
    ],
  },
};

const posting = createSlice({
  name: "posting",
  initialState,

  reducers: {
    addPosting(state, action) {
      state.QUESTION = action.payload.date;
      state.QUESTION.push(action.payload);
    },
  },
});
console.log("dddd", createSlice);


export const { addPosting } = posting.actions;
export default posting.reducer;
