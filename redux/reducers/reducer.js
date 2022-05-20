import { LOGOUT,LOGIN_SUCCESS } from '../action/actiontype';
import { settoken,removetoken } from '../../others/token'; 

const initialState = {
    token: null,
    isAuthenticated: null,
    user: null,
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case LOGIN_SUCCESS:
            settoken('access_token',payload.token);
            return {
                ...state,
                user:payload.user,
                isAuthenticated: true,
                token: payload.token,
            }
        
        case LOGOUT:
            removetoken('access_token')
            return {
                ...state,
                token:null,
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
}