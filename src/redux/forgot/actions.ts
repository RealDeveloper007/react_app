import { FORGOT, FORGOT_RESET_ALERT } from "./constants";
import { IForgotProps } from "../interfaces";

const forgot = (payload: IForgotProps) => ({
    type: FORGOT,
    payload
});

const resetForgotAlert = () => ({
    type: FORGOT_RESET_ALERT
});

export {
    forgot,
    resetForgotAlert
}