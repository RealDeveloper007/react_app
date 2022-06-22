import { AnyAction } from 'redux';
import { INIT, LOADING, SUCCESS, ERROR,profile_updated } from '../../helper/constants';
import {
    PROFILE,
    PROFILE_ERROR,
    PROFILE_RESET_ALERT,
    PROFILE_SUCCESS,
} from './constants';

interface IProfile {
    phase: string;
    status: boolean;
    message: string;
    data:any;
}

const INIT_STATE: IProfile = {
    phase: INIT,
    status: false,
    message: '',
    data: {}

}

const profileStore = (state = INIT_STATE, action: AnyAction) => {
    const { type, payload } = action;
    switch (type) {
        case PROFILE:
            return {
                ...state,
                phase: LOADING
            }
        case PROFILE_RESET_ALERT:
                return {
                    ...state,
                    phase: INIT,
                    message: ''
                }
        case PROFILE_SUCCESS: 
            return {
                ...state,
                phase: SUCCESS,
                status: true,
                error: null,
                message: profile_updated,
                data : payload.data
            }
        case PROFILE_ERROR:
            return {
                ...state,
                status: false,
                phase: ERROR,
                error: payload,
                message: payload,
                data : {}
            }
        default:
            return {
                ...state
            }
    }
}

export {
    profileStore
}
