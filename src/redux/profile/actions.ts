import { PROFILE, PROFILE_RESET_ALERT } from "./constants";
import { IProfileBasicProps } from "../../interfaces/IProfileBasicProps";

const profile = (payload: IProfileBasicProps) => ({
    type: PROFILE,
    payload
});

const resetProfileAlert = () => ({
    type: PROFILE_RESET_ALERT
});

export {
    profile,
    resetProfileAlert
}