import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos', initialState: {
        items: []
    }, reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: Math.random(), text: action.payload
            })
        }
    },
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;