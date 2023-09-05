import axios from "axios";

// api urls
export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    responseType: 'json',
    timeout : 3000,
    headers:{'Content-Type' : 'application/json'}
});

export const AUTH = {
    LOG_IN: "posts",
    LOG_OUT: "api/logout/",
    SIGN_UP: "api/rest-auth/registration",
};