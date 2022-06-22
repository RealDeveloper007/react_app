import axios from "axios";
import { API_URL, METHODS } from "../../helper/constants";
import { IRegisterProps } from "../interfaces";

const registerAPI: any = (data: IRegisterProps) => 
    axios({
        method: METHODS.POST,
        url: `${API_URL}/auth/register`,
        headers: { 'Content-Type': 'application/json' },
        data
    });

export {
    registerAPI
}