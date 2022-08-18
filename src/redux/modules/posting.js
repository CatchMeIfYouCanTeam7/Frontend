import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_URL + '/api';

export const asyncGetAllQuestion = createAsyncThunk(
	'posting/getAllQuestion',
	async (payload, thunkAPI) => {
		const response = await axios.get(url + '/questions');

		if (response.status === 200 && response.data.success === true) {
			return thunkAPI.fulfillWithValue(response.data.data);
		} else {
			return null;
		}
	}
);

export const asyncGetOneQuestion = createAsyncThunk(
	'posting/getOneQuestion',
	async (payload, thunkAPI) => {
		// payload -> question id
		const response = await axios.get(url + `/questions/${payload}`);

		if (response.status === 200 && response.data.success === true) {
			return thunkAPI.fulfillWithValue(response.data.data);
		} else {
			return null;
		}
	}
);

export const asyncPostQuestion = createAsyncThunk(
  "posting/postQuestion",
  async (payload, thunkAPI) => {
		try {
			const response = await axios.post(
				url + "/auth/questions",
				payload.formData,
				{
					headers: {
						Authorization: JSON.parse(localStorage.getItem("accessToken" + payload.userId)).auth,
						"Content-Type": "multipart/form-data",
					},
				},
			);

			return thunkAPI.fulfillWithValue(response.data.data);
		} catch (err) {
			return thunkAPI.rejectWithValue();
		}
  },
);

export const asyncRemoveQuestion = createAsyncThunk(
	"posting/removeQuestion",
	async (payload, thunkAPI) => {
		const response = await axios.delete(
			url + `/auth/questions/${payload.questionId}`,
			{
				headers: {
					Authorization: JSON.parse(localStorage.getItem("accessToken" + payload.userId)).auth
				}
			}
		)
		
		if (response.status === 200 && response.data.success === true) {
			return thunkAPI.fulfillWithValue(payload.questionId);
		} else {
			return null;
		}
	}
);

export const asyncEditQuestion = createAsyncThunk(
	"posting/editQuestion",
	async (payload, thunkAPI) => {
		console.log(payload);
		const response = await axios.put(
			url + `/auth/questions/${payload.questonId}`,
			payload.formData,
			{
				headers: {
					Authorization: JSON.parse(localStorage.getItem("accessToken" + payload.userId)).auth,
					"Content-Type": "multipart/form-data",
				},
			}
		);
		
		if (response.status === 200 && response.data.success === true) {
			return thunkAPI.fulfillWithValue(response.data.data);
		} else {
			return null;
		}
	}
)

const initialState = {
	questions: {},
	question: {},
};

const posting = createSlice({
	name: 'posting',
	initialState,
	reducers: {
		addPosting(state, action) {
			state.questions = action.payload.date;
			state.questions.push(action.payload);
		},
	},

	extraReducers: {
		// 글 전체 조회
		[asyncGetAllQuestion.fulfilled]: (state, action) => {
			// action.payload -> all questions
			state.questions = action.payload;
		},

		// 글 하나 조회
		[asyncGetOneQuestion.fulfilled]: (state, action) => {
			// action.paylaod -> one question
			state.question = action.payload;
		},

		// 글 작성
		[asyncPostQuestion.fulfilled]: (state, action) => {
			// action.payload -> question
			state.questions.push(action.payload);
		},

		// 글 삭제
		[asyncRemoveQuestion.fulfilled]: (state, action) => {
			// action.payload -> question id
			state.questions = state.questions.filter((item) => item.id !== action.payload);
		},

		// 글 수정
		[asyncEditQuestion.fulfilled]: (state, action) => {
			// action.payload -> question
			state.questions = state.questions.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload;
				} else {
					return item;
				}
			});
		}
	}
});

export const { addPosting } = posting.actions;
export default posting.reducer;
