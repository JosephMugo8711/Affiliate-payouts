import {postRequest} from "../../config/axiosConfig";
import { setToken,setUser} from "../slices/auth.slice";

export function signInAsyc(data) {
    return async (dispatch, _getState) => {
        try {
            const res = await postRequest('api/v1/users/login', data);
            dispatch(setToken(res.token));
            dispatch(setUser(res.data.user));
            return res;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}


export function signUpAsyc(data) {
    return async (dispatch, _getState) => {
        try {
            const res = await postRequest('/api/v1/users/signup', { ...data, phoneNumber: data.phoneNumber });
            dispatch(setUser(res.user))
            dispatch({ type: 'SET_PHONE_NUMBER', payload: data.phoneNumber })
            return res
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}
