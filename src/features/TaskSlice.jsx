/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit"

//localStorage.clear();

const initialState = {
    tasks: []
}

const tasks = JSON.parse(localStorage.getItem('tasks'));

if(tasks){
    initialState.tasks = tasks;
}

// eslint-disable-next-line react-refresh/only-export-components
const TaskSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload)
            state.tasks = [...state.tasks, action.payload];
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id != action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        updateTask: (state, action) => {
            const { id, name, title, description, createdAt } = action.payload;
            let task = state.tasks.find((task) => task.id == id)
            if(task){
                task.name = name,
                task.title = title;
                task.description = description;
                task.createdAt = createdAt;
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
        getTask: (state, action) => {
            const task = state.tasks.find((task) => task.id == action.payload);
            return tasks;
        }
    }
});

export const {addTask, removeTask, updateTask, getTask} = TaskSlice.actions;
export default TaskSlice.reducer;