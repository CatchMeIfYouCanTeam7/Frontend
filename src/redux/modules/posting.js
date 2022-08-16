import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_URL + '/api';

export const asyncGetAllQuestion = createAsyncThunk(
  "posting/getAllQuestion",
  async (payload, thnkAPI) => {
    const response = await axios.get(
      url + "/questions",
    );

    if (response.status === 200 && response.data.success === true) {
      return response.data.data;
    } else {
			return null;
		}
  },
);

export const asyncGetOneQuestion = createAsyncThunk(
  "posting/getOneQuestion",
  async (payload, thnkAPI) => {
    // payload -> question id
    const response = await axios.get(
      url + `/questions/${payload}`,
    );

    if (response.status === 200 && response.data.success === true) {
      return response.data.data;
    } else {
			return null;
		}
  },
);

export const asyncPostQuestion = createAsyncThunk(
  "posting/postQuestion",
  async (payload, thunkAPI) => {
    console.log("action", payload);
    const response = await axios.post(
      url + "/auth/questions",
      payload.formData,
      {
        headers: {
          Authorization: localStorage.getItem("accessToken" + payload.userId),
          "Content-Type": "multipart/form-data",
        },
      },
    );
		return response.data.data;
  },
);

const initialState = {
  questions: {
    ok: true,
    result: [
      {
        id: 1,
        userNickname: "nick1",
        imageUrl:
          "http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg",
        hint: "힌트1",
        answer: "정답1",
        createdAt: "2020-04-11T11:12:30.686",
      },
      {
        id: 2,
        userNickname: "nick1",
        imageUrl:
          "http://c2.img.netmarble.kr/web/6N/2011/02/2139/%EA%B0%9C%EB%93%9C%EB%A6%BD_%EC%A0%9C%EC%B2%A0%EC%86%8C.jpg",
        hint: "힌트2",
        answer: "정답2",
        createdAt: "2020-04-11T11:12:30.686",
      },
      {
        id: 3,
        userNickname: "nick1",
        imageUrl:
          "https://img.koreatimes.co.kr/upload/newsV2/images/paint450.jpg/dims/resize/740/optimize",
        hint: "힌트3",
        answer: "정답3",
        createdAt: "2020-04-11T11:12:30.686",
      },
    ],
  },
  question: {
    ok: true,
    result: {},
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

  extraReducers: {
		// 글 전체 조회
    [asyncGetAllQuestion.fulfilled]: (state, action) => {
      // action.payload -> all questions
      state.questions.result = action.payload;
    },
		// 글 하나 조회
    [asyncGetOneQuestion.fulfilled]: (state, action) => {
      // action.paylaod -> one question
      state.question.result = action.payload;
    },
    [asyncPostQuestion.fulfilled]: (state, action) => {
      console.log("reducer", action);
    },
  },
});
console.log("dddd", createSlice);

export const { addPosting } = posting.actions;
export default posting.reducer;
