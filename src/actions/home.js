import axios from 'axios';
import { FETCH_HOME,ADD_HOME } from './types' 
import { tokenConfig}from './auth'

export const fetchHome = () => async(dispatch)  => {
    try{
        axios.get('/api/')
            .then ( res => {
                dispatch({
                    type:FETCH_HOME,
                    payload:res.data.data
                })
            })
            .catch(err => console.log(err))
    } catch(err){
        console.log(err)
    }
}


export const addHome = ({title,content}) => async(dispatch,getState)  => {
    try{
        const body = JSON.stringify({title,content})
        axios.post('/api/',body,tokenConfig(getState))
            .then ( res => {
                dispatch({
                    type:ADD_HOME,
                    payload:res.data.data
                })
            })
            .catch(err => console.log(err))
    } catch(err){
        console.log(err)
    }
}