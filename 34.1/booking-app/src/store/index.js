import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './rootReducer';
import {rootSaga} from './rootSaga';
import {reduxRouterMiddleware, routerHistory} from './router';

const sagaMiddleware = createSagaMiddleware();

const middleware = [reduxRouterMiddleware, sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export const history = routerHistory(store);
