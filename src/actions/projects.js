import axios from 'axios';
import {FETCH_PROJECTS,ADD_PROJECTS }  from './types'
import { tokenConfig, tokenConfigForm } from './auth'

export const fetchProject = () => dispatch => {
    axios.get('/project')
        .then(res => {
            dispatch({
                type:FETCH_PROJECTS,
                payload:res.data.data
            })
        })
        .catch(err => console.log(err))
}

export const addProject = ({title, content, liveLink, githubLink,image}) => (dispatch,getState) => {

    const token = getState().auth.token

    const body = new FormData()
    body.append('title',title)
    body.append('content',content)
    body.append('liveLink',liveLink)
    body.append('githubLink',githubLink)
    body.append('image',image)
    const config = {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    }
    if(token){
        config.headers['Authorization'] = `Bearer ${token}`
    }
    console.log(tokenConfigForm(getState))
    axios.post('/project',body,tokenConfigForm(getState))
        .then(res => {
            dispatch({
                type:ADD_PROJECTS,
                payload:res.data.data
            })
        })
        .catch(err => console.log(err))
}