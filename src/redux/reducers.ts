import { combineReducers } from "redux";
import { loginStore } from "./login/reducers";
import { registerStore } from "./register/reducers";
import { forgotStore } from "./forgot/reducers";
import { profileStore } from "./profile/reducers";

const reducers = combineReducers({
    loginStore,
    registerStore,
    forgotStore,
    profileStore,
});

export default reducers;