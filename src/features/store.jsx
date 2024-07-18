import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./TaskSlice";

const store = configureStore({
    reducer: {
        Tasks: TaskSlice,
    }
})

export default store;