const initialState = {
    list: [], loading: false, error: null,
};

const HOTELS_FETCH_REQUEST = 'HOTELS_FETCH_REQUEST';
const HOTELS_FETCH_SUCCESS = 'HOTELS_FETCH_SUCCESS';
const HOTELS_FETCH_FAILURE = 'HOTELS_FETCH_FAILURE';

export const fetchHotelsRequest = (searchParams) => ({
    type: HOTELS_FETCH_REQUEST, payload: searchParams,
});

export const fetchHotelsSuccess = (items) => ({
    type: HOTELS_FETCH_SUCCESS, payload: items,
});

export const fetchHotelsFailure = (error) => ({
    type: HOTELS_FETCH_FAILURE, payload: error,
});

export const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOTELS_FETCH_REQUEST:
            return {...state, loading: true, error: null};
        case HOTELS_FETCH_SUCCESS:
            return {...state, loading: false, list: action.payload};
        case HOTELS_FETCH_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export const HOTELS_TYPES = {
    HOTELS_FETCH_REQUEST,
};
