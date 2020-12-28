import axios from 'axios';
import { FETCH_ABOUT } from './types' 


export const fetchAbout = () => async(dispatch)  => {
    try{
        axios.get('/about/')
            .then ( res => {
                dispatch({
                    type:FETCH_ABOUT,
                    payload:res.data.data
                })
            })
            .catch(err => console.log(err))
    } catch(err){
        console.log(err)
    }
}