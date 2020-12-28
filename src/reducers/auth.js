import {LOGIN_FAIL,LOGIN_USER,USER_LOADED,LOGOUT } from '../actions/types';

const intialState = {
    isAuthenticated:false,
    token:localStorage.getItem('token'),
    user:null
}

export default function(state=intialState,action){
    switch(action.type){
        case LOGIN_USER:
        case USER_LOADED:
            localStorage.setItem('token',action.payload.data.token)
            return {
                ...state,
                isAuthenticated:true,
                user:action.payload.data.user,
                token:action.payload.data.token
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated:false,
                user:null,
                token:null
            }  
        case LOGIN_FAIL:
            return {
                isAuthenticated:false,
                // token:localStorage.getItem('token'),
                user:null
            }
        default:
            return state
    }
}