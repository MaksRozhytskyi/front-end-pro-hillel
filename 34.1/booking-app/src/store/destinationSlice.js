const initialState = {
    list: [], loading: false, error: null,
};

const DESTINATIONS_FETCH_REQUEST = 'DESTINATIONS_FETCH_REQUEST';
const DESTINATIONS_FETCH_SUCCESS = 'DESTINATIONS_FETCH_SUCCESS';
const DESTINATIONS_FETCH_FAILURE = 'DESTINATIONS_FETCH_FAILURE';

export const fetchDestinationsRequest = () => ({
    type: DESTINATIONS_FETCH_REQUEST,
});

export const fetchDestinationsSuccess = (items) => ({
    type: DESTINATIONS_FETCH_SUCCESS, payload: items,
});

export const fetchDestinationsFailure = (error) => ({
    type: DESTINATIONS_FETCH_FAILURE, payload: error,
});

export const destinationReducer = (state = initialState, action) => {
    switch (action.type) {
        case DESTINATIONS_FETCH_REQUEST:
            return {...state, loading: true, error: null};
        case DESTINATIONS_FETCH_SUCCESS:
            return {...state, loading: false, list: action.payload};
        case DESTINATIONS_FETCH_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export const DESTINATIONS_TYPES = {
    DESTINATIONS_FETCH_REQUEST,
};
