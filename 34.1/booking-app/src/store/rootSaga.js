import {all} from 'redux-saga/effects';
import {watchDestinations} from './destinationSaga';
import {watchHotels} from './hotelsSaga';

export function* rootSaga() {
    yield all([watchDestinations(), watchHotels(),]);
}
