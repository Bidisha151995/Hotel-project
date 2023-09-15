import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slice/AuthSlice';
const store=configureStore({
  reducer:{
    user:userReducer
  }
})
export default store