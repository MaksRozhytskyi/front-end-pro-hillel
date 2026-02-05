import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchHotelsApi} from '../api/hotelsApi';
import {
    fetchHotelsRequest, fetchHotelsSuccess, fetchHotelsFailure,
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
    yield takeLatest(fetchHotelsRequest.type, fetchHotelsWorker);
}
