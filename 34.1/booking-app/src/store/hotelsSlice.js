import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: [],
    loading: false,
    error: null,
};

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        fetchHotelsRequest: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        fetchHotelsSuccess: (state, action) => {
            state.loading = false;
            state.list = action.payload;
        },
        fetchHotelsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchHotelsRequest,
    fetchHotelsSuccess,
    fetchHotelsFailure,
} = hotelsSlice.actions;

export default hotelsSlice.reducer;
