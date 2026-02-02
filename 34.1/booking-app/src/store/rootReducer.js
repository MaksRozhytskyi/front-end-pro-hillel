import {combineReducers} from 'redux';
import {routerReducer} from './router';
import {destinationReducer} from './destinationSlice';
import {hotelsReducer} from './hotelsSlice';
import {searchReducer} from './searchSlice';

export const rootReducer = combineReducers({
    router: routerReducer, destination: destinationReducer, hotels: hotelsReducer, search: searchReducer,
});
