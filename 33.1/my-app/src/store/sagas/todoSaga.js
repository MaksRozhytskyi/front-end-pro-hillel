import {call, put, takeEvery} from 'redux-saga/effects';
import {todoApi} from '../../api/todoApi.js';
import {
    setLoading, setError, setTodos, addTodoSuccess, updateTodoSuccess, deleteTodoSuccess, clearCompletedSuccess,
} from '../slices/todoSlice.js';

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';


function* fetchTodosSaga() {
    try {
        yield put(setLoading(true));
        const todos = yield call(todoApi.fetchTodos);
        yield put(setTodos(todos));
    } catch (error) {
        yield put(setError(error.message));
        yield put(setLoading(false));
    }
}

function* addTodoSaga(action) {
    try {
        yield put(setLoading(true));
        const newTodo = yield call(todoApi.addTodo, action.payload);
        yield put(addTodoSuccess(newTodo));
        yield call(fetchTodosSaga);
    } catch (error) {
        yield put(setError(error.message));
        yield put(setLoading(false));
    }
}

function* updateTodoSaga(action) {
    try {
        yield put(setLoading(true));
        const {id, data} = action.payload;
        const updatedTodo = yield call(todoApi.updateTodo, id, data);
        yield put(updateTodoSuccess(updatedTodo));
        yield call(fetchTodosSaga);
    } catch (error) {
        yield put(setError(error.message));
        yield put(setLoading(false));
    }
}

function* deleteTodoSaga(action) {
    try {
        yield put(setLoading(true));
        yield call(todoApi.deleteTodo, action.payload);
        yield put(deleteTodoSuccess(action.payload));
        yield call(fetchTodosSaga);
    } catch (error) {
        yield put(setError(error.message));
        yield put(setLoading(false));
    }
}

function* clearCompletedSaga() {
    try {
        yield put(setLoading(true));
        yield call(todoApi.clearCompleted);
        yield put(setLoading(false));
        yield put({type: FETCH_TODOS});
    } catch (error) {
        yield put(setError(error.message));
        yield put(setLoading(false));
    }
}


export function* todoSaga() {
    yield takeEvery(FETCH_TODOS, fetchTodosSaga);
    yield takeEvery(ADD_TODO, addTodoSaga);
    yield takeEvery(UPDATE_TODO, updateTodoSaga);
    yield takeEvery(DELETE_TODO, deleteTodoSaga);
    yield takeEvery(CLEAR_COMPLETED, clearCompletedSaga);
}