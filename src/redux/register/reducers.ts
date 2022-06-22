import { AnyAction } from 'redux';
import { INIT, LOADING, SUCCESS, ERROR,register_success } from '../../helper/constants';
import {
    REGISTER,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
} from './constants';

interface IRegister {
    phase: string;
    status: boolean;
    message: string
}

const INIT_STATE: IRegister = {
    phase: INIT,
    status: false,
    message: ''

}

const registerStore = (state = INIT_STATE, action: AnyAction) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER:
            return {
                ...state,
                phase: LOADING
            }
        case REGISTER_SUCCESS: 
            return {
                ...state,
                phase: SUCCESS,
                status: true,
                error: null,
                message: register_success
            }
        case REGISTER_ERROR:
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
    registerStore
}
