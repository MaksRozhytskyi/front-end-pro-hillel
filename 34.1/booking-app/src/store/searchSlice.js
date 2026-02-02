const initialState = {
    destination: '', checkIn: '', checkOut: '', adults: '', children: '',
};

const SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS';

export const setSearchParams = (params) => ({
    type: SET_SEARCH_PARAMS, payload: params,
});

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_PARAMS:
            return {...state, ...action.payload};
        default:
            return state;
    }
};
