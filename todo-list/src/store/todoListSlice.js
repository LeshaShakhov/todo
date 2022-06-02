import {createSlice} from "@reduxjs/toolkit";

const initialState = [
        {id: 1, text: 'sleep', done: false},
        {id: 2, text: 'breakfast', done: false},
        {id: 3, text: 'work', done: false},
        {id: 4, text: 'dinner', done: false},
        {id: 5, text: 'shower', done: false},
    ]


const todoListSlice = createSlice({
    name: 'todoListSlice',
    initialState,
    reducers: {
        toggleDone: (state, action) => {
            let todoItem = state.find(todoItem => todoItem.id === action.payload);
            if(todoItem){
                todoItem.done = !todoItem.done;
            }
        },
        add: (state, action) => {
            const todoItem = {
                id: Math.max(0, ...state.map(todoItem => todoItem.id)) + 1,
                text: action.payload,
                done: false
            }
            return [...state, todoItem]
        },
        remove: (state, action) => {
            return state.filter(todoItem => {
                if (todoItem.id !== action.payload) {
                    return todoItem
                }
                return false
            })
        }
    }
})

export const {toggleDone, add, remove} = todoListSlice.actions;
export default todoListSlice.reducer;

