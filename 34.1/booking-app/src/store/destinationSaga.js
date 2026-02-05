import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchDestinationsApi} from '../api/destinationApi';
import {
    fetchDestinationsRequest, fetchDestinationsSuccess, fetchDestinationsFailure,
} from './destinationSlice';

function* fetchDestinationsWorker() {
    try {
        const {data} = yield call(fetchDestinationsApi);
        const list = Array.isArray(data) ? data : data.destination || [];
        yield put(fetchDestinationsSuccess(list));
    } catch (error) {
        yield put(fetchDestinationsFailure(error.message || 'Error loading destinations'));
    }
}

export function* watchDestinations() {
    yield takeLatest(fetchDestinationsRequest.type, fetchDestinationsWorker);
}
