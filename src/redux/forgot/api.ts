import axios from "axios";
import { API_URL, METHODS } from "../../helper/constants";
import { IForgotProps } from "../interfaces";

const forgotAPI: any = (data: IForgotProps) => 
    axios({
        method: METHODS.POST,
        url: `${API_URL}/auth/forgot`,
        headers: { 'Content-Type': 'application/json' },
        data
    });

export {
    forgotAPI
}