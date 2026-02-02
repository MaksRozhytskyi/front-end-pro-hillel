import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchHotelsApi} from '../api/hotelsApi';
import {
    fetchHotelsSuccess, fetchHotelsFailure, HOTELS_TYPES,
} from './hotelsSlice';
import {setSearchParams} from './searchSlice';
import {push} from 'redux-first-history';

function* fetchHotelsWorker(action) {
    try {
        const searchParams = action.payload || {};
        yield put(setSearchParams(searchParams));
        const {data} = yield call(fetchHotelsApi);
        yield put(fetchHotelsSuccess(data));
        yield put(push('/hotels'));
    } catch (error) {
        yield put(fetchHotelsFailure(error.message || 'Error loading hotels'));
    }
}

export function* watchHotels() {
    yield takeLatest(HOTELS_TYPES.HOTELS_FETCH_REQUEST, fetchHotelsWorker);
}
