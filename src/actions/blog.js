import { FETCH_BLOG,FETCH_BLOG_BY_SLUG,ADD_BLOG } from './types';
import axios from 'axios';
import { tokenConfigForm} from './auth'
const { REACT_APP_BASE_URL } = process.env

export const fetchBlogs =  () => (dispatch) => {
    axios.get(REACT_APP_BASE_URL + '/blog')
        .then( res=> {
            dispatch({
                type:FETCH_BLOG,
                payload:res.data.data
            })
        })
        .catch(err => console.log(err))
}


export const addBlogs =  ({title,content,image}) => (dispatch,getState) => {
    const body = new FormData()
    body.append('title',title)
    body.append('content',content)
    body.append('image',image)
    axios.post(REACT_APP_BASE_URL + '/blog',body,tokenConfigForm(getState))
        .then( res=> {
            dispatch({
                type:ADD_BLOG,
                payload:res.data.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchBlogsbySlug =  (slug) => (dispatch) => {
    console.log(slug)
    axios.get(REACT_APP_BASE_URL + `/blog/${slug}`)
        .then( res=> {
            dispatch({
                type:FETCH_BLOG_BY_SLUG,
                payload:res.data.data
            })
        })
        .catch(err => console.log(err))
}