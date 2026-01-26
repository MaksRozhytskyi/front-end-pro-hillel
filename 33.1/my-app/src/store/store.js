import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './slices/todoSlice.js';
import {todoSaga} from './sagas/todoSaga.js';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(todoSaga);