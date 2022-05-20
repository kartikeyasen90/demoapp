

import { LOGOUT } from './actiontype';
import { gettoken } from '../../others/token'; 



export const checkAuthenticated = () => async dispatch => {
    var token=null;
    await gettoken('access_token')
    .then((res) => {
        token=res;   
    }).catch((err) => {
        console.log('error');
    }) 
};
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};
