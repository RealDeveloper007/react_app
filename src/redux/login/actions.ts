import { LOGIN, LOGOUT, LOGIN_RESET_ALERT, ADD_SKILL, ADD_EXPERIENCE, ADD_EDUCATION, LOGIN_SUCCESS } from "./constants";
import { ILoginProps } from "../interfaces";

const login = (payload: ILoginProps) => ({
    type: LOGIN,
    payload
});

const logout = () => ({
    type: LOGOUT,
});

const resetLoginAlert = () => ({
    type: LOGIN_RESET_ALERT
});

const storeUserData = (payload: any) => ({
    type: LOGIN_SUCCESS,
    payload
});

const addSkill = (payload: any) => ({
    type: ADD_SKILL,
    payload
});

const addExperience = (payload: any) => ({
    type: ADD_EXPERIENCE,
    payload
});

const addEducation = (payload: any) => ({
    type: ADD_EDUCATION,
    payload
});

export {
    login,
    logout,
    resetLoginAlert,
    storeUserData,
    addSkill,
    addExperience,
    addEducation
}