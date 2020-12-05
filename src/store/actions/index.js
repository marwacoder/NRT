import axios from 'axios'

import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (payload) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload
    }
}

export const authFail = (payload) => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload
    };
};

export const authRefresh = () => {
    return {
        type: actionTypes.AUTH_REFRESH,
    };
};


export const login = (email, password) => {
    return  (dispatch)  => {
      
        dispatch(authStart())
        axios.post('http://localhost:8000/users/login/action', { email, password })
            .then((response) => {
                console.log(response)
            dispatch(authSuccess(response))
        }).catch((error)=>authFail(error.data))
    }
}