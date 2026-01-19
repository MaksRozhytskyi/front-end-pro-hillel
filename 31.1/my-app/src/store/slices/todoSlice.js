import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos', initialState: {
        items: [], loading: false, error: null,
    }, reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setError: (state, action) => {
            state.error = action.payload;
        },

        setTodos: (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },

        addTodoSuccess: (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        },

        updateTodoSuccess: (state, action) => {
            const index = state.items.findIndex((todo) => todo._id === action.payload._id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
            state.loading = false;
        },

        deleteTodoSuccess: (state, action) => {
            state.items = state.items.filter((todo) => todo._id !== action.payload);
            state.loading = false;
        },

        clearCompletedSuccess: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        },
    },
});

export const {
    setLoading, setError, setTodos, addTodoSuccess, updateTodoSuccess, deleteTodoSuccess, clearCompletedSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;