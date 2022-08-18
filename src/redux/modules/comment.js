import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_URL + '/api';

export const asyncGetCommentByQuestion = createAsyncThunk(
  "comments/getCommentByQuestion",
  async (payload, thunkAPI) => {
    const response = await axios.get(url + `/comments/${payload}`);
		
		if(response.status === 200 && response.data.success === true) {
			return thunkAPI.fulfillWithValue(response.data.data);
		} else {
			return null;
		}
  },
);

export const asyncAddComment = createAsyncThunk(
  "comments/addComment",
  async (payload, thunkAPI) => {
    const response = await axios.post(
      url + "/auth/comments",
      {
        questionId: payload.questionId,
        comment: payload.comment,
      },
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("accessToken" + payload.userId)).auth,
        },
      },
    );
		
		if(response.status === 200 && response.data.success === true) {
			// 정답 확인
			response.data.data.trueOrFalse ? alert('정답입니다!') : alert('정답이 아닙니다!');
			return thunkAPI.fulfillWithValue(response.data.data);
		} else {
			return null;
		}
  },
);

export const asyncRemoveComment = createAsyncThunk(
  "comments/removeComment",
  async (payload, thunkAPI) => {
    const response = await axios.delete(
      url + `/auth/comments/${payload.commentId}`,
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("accessToken" + payload.userId)).auth,
        },
      },
    );

    if (response.status === 200 && response.data.success === true) {
      return thunkAPI.fulfillWithValue(payload.commentId);
    } else {
      return null;
    }
  },
);

const initialState = {
  comments: [],
  comment: {}
};

const comment = createSlice({
  name: "comment",
  initialState,
  extraReducers: {
		// 글에 작성된 댓글 전부 조회
    [asyncGetCommentByQuestion.fulfilled]: (state, action) => {
      // action.payload -> comments by question
      state.comments = action.payload;
    },

		// 댓글 작성
    [asyncAddComment.fulfilled]: (state, action) => {
      // action.payload -> comment
      state.comment = action.payload;
    },

		// 댓글 삭제
    [asyncRemoveComment.fulfilled]: (state, action) => {
      // action.payload -> comment id
      state.comments = state.comments.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export default comment.reducer;
