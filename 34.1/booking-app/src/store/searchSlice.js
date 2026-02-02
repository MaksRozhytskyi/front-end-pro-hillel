const initialState = {
    destination: '', checkIn: '', checkOut: '', adults: '', children: '',
};

const SEARCH_SET_PARAMS = 'SEARCH_SET_PARAMS';

export const setSearchParams = (params) => ({
    type: SEARCH_SET_PARAMS, payload: params,
});

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_SET_PARAMS:
            return {...state, ...action.payload};
        default:
            return state;
    }
};
