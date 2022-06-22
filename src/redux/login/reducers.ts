import { AnyAction } from 'redux';
import { INIT, LOADING, SUCCESS, ERROR, skills_added,education_added,experience_added} from '../../helper/constants';
import {
    LOGIN,
    LOGOUT,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGIN_RESET_ALERT,
    ADD_SKILL,
    ADD_SKILL_ERROR,
    ADD_SKILL_SUCCESS,
    ADD_EDUCATION,
    ADD_EXPERIENCE,
    ADD_EXPERIENCE_SUCCESS,
    ADD_EXPERIENCE_ERROR,
    ADD_EDUCATION_SUCCESS,
    ADD_EDUCATION_ERROR
} from './constants';

interface ILogin {
    user: any;
    phase: string;
    isLoggedIn: boolean;
    auth: any;
    message: string
}

const INIT_STATE: ILogin = {
    user: {},
    phase: INIT,
    isLoggedIn: false,
    auth: null,
    message: ''
}

const loginStore = (state = INIT_STATE, action: AnyAction) => {

    const { type, payload } = action;
    switch (type) {
        case LOGIN:
        case ADD_SKILL:
        case ADD_EDUCATION:
        case ADD_EXPERIENCE:
            return {
                ...state,
                phase: LOADING
            }
        case LOGIN_RESET_ALERT:
            return {
                ...state,
                phase: INIT,
                message: ''
            }
        case LOGOUT:
            return {
                ...state,
                phase: INIT,
                user: {},
                isLoggedIn: false,
                error : null
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                phase: SUCCESS,
                isLoggedIn: true,
                user: payload,
                error: null,
                message: ''
            }
        case ADD_SKILL_SUCCESS:
            return {
                ...state,
                phase: SUCCESS,
                error: null,
                user: {...state.user, skill_knowledge: payload},
                message: skills_added
            }
        case ADD_SKILL_ERROR:
            return {
                ...state,
                phase: ERROR,
                error: payload,
                message: payload
            }
            case ADD_EXPERIENCE_SUCCESS:
                return {
                    ...state,
                    phase: SUCCESS,
                    error: null,
                    user: {...state.user, work_experience: payload},
                    message:experience_added
                }
            case ADD_EXPERIENCE_ERROR:
                return {
                    ...state,
                    phase: ERROR,
                    error: payload,
                    message: payload
                }
            case ADD_EDUCATION_SUCCESS:
                return {
                    ...state,
                    phase: SUCCESS,
                    error: null,
                    user: {...state.user, education_details: payload},
                    message: education_added
                }
            case ADD_EDUCATION_ERROR:
                return {
                    ...state,
                    phase: ERROR,
                    error: payload,
                    message: payload
                }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                phase: ERROR,
                error: payload,
                user: {},
                message: payload
            }
        default:
            return {
                ...state
            }
    }
}

export {
    loginStore
}
