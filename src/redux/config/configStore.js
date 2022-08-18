import { configureStore } from "@reduxjs/toolkit";
import comment from "../modules/comment";
import posting from "../modules/posting";

const store = configureStore({
  reducer: { 
		comment: comment,
		posting: posting
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;