import { FETCH_BLOG,FETCH_BLOG_BY_SLUG,ADD_BLOG } from './types';
import axios from 'axios';
import { tokenConfigForm} from './auth'


export const fetchBlogs =  () => (dispatch) => {
    axios.get('/blog')
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
    axios.post('/blog',body,tokenConfigForm(getState))
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
    axios.get(`/blog/${slug}`)
        .then( res=> {
            dispatch({
                type:FETCH_BLOG_BY_SLUG,
                payload:res.data.data
            })
        })
        .catch(err => console.log(err))
}