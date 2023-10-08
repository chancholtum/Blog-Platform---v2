import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slice/postSlice";
import userReducer from "./Slice/userSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
  },
});

export default store;
