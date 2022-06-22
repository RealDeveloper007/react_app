import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects"
import { addSkillsAPI,addExperienceAPI, loginAPI, addEducationAPI } from "./api";
import { LOGIN, LOGOUT, LOGIN_ERROR, LOGIN_SUCCESS, ADD_SKILL, ADD_SKILL_SUCCESS, ADD_SKILL_ERROR,ADD_EXPERIENCE_SUCCESS,ADD_EXPERIENCE_ERROR, ADD_EXPERIENCE, ADD_EDUCATION, ADD_EDUCATION_SUCCESS, ADD_EDUCATION_ERROR } from "./constants"

function* login(action: AnyAction): any {
    const { payload } = action;
    const response = yield call(loginAPI, payload);
    if (response.status) {
        const { token, ...user } = response.data;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
        yield put({ type: LOGIN_SUCCESS, payload: user });     
    } else {
        yield put({ type: LOGIN_ERROR, payload: response.message });     
    }
}

function* loginSaga() {
    yield takeLatest(LOGIN, login);
}

function* logout() {
    yield sessionStorage.removeItem('token');
    yield sessionStorage.removeItem('user');
}

function* logoutSaga() {
    yield takeLatest(LOGOUT, logout);
}

function* addSkill(action: AnyAction): any {
    const { payload } = action;
    const response = yield call(addSkillsAPI, payload);
    if (response.status) {
        const { title } = payload;
        sessionStorage.setItem('user', JSON.stringify(response.data));
        yield put({ type: ADD_SKILL_SUCCESS, payload: title });     
    } else {
        yield put({ type: ADD_SKILL_ERROR, payload: response.message });     
    }
    yield true;
}

function* addSkillSaga() {
    yield takeLatest(ADD_SKILL, addSkill);
}

function* addExperience(action: AnyAction): any {
    const { payload } = action;
    const response = yield call(addExperienceAPI, payload);
    if (response.status) {
        sessionStorage.setItem('user', JSON.stringify(response.data));
        yield put({ type: ADD_EXPERIENCE_SUCCESS, payload: response.data.work_experience });     
    } else {
        yield put({ type: ADD_EXPERIENCE_ERROR, payload: response.message });     
    }
    yield true;
}

function* addExperienceSaga() {
    yield takeLatest(ADD_EXPERIENCE, addExperience);
}

function* addEducation(action: AnyAction): any {
    const { payload } = action;
    const response = yield call(addEducationAPI, payload);
    if (response.status) {
        sessionStorage.setItem('user', JSON.stringify(response.data));
        yield put({ type: ADD_EDUCATION_SUCCESS, payload: response.data.education_details });     
    } else {
        yield put({ type: ADD_EDUCATION_ERROR, payload: response.message });     
    }
    yield true;
}

function* addEducationSaga() {
    yield takeLatest(ADD_EDUCATION, addEducation);
}


export {
    loginSaga,
    logoutSaga,
    addSkillSaga,
    addExperienceSaga,
    addEducationSaga
}