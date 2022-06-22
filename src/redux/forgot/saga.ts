import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects"
import { forgotAPI } from "./api";
import { FORGOT, FORGOT_ERROR, FORGOT_SUCCESS } from "./constants"

function* forgot(action: AnyAction): any {
    const { payload } = action;
    const response = yield call(forgotAPI, payload);
    if (response.status) {
        yield put({ type: FORGOT_SUCCESS, payload: response.message });     
    } else {
        yield put({ type: FORGOT_ERROR, payload: response.message });     
    }
}

function* forgotSaga() {
    yield takeLatest(FORGOT, forgot);
}

export {
    forgotSaga
}