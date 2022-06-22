import { Method } from "axios";

const skills_added = 'Spretnosti in znanja uspešno posodobljeni!';
const experience_added = 'Izkušnje uspešno posodobljene!';
const education_added = 'Podatki o izobrazbi uspešno posodobljeni !';
const password_reset_success = "Geslo je bilo uspešno poslano na vaš e-mail naslov !";
const images_uploaded = "Hvala za komentar! Slike bodo objavljene po potrditvi administratorja.";
const profile_updated = 'Profil je uspešno posodobljen';
const register_success = 'Uspešna registracija';
const API_URL = process.env.REACT_APP_API_URL;
const BASE_URL = '';
const LOGO_URL = '';
const PROFILE_URL = '';
const PROFILE_BASIC_URL = '';

const METHODS = {
    DELETE: 'DELETE' as Method,
    GET: 'GET' as Method,
    POST: 'POST' as Method,
    PUT: 'PUT' as Method,
    PATCH: 'PATCH' as Method,
}

const INIT = 'INIT';
const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
enum ALERT_CLASS  {
    SUCCESS = "success",
    ERROR = "danger",
    WARNING = "warning",
    INFO = "info"
}
const ALERT_TIMEOUT = 3000;
enum STORES {
    LOGIN_STORE = "LOGIN_STORE",
    REGISTER_STORE = "REGISTER_STORE",
    FORGOT_STORE = "FORGOT_STORE",
    PROFILE_STORE = "PROFILE_STORE",
}


export {
    skills_added,
    experience_added,
    education_added,
    password_reset_success,
    images_uploaded,
    profile_updated,
    register_success,
    API_URL,
    METHODS,
    ALERT_CLASS,
    ALERT_TIMEOUT,
    STORES,
    INIT,
    LOADING,
    SUCCESS,
    ERROR,
    PROFILE_URL,
    LOGO_URL,
    PROFILE_BASIC_URL,
    BASE_URL
};



