import {useEffect} from "react";

const API_URL = '';

export const API_ROUTES = {
    SIGN_UP:  `${API_URL}/api/v1/users/signup`,
    SIGN_IN: `${API_URL}/api/v1/users/login`,
    GET_USER: `${API_URL}/api/v1/users/me`,
    UPDATE_USER: `${API_URL}/api/v1/users/updateme`
}

export const APP_ROUTES = {
    SIGN_UP: '/signup',
    SIGN_IN: '/login',
}
