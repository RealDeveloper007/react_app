import axios from "axios";
import { API_URL, METHODS } from "../../helper/constants";
import { ILoginProps } from "../interfaces";

const loginAPI: any = (data: ILoginProps) => 
    axios({
        method: METHODS.POST,
        url: `${API_URL}/auth/login`,
        headers: { 'Content-Type': 'application/json' },
        data
    });

const addSkillsAPI: any = (data: any) =>
    axios({
        method: METHODS.POST,
        url: `${API_URL}/add-skills`,
        headers: { 'Content-Type': 'application/json' },
        data
    });


const addExperienceAPI: any = (data: any) =>
axios({
    method: METHODS.POST,
    url: `${API_URL}/add-work-experience`,
    headers: { 'Content-Type': 'application/json' },
    data
});

const addEducationAPI: any = (data: any) =>
axios({
    method: METHODS.POST,
    url: `${API_URL}/add-education-details`,
    headers: { 'Content-Type': 'application/json' },
    data
});

export {
    loginAPI,
    addSkillsAPI,
    addExperienceAPI,
    addEducationAPI
}