import {LOGIN_FAIL,LOGIN_USER,LOGOUT,USER_LOADED } from './types';
import axios from 'axios';

export const loginUser = ({email,password}) => dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const  body = JSON.stringify({email,password})
    console.log(body)
    axios.post('/auth/login',body,config)
        .then( res =>{
            console.log(res.data.data.token)
            dispatch({
                type:LOGIN_USER,
                payload:res.data
            })
        } )
        .catch ( err => {
            console.log(err)
            dispatch({
                type:LOGIN_FAIL,
            })
        })
}

export const loadUser = () => (dispatch,getState) => {

    axios.get('/auth/user/',tokenConfig(getState))
        .then(res => {
            dispatch({
                type:USER_LOADED,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const logout = () => (dispatch,getState) => {
    
    axios.get('/auth/user/',tokenConfig(getState))
        .then(res => {
            dispatch({
                type:LOGOUT,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const tokenConfig = getState => {
    //GET token
    const token = getState().auth.token;

    //Headers
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    if(token){
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}
export const tokenConfigForm = getState => {
    //GET token
    const token = getState().auth.token;

    //Headers
    const config = {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    }
    if(token){
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}