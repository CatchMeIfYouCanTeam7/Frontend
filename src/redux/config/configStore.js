import { configureStore } from "@reduxjs/toolkit";
import comment from "../modules/comment";
import posting from "../modules/posting";

const store = configureStore({
  reducer: { 
		comment: comment,
		posting: posting
	},
});

export default store;