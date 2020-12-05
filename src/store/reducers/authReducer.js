import * as actionTypes from '../actions/actionTypes'


const initState = {
    data: {},
    token: null,
    modules: {},
    message: null,
    isLoading: false,
    isLoggedIn: false,
    isLoggedOut: false
}


export const isAuthenticated = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                isLoading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                isLoading: false,
                isLoggedIn:true,
                data: { ...state.data, ...action.payload.data.data },
                token: { ...state.token, ...action.payload.data.token },
                message: { ...state.message, ...action.payload.data.message },
                modules: {...state.modules, ...action.payload.data.modules}
            }
        case actionTypes.AUTH_FAIL:
            return {

                isLoading: false,
                isLoggedIn: false,
                error: true,
                message: action.payload
            }
        case actionTypes.AUTH_REFRESH:
            return {
                isLoading: false,
                isLoggedIn: false,
                isLoggedOut: false
            }
        default:
            return state;
            }
}

export default isAuthenticated;


