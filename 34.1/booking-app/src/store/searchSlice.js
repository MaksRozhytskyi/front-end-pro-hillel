import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    destination: '', checkIn: '', checkOut: '', adults: '', children: '',
};

const searchSlice = createSlice({
    name: 'search', initialState, reducers: {
        setSearchParams: (state, action) => {
            return {...state, ...action.payload};
        },
    },
});

export const {setSearchParams} = searchSlice.actions;

export default searchSlice.reducer;
