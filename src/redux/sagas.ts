import { all } from "redux-saga/effects";
import { addSkillSaga,addExperienceSaga,addEducationSaga, loginSaga, logoutSaga } from "./login/saga";
import { registerSaga } from "./register/saga";
import { forgotSaga } from "./forgot/saga";
import { profileSaga } from "./profile/saga";
export default function* rootSaga() {
    yield all([
        loginSaga(),
        logoutSaga(),
        addSkillSaga(),
        addExperienceSaga(),
        addEducationSaga(),
        registerSaga(),
        forgotSaga(),
        profileSaga()
    ]);
}