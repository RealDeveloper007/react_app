import axios from "axios";
import { API_URL, METHODS } from "../../helper/constants";
import { IProfileBasicProps } from "../../interfaces/IProfileBasicProps";

const profileAPI: any = (data: IProfileBasicProps) => 
    axios({
        method: METHODS.POST,
        url: `${API_URL}/add-basic-details`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data
    });

export {
    profileAPI
}