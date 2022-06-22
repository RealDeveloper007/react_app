import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects"
import { profileAPI } from "./api";
import { PROFILE, PROFILE_ERROR, PROFILE_SUCCESS } from "./constants";

function* profile(action: AnyAction): any {
    const { payload } = action;
    const formData = new FormData();
    Object.keys(payload).forEach((key: any) => {
        if (key === 'cv') {
            if(payload[key] !== undefined)
            {   
      

                if(typeof payload[key] !== 'string' && payload[key] !==null)
                {
                    console.log(payload[key]);
                    console.log(key);
                 formData.append(key, payload[key], payload[key].name);
                }
            }
        } else {
            formData.append(key, payload[key]);
        }
    })
    const response = yield call(profileAPI, formData);
    if (response.status) {
        sessionStorage.setItem('user', JSON.stringify(response.data));
        yield put({ type: PROFILE_SUCCESS, payload: response });     
    } else {
        yield put({ type: PROFILE_ERROR, payload: response.message });     
    }
}

function* profileSaga() {
    yield takeLatest(PROFILE, profile);
}

export {
    profileSaga
}