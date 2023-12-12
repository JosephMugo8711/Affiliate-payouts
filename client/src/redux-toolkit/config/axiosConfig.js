import { apiEndpoint } from './enviroment';
import axios from 'axios';
import store from '../store/index.js';


const axiosClient = axios.create();

const authHeader = (config) => {
    const state = store.getState();
    const token = state.auth.token;
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        };
    }
    console.log("Request Config Headers:", config.headers);
    return config;
};

axiosClient.defaults.baseURL = apiEndpoint;
axiosClient.interceptors.request.use(authHeader);

axiosClient.interceptors.request.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);
export async function getRequest(URL) {
    try {
        const response = await axiosClient.get(URL);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function postRequest(URL, payload) {
    try {
        const response = await axiosClient.post(URL, payload);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function putRequest(URL, payload) {
    try {
        const response = await axiosClient.put(URL, payload);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function deleteRequest(URL) {
    try {
        const response = await axiosClient.delete(URL);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function patchRequest(URL, payload) {
    try {
        const response = await axiosClient.patch(URL, payload);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}