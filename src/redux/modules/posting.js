import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_URL + '/api';

export const asyncGetAllQuestion = createAsyncThunk(
	'posting/getAllQuestion',
	async (payload, thnkAPI) => {
		const response = await axios.get(url + '/questions');

		if (response.status === 200 && response.data.success === true) {
			return response.data.data;
		} else {
			return null;
		}
	}
);

export const asyncGetOneQuestion = createAsyncThunk(
	'posting/getOneQuestion',
	async (payload, thnkAPI) => {
		// payload -> question id
		const response = await axios.get(url + `/questions/${payload}`);

		if (response.status === 200 && response.data.success === true) {
			return response.data.data;
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
			console.log('reducer', response);
			return thunkAPI.fulfillWithValue(response.data.data);
		} catch (err) {
			// console.log('err', err);
			return thunkAPI.rejectWithValue({status: err.response.status, data: err.response.data});
		}
  },
);

const initialState = {
	questions: {
		result: [],
		status: 200,
		data: {}
	},
	question: {
		result: {},
		status: 200,
		data: {}
	},
};

const posting = createSlice({
	name: 'posting',
	initialState,
	reducers: {
		addPosting(state, action) {
			state.questions = action.payload.date;
			state.qusetions.push(action.payload);
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

		// 글 작성
		[asyncPostQuestion.fulfilled]: (state, action) => {
			// console.log('reducer', action);
			state.question.result.push(action.paylaod);
		},
		[asyncPostQuestion.rejected]: (state, action) => {
			// console.log('post question fail', action.payload);
			state.question.status = action.payload.status;
			state.question.message = action.payload.data;
		}
	},

});
console.log('dddd', createSlice);

export const { addPosting } = posting.actions;
export default posting.reducer;
