import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const todoSlice=createSlice({
    name:"todos",
    initialState:[
        // {id:1,title:'todo1',completed:false},
        // {id:2,title:'todo1',completed:false},
        // {id:3,title:'todo1',completed:false},
        // {id:4,title:'todo1',completed:false},
    ],
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:new Date().getTime(),
                title:action.payload.title,
                completed:false,
            };
            state.push(todo);
        },
        toggleComplete:(state,action)=>{
            const idx=state.findIndex((todo)=>todo.id===action.payload.id);
            state[idx].completed=action.payload.completed;
        },
        deleteTodo:(state,action)=>{
            let x=state.filter((todo)=>todo.id!==action.payload.id);
            return x;
        },
    },
});
export const {addTodo,toggleComplete,deleteTodo}=todoSlice.actions;
export default todoSlice.reducer;