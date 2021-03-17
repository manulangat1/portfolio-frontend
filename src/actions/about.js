import axios from 'axios';
import { FETCH_ABOUT } from './types' 
const { REACT_APP_BASE_URL } = process.env

export const fetchAbout = () => async(dispatch)  => {
    try{
        axios.get( REACT_APP_BASE_URL + '/about/')
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