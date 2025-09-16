import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

const todoStore=configureStore({
    reducer:{
        todoReducer:todoSlice
    }
})
export default todoStore