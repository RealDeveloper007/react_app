import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects"
import { registerAPI } from "./api";
import { REGISTER, REGISTER_ERROR, REGISTER_SUCCESS } from "./constants"

function* register(action: AnyAction): any {
    const { payload } = action;
    const response = yield call(registerAPI, payload);
    if (response.status) {
        yield put({ type: REGISTER_SUCCESS, payload: response.message });     
    } else {
        yield put({ type: REGISTER_ERROR, payload: response.message });     
    }
}

function* registerSaga() {
    yield takeLatest(REGISTER, register);
}

export {
    registerSaga
}