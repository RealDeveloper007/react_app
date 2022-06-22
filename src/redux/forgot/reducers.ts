import { AnyAction } from 'redux';
import { INIT, LOADING, SUCCESS, ERROR,password_reset_success } from '../../helper/constants';
import {
    FORGOT,
    FORGOT_ERROR,
    FORGOT_RESET_ALERT,
    FORGOT_SUCCESS,
} from './constants';

interface IForgot {
    phase: string;
    status: boolean;
    message: string
}

const INIT_STATE: IForgot = {
    phase: INIT,
    status: false,
    message: ''

}

const forgotStore = (state = INIT_STATE, action: AnyAction) => {
    const { type, payload } = action;
    switch (type) {
        case FORGOT:
            return {
                ...state,
                phase: LOADING
            }
        case FORGOT_RESET_ALERT:
                return {
                    ...state,
                    phase: INIT,
                    message: ''
                }
        case FORGOT_SUCCESS: 
            return {
                ...state,
                phase: SUCCESS,
                status: true,
                error: null,
                message: password_reset_success
            }
        case FORGOT_ERROR:
            return {
                ...state,
                status: false,
                phase: ERROR,
                error: payload,
                message: payload
            }
        default:
            return {
                ...state
            }
    }
}

export {
    forgotStore
}
