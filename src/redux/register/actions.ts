import { REGISTER } from "./constants";
import { IRegisterProps } from "../interfaces";

const register = (payload: IRegisterProps) => ({
    type: REGISTER,
    payload
});

export {
    register
}