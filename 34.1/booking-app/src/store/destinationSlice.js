import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: [], loading: false, error: null,
};

const destinationSlice = createSlice({
    name: 'destination', initialState, reducers: {
        fetchDestinationsRequest: (state) => {
            state.loading = true;
            state.error = null;
        }, fetchDestinationsSuccess: (state, action) => {
            state.loading = false;
            state.list = action.payload;
        }, fetchDestinationsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchDestinationsRequest, fetchDestinationsSuccess, fetchDestinationsFailure,
} = destinationSlice.actions;

export default destinationSlice.reducer;
