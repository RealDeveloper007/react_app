import axios from "axios";

let token: string = '';
const setupInterceptors = () => {
    axios.interceptors.request.use(config => {
        const initToken = sessionStorage.getItem('token');
        token = `Bearer ${initToken}`;
        if (!config.headers) {
            config.headers = {};
        }
        config.headers.Authorization = token;
        return config;
    }, error => {
        console.error(error);
    });
    axios.interceptors.response.use(response => {
        const { status, data, message } = response.data;
        if (!status) {
            console.error('failed');
            console.error(message);
            return { status, message };
        } else {
            console.log('Success');
            console.log({data, message});
            return { status, data };
        }
    }, error => {
        console.log(error);
    })
};
export {
    setupInterceptors,
    token
}