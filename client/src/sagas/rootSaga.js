import {takeLatest, takeLeading, takeEvery} from 'redux-saga/effects';
import actions from '../store/actions';

function* rootSaga() {
    yield  takeLatest(actions.todos.clearError.type, registerSaga);
}

export default rootSaga