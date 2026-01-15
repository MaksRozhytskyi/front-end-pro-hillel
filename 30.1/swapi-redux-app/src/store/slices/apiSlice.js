import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const BASE_URL = 'https://swapi.py4e.com/api/';

export const fetchFromUrl = createAsyncThunk('api/fetchFromUrl', async (path) => {
    const fullUrl = BASE_URL + path;

    const response = await fetch(fullUrl);

    if (!response.ok) throw new Error('Failed to fetch');

    const data = await response.json();

    return {
        path, fullUrl, data
    };
});

const apiSlice = createSlice({
    name: 'api', initialState: {
        path: '', fullUrl: '', jsonData: null, loading: false, error: null
    }, reducers: {
        clearData(state) {
            state.path = '';
            state.fullUrl = '';
            state.jsonData = null;
            state.error = null;
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(fetchFromUrl.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFromUrl.fulfilled, (state, action) => {
                state.loading = false;
                state.path = action.payload.path;
                state.fullUrl = action.payload.fullUrl;
                state.jsonData = action.payload.data;
                state.error = null;
            })
            .addCase(fetchFromUrl.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const {clearData} = apiSlice.actions;
export default apiSlice.reducer;